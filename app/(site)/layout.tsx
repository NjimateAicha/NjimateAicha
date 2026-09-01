import SiteChrome from '../../components/SiteChrome';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return <SiteChrome locale="fr">{children}</SiteChrome>;
}
