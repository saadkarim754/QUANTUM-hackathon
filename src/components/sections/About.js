'use client';

import Card from '@/components/ui/Card';

const About = () => {
  return (
    <section id="about" className="py-8 sm:py-20 bg-white relative overflow-hidden">
      {/* Enhanced Quantum Background decorative elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        {/* Simplified mobile atoms */}
        <div className="absolute top-1/6 left-1/8 w-8 sm:w-16 h-8 sm:h-16 animate-pulse">
          <div className="relative w-full h-full">
            <div className="absolute top-1/2 left-1/2 w-2 sm:w-3 h-2 sm:h-3 bg-purple-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute inset-0 border border-purple-400 sm:border-2 rounded-full animate-spin" style={{animationDuration: '8s'}}></div>
          </div>
        </div>
        
        <div className="absolute top-2/3 right-1/6 w-14 h-14 animate-pulse" style={{animationDelay: '1s'}}>
          <div className="relative w-full h-full">
            <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-indigo-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute inset-0 border-2 border-indigo-400 rounded-full animate-spin" style={{animationDuration: '10s'}}></div>
            <div className="absolute inset-3 border border-purple-400 rounded-full animate-spin" style={{animationDuration: '7s', animationDirection: 'reverse'}}></div>
            <div className="absolute top-1 left-1/2 w-1 h-1 bg-indigo-400 rounded-full transform -translate-x-1/2 animate-bounce"></div>
          </div>
        </div>
        
        <div className="absolute bottom-1/4 left-1/3 w-12 h-12 animate-pulse" style={{animationDelay: '2s'}}>
          <div className="relative w-full h-full">
            <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-purple-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute inset-0 border border-purple-300 rounded-full animate-spin" style={{animationDuration: '12s'}}></div>
            <div className="absolute right-0 top-1/2 w-1 h-1 bg-purple-300 rounded-full transform -translate-y-1/2 animate-ping"></div>
          </div>
        </div>
        
        {/* Quantum Field Lines */}
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1200 800" fill="none">
          <path d="M0,100 Q300,50 600,100 T1200,100" stroke="#a855f7" strokeWidth="1" opacity="0.3" className="animate-pulse"/>
          <path d="M0,300 Q400,250 800,300 T1600,300" stroke="#6366f1" strokeWidth="1" opacity="0.2" className="animate-pulse" style={{animationDelay: '1s'}}/>
          <path d="M0,500 Q200,450 400,500 T800,500" stroke="#8b5cf6" strokeWidth="1" opacity="0.2" className="animate-pulse" style={{animationDelay: '2s'}}/>
        </svg>
        
        {/* Quantum Particles */}
        <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
        <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-indigo-400 rounded-full animate-ping" style={{animationDelay: '0.7s'}}></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-purple-300 rounded-full animate-ping" style={{animationDelay: '1.3s'}}></div>
      </div>
      
      {/* Existing background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-40 h-40 bg-purple-300 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About Header */}
        <div className="text-center mb-6 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-purple-900 mb-2 sm:mb-6">
            About the Hackathon
          </h2>
          <p className="text-sm sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed px-2 sm:px-0">
            Pakistan's first-ever Quantum Computing Hackathon, supported by the Open Quantum Institute (OQI) at CERN and jointly organized by PIEAS, NILOP, and NCP, brought together the brightest minds to tackle real-world challenges using quantum technologies and contribute to achieving the UNO's Sustainable Development Goals (SDGs) in February 2026.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="mb-12">
          <Card variant="gradient" className="max-w-5xl mx-auto text-center p-8">
            <h3 className="text-2xl font-bold text-purple-900 mb-4">Our Mission</h3>
            <p className="text-lg text-purple-700 leading-relaxed mb-4">
              This hackathon was Pakistan's <strong>first dedicated quantum problem-solving competition</strong>, 
              directly connecting innovation to the <strong>UN Sustainable Development Goals (SDGs)</strong> while 
              building national capacity in quantum computing, communication, and security.
            </p>
            <p className="text-xl font-semibold text-indigo-700 italic">
              "Shaping Pakistan's Quantum Ecosystem"
            </p>
          </Card>
        </div>

        {/* Event Methodology Button */}
        <div className="text-center mb-12">
          <a href="/methodology">
            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg">
              📋 View Event Methodology & Criteria
            </button>
          </a>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card variant="gradient" className="max-w-2xl mx-auto p-8">
            <h3 className="text-2xl font-bold text-purple-900 mb-4">
              The Event Has Concluded!
            </h3>
            <p className="text-purple-700 mb-4">
              42 finalists from 950+ applications competed to shape Pakistan's quantum future. 
              The hackathon successfully concluded on February 8th, 2026 at NCP, Islamabad.
            </p>
            <p className="text-indigo-600 font-semibold mb-6">
              Three Days of Ideas, Research and Quantum Breakthroughs
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center gap-4 mb-6">
              <a 
                href="https://www.instagram.com/quantum_computing_hackathon/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagram
              </a>
              <a 
                href="https://www.linkedin.com/company/quantum-computing-hackathon/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
              </a>
            </div>
            
            <a href="/participants">
              <button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold px-8 py-3 rounded-full transition-all duration-200 transform hover:scale-105">
                View Final Teams & Winners
              </button>
            </a>
          </Card>
        </div>

      </div>
    </section>
  );
};

export default About;