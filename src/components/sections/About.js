'use client';

import { useState } from 'react';
import Card from '@/components/ui/Card';
import { HACKATHON_INFO, EVALUATION_CRITERIA } from '@/lib/constants';

const About = () => {
  const [selectedStep, setSelectedStep] = useState(null);
  
  const methodology = [
    {
      step: 1,
      title: "Register Now",
      description: "Applications are now open! Submit your application by October 31st. We're looking for motivated students and young researchers passionate about quantum computing.",
      icon: ""
    },
    {
      step: 2,
      title: "Coursework", 
      description: "Selected applicants will complete OQI-led online quantum computing training throughout November. This intensive preparation covers quantum principles, programming, and practical applications.",
      icon: ""
    },
    {
      step: 3,
      title: "Final Selection",
      description: "49 participants will be chosen based on their performance in course work and dedication. Teams will be balanced by age and research gap to ensure diverse collaboration.",
      icon: ""
    },
    {
      step: 4,
      title: "Orientation & Mentorship",
      description: "Teams will be introduced to the hackathon format, SDG-driven challenges, and assigned expert mentors.",
      icon: ""
    },
    {
      step: 5,
      title: "Competition",
      description: "During the 3-day event at NCP, teams will develop and present innovative quantum solutions.",
      icon: ""
    },
    {
      step: 6,
      title: "Prizes",
      description: "Winning teams will receive cash prizes, medals, long time mentoring, participation in national and international summer colleges and invitations to present at the International Natural Sciences Conference (INSC).",
      icon: ""
    }
  ];

  const eligibility = [
    "Open to students and young researchers from universities across Pakistan",
    "Diverse disciplines: Physics, Computer Science, Engineering, Mathematics, AI and Machine Learning",
    "Strong motivation and background in STEM fields",
    "Commitment to complete preparatory coursework",
    "Ability to work collaboratively in diverse teams"
  ];

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
          <path d="M0,700 Q350,650 700,700 T1400,700" stroke="#a855f7" strokeWidth="1" opacity="0.1" className="animate-pulse" style={{animationDelay: '3s'}}/>
          
          {/* Interconnecting Field Lines */}
          <line x1="100" y1="150" x2="300" y2="350" stroke="#8b5cf6" strokeWidth="0.5" opacity="0.2" className="animate-pulse"/>
          <line x1="500" y1="120" x2="700" y2="320" stroke="#6366f1" strokeWidth="0.5" opacity="0.2" className="animate-pulse" style={{animationDelay: '1.5s'}}/>
          <line x1="200" y1="550" x2="600" y2="350" stroke="#a855f7" strokeWidth="0.5" opacity="0.1" className="animate-pulse" style={{animationDelay: '2.5s'}}/>
        </svg>
        
        {/* Quantum Particles */}
        <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
        <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-indigo-400 rounded-full animate-ping" style={{animationDelay: '0.7s'}}></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-purple-300 rounded-full animate-ping" style={{animationDelay: '1.3s'}}></div>
        <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-indigo-300 rounded-full animate-ping" style={{animationDelay: '1.9s'}}></div>
        <div className="absolute top-1/5 left-2/3 w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '2.7s'}}></div>
        
        {/* Molecular Structures */}
        <div className="absolute top-1/3 left-1/4 opacity-30">
          <div className="relative w-8 h-8">
            <div className="absolute top-0 left-0 w-2 h-2 bg-purple-400 rounded-full"></div>
            <div className="absolute top-0 right-0 w-2 h-2 bg-indigo-400 rounded-full"></div>
            <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-purple-300 rounded-full transform -translate-x-1/2"></div>
            <line x1="4" y1="4" x2="20" y2="4" stroke="#8b5cf6" strokeWidth="1"/>
            <line x1="4" y1="4" x2="12" y2="24" stroke="#8b5cf6" strokeWidth="1"/>
            <line x1="20" y1="4" x2="12" y2="24" stroke="#8b5cf6" strokeWidth="1"/>
          </div>
        </div>
      </div>
      
      {/* Existing background elements - keeping the original subtle decorations */}
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
            Pakistan's first-ever quantum computing hackathon, bringing together the brightest minds 
            to tackle real-world challenges using quantum technologies and contribute to achieving 
            the Sustainable Development Goals.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="mb-16">
          <Card variant="gradient" className="max-w-5xl mx-auto text-center p-8">
            <h3 className="text-2xl font-bold text-purple-900 mb-4">Our Mission</h3>
            <p className="text-lg text-purple-700 leading-relaxed">
              This hackathon will be Pakistan's <strong>first dedicated quantum problem-solving competition</strong>, 
              directly connecting innovation to the <strong>UN Sustainable Development Goals (SDGs)</strong> while 
              building national capacity in quantum computing, communication, and security.
            </p>
          </Card>
        </div>

        {/* Competition Methodology */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-purple-900 text-center mb-12">
            Competition Methodology
          </h3>
          
          {/* First Row - 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 max-w-5xl mx-auto">
            {methodology.slice(0, 3).map((step, index) => (
              <div key={index} className="relative">
                <Card 
                  className="p-4 sm:p-6 text-center cursor-pointer transition-all duration-200 hover:shadow-lg transform hover:scale-105 bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200 h-full"
                  onClick={() => setSelectedStep(step)}
                >
                  <h4 className="font-semibold text-purple-900 text-sm sm:text-base mb-2 sm:mb-3 leading-tight">
                    {step.title}
                  </h4>
                  <p className="text-purple-700 text-xs sm:text-sm leading-relaxed hidden sm:block">
                    {step.description.substring(0, 80)}...
                  </p>
                  <button className="text-purple-600 text-xs font-medium mt-2 sm:hidden">
                    Tap for details
                  </button>
                </Card>
                
                {/* Arrow to next card (horizontal) */}
                {index < 2 && (
                  <div className="hidden sm:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-purple-400 text-xl">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Downward Arrow between rows */}
          <div className="text-center mb-8">
            <div className="text-purple-400 text-2xl">↓</div>
          </div>

          {/* Second Row - 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {methodology.slice(3, 6).map((step, index) => (
              <div key={index + 3} className="relative">
                <Card 
                  className="p-4 sm:p-6 text-center cursor-pointer transition-all duration-200 hover:shadow-lg transform hover:scale-105 bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200 h-full"
                  onClick={() => setSelectedStep(step)}
                >
                  <h4 className="font-semibold text-purple-900 text-sm sm:text-base mb-2 sm:mb-3 leading-tight">
                    {step.title}
                  </h4>
                  <p className="text-purple-700 text-xs sm:text-sm leading-relaxed hidden sm:block">
                    {step.description.substring(0, 80)}...
                  </p>
                  <button className="text-purple-600 text-xs font-medium mt-2 sm:hidden">
                    Tap for details
                  </button>
                </Card>
                
                {/* Arrow to next card (horizontal) */}
                {index < 2 && (
                  <div className="hidden sm:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-purple-400 text-xl">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Modal for step details */}
        {selectedStep && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedStep(null)}>
            <div className="bg-white rounded-lg p-6 max-w-md w-full" onClick={(e) => e.stopPropagation()}>
              <div className="text-center mb-4">
                {/* Removed redundant icon display */}
                <h4 className="font-bold text-purple-900 text-lg mb-2">
                  {selectedStep.title}
                </h4>
              </div>
              <p className="text-purple-700 text-sm leading-relaxed mb-6">
                {selectedStep.description}
              </p>
              <button 
                onClick={() => setSelectedStep(null)}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Who Can Apply - Eligibility Criteria Only */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-purple-900 text-center mb-8">
            Eligibility Criteria
          </h3>
          <div className="max-w-4xl mx-auto">
            <Card variant="glass" className="p-8">
              <h4 className="text-xl font-bold text-purple-900 mb-4">
                Eligibility Criteria
              </h4>
              <ul className="space-y-3">
                {eligibility.map((criteria, index) => (
                  <li key={index} className="flex items-start gap-2 text-purple-700">
                    <span className="text-purple-500 mt-1">•</span>
                    <span className="text-sm leading-relaxed">{criteria}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card variant="gradient" className="max-w-2xl mx-auto p-8">
            <h3 className="text-2xl font-bold text-purple-900 mb-4">
              Ready to Shape the Future?
            </h3>
            <p className="text-purple-700 mb-6">
              Join Pakistan's quantum revolution and contribute to solving real-world challenges 
              through cutting-edge quantum technologies.
            </p>
            <a href="/register">
              <button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold px-8 py-3 rounded-full transition-all duration-200 transform hover:scale-105">
                Apply Now
              </button>
            </a>
          </Card>
        </div>

      </div>
    </section>
  );
};

export default About;