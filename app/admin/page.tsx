'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  ContactRequestRow,
  TestimonialRow,
  getSupabaseClient,
  isSupabaseConfigured
} from '../../lib/supabaseClient';

type Tab = 'demandes' | 'avis';
type ContactStatus = ContactRequestRow['status'];
type ContactFilter = ContactStatus | 'all';
type ReviewFilter = TestimonialRow['status'] | 'all';

const CONTACT_STATUS_LABELS: Record<ContactStatus, string> = {
  new: 'Nouvelle',
  contacted: 'Contactée',
  in_progress: 'En cours',
  done: 'Terminée',
  archived: 'Archivée'
};

const CONTACT_STATUSES: ContactStatus[] = ['new', 'contacted', 'in_progress', 'done', 'archived'];

const REVIEW_STATUS_LABELS: Record<TestimonialRow['status'], string> = {
  pending: 'En attente',
  approved: 'Approuvé',
  rejected: 'Refusé'
};

export default function AdminPage() {
  const supabase = getSupabaseClient();

  const [session, setSession] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState<string | null>(null);

  const [tab, setTab] = useState<Tab>('demandes');

  const [contacts, setContacts] = useState<ContactRequestRow[]>([]);
  const [contactFilter, setContactFilter] = useState<ContactFilter>('all');
  const [contactSearch, setContactSearch] = useState('');
  const [openContactId, setOpenContactId] = useState<string | null>(null);
  const [confirmDeleteContactId, setConfirmDeleteContactId] = useState<string | null>(null);

  const [reviews, setReviews] = useState<TestimonialRow[]>([]);
  const [reviewFilter, setReviewFilter] = useState<ReviewFilter>('pending');
  const [openReviewId, setOpenReviewId] = useState<string | null>(null);
  const [confirmDeleteReviewId, setConfirmDeleteReviewId] = useState<string | null>(null);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!supabase) return;
    supabase.auth.getSession().then(({ data }) => setSession(Boolean(data.session)));
    const { data: listener } = supabase.auth.onAuthStateChange((_event, sess) => setSession(Boolean(sess)));
    return () => listener.subscription.unsubscribe();
  }, [supabase]);

  const loadAll = async () => {
    if (!supabase) return;
    setLoading(true);
    const [contactsRes, reviewsRes] = await Promise.all([
      supabase.from('contact_requests').select('*').order('created_at', { ascending: false }),
      supabase.from('testimonials').select('*').order('created_at', { ascending: false })
    ]);
    if (contactsRes.data) setContacts(contactsRes.data as ContactRequestRow[]);
    if (reviewsRes.data) setReviews(reviewsRes.data as TestimonialRow[]);
    setLoading(false);
  };

  useEffect(() => {
    if (session) loadAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAuthError(null);
    if (!supabase) return;
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setAuthError(error.message);
  };

  const handleLogout = async () => {
    if (!supabase) return;
    await supabase.auth.signOut();
  };

  const updateContactStatus = async (id: string, status: ContactStatus) => {
    if (!supabase) return;
    await supabase.from('contact_requests').update({ status }).eq('id', id);
    loadAll();
  };

  const deleteContact = async (id: string) => {
    if (!supabase) return;
    await supabase.from('contact_requests').delete().eq('id', id);
    setConfirmDeleteContactId(null);
    loadAll();
  };

  const updateReviewStatus = async (id: string, status: 'approved' | 'rejected') => {
    if (!supabase) return;
    await supabase
      .from('testimonials')
      .update({ status, approved_at: status === 'approved' ? new Date().toISOString() : null })
      .eq('id', id);
    loadAll();
  };

  const deleteReview = async (id: string) => {
    if (!supabase) return;
    await supabase.from('testimonials').delete().eq('id', id);
    setConfirmDeleteReviewId(null);
    loadAll();
  };

  const newContactsCount = useMemo(() => contacts.filter((c) => c.status === 'new').length, [contacts]);
  const pendingReviewsCount = useMemo(() => reviews.filter((r) => r.status === 'pending').length, [reviews]);

  const filteredContacts = useMemo(() => {
    return contacts.filter((c) => {
      if (contactFilter !== 'all' && c.status !== contactFilter) return false;
      if (!contactSearch) return true;
      const q = contactSearch.toLowerCase();
      return (
        c.name.toLowerCase().includes(q) ||
        c.email.toLowerCase().includes(q) ||
        (c.company ?? '').toLowerCase().includes(q)
      );
    });
  }, [contacts, contactFilter, contactSearch]);

  const filteredReviews = useMemo(() => {
    if (reviewFilter === 'all') return reviews;
    return reviews.filter((r) => r.status === reviewFilter);
  }, [reviews, reviewFilter]);

  if (!isSupabaseConfigured) {
    return (
      <main className="page-shell admin-shell admin-shell--centered">
        <div className="admin-login-card">
          <p className="eyebrow">Administration</p>
          <h1>Configuration requise</h1>
          <p className="text-muted">
            Supabase n’est pas encore configuré. Ajoutez <code>NEXT_PUBLIC_SUPABASE_URL</code> et{' '}
            <code>NEXT_PUBLIC_SUPABASE_ANON_KEY</code> dans <code>.env.local</code> (voir <code>.env.example</code>),
            puis exécutez <code>supabase/schema.sql</code> sur votre projet Supabase.
          </p>
        </div>
      </main>
    );
  }

  if (!session) {
    return (
      <main className="page-shell admin-shell admin-shell--centered">
        <div className="admin-login-card">
          <p className="eyebrow">Aicha Njimate</p>
          <h1>Espace administrateur</h1>
          <p className="text-muted admin-login-card__subtitle">
            Connectez-vous pour gérer les demandes de contact et les avis clients.
          </p>
          <form className="contact-form admin-login" onSubmit={handleLogin}>
            <label className="form-field">
              <span>Email</span>
              <input
                type="email"
                placeholder="vous@domaine.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="username"
                required
              />
            </label>
            <label className="form-field">
              <span>Mot de passe</span>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
              />
            </label>
            {authError && <p className="form-error">{authError}</p>}
            <button className="btn btn--primary" type="submit">Se connecter</button>
          </form>
          <p className="text-muted admin-login__hint">
            Le compte administrateur se crée dans Supabase Auth (Authentication → Users).
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="page-shell admin-shell">
      <div className="admin-header">
        <h1>Administration</h1>
        <button className="btn btn--secondary" onClick={handleLogout}>Se déconnecter</button>
      </div>

      <div className="admin-tabs">
        <button
          className={`admin-tab ${tab === 'demandes' ? 'admin-tab--active' : ''}`}
          onClick={() => setTab('demandes')}
        >
          Demandes
          {newContactsCount > 0 && <span className="admin-tab__badge">{newContactsCount}</span>}
        </button>
        <button
          className={`admin-tab ${tab === 'avis' ? 'admin-tab--active' : ''}`}
          onClick={() => setTab('avis')}
        >
          Avis clients
          {pendingReviewsCount > 0 && <span className="admin-tab__badge">{pendingReviewsCount}</span>}
        </button>
      </div>

      {loading && <p className="text-muted">Chargement…</p>}

      {tab === 'demandes' && (
        <section className="admin-panel">
          <input
            className="admin-search"
            placeholder="Rechercher par nom, email ou entreprise"
            value={contactSearch}
            onChange={(e) => setContactSearch(e.target.value)}
          />
          <div className="filters">
            <button className={`filter-chip ${contactFilter === 'all' ? 'active' : ''}`} onClick={() => setContactFilter('all')}>
              Toutes
            </button>
            {CONTACT_STATUSES.map((s) => (
              <button key={s} className={`filter-chip ${contactFilter === s ? 'active' : ''}`} onClick={() => setContactFilter(s)}>
                {CONTACT_STATUS_LABELS[s]}
              </button>
            ))}
          </div>

          <div className="admin-list">
            {filteredContacts.map((row) => {
              const isOpen = openContactId === row.id;
              return (
                <article key={row.id} className="admin-card">
                  <button className="admin-card__summary" onClick={() => setOpenContactId(isOpen ? null : row.id)}>
                    <span className={`admin-status-badge admin-status-badge--${row.status}`}>
                      {CONTACT_STATUS_LABELS[row.status]}
                    </span>
                    <span className="admin-card__title">{row.name}</span>
                    <span className="admin-card__meta">{row.company || '—'} · {new Date(row.created_at).toLocaleDateString()}</span>
                  </button>

                  {isOpen && (
                    <div className="admin-card__details">
                      <p><strong>Email :</strong> {row.email}</p>
                      <p><strong>Site actuel :</strong> {row.current_website || '—'}</p>
                      <p><strong>Type de projet :</strong> {row.project_type || '—'}</p>
                      <p><strong>Budget :</strong> {row.estimated_budget || '—'}</p>
                      <p><strong>Date souhaitée :</strong> {row.target_launch_date || '—'}</p>
                      <p><strong>Message :</strong> {row.message}</p>

                      <label className="admin-card__status-select">
                        <span>Statut</span>
                        <select value={row.status} onChange={(e) => updateContactStatus(row.id, e.target.value as ContactStatus)}>
                          {CONTACT_STATUSES.map((s) => (
                            <option key={s} value={s}>{CONTACT_STATUS_LABELS[s]}</option>
                          ))}
                        </select>
                      </label>

                      {confirmDeleteContactId === row.id ? (
                        <div className="admin-card__actions">
                          <button className="pill" onClick={() => deleteContact(row.id)}>Confirmer la suppression</button>
                          <button className="pill" onClick={() => setConfirmDeleteContactId(null)}>Annuler</button>
                        </div>
                      ) : (
                        <div className="admin-card__actions">
                          <button className="pill" onClick={() => setConfirmDeleteContactId(row.id)}>Supprimer</button>
                        </div>
                      )}
                    </div>
                  )}
                </article>
              );
            })}
            {!loading && filteredContacts.length === 0 && <p className="text-muted">Aucune demande pour ce filtre.</p>}
          </div>
        </section>
      )}

      {tab === 'avis' && (
        <section className="admin-panel">
          <div className="filters">
            <button className={`filter-chip ${reviewFilter === 'all' ? 'active' : ''}`} onClick={() => setReviewFilter('all')}>
              Toutes
            </button>
            {(['pending', 'approved', 'rejected'] as const).map((s) => (
              <button key={s} className={`filter-chip ${reviewFilter === s ? 'active' : ''}`} onClick={() => setReviewFilter(s)}>
                {REVIEW_STATUS_LABELS[s]}
              </button>
            ))}
          </div>

          <div className="admin-list">
            {filteredReviews.map((row) => {
              const isOpen = openReviewId === row.id;
              return (
                <article key={row.id} className="admin-card">
                  <button className="admin-card__summary" onClick={() => setOpenReviewId(isOpen ? null : row.id)}>
                    <span className={`admin-status-badge admin-status-badge--${row.status}`}>
                      {REVIEW_STATUS_LABELS[row.status]}
                    </span>
                    <span className="admin-card__title">{row.client_name}</span>
                    <span className="admin-card__meta">{row.company} · {'★'.repeat(row.rating)}</span>
                  </button>

                  {isOpen && (
                    <div className="admin-card__details">
                      <div className="admin-preview">
                        <p className="admin-preview__label">Aperçu public</p>
                        <p className="admin-preview__rating">{'★'.repeat(row.rating)}</p>
                        <p className="admin-preview__quote">“{row.message}”</p>
                        <p className="admin-preview__name">{row.client_name}</p>
                        <p className="admin-preview__company">{row.company}</p>
                      </div>

                      {confirmDeleteReviewId === row.id ? (
                        <div className="admin-card__actions">
                          <button className="pill" onClick={() => deleteReview(row.id)}>Confirmer la suppression</button>
                          <button className="pill" onClick={() => setConfirmDeleteReviewId(null)}>Annuler</button>
                        </div>
                      ) : (
                        <div className="admin-card__actions">
                          <button className="pill" onClick={() => updateReviewStatus(row.id, 'approved')}>Approuver</button>
                          <button className="pill" onClick={() => updateReviewStatus(row.id, 'rejected')}>Refuser</button>
                          <button className="pill" onClick={() => setConfirmDeleteReviewId(row.id)}>Supprimer</button>
                        </div>
                      )}
                    </div>
                  )}
                </article>
              );
            })}
            {!loading && filteredReviews.length === 0 && <p className="text-muted">Aucun avis pour ce filtre.</p>}
          </div>
        </section>
      )}
    </main>
  );
}
