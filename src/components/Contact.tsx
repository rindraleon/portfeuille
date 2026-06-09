import { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Mail, Phone, MapPin, Send, CheckCircle, Loader } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'rindra.leon@gmail.com',
    href: 'mailto:rindra.leon@gmail.com',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
  },
  {
    icon: Phone,
    label: 'Téléphone',
    value: '+261 34 29 340 64',
    href: 'tel:+261342934064',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
  },
  {
    icon: MapPin,
    label: 'Localisation',
    value: 'Fianarantsoa, Madagascar',
    href: '#',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
  },
];

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const ref = useIntersectionObserver();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1500));
    setStatus('success');
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/8 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto section-padding">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="font-mono text-cyan-400 text-sm tracking-widest uppercase">Contact</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mt-2 mb-4">
            Travaillons Ensemble
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-4" />
          <p className="text-slate-400 max-w-xl mx-auto text-sm">
            Disponible pour des missions freelance, des postes en CDI ou des collaborations ponctuelles.
            N'hésitez pas à me contacter !
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-4 reveal-left">
            {contactInfo.map((info) => (
              <a
                key={info.label}
                href={info.href}
                className={`flex items-center gap-4 p-4 glass-card rounded-xl border ${info.border} hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 group`}
              >
                <div className={`${info.bg} border ${info.border} rounded-lg p-3 group-hover:scale-105 transition-transform`}>
                  <info.icon size={18} className={info.color} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-0.5">{info.label}</p>
                  <p className={`text-sm font-medium ${info.color}`}>{info.value}</p>
                </div>
              </a>
            ))}

            {/* Availability badge */}
            <div className="glass-card rounded-xl border border-emerald-500/20 p-5 mt-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 text-sm font-semibold">Disponible maintenant</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                Ouvert aux missions freelance, aux opportunités de collaboration et aux projets intéressants.
                Temps de réponse habituel : moins de 24h.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 reveal-right">
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl border border-white/5 p-7 space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-slate-400 mb-1.5">Nom complet</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Votre nom"
                    className="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-1.5">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="votre@email.com"
                    className="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-slate-400 mb-1.5">Sujet</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  placeholder="Objet de votre message"
                  className="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-400 mb-1.5">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Décrivez votre projet ou votre demande..."
                  className="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-cyan-500/20 disabled:opacity-60 disabled:cursor-not-allowed hover:-translate-y-0.5 transition-all duration-200"
              >
                {status === 'loading' ? (
                  <>
                    <Loader size={16} className="animate-spin" />
                    Envoi en cours...
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle size={16} />
                    Message envoyé !
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Envoyer le message
                  </>
                )}
              </button>

              {status === 'success' && (
                <p className="text-center text-emerald-400 text-sm animate-fade-in">
                  Merci ! Je vous répondrai dans les plus brefs délais.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
