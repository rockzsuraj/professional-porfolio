import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from './components/sections/Footer';
import Header from './components/sections/Header';
import Sidebar from './components/sidebar/Sidebar';
import SidebarRight from './components/sidebar/SidebarRight';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Suraj | Portfolio',
  description: 'Professional portfolio of Suraj',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className=''>
      <body className={`${inter.className} flex flex-col`}>
        <div className='flex flex-1'>
          <div className='hidden md:flex overflow-hidden'>
            <Sidebar />
          </div>
          <div className='flex-1 flex flex-col'>
            <Header />
            <main className=''>
              {children}
            </main>
          </div>
          <div className='hidden md:flex overflow-hidden'>
            <SidebarRight />
          </div>
        </div>
          <Footer />
      </body>
    </html>
  );
}