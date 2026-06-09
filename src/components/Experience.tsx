import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Briefcase, ExternalLink } from 'lucide-react';

type ExperienceItem = {
  period: string;
  role: string;
  company: string;
  type: string;
  color: string;
  dotColor: string;
  tasks: string[];
  tags: string[];
  github?: string;
};

const experiences: ExperienceItem[] = [
  {
    period: '2026 – Présent',
    role: 'Développeur Web Full Stack',
    company: 'Freelance',
    type: 'Freelance',
    color: 'from-cyan-500 to-blue-600',
    dotColor: 'bg-cyan-400',
    tasks: [
      'Développement d\'une plateforme e-commerce complète : catalogue produits, panier, gestion des commandes et API REST.',
      'Application mobile de paroles de chansons pour une chorale en React Native.',
      'Site vitrine pour l\'Association Fanambi Ambalavao : design responsive, optimisation SEO et performances.',
    ],
    tags: ['React', 'Next.js', 'NestJS', 'React Native', 'REST API', 'TailwindCSS'],
  },
  {
    period: '2025 – 2026',
    role: 'Développeur d\'Applications Web',
    company: 'Système de Gestion Scolaire & CMPS',
    type: 'Contrat',
    color: 'from-blue-500 to-indigo-600',
    dotColor: 'bg-blue-400',
    tasks: [
      'Conception et développement d\'une application web pour la gestion des présences des élèves et de la cantine scolaire.',
      'Développement de modules pour la gestion des données du Centre-Médico Psycho-Social (CMPS) et génération de rapports.',
      'Implémentation de services frontend et intégration de l\'API backend.',
    ],
    tags: ['Node.js', 'Express', 'React', 'TypeScript', 'PostgreSQL'],
  },
  {
    period: '08/2024 – 12/2024',
    role: 'Stagiaire Développeur Web',
    company: 'Relia Consulting',
    type: 'Stage',
    color: 'from-emerald-500 to-teal-600',
    dotColor: 'bg-emerald-400',
    tasks: [
      'Participation à la conception et au développement d\'une plateforme de coordination de projets (RCM).',
      'Développement de services backend robustes et de composants frontend dynamiques pour le suivi des projets.',
    ],
    tags: ['Angular', 'NestJS', 'JWT', 'Git', 'Scrum'],
  },
  {
    period: '10/2022 – 01/2023',
    role: 'Stagiaire Développeur Web',
    company: 'Lycée Technique et Professionnel Beravina',
    type: 'Stage',
    color: 'from-orange-500 to-amber-600',
    dotColor: 'bg-orange-400',
    tasks: [
      'Développement d\'un système de gestion des élèves basé sur le web pour le traitement des dossiers académiques et des tâches administratives.',
    ],
    tags: ['PHP', 'Laravel', 'MySQL', 'JavaScript'],
  },
];

export default function Experience() {
  const ref = useIntersectionObserver();

  return (
    <section id="experience" className="py-24 relative" ref={ref}>
      <div className="max-w-5xl mx-auto section-padding">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="font-mono text-cyan-400 text-sm tracking-widest uppercase">Parcours</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mt-2 mb-4">
            Expérience Professionnelle
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div
                key={exp.company}
                className={`reveal delay-${i * 100 + 100} relative sm:pl-14`}
              >
                {/* Dot */}
                <div className={`absolute left-2.5 top-6 w-5 h-5 rounded-full ${exp.dotColor} border-4 border-[#080d1a] shadow-lg hidden sm:block`} style={{ boxShadow: `0 0 12px currentColor` }} />

                {/* Card */}
                <div className="glass-card rounded-2xl p-6 border border-white/5 hover:border-cyan-500/15 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300 group">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Briefcase size={14} className="text-cyan-500" />
                        <span className="text-xs font-mono text-slate-500">{exp.period}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full bg-gradient-to-r ${exp.color} text-white font-medium`}>
                          {exp.type}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-100">{exp.role}</h3>
                      <p className="text-cyan-400 text-sm font-medium">{exp.company}</p>
                    </div>
                    {/* GitHub link (shows only if `exp.github` is provided) */}
                    {exp.github && (
                      <div className="flex items-start sm:items-center">
                        <a
                          href={exp.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Ouvrir le projet GitHub de ${exp.company}`}
                          className="inline-flex items-center justify-center p-1 rounded-md text-slate-400 hover:text-cyan-400"
                        >
                          <ExternalLink size={16} />
                        </a>
                      </div>
                    )}
                  </div>

                  <ul className="space-y-2 mb-5">
                    {exp.tasks.map((task, ti) => (
                      <li key={ti} className="flex items-start gap-2 text-slate-400 text-sm leading-relaxed">
                        <span className="text-cyan-500 mt-1.5 shrink-0">▸</span>
                        {task}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-md bg-slate-800/60 text-slate-400 border border-slate-700/50 font-mono group-hover:border-slate-600/60 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
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
