'use client';

import { useState, useEffect } from 'react';
import Button from '@/components/ui/Button';
import { HACKATHON_INFO } from '@/lib/constants';
import { calculateDaysUntil } from '@/lib/utils';

const Hero = () => {
  const [daysUntil, setDaysUntil] = useState(null);

  useEffect(() => {
    setDaysUntil(calculateDaysUntil('2025-10-31'));
  }, []);

  return (
    <section className="relative min-h-[85vh] sm:min-h-screen flex flex-col justify-center bg-white pt-16 sm:pt-24 overflow-hidden">
      {/* Quantum Decorative Elements for White Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        {/* Floating Atoms */}
        <div className="absolute top-1/4 left-1/6 w-8 sm:w-12 h-8 sm:h-12 animate-pulse">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 border-2 border-purple-400 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-purple-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-0 left-1/2 w-1 h-1 bg-purple-400 rounded-full transform -translate-x-1/2 animate-bounce"></div>
          </div>
        </div>
        
        <div className="absolute top-3/4 right-1/5 w-10 h-10 animate-pulse" style={{animationDelay: '1s'}}>
          <div className="relative w-full h-full">
            <div className="absolute inset-0 border-2 border-indigo-400 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-indigo-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-1 h-1 bg-indigo-400 rounded-full animate-ping"></div>
          </div>
        </div>
        
        <div className="absolute top-1/2 right-1/3 w-8 h-8 animate-pulse" style={{animationDelay: '2s'}}>
          <div className="relative w-full h-full">
            <div className="absolute inset-0 border border-purple-300 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-purple-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>
        
        {/* Quantum Wave Patterns */}
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1000 800" fill="none">
          <path d="M0,400 Q250,350 500,400 T1000,400" stroke="#a855f7" strokeWidth="1" opacity="0.3" className="animate-pulse"/>
          <path d="M0,200 Q300,150 600,200 T1200,200" stroke="#6366f1" strokeWidth="1" opacity="0.2" className="animate-pulse" style={{animationDelay: '1s'}}/>
          <path d="M0,600 Q200,550 400,600 T800,600" stroke="#8b5cf6" strokeWidth="1" opacity="0.2" className="animate-pulse" style={{animationDelay: '2s'}}/>
        </svg>
        
        {/* Scattered Quantum Particles */}
        <div className="absolute top-1/5 left-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
        <div className="absolute top-2/3 left-1/5 w-1 h-1 bg-indigo-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/3 right-1/6 w-1 h-1 bg-purple-300 rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-1/4 left-2/3 w-1 h-1 bg-indigo-300 rounded-full animate-ping" style={{animationDelay: '2.5s'}}></div>
      </div>
      {/* Canvas-style Title Section with Team Image Background */}
      <div className="relative w-full max-w-6xl mx-auto h-48 sm:h-80 lg:h-96 mb-4 sm:mb-12 overflow-hidden rounded-lg shadow-xl px-4 sm:px-8">
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
              <h1 className="text-lg sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-1 sm:mb-4 text-white leading-tight drop-shadow-2xl">
                {HACKATHON_INFO.title}
              </h1>
              <p className="text-xs sm:text-base lg:text-lg text-white/90 leading-relaxed drop-shadow-lg">
                {HACKATHON_INFO.subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* White Background Content Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Event Details */}
        <div className="mb-3 sm:mb-8 space-y-1 sm:space-y-2">
          <p className="text-xs sm:text-base text-purple-700 flex items-center justify-center gap-2 font-semibold">
            <span className="text-sm sm:text-xl">📅</span>
            <span className="leading-relaxed">{HACKATHON_INFO.dates}</span>
          </p>
          <p className="text-xs sm:text-base text-purple-600 flex items-center justify-center gap-2">
            <span className="text-sm sm:text-xl">📍</span>
            <span className="leading-relaxed text-center">NCP, Islamabad</span>
          </p>
        </div>

        {/* Registration Countdown */}
        {daysUntil && daysUntil > 0 && (
          <div className="mb-4 sm:mb-10">
            <div className="inline-block bg-gradient-to-r from-red-100 to-orange-100 border-2 border-red-200 rounded-xl p-3 sm:p-6">
              <p className="text-red-700 mb-1 sm:mb-2 font-medium text-xs leading-relaxed">Registration closes in</p>
              <p className="text-xl sm:text-3xl lg:text-4xl font-bold text-red-900 leading-tight mb-1">
                {daysUntil} days
              </p>
              <p className="text-orange-700 text-xs font-medium">Apply by Oct 31 • Course Nov</p>
            </div>
          </div>
        )}

        {/* Key Stats */}
        <div className="grid grid-cols-4 gap-1 sm:gap-3 mb-4 sm:mb-10 max-w-xs sm:max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white rounded-lg p-1 sm:p-3 text-center shadow-lg">
            <div className="text-sm sm:text-lg lg:text-xl font-bold mb-0 sm:mb-1">📧</div>
            <div className="text-xs font-medium">Apply</div>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-1 sm:p-3 text-center">
            <div className="text-sm sm:text-lg lg:text-xl font-bold text-purple-900 mb-0 sm:mb-1">{HACKATHON_INFO.stats.finalParticipants}</div>
            <div className="text-xs text-purple-700">Spots</div>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-1 sm:p-3 text-center">
            <div className="text-sm sm:text-lg lg:text-xl font-bold text-purple-900 mb-0 sm:mb-1">{HACKATHON_INFO.stats.teams}</div>
            <div className="text-xs text-purple-700">Teams</div>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-1 sm:p-3 text-center">
            <div className="text-sm sm:text-lg lg:text-xl font-bold text-purple-900 mb-0 sm:mb-1">{HACKATHON_INFO.stats.durationDays}</div>
            <div className="text-xs text-purple-700">Days</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center items-center mb-4 sm:mb-8">
          <Button size="sm" variant="primary" className="text-sm px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 w-full sm:w-auto min-w-[160px] sm:min-w-0 shadow-lg">
            🚀 Apply Now
          </Button>
          <Button size="sm" variant="outline" className="text-sm px-4 py-2 sm:px-6 sm:py-3 text-purple-700 border-purple-300 hover:bg-purple-50 w-full sm:w-auto min-w-[160px] sm:min-w-0">
            📋 Learn More
          </Button>
        </div>

        {/* Quantum Logo/Symbol */}
        <div className="mt-2 sm:mt-6 opacity-60">
          <div className="w-12 h-12 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto relative">
            <div className="absolute inset-0 border-2 border-purple-400 rounded-full animate-spin"></div>
            <div className="absolute inset-2 border-2 border-purple-500 rounded-full animate-spin" style={{animationDirection: 'reverse'}}></div>
            <div className="absolute inset-4 border-2 border-purple-600 rounded-full animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm sm:text-xl lg:text-2xl">⚛️</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;