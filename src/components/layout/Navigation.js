'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';
import { scrollToSection } from '@/lib/utils';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'About', href: 'about' },
    { name: 'Competition Themes', href: 'themes' },
    { name: 'Prizes and Beyond', href: 'prizes' },
    { name: 'Organizers', href: 'organizers' },
    { name: 'Contact', href: 'contact' }
  ];

  const handleNavClick = (href) => {
    scrollToSection(href);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-purple-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
            <img 
              src="/images/sponsors/competetion-logo.png" 
              alt="Quantum Computing Hackathon Pakistan" 
              className="h-12 w-auto"
            />
            <span className="text-purple-900 font-semibold text-lg hidden sm:block">
              Quantum Computing Hackathon Pakistan
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-purple-700 hover:text-purple-900 transition-colors duration-200 font-medium"
              >
                {item.name}
              </button>
            ))}
            <a href="/participants">
              <Button size="sm" variant="primary" className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                Final Teams
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-purple-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-purple-50 border border-purple-100 rounded-lg mb-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="block px-3 py-2 text-purple-700 hover:text-purple-900 hover:bg-purple-100 transition-colors duration-200 w-full text-left rounded"
                >
                  {item.name}
                </button>
              ))}
              <div className="px-3 py-2">
                <a href="/participants" className="block">
                  <Button size="sm" variant="primary" className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                    Final Teams
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;