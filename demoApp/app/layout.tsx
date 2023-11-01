import '../styles/globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HolisTECH - AI-Powered Candidate Assessment',
  openGraph: {
    title: 'HolisTECH - AI-Powered Candidate Assessment',
    description:
      'HolisTECH is an AI-powered data model to evaluate applicants beyond standardized metrics.',
    images: [
      {
        url: 'https://dw1.s81c.com/developer-static-pages/default/en/generative-ai-for-developers/images/AI-CARD-1.jpg',
      },
    ],
  },

  metadataBase: new URL('https://google.com'),
  themeColor: '#FFF',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className="scroll-smooth antialiased [font-feature-settings:'ss01']">
        {children}
      </body>
    </html>
  );
}
