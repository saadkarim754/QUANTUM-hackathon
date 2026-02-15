'use client';

import { scrollToSection } from '@/lib/utils';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'About', href: 'about' },
    { name: 'Competition Themes', href: 'themes' },
    { name: 'Winners', href: 'winners' },
    { name: 'Organizers', href: 'organizers' },
    { name: 'Contact', href: 'contact' }
  ];

  const organizers = [
    'PIEAS - Pakistan Institute of Engineering & Applied Sciences',
    'NCP - National Centre for Physics',
    'NILOP - National Institute of Lasers and Optronics',
    'OQI - Open Quantum Institute at CERN'
  ];

  return (
    <footer className="bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-800 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-purple-300 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-indigo-300 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-purple-400 rounded-full animate-bounce"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-12">
        
        {/* Main Footer Content - Mobile: Compact layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mb-4 sm:mb-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <h3 className="text-base sm:text-xl font-bold text-white mb-2">
                Quantum Hackathon Pakistan
              </h3>
              <p className="text-purple-200 text-xs sm:text-sm">First-ever quantum computing hackathon in Pakistan</p>
            </div>
            <p className="text-purple-200 text-xs sm:text-sm leading-relaxed mb-2 sm:mb-4 hidden sm:block">
              Bringing together Pakistan's brightest minds to tackle real-world challenges using quantum 
              technologies and contribute to achieving the Sustainable Development Goals.
            </p>
            <div className="flex items-center space-x-3 sm:space-x-4 text-xs sm:text-sm mb-4">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <span>📅</span>
                <span className="text-purple-200">February 6-8, 2026</span>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <span>📍</span>
                <span className="text-purple-200">NCP, Islamabad</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a 
                href="https://www.instagram.com/quantum_computing_hackathon/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-purple-200 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="text-sm hidden sm:inline">Instagram</span>
              </a>
              <a 
                href="https://www.linkedin.com/company/quantum-computing-hackathon/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-purple-200 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span className="text-sm hidden sm:inline">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm sm:text-lg font-semibold text-white mb-2 sm:mb-4">Quick Links</h4>
            <ul className="space-y-1 sm:space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-purple-200 hover:text-white transition-colors duration-200 text-xs sm:text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href="/methodology"
                  className="text-purple-200 hover:text-white transition-colors duration-200 text-xs sm:text-sm"
                >
                  Event Methodology
                </a>
              </li>
            </ul>
          </div>

          {/* Organizers */}
          <div>
            <h4 className="text-sm sm:text-lg font-semibold text-white mb-2 sm:mb-4">Organized By</h4>
            <ul className="space-y-1 sm:space-y-2">
              {organizers.map((org, index) => (
                <li key={index} className="text-purple-200 text-xs sm:text-sm">
                  {org.split(' - ')[0]} {/* Show short names on mobile */}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Event Concluded Notice */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 sm:p-6 mb-4 sm:mb-8">
          <div className="flex items-start space-x-2 sm:space-x-3">
            <div className="text-lg sm:text-2xl font-bold text-white">✓</div>
            <div>
              <h4 className="text-sm sm:text-lg font-semibold text-white mb-1 sm:mb-2">Event Successfully Concluded!</h4>
              <p className="text-purple-200 text-xs sm:text-sm leading-relaxed">
                42 finalists from 950+ nationwide applications in 7 teams competed at Pakistan's first quantum computing hackathon. 
                The event concluded on February 8th, 2026 at NCP, Islamabad.
              </p>
            </div>
          </div>
        </div>

        {/* Social Links & Contact */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-3 sm:pt-6 border-t border-white/20">
          <div className="flex items-center space-x-4 sm:space-x-6 mb-2 sm:mb-0">
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-purple-200 hover:text-white transition-colors duration-200"
            >
              <span className="text-xs sm:text-sm">Contact Us</span>
            </button>
            <a 
              href="/admin-login"
              className="text-purple-200 hover:text-white transition-colors duration-200 text-xs bg-white/10 px-2 py-1 rounded border border-white/20 hover:bg-white/20"
            >
              Admin
            </a>
          </div>
          
          <div className="text-center sm:text-right">
            <p className="text-purple-300 text-xs sm:text-sm">
              © {currentYear} Quantum Hackathon Pakistan. All rights reserved.
            </p>
            <p className="text-purple-400 text-xs mt-1 hidden sm:block">
              A collaboration between leading Pakistani institutions and OQI at CERN
            </p>
          </div>
        </div>

        {/* Final Message */}
        <div className="text-center mt-3 sm:mt-8 pt-3 sm:pt-6 border-t border-white/20">
          <p className="text-purple-200 text-sm sm:text-base font-medium mb-2">
            Follow the Journey | Witness the Quantum Revolution
          </p>
          <div className="flex justify-center gap-4 mb-3">
            <a 
              href="https://www.instagram.com/quantum_computing_hackathon/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-pink-300 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/company/quantum-computing-hackathon/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
          <p className="text-yellow-400 font-bold text-base sm:text-lg">
            #QuantumHackathonPakistan
          </p>
          <p className="text-purple-300 text-xs sm:text-sm mt-2 italic hidden sm:block">
            Shaping Pakistan's Quantum Ecosystem
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;