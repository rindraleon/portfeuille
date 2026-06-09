import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import {
  ShoppingCart,
  Music,
  Globe,
  School,
  Heart,
  FolderKanban,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

const projects = [
  {
    icon: ShoppingCart,
    title: "Plateforme E-Commerce",
    category: "Freelance · 2026",
    description:
      "Plateforme complète de vente en ligne avec catalogue produits, panier interactif, gestion des commandes et tableau de bord administrateur. API REST sécurisée et interface responsive.",
    tags: [
      "Next.js",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "TailwindCSS",
      "JWT",
    ],
    github: "https://github.com/rindraleon/e-commerce-platform",
    
    accent: "cyan",
    image:
      "https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    icon: Music,
    title: "App Chorale – Paroles",
    category: "Freelance · 2026",
    description:
      "Application mobile dédiée à une chorale permettant d'afficher les paroles des chansons, organisées par catégories avec recherche et mode hors-ligne.",
    tags: ["React Native", "TypeScript", "Expo", "SQLite"],
    github: "https://github.com/rindraleon/Antsan-ny-fitia-lyrics.git",
    accent: "blue",
    image:
      "https://images.pexels.com/photos/6173866/pexels-photo-6173866.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    icon: Globe,
    title: "Site Vitrine Fanambi Ambalavao",
    category: "Freelance · 2026",
    description:
      "Site web vitrine pour l'association Fanambi Ambalavao avec design moderne, optimisation SEO et améliorations de performance pour une meilleure visibilité en ligne.",
    tags: ["Next.js", "TailwindCSS", "SEO", "Vercel"],
    github: "https://github.com/rindraleon/fanambi-connect.git",
    accent: "emerald",
    image:
      "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    icon: School,
    title: "Système Gestion Scolaire",
    category: "2025 – 2026",
    description:
      "Application web complète pour la gestion des présences des élèves, suivi de la cantine scolaire, rapports automatiques et notifications aux parents.",
    tags: ["React", "Node.js", "Express", "MySQL", "Chart.js"],
    github: "https://github.com/rindraleon/Frontend-cantine.git",
    accent: "blue",
    image:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    icon: Heart,
    title: "Gestion Centre Médico-Social",
    category: "2025 – 2026",
    description:
      "Système de gestion pour un centre médico-psycho-social (CMPS) avec modules de gestion des dossiers patients, suivi des consultations et génération de rapports.",
    tags: ["Angular", "NestJS", "PostgreSQL", "TypeScript", "PDF.js"],
    // github: "https://github.com/rindraleon/cmps-management",
    accent: "rose",
    image:
      "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    icon: FolderKanban,
    title: "Plateforme RCM – Relia Consulting",
    category: "Stage · 2024",
    description:
      "Plateforme de coordination et suivi de projets pour Relia Consulting, avec gestion des tâches, dashboards temps réel et système de notifications.",
    tags: ["Angular", "NestJS", "JWT", "WebSocket", "PostgreSQL"],
    // github: "https://github.com/rindraleon/rcm-platform",
    accent: "purple",
    image:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const accentMap: Record<
  string,
  { border: string; bg: string; text: string; badge: string; glow: string }
> = {
  cyan: {
    border: "border-cyan-500/20",
    bg: "bg-cyan-500/10",
    text: "text-cyan-400",
    badge: "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
    glow: "hover:shadow-cyan-500/10",
  },
  blue: {
    border: "border-blue-500/20",
    bg: "bg-blue-500/10",
    text: "text-blue-400",
    badge: "bg-blue-500/15 text-blue-400 border-blue-500/30",
    glow: "hover:shadow-blue-500/10",
  },
  emerald: {
    border: "border-emerald-500/20",
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
    badge: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    glow: "hover:shadow-emerald-500/10",
  },
  rose: {
    border: "border-rose-500/20",
    bg: "bg-rose-500/10",
    text: "text-rose-400",
    badge: "bg-rose-500/15 text-rose-400 border-rose-500/30",
    glow: "hover:shadow-rose-500/10",
  },
  purple: {
    border: "border-violet-500/20",
    bg: "bg-violet-500/10",
    text: "text-violet-400",
    badge: "bg-violet-500/15 text-violet-400 border-violet-500/30",
    glow: "hover:shadow-violet-500/10",
  },
};

export default function Projects() {
  const ref = useIntersectionObserver();

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto section-padding">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="font-mono text-cyan-400 text-sm tracking-widest uppercase">
            Réalisations
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mt-2 mb-4">
            Projets & Applications
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-4" />
          <p className="text-slate-400 max-w-xl mx-auto text-sm">
            Une sélection de projets représentatifs que j'ai conçus et
            développés.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const a = accentMap[project.accent] ?? accentMap.cyan;
            return (
              <div
                key={project.title}
                className={`reveal delay-${(i % 3) * 100 + 100} group glass-card rounded-2xl overflow-hidden border ${a.border} hover:-translate-y-1 hover:shadow-2xl ${a.glow} transition-all duration-300 flex flex-col`}
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080d1a] via-[#080d1a]/40 to-transparent" />
                  {/* GitHub icon overlay */}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ouvrir le projet ${project.title} sur GitHub`}
                      className="absolute top-3 right-3 inline-flex items-center justify-center p-2 rounded-md text-slate-200 bg-black/30 backdrop-blur hover:bg-black/40 transition-colors"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                  {/* Icon badge */}
                  <div
                    className={`absolute top-3 left-3 ${a.bg} border ${a.border} backdrop-blur-sm rounded-xl p-2`}
                  >
                    <project.icon size={18} className={a.text} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="mb-3">
                    <span className={`text-xs font-mono ${a.text} opacity-75`}>
                      {project.category}
                    </span>
                    <h3 className="text-base font-bold text-slate-100 mt-0.5 group-hover:text-gradient transition-all">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs px-2 py-0.5 rounded-md border ${a.badge} font-mono`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 reveal">
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center gap-2 px-6 py-3 border border-cyan-500/30 text-cyan-400 rounded-xl hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-200 font-medium text-sm"
          >
            Discutons de votre projet
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
