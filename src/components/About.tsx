import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { User, Code2, Layers, Shield } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Développement Full Stack',
    desc: 'De la base de données jusqu\'à l\'interface, je maîtrise toute la chaîne de développement.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
  },
  {
    icon: Layers,
    title: 'Architecture Backend',
    desc: 'Conception d\'API REST robustes et d\'architectures évolutives avec NestJS et Node.js.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
  },
  {
    icon: Shield,
    title: 'Sécurité & Performance',
    desc: 'Applications sécurisées avec JWT, bonnes pratiques OWASP, et optimisées pour la performance.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
  },
];

export default function About() {
  const ref = useIntersectionObserver();

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="max-w-7xl mx-auto section-padding">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <span className="font-mono text-cyan-400 text-sm tracking-widest uppercase">À propos</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mt-2 mb-4">
            Qui suis-je ?
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — text */}
          <div className="reveal-left">
            {/* Avatar placeholder */}
            <div className="flex items-center gap-4 mb-8">
              <div className="relative">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-xl shadow-cyan-500/20">
                  <User size={36} className="text-white" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-400 rounded-full border-2 border-[#080d1a] animate-pulse" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-100">RANDRIAMIRINDRA</h3>
                <p className="text-slate-400 text-sm">Joronirainy Jean Léon</p>
                <p className="text-cyan-400 text-sm font-mono">Full Stack Developer</p>
              </div>
            </div>

            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Développeur Web Full Stack titulaire d'un{' '}
                <span className="text-cyan-400 font-medium">Master Professionnel en Informatique</span>{' '}
                de l'ENI, Université de Fianarantsoa, je suis passionné par la création
                d'applications web modernes, performantes et sécurisées.
              </p>
              <p>
                Mon expertise s'étend du développement d'<span className="text-blue-400 font-medium">API REST</span> et
                d'architectures backend robustes jusqu'à la conception d'interfaces frontend élégantes
                avec des frameworks modernes comme <span className="text-cyan-400 font-medium">React</span>,{' '}
                <span className="text-cyan-400 font-medium">Next.js</span> et{' '}
                <span className="text-cyan-400 font-medium">Angular</span>.
              </p>
              <p>
                Basé à <span className="text-emerald-400 font-medium">Fianarantsoa, Madagascar</span>,
                je travaille en freelance et suis disponible pour des missions locales et internationales.
                Je m'appuie sur des méthodologies <span className="text-slate-300 font-medium">Agile Scrum</span> et
                des outils comme Git et GitLab pour livrer des projets de qualité.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { value: '4+', label: 'Ans d\'expérience' },
                { value: '8+', label: 'Projets livrés' },
                { value: '10+', label: 'Technologies' },
              ].map((s) => (
                <div key={s.label} className="glass-card rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-gradient mb-1">{s.value}</div>
                  <div className="text-slate-500 text-xs">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — highlights */}
          <div className="space-y-4">
            {highlights.map((h, i) => (
              <div
                key={h.title}
                className={`reveal-right delay-${(i + 1) * 100} glass-card rounded-2xl p-5 border ${h.border} hover:-translate-y-1 hover:shadow-lg transition-all duration-300`}
              >
                <div className="flex items-start gap-4">
                  <div className={`${h.bg} ${h.border} border rounded-xl p-3 shrink-0`}>
                    <h.icon size={22} className={h.color} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-200 mb-1">{h.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{h.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
