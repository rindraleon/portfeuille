import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Mail, MapPin, Phone } from 'lucide-react';

const TYPED_WORDS = [
  'Développeur Full Stack',
  'Architecte Backend',
  'Ingénieur Frontend',
  'Passionné de TypeScript',
];

function useTyping(words: string[], speed = 80, deleteSpeed = 40, pause = 2000) {
  const [display, setDisplay] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), deleteSpeed);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setWordIdx((w) => (w + 1) % words.length);
    }

    setDisplay(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, deleteSpeed, pause]);

  return display;
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const typed = useTyping(TYPED_WORDS);

  // Particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles: {
      x: number; y: number; vx: number; vy: number;
      size: number; opacity: number; color: string;
    }[] = [];

    const colors = ['rgba(6,182,212,', 'rgba(59,130,246,', 'rgba(16,185,129,'];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.opacity})`;
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(6,182,212,${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-gradient"
    >
      {/* Canvas particles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Orbs */}
      <div className="orb w-96 h-96 bg-cyan-500/8 top-10 -left-20 animate-pulse-slow" />
      <div className="orb w-80 h-80 bg-blue-600/6 bottom-20 -right-10 animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
      <div className="orb w-64 h-64 bg-emerald-500/5 top-1/2 right-1/4 animate-pulse-slow" style={{ animationDelay: '3s' }} />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: 'linear-gradient(rgba(6,182,212,1) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto section-padding text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-sm font-mono mb-8 animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Disponible pour des missions freelance
        </div>

        {/* Name */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight animate-fade-in-up"
          style={{ animationDelay: '0.3s' }}
        >
          <span className="text-slate-100">Joronirainy</span>{' '}
          <span className="text-gradient">Jean Léon</span>
        </h1>

        {/* Subtitle with typing */}
        <div
          className="text-xl sm:text-2xl md:text-3xl font-light text-slate-400 mb-2 h-10 animate-fade-in"
          style={{ animationDelay: '0.5s' }}
        >
          <span className="text-cyan-400 font-medium">{typed}</span>
          <span className="cursor-blink text-cyan-400 ml-0.5">|</span>
        </div>

        {/* Location */}
        <div
          className="flex items-center justify-center gap-2 text-slate-500 text-sm mb-10 animate-fade-in"
          style={{ animationDelay: '0.6s' }}
        >
          <MapPin size={14} className="text-cyan-500/60" />
          Fianarantsoa, Madagascar
        </div>

        {/* Tagline */}
        <p
          className="max-w-2xl mx-auto text-slate-400 text-base sm:text-lg leading-relaxed mb-12 animate-fade-in"
          style={{ animationDelay: '0.7s' }}
        >
          Titulaire d'un Master en Informatique, je conçois des applications web modernes,
          performantes et sécurisées avec JavaScript, TypeScript, NestJS et Next.js.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap items-center justify-center gap-4 mb-14 animate-fade-in-up"
          style={{ animationDelay: '0.8s' }}
        >
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-7 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-cyan-500/25 hover:-translate-y-1 transition-all duration-300"
          >
            Voir mes projets
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-7 py-3.5 border border-cyan-500/30 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 hover:border-cyan-400 hover:-translate-y-1 transition-all duration-300"
          >
            Me contacter
          </button>
        </div>

        {/* Social links */}
        <div
          className="flex items-center justify-center gap-4 animate-fade-in"
          style={{ animationDelay: '1s' }}
        >
          {[
            { icon: Mail, label: 'Email', href: 'mailto:rindra.leon@gmail.com' },
            { icon: Phone, label: 'Téléphone', href: 'tel:+261342934064' },
          ].map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              className="flex items-center gap-2 px-4 py-2 glass rounded-lg text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-200 text-sm"
            >
              <Icon size={14} />
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 hover:text-cyan-400 transition-colors animate-float"
        aria-label="Défiler vers le bas"
      >
        <span className="text-xs font-mono tracking-widest">DÉFILER</span>
        <ChevronDown size={18} />
      </button>
    </section>
  );
}
