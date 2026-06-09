import { Code2, Heart, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const navLinks = [
  { label: 'À propos', href: '#about' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Expérience', href: '#experience' },
  { label: 'Formation', href: '#education' },
  { label: 'Projets', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/5 bg-gradient-to-t from-[#050810] to-transparent">
      {/* Scroll to top */}
      <button
        onClick={scrollTop}
        className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-lg shadow-cyan-500/20 hover:scale-110 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-200"
        aria-label="Remonter en haut"
      >
        <ArrowUp size={16} className="text-white" />
      </button>

      <div className="max-w-7xl mx-auto section-padding pt-16 pb-8">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                <Code2 size={16} className="text-white" />
              </div>
              <span className="font-mono text-sm font-medium text-slate-200">
                rindra<span className="text-cyan-400">.dev</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">
              Développeur Web Full Stack passionné, spécialisé dans la création d'applications web
              modernes et performantes.
            </p>
            <div className="flex items-center gap-1.5 text-emerald-400 text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Disponible pour des missions
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-slate-300 mb-4">Navigation</h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-left text-sm text-slate-500 hover:text-cyan-400 transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-slate-300 mb-4">Contact</h4>
            <div className="space-y-3">
              {[
                { icon: Mail, value: 'rindra.leon@gmail.com', href: 'mailto:rindra.leon@gmail.com' },
                { icon: Phone, value: '+261 34 29 340 64', href: 'tel:+261342934064' },
                { icon: MapPin, value: 'Fianarantsoa, Madagascar', href: '#' },
              ].map(({ icon: Icon, value, href }) => (
                <a
                  key={value}
                  href={href}
                  className="flex items-center gap-2.5 text-sm text-slate-500 hover:text-cyan-400 transition-colors duration-200 group"
                >
                  <Icon size={13} className="text-slate-600 group-hover:text-cyan-500 transition-colors shrink-0" />
                  {value}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} RANDRIAMIRINDRA Joronirainy Jean Léon. Tous droits réservés.
          </p>
          <p className="flex items-center gap-1.5 text-slate-600 text-xs">
            Conçu et développé avec
            <Heart size={11} className="text-rose-500 fill-rose-500" />
            en Madagascar
          </p>
        </div>
      </div>
    </footer>
  );
}
