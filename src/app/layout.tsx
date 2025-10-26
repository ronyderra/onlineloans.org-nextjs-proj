import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'OnlineLoans.org - Fast & Secure Online Loans',
  description: 'Get approved for personal loans online in minutes. Fast, secure, and trusted by thousands of customers. Apply now for competitive rates.',
  keywords: 'online loans, personal loans, fast approval, secure loans, instant loans',
  openGraph: {
    title: 'OnlineLoans.org - Fast & Secure Online Loans',
    description: 'Get approved for personal loans online in minutes. Fast, secure, and trusted by thousands of customers.',
    type: 'website',
    siteName: 'OnlineLoans.org',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
