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
    <header className=' py-5'>
      <nav className='flex flex-row justify-between items-center'>
        <div className='flex flex-row items-center pl-5'>
          <div>
            <Icon url='/' alt='logo1' src='logo1.svg' height={25} width={25} />
          </div>
          <div className='pl-[5px] hover:animate-pulse'>
            <Link href='/'>
              Suraj
            </Link>
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
            <span className='text-2xl text-gray pr-5'>X</span>
          ) : (
            <Icon url='' src='hamburger.svg' alt='hamburger menu' />
          )}
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className='flex flex-col'>
          <nav className='md:hidden flex flex-col pt-6 pb-10 pl-5'>
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
              <Icon url={icon.url} key={icon.alt} alt={icon.alt} src={icon.src} />
            ))}
          </div>
        </div>
      )}
    </header>
  );
}