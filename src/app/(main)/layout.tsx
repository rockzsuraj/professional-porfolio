import { siteConfig } from '@/config/site';
import { Inter } from 'next/font/google';
import './../../styles/globals.css';
import Header from '../components/sections/Header';
import Footer from '../components/sections/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${inter.className} min-h-screen`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}