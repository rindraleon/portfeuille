import { useEffect, useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface Skill {
  name: string;
  level: number;
  color: string;
}

const skillGroups: { category: string; icon: string; skills: Skill[] }[] = [
  {
    category: 'Frontend',
    icon: '🖥️',
    skills: [
      { name: 'React / Next.js', level: 90, color: 'from-cyan-400 to-blue-500' },
      { name: 'TypeScript', level: 88, color: 'from-blue-400 to-blue-600' },
      { name: 'TailwindCSS', level: 92, color: 'from-teal-400 to-cyan-500' },
      { name: 'Angular', level: 75, color: 'from-red-400 to-rose-500' },
    ],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js / Express', level: 88, color: 'from-green-400 to-emerald-500' },
      { name: 'NestJS', level: 85, color: 'from-red-400 to-pink-500' },
      { name: 'Laravel / PHP', level: 78, color: 'from-orange-400 to-red-500' },
      { name: 'Python', level: 70, color: 'from-yellow-400 to-orange-500' },
    ],
  },
  {
    category: 'Outils & Méthodes',
    icon: '🛠️',
    skills: [
      { name: 'REST API / JWT', level: 92, color: 'from-purple-400 to-blue-500' },
      { name: 'Git / GitLab', level: 88, color: 'from-orange-400 to-yellow-500' },
      { name: 'React Native', level: 72, color: 'from-cyan-400 to-sky-500' },
      { name: 'Agile Scrum', level: 82, color: 'from-green-400 to-teal-500' },
    ],
  },
];

const techTags = [
  'JavaScript', 'TypeScript', 'Python', 'PHP', 'C',
  'React', 'Next.js', 'Angular', 'React Native',
  'Node.js', 'NestJS', 'Express.js', 'Laravel',
  'TailwindCSS', 'REST API', 'JWT',
  'Git', 'GitLab', 'Trello', 'Agile Scrum',
];

function SkillBar({ name, level, color }: Skill) {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            bar.style.width = `${level}%`;
          }, 100);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(bar.parentElement!);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-slate-300">{name}</span>
        <span className="text-xs font-mono text-slate-500">{level}%</span>
      </div>
      <div className="skill-bar">
        <div
          ref={barRef}
          className={`skill-bar-fill bg-gradient-to-r ${color}`}
          style={{ width: '0%' }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useIntersectionObserver();

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto section-padding">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="font-mono text-cyan-400 text-sm tracking-widest uppercase">Compétences</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mt-2 mb-4">
            Stack Technique
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-4" />
          <p className="text-slate-400 max-w-xl mx-auto text-sm">
            Technologies et outils que j'utilise pour construire des solutions web complètes.
          </p>
        </div>

        {/* Skill bars grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {skillGroups.map((group, gi) => (
            <div
              key={group.category}
              className={`reveal delay-${(gi + 1) * 100} glass-card rounded-2xl p-6 border border-white/5 hover:border-cyan-500/20 transition-colors duration-300`}
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="text-xl">{group.icon}</span>
                <h3 className="font-semibold text-slate-200">{group.category}</h3>
              </div>
              {group.skills.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          ))}
        </div>

        {/* Tech tags */}
        <div className="reveal">
          <h3 className="text-center text-sm font-mono text-slate-500 uppercase tracking-widest mb-6">
            Toutes les technologies
          </h3>
          <div className="flex flex-wrap gap-2.5 justify-center">
            {techTags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 text-xs font-medium font-mono text-slate-300 border border-slate-700/60 rounded-full bg-slate-800/40 hover:border-cyan-500/40 hover:text-cyan-400 hover:bg-cyan-500/5 transition-all duration-200 cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
