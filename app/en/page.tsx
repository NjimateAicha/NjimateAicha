import type { Metadata } from 'next';
import HomeSections from '../../components/HomeSections';
import { alternatesFor, ogLocale, SITE_URL } from '../i18n';

const TITLE = 'Aicha Njimate | SaaS, MVP & Business Platform Development';
const DESCRIPTION =
  'Software Engineer and founder of FalconDeev, building SaaS products, MVPs, CRMs, web applications and business platforms for clients in Morocco and internationally.';

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: alternatesFor('/', 'en'),
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/en`,
    locale: ogLocale('en')
  },
  twitter: { title: TITLE, description: DESCRIPTION }
};

export default function Page() {
  return <HomeSections />;
}
