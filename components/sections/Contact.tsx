'use client';

import { Instagram, Linkedin, Mail, MessageCircle, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { CALENDLY_URL, CONTACT, CONTACT_STATS, Lang } from '../../app/content';
import { UI } from '../../app/ui-strings';
import CountUp from '../motion/CountUp';
import Reveal from '../motion/Reveal';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function Contact({ lang }: { lang: Lang }) {
  const t = UI[lang];
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (data.get('website_url')) {
      // Honeypot field silently filled by a bot — pretend success, do nothing.
      setStatus('success');
      return;
    }

    setStatus('sending');

    const payload = {
      name: String(data.get('name') || ''),
      email: String(data.get('email') || ''),
      company: String(data.get('company') || ''),
      current_website: String(data.get('current_website') || ''),
      project_type: String(data.get('project_type') || ''),
      estimated_budget: String(data.get('estimated_budget') || ''),
      target_launch_date: String(data.get('target_launch_date') || ''),
      message: String(data.get('message') || '')
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error('request failed');
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  };

  const contactCards = [
    {
      key: 'email',
      icon: Mail,
      label: 'Email',
      value: CONTACT.email,
      action: t.contactCardEmailAction,
      href: `mailto:${CONTACT.email}`
    },
    {
      key: 'whatsapp',
      icon: MessageCircle,
      label: 'WhatsApp',
      value: t.contactCardWhatsappAction,
      action: t.contactCardWhatsappAction,
      href: CONTACT.whatsappLink
    },
    {
      key: 'instagram',
      icon: Instagram,
      label: 'Instagram',
      value: CONTACT.instagram,
      action: t.contactCardInstagramAction,
      href: CONTACT.instagramUrl
    },
    {
      key: 'linkedin',
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Aicha Njimate',
      action: t.contactCardLinkedinAction,
      href: CONTACT.linkedinUrl
    }
  ];

  return (
    <section id="contact" className="section section--panel contact-section">
      <div className="section__heading">
        <Reveal><p className="eyebrow">{t.contactEyebrow}</p></Reveal>
        <Reveal delay={0.08}><h2>{t.contactTitle}</h2></Reveal>
      </div>

      <div className="contact-grid">
        <div>
          <Reveal className="contact-stats">
            {CONTACT_STATS.map((stat) => (
              <div key={stat.label.fr} className="contact-stats__item">
                <strong>
                  {stat.prefix && <span className="stat-accent">{stat.prefix}</span>}
                  <CountUp value={stat.value} suffix={stat.suffix} padZero={stat.padZero} />
                </strong>
                <span>{stat.label[lang]}</span>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.1} className="contact-cards">
            {contactCards.map((card) => {
              const Icon = card.icon;
              return (
                <a key={card.key} href={card.href} target="_blank" rel="noopener noreferrer" className="contact-card">
                  <span className="contact-card__icon"><Icon size={18} strokeWidth={1.75} /></span>
                  <span className="contact-card__body">
                    <span className="contact-card__label">{card.label}</span>
                    <span className="contact-card__value">{card.key === 'whatsapp' ? card.action : card.value}</span>
                  </span>
                  <ArrowUpRight size={16} strokeWidth={1.75} className="contact-card__arrow" />
                </a>
              );
            })}
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          {status === 'success' ? (
            <div className="contact-form contact-form--success">
              <p>{t.contactSuccess}</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <p className="eyebrow contact-form__eyebrow">{t.contactFormEyebrow}</p>
              <input
                type="text"
                name="website_url"
                tabIndex={-1}
                autoComplete="off"
                className="honeypot"
                aria-hidden="true"
              />
              <label className="form-field">
                <span>{t.contactFormName}</span>
                <input name="name" required />
              </label>
              <label className="form-field">
                <span>{t.contactFormEmail}</span>
                <input name="email" type="email" required />
              </label>
              <label className="form-field">
                <span>{t.contactFormCompany}</span>
                <input name="company" />
              </label>
              <label className="form-field">
                <span>{t.contactFormWebsite}</span>
                <input name="current_website" />
              </label>
              <label className="form-field">
                <span>{t.contactFormProjectType}</span>
                <input name="project_type" />
              </label>
              <label className="form-field">
                <span>{t.contactFormBudget}</span>
                <input name="estimated_budget" />
              </label>
              <label className="form-field">
                <span>{t.contactFormLaunchDate}</span>
                <input name="target_launch_date" />
              </label>
              <label className="form-field">
                <span>{t.contactFormMessage}</span>
                <textarea name="message" rows={5} required />
              </label>
              {status === 'error' && <p className="form-error">{t.contactError}</p>}
              <button className="btn btn--primary" type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? t.contactFormSending : t.contactFormSubmit}
              </button>
            </form>
          )}
        </Reveal>
      </div>

      <Reveal delay={0.2} className="calendly-banner">
        <div>
          <p className="eyebrow">{t.calendlyEyebrow}</p>
          <p>{t.calendlyBlockText}</p>
        </div>
        <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn btn--secondary">
          {t.calendlyBlockCta}
        </a>
      </Reveal>
    </section>
  );
}
