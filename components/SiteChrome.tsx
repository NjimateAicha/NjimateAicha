'use client';

import { ReactNode, useEffect, useMemo, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Lang } from '../app/content';
import { SiteContext, Theme } from '../app/site-context';
import { otherLocaleHref } from '../app/i18n';
import FloatingDock from './FloatingDock';
import Footer from './Footer';
import ReviewModal from './ReviewModal';
import ScrollProvider from './ScrollProvider';
import SiteHeader from './SiteHeader';

export default function SiteChrome({ children, locale }: { children: ReactNode; locale: Lang }) {
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [theme, setThemeState] = useState<Theme>('dark');
  const pathname = usePathname() || '/';

  // The route decides the language — keep <html lang> in sync after hydration.
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

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
    () => ({
      lang: locale,
      theme,
      setTheme,
      openReview: () => setIsReviewOpen(true),
      otherLocaleHref: otherLocaleHref(pathname)
    }),
    [locale, theme, pathname]
  );

  return (
    <SiteContext.Provider value={value}>
      <ScrollProvider>
        <main className="page-shell">
          <SiteHeader />
          {children}
        </main>
        <Footer lang={locale} />
        <FloatingDock />
        {isReviewOpen && <ReviewModal lang={locale} onClose={() => setIsReviewOpen(false)} />}
      </ScrollProvider>
    </SiteContext.Provider>
  );
}
