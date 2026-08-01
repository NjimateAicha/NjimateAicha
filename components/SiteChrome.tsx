'use client';

import { ReactNode, useEffect, useMemo, useState } from 'react';
import { Lang } from '../app/content';
import { SiteContext, Theme } from '../app/site-context';
import FloatingDock from './FloatingDock';
import Footer from './Footer';
import ReviewModal from './ReviewModal';
import ScrollProvider from './ScrollProvider';
import SiteHeader from './SiteHeader';

export default function SiteChrome({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('fr');
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [theme, setThemeState] = useState<Theme>('dark');

  useEffect(() => {
    const current = document.documentElement.getAttribute('data-theme');
    if (current === 'light' || current === 'dark') setThemeState(current);
  }, []);

  const setTheme = (next: Theme) => {
    setThemeState(next);
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('theme', next);
    } catch {
      // ignore (private browsing / storage disabled)
    }
  };

  const value = useMemo(
    () => ({ lang, setLang, theme, setTheme, openReview: () => setIsReviewOpen(true) }),
    [lang, theme]
  );

  return (
    <SiteContext.Provider value={value}>
      <ScrollProvider>
        <main className="page-shell">
          <SiteHeader />
          {children}
        </main>
        <Footer lang={lang} />
        <FloatingDock />
        {isReviewOpen && <ReviewModal lang={lang} onClose={() => setIsReviewOpen(false)} />}
      </ScrollProvider>
    </SiteContext.Provider>
  );
}
