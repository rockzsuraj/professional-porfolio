'use client'
import { useState } from 'react';
import Link from 'next/link';
import { navLinks } from '@/config/navigation';
import Icon from '../icons/icons';
import { icons } from '@/lib/constants';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky pt-8">
      <div className='flex flex-row justify-between items-center'>
        <div className='flex flex-row items-center'>
          <div>
            <Icon alt='logo1' src='logo1.svg' height={25} width={25} />
          </div>
          <div className='pl-[5px]'>
            Suraj
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex'>
          {navLinks.map((link) => (
            <div key={link.href} className='pr-10'>
              <span className='text-sm text-primary'>#</span>
              <Link
                href={link.href}
                className="text-sm font-extralight text-gray hover:text-white hover:font-medium"
              >
                {link.name}
              </Link>
            </div>
          ))}
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className='md:hidden focus:outline-none'
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <span className='text-2xl text-gray'>X</span>
          ) : (
            <Icon src='hamburger.svg' alt='hamburger menu' />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className=''>
          <nav className='md:hidden flex flex-col pt-6 pb-10'>
            {navLinks.map((link) => (
              <div key={link.href} className='py-2'>
                <span className='text-xl text-primary'>#</span>
                <Link
                  href={link.href}
                  className="text-xl font-extralight text-gray hover:text-white hover:font-medium pl-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </div>
            ))}
          </nav>
          <div className='flex flex-row justify-center'>
            {icons.map(icon => (
              <Link key={icon.alt} href={icon.alt}>
                <Icon alt={icon.alt} src={icon.src} />
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}