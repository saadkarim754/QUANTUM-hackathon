'use client';

import { useState, useEffect } from 'react';
import Button from '@/components/ui/Button';
import { HACKATHON_INFO } from '@/lib/constants';
import { calculateDaysUntil } from '@/lib/utils';

const Hero = () => {
  const [daysUntil, setDaysUntil] = useState(null);

  useEffect(() => {
    setDaysUntil(calculateDaysUntil('2026-02-06'));
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20 sm:pt-24">
      {/* Background with quantum-inspired effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-50 to-purple-100">
        {/* Animated quantum particles */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-600 rounded-full animate-ping"></div>
          <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-purple-500 rounded-full animate-bounce"></div>
          <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-purple-300 rounded-full animate-ping"></div>
          <div className="absolute top-3/4 left-1/5 w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
        </div>
        
        {/* Quantum wave pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,200 Q100,100 200,200 T400,200" stroke="purple" strokeWidth="2" fill="none" opacity="0.3"/>
            <path d="M0,150 Q150,50 300,150 T600,150" stroke="purple" strokeWidth="1" fill="none" opacity="0.2"/>
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Title */}
        <div className="mb-6 sm:mb-10">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-5 bg-gradient-to-r from-purple-600 via-purple-800 to-purple-900 bg-clip-text text-transparent leading-tight">
            {HACKATHON_INFO.title}
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-4 sm:mb-6 max-w-4xl mx-auto leading-relaxed">
            {HACKATHON_INFO.subtitle}
          </p>
        </div>

        {/* Event Details */}
        <div className="mb-8 sm:mb-12 space-y-2 sm:space-y-3">
          <p className="text-base sm:text-lg text-purple-700 flex items-center justify-center gap-3 font-semibold">
            <span className="text-xl sm:text-2xl">📅</span>
            <span className="leading-relaxed">{HACKATHON_INFO.dates}</span>
          </p>
          <p className="text-base sm:text-lg text-purple-600 flex items-center justify-center gap-3">
            <span className="text-xl sm:text-2xl">📍</span>
            <span className="leading-relaxed max-w-md sm:max-w-none text-center">{HACKATHON_INFO.location}</span>
          </p>
        </div>

        {/* Countdown */}
        {daysUntil && daysUntil > 0 && (
          <div className="mb-10 sm:mb-14">
            <div className="inline-block bg-purple-100 border-2 border-purple-200 rounded-2xl p-6 sm:p-8">
              <p className="text-purple-700 mb-3 font-medium text-sm sm:text-base leading-relaxed">Event starts in</p>
              <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-purple-900 leading-tight">
                {daysUntil} days
              </p>
            </div>
          </div>
        )}

        {/* Key Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-10 sm:mb-14 max-w-4xl mx-auto px-2 sm:px-0">
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-3 sm:p-4 lg:p-6 hover:bg-purple-100 transition-colors text-center">
            <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-purple-900 mb-1 sm:mb-2">{HACKATHON_INFO.stats.applicants}</div>
            <div className="text-xs sm:text-sm text-purple-700">Applicants</div>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-3 sm:p-4 lg:p-6 hover:bg-purple-100 transition-colors text-center">
            <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-purple-900 mb-1 sm:mb-2">{HACKATHON_INFO.stats.finalParticipants}</div>
            <div className="text-xs sm:text-sm text-purple-700">Finalists</div>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-3 sm:p-4 lg:p-6 hover:bg-purple-100 transition-colors text-center">
            <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-purple-900 mb-1 sm:mb-2">{HACKATHON_INFO.stats.teams}</div>
            <div className="text-xs sm:text-sm text-purple-700">Teams</div>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-3 sm:p-4 lg:p-6 hover:bg-purple-100 transition-colors text-center">
            <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-purple-900 mb-1 sm:mb-2">{HACKATHON_INFO.stats.durationDays}</div>
            <div className="text-xs sm:text-sm text-purple-700">Days</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12">
          <Button size="lg" variant="primary" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 w-full sm:w-auto min-w-[200px] sm:min-w-0">
            🚀 Register Now
          </Button>
          <Button size="lg" variant="outline" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 text-purple-700 border-purple-300 hover:bg-purple-50 w-full sm:w-auto min-w-[200px] sm:min-w-0">
            📋 Learn More
          </Button>
        </div>

        {/* Quantum Logo/Symbol */}
        <div className="mt-6 sm:mt-10 opacity-60">
          <div className="w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto relative">
            <div className="absolute inset-0 border-2 border-purple-400 rounded-full animate-spin"></div>
            <div className="absolute inset-2 border-2 border-purple-500 rounded-full animate-spin" style={{animationDirection: 'reverse'}}></div>
            <div className="absolute inset-4 border-2 border-purple-600 rounded-full animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xl sm:text-2xl lg:text-3xl">⚛️</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;