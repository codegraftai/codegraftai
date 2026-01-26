import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';
import { CookieBanner } from '@/components/CookieBanner';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: {
    default: 'CodeGraft - Structural Integrity Platform',
    template: '%s | CodeGraft',
  },
  description: 'Bridge the Reality-Intent Gap in your software architecture with AI-powered governance and visualization.',
  keywords: [
    'software architecture',
    'architectural governance',
    'GraphRAG',
    'visualization',
    'platform engineering',
    'technical debt',
  ],
  authors: [{ name: 'CodeGraft GmbH' }],
  openGraph: {
    type: 'website',
    siteName: 'CodeGraft',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <LanguageProvider>
          <ThemeProvider>
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <CookieBanner />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
