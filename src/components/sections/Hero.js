'use client';

import { useState, useEffect } from 'react';
import Button from '@/components/ui/Button';
import { HACKATHON_INFO } from '@/lib/constants';
import { scrollToSection } from '@/lib/utils';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const targetDate = new Date('2026-02-06T00:00:00');

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate - now;
      
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[85vh] sm:min-h-screen flex flex-col justify-center bg-white pt-16 sm:pt-24 overflow-hidden">
      {/* Enhanced Quantum Decorative Elements */}
      <div className="absolute inset-0 opacity-8 pointer-events-none">
        {/* Floating Atoms with connecting lines */}
        <div className="absolute top-1/4 left-1/6 w-8 sm:w-12 h-8 sm:h-12 animate-pulse">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 border-2 border-purple-400 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-purple-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-0 left-1/2 w-1 h-1 bg-purple-400 rounded-full transform -translate-x-1/2 animate-bounce"></div>
            <div className="absolute -bottom-2 -right-1 w-1 h-1 bg-purple-300 rounded-full animate-ping"></div>
          </div>
        </div>
        
        <div className="absolute top-3/4 right-1/5 w-10 h-10 animate-pulse" style={{animationDelay: '1s'}}>
          <div className="relative w-full h-full">
            <div className="absolute inset-0 border-2 border-indigo-400 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-indigo-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-1 h-1 bg-indigo-400 rounded-full animate-ping"></div>
            <div className="absolute -top-1 -left-2 w-1 h-1 bg-indigo-300 rounded-full animate-bounce"></div>
          </div>
        </div>
        
        <div className="absolute top-1/2 right-1/3 w-8 h-8 animate-pulse" style={{animationDelay: '2s'}}>
          <div className="relative w-full h-full">
            <div className="absolute inset-0 border border-purple-300 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-purple-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute -bottom-1 left-0 w-1 h-1 bg-purple-200 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Additional atoms for network effect */}
        <div className="absolute top-1/3 left-1/2 w-6 h-6 animate-pulse" style={{animationDelay: '3s'}}>
          <div className="relative w-full h-full">
            <div className="absolute inset-0 border border-blue-400 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-blue-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>

        <div className="absolute bottom-1/3 left-1/4 w-7 h-7 animate-pulse" style={{animationDelay: '1.5s'}}>
          <div className="relative w-full h-full">
            <div className="absolute inset-0 border border-cyan-400 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-cyan-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>
        
        {/* Quantum Connection Lines */}
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1000 800" fill="none">
          {/* Connecting lines between atoms */}
          <line x1="167" y1="200" x2="500" y2="400" stroke="#a855f7" strokeWidth="1" opacity="0.3" className="animate-pulse" strokeDasharray="5,5"/>
          <line x1="800" y1="600" x2="667" y2="400" stroke="#6366f1" strokeWidth="1" opacity="0.2" className="animate-pulse" style={{animationDelay: '1s'}} strokeDasharray="3,3"/>
          <line x1="250" y1="533" x2="500" y2="400" stroke="#8b5cf6" strokeWidth="1" opacity="0.25" className="animate-pulse" style={{animationDelay: '2s'}} strokeDasharray="4,4"/>
          <line x1="167" y1="200" x2="250" y2="533" stroke="#c084fc" strokeWidth="1" opacity="0.2" className="animate-pulse" style={{animationDelay: '3s'}} strokeDasharray="2,2"/>
          
          {/* Quantum Wave Patterns */}
          <path d="M0,400 Q250,350 500,400 T1000,400" stroke="#a855f7" strokeWidth="1" opacity="0.15" className="animate-pulse"/>
          <path d="M0,200 Q300,150 600,200 T1200,200" stroke="#6366f1" strokeWidth="1" opacity="0.12" className="animate-pulse" style={{animationDelay: '1s'}}/>
          <path d="M0,600 Q200,550 400,600 T800,600" stroke="#8b5cf6" strokeWidth="1" opacity="0.12" className="animate-pulse" style={{animationDelay: '2s'}}/>
          
          {/* Additional quantum field lines */}
          <circle cx="167" cy="200" r="50" stroke="#a855f7" strokeWidth="1" opacity="0.1" fill="none" className="animate-pulse"/>
          <circle cx="800" cy="600" r="60" stroke="#6366f1" strokeWidth="1" opacity="0.08" fill="none" className="animate-pulse" style={{animationDelay: '1s'}}/>
          <circle cx="500" cy="400" r="40" stroke="#8b5cf6" strokeWidth="1" opacity="0.1" fill="none" className="animate-pulse" style={{animationDelay: '2s'}}/>
        </svg>
        
        {/* Enhanced Quantum Particles */}
        <div className="absolute top-1/5 left-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
        <div className="absolute top-2/3 left-1/5 w-1 h-1 bg-indigo-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/3 right-1/6 w-1 h-1 bg-purple-300 rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-1/4 left-2/3 w-1 h-1 bg-indigo-300 rounded-full animate-ping" style={{animationDelay: '2.5s'}}></div>
        <div className="absolute top-1/6 right-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-ping" style={{animationDelay: '3.5s'}}></div>
        <div className="absolute bottom-1/5 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-ping" style={{animationDelay: '4s'}}></div>
      </div>
      {/* Canvas-style Title Section with Team Image Background */}
      <div className="relative w-full max-w-6xl mx-auto h-56 sm:h-80 lg:h-96 mb-6 sm:mb-12 overflow-hidden rounded-lg shadow-xl px-4 sm:px-8 -mt-8 sm:mt-0">
        <div className="w-full h-full relative overflow-hidden rounded-lg">
          {/* Team Image Background */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/images/team/Gemini_Generated_Image_vesvidvesvidvesv.png)',
              filter: 'brightness(0.4) contrast(1.1)'
            }}
          ></div>
          
          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-indigo-900/70 to-purple-900/80"></div>
          
          {/* Canvas Border Effect */}
          <div className="absolute inset-2 sm:inset-4 border-2 sm:border-4 border-white/30 rounded-lg"></div>
          
          {/* Title Content */}
          <div className="relative z-10 h-full flex items-center justify-center px-2 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl">
              <h1 className="text-xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-4 text-white leading-tight drop-shadow-2xl">
                {HACKATHON_INFO.title}
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed drop-shadow-lg mb-4 sm:mb-6">
                {HACKATHON_INFO.subtitle}
              </p>
              
              {/* Event Details inside card */}
              <div className="space-y-2 sm:space-y-3">
                <p className="text-sm sm:text-base text-white/95 flex items-center justify-center gap-2 font-semibold">
                  <span className="text-lg sm:text-xl">📅</span>
                  <span className="leading-relaxed">{HACKATHON_INFO.dates}</span>
                </p>
                <p className="text-sm sm:text-base text-white/95 flex items-center justify-center gap-2">
                  <span className="text-lg sm:text-xl">📍</span>
                  <span className="leading-relaxed text-center">NCP, Islamabad</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Apply Now Button and Days Counter - Outside the title card */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center -mt-2 sm:-mt-1">
        {/* View Participants Button */}
        <div className="mb-3 sm:mb-2">
          <a href="/participants">
            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold px-10 sm:px-12 py-5 sm:py-5 rounded-full text-lg sm:text-lg shadow-lg transition-all duration-200 transform hover:scale-105">
              Final Teams
            </button>
          </a>
        </div>
        
        {/* Event Countdown */}
        <div className="mb-8">
          <p className="text-purple-600 font-semibold mb-3 tracking-wide uppercase text-sm animate-pulse">Event Starts In</p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/80 backdrop-blur-md border border-purple-200 rounded-2xl flex items-center justify-center shadow-md transform transition-transform hover:scale-105">
                  <span className="text-2xl sm:text-3xl font-bold text-purple-900">
                    {isClient ? item.value.toString().padStart(2, '0') : '00'}
                  </span>
                </div>
                <span className="text-xs text-purple-800 font-semibold mt-2 uppercase tracking-wide">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Learn More Button */}
        <div>
          <button 
            onClick={() => scrollToSection('about')}
            className="bg-purple-100 hover:bg-purple-200 text-purple-700 hover:text-purple-800 font-medium px-8 sm:px-8 py-3 sm:py-3 rounded-full text-base sm:text-base border border-purple-200 hover:border-purple-300 transition-all duration-200 transform hover:scale-105"
          >
            Learn More
          </button>
        </div>
      </div>

    </section>
  );
};

export default Hero;