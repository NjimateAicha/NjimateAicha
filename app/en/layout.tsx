import SiteChrome from '../../components/SiteChrome';

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <SiteChrome locale="en">{children}</SiteChrome>;
}
