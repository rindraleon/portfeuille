import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { GraduationCap, BookOpen } from 'lucide-react';

const education = [
  {
    period: '2022 – 2024',
    degree: 'Master Professionnel en Informatique',
    school: 'ENI – Université de Fianarantsoa',
    description: 'Spécialisation en génie logiciel, architectures web avancées, conception de systèmes distribués et sécurité informatique.',
    icon: GraduationCap,
    color: 'from-cyan-500 to-blue-600',
    border: 'border-cyan-500/20',
    bg: 'bg-cyan-500/10',
    iconColor: 'text-cyan-400',
  },
  {
    period: '2018 – 2022',
    degree: 'Licence en Informatique',
    school: 'ENI – Université de Fianarantsoa',
    description: 'Fondamentaux de l\'informatique : algorithmique, programmation orientée objet, bases de données, réseaux et développement web.',
    icon: BookOpen,
    color: 'from-blue-500 to-indigo-600',
    border: 'border-blue-500/20',
    bg: 'bg-blue-500/10',
    iconColor: 'text-blue-400',
  },
];

export default function Education() {
  const ref = useIntersectionObserver();

  return (
    <section id="education" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/5 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto section-padding">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="font-mono text-cyan-400 text-sm tracking-widest uppercase">Formation</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mt-2 mb-4">
            Parcours Académique
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto" />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <div
              key={edu.degree}
              className={`reveal delay-${(i + 1) * 200} glass-card rounded-2xl p-7 border ${edu.border} hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group`}
            >
              {/* Icon + period */}
              <div className="flex items-start justify-between mb-5">
                <div className={`${edu.bg} border ${edu.border} rounded-xl p-3`}>
                  <edu.icon size={24} className={edu.iconColor} />
                </div>
                <span className={`text-xs font-mono px-3 py-1.5 rounded-full bg-gradient-to-r ${edu.color} text-white font-medium`}>
                  {edu.period}
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-100 mb-1 group-hover:text-gradient transition-all">
                {edu.degree}
              </h3>
              <p className={`text-sm font-medium ${edu.iconColor} mb-4`}>{edu.school}</p>
              <p className="text-slate-400 text-sm leading-relaxed">{edu.description}</p>

              {/* Decorative bar */}
              <div className={`mt-5 h-0.5 bg-gradient-to-r ${edu.color} rounded-full opacity-30 group-hover:opacity-60 transition-opacity`} />
            </div>
          ))}
        </div>

        {/* Location note */}
        <div className="mt-10 text-center reveal">
          <div className="inline-flex items-center gap-3 px-6 py-3 glass-card rounded-full border border-white/5">
            <span className="text-slate-500 text-sm">
              📍 <span className="text-slate-300 font-medium">ENI</span> – École Nationale d'Informatique,{' '}
              <span className="text-cyan-400">Fianarantsoa, Madagascar</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
