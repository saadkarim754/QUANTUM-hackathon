'use client';

import { scrollToSection } from '@/lib/utils';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'About', href: 'about' },
    { name: 'Competition Themes', href: 'themes' },
    { name: 'Prizes and Beyond', href: 'prizes' },
    { name: 'Organizers', href: 'organizers' },
    { name: 'Contact', href: 'contact' }
  ];

  const organizers = [
    'PIEAS - Pakistan Institute of Engineering & Applied Sciences',
    'NCP - National Center for Physics',
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
            <div className="flex items-center mb-4">
              <img 
                src="/images/sponsors/competetion-logo.png" 
                alt="Quantum Computing Hackathon Pakistan" 
                className="h-12 sm:h-16 w-auto"
              />
            </div>
            <p className="text-purple-200 text-xs sm:text-sm leading-relaxed mb-2 sm:mb-4 hidden sm:block">
              Bringing together Pakistan's brightest minds to tackle real-world challenges using quantum 
              technologies and contribute to achieving the Sustainable Development Goals.
            </p>
            <div className="flex items-center space-x-3 sm:space-x-4 text-xs sm:text-sm">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <span>📅</span>
                <span className="text-purple-200">February 6-8, 2026</span>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <span>📍</span>
                <span className="text-purple-200">NCP, Islamabad</span>
              </div>
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

        {/* Important Notice - Compact on mobile */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 sm:p-6 mb-4 sm:mb-8">
          <div className="flex items-start space-x-2 sm:space-x-3">
            <div className="text-lg sm:text-2xl font-bold text-white">!</div>
            <div>
              <h4 className="text-sm sm:text-lg font-semibold text-white mb-1 sm:mb-2">Applications Open Now!</h4>
              <p className="text-purple-200 text-xs sm:text-sm leading-relaxed">
                Registration is currently open for Pakistan's first quantum computing hackathon. 
                Apply by October 31st to be part of this historic event.
              </p>
            </div>
          </div>
        </div>

        {/* Social Links & Contact */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-3 sm:pt-6 border-t border-white/20">
          <div className="flex items-center space-x-4 sm:space-x-6 mb-2 sm:mb-0">
            <button className="text-purple-200 hover:text-white transition-colors duration-200">
              <span className="text-xs sm:text-sm">Contact Us</span>
            </button>
            <button className="text-purple-200 hover:text-white transition-colors duration-200">
              <span className="text-xs sm:text-sm">Partner With Us</span>
            </button>
            <a 
              href="/admin-login"
              className="text-purple-200 hover:text-white transition-colors duration-200 text-xs bg-white/10 px-2 py-1 rounded border border-white/20 hover:bg-white/20"
            >
              Admin
              <span className="ml-1">Admin</span>
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

        {/* Final Message - Hidden on mobile */}
        <div className="text-center mt-3 sm:mt-8 pt-3 sm:pt-6 border-t border-white/20 hidden sm:block">
          <p className="text-purple-200 text-sm italic">
            "Building Pakistan's quantum future, one innovation at a time."
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;