'use client';

import { useState } from 'react';
import { Lang } from '../app/content';
import { UI } from '../app/ui-strings';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function ReviewModal({ lang, onClose }: { lang: Lang; onClose: () => void }) {
  const t = UI[lang];
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      client_name: String(data.get('client_name') || ''),
      company: String(data.get('company') || ''),
      email: String(data.get('email') || ''),
      rating: Number(data.get('rating') || 5),
      message: String(data.get('message') || ''),
      consent: data.get('consent') === 'on'
    };

    try {
      const res = await fetch('/api/testimonials', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error('request failed');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="modal" role="dialog" aria-modal="true">
      <div className="modal__card">
        <button className="modal__close" onClick={onClose} aria-label={t.closeModal}>×</button>
        <h3>{t.reviewModalTitle}</h3>
        {status === 'success' ? (
          <p>{t.reviewSent}</p>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <input name="client_name" placeholder={t.reviewFormName} required />
            <input name="company" placeholder={t.reviewFormCompany} required />
            <input name="email" type="email" placeholder={t.reviewFormEmail} required />
            <input name="rating" type="number" min={1} max={5} defaultValue={5} placeholder={t.reviewFormRating} required />
            <textarea name="message" placeholder={t.reviewFormMessage} rows={4} required />
            <label className="checkbox-row">
              <input type="checkbox" name="consent" required /> {t.reviewFormConsent}
            </label>
            {status === 'error' && <p className="form-error">{t.reviewError}</p>}
            <button className="btn btn--primary" type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? t.reviewSending : t.reviewSubmit}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
