'use client';

import { useState } from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import Card from '@/components/ui/Card';

export default function MethodologyPage() {
  const [selectedStep, setSelectedStep] = useState(null);

  const methodology = [
    {
      step: 1,
      title: "Applications Closed",
      description: "Registration has closed. Thank you to all 950+ applicants nationwide who expressed interest in Pakistan's first quantum computing hackathon.",
    },
    {
      step: 2,
      title: "Coursework Completed", 
      description: "Selected applicants completed OQI-led online quantum computing training in November. The intensive preparation covered quantum principles, programming, and practical applications.",
    },
    {
      step: 3,
      title: "Teams Formed",
      description: "42 finalists have been selected from 950+ nationwide applications based on their performance in coursework and dedication. Teams have been balanced by age and research background to ensure diverse collaboration.",
    },
    {
      step: 4,
      title: "Orientation & Mentorship",
      description: "Teams were introduced to the hackathon format, SDG-driven challenges, and assigned expert mentors.",
    },
    {
      step: 5,
      title: "Competition",
      description: "During the 3-day event at NCP, teams developed and presented innovative quantum solutions.",
    },
    {
      step: 6,
      title: "Prizes",
      description: "Winning teams received cash prizes, medals, long time mentoring, participation in national and international summer colleges and invitations to present at the International Nathiagalli Summer College (INSC).",
    }
  ];

  const eligibility = [
    "Open to students and young researchers, up to the age of 35 years, from universities and research institutions across Pakistan.",
    "Disciplines: Physics, Computer Science, Engineering, Mathematics, AI and Machine Learning",
    "Strong motivation and background in STEM fields",
    "Commitment to complete preparatory coursework",
    "Ability to work collaboratively in diverse teams"
  ];

  const evaluationCriteria = [
    {
      title: "Innovation & Creativity",
      description: "Novelty of the idea and originality of the approach",
      weight: "25%"
    },
    {
      title: "Quantum Depth",
      description: "Effective and meaningful use of quantum principles and programming", 
      weight: "25%"
    },
    {
      title: "Relevance to SDGs",
      description: "Alignment with local challenges and global goals",
      weight: "20%"
    },
    {
      title: "Feasibility & Impact", 
      description: "Practicality, scalability, and potential real-world benefits",
      weight: "20%"
    },
    {
      title: "Teamwork & Presentation",
      description: "Collaboration, clarity, and quality of final pitch",
      weight: "10%"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Page Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-5xl font-bold text-purple-900 mb-4">
              Event Methodology
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Learn about how Pakistan's first Quantum Computing Hackathon was organized and executed.
            </p>
          </div>

          {/* Competition Methodology */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-purple-900 text-center mb-12">
              Competition Methodology
            </h2>
            
            {/* First Row - 3 cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 max-w-5xl mx-auto">
              {methodology.slice(0, 3).map((step, index) => (
                <div key={index} className="relative">
                  <Card 
                    className="p-4 sm:p-6 text-center cursor-pointer transition-all duration-200 hover:shadow-lg transform hover:scale-105 bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200 h-full"
                    onClick={() => setSelectedStep(step)}
                  >
                    <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                      {step.step}
                    </div>
                    <h4 className="font-semibold text-purple-900 text-sm sm:text-base mb-2 sm:mb-3 leading-tight">
                      {step.title}
                    </h4>
                    <p className="text-purple-700 text-xs sm:text-sm leading-relaxed">
                      {step.description.substring(0, 100)}...
                    </p>
                  </Card>
                  
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
                    <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                      {step.step}
                    </div>
                    <h4 className="font-semibold text-purple-900 text-sm sm:text-base mb-2 sm:mb-3 leading-tight">
                      {step.title}
                    </h4>
                    <p className="text-purple-700 text-xs sm:text-sm leading-relaxed">
                      {step.description.substring(0, 100)}...
                    </p>
                  </Card>
                  
                  {index < 2 && (
                    <div className="hidden sm:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-purple-400 text-xl">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Modal for step details */}
          {selectedStep && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedStep(null)}>
              <div className="bg-white rounded-lg p-6 max-w-md w-full" onClick={(e) => e.stopPropagation()}>
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">
                    {selectedStep.step}
                  </div>
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

          {/* Eligibility Criteria */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-purple-900 text-center mb-8">
              Eligibility Criteria
            </h2>
            <div className="max-w-4xl mx-auto">
              <Card variant="glass" className="p-8">
                <ul className="space-y-4">
                  {eligibility.map((criteria, index) => (
                    <li key={index} className="flex items-start gap-3 text-purple-700">
                      <span className="text-purple-500 mt-1 text-lg">✓</span>
                      <span className="text-base leading-relaxed">{criteria}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </section>

          {/* Evaluation Criteria */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-purple-900 text-center mb-8">
              Evaluation Criteria
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {evaluationCriteria.map((criteria, index) => (
                <Card key={index} className="p-6 bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-purple-900">{criteria.title}</h4>
                    <span className="bg-purple-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                      {criteria.weight}
                    </span>
                  </div>
                  <p className="text-purple-700 text-sm">{criteria.description}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* Back to Home & Social Links */}
          <div className="text-center">
            <a href="/">
              <button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-200 transform hover:scale-105 mb-8">
                ← Back to Home
              </button>
            </a>
            
            {/* Social Links */}
            <div className="flex justify-center gap-6">
              <a 
                href="https://www.instagram.com/quantum_computing_hackathon/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-purple-600 hover:text-purple-800 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="font-medium">Instagram</span>
              </a>
              <a 
                href="https://www.linkedin.com/company/quantum-computing-hackathon/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-purple-600 hover:text-purple-800 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span className="font-medium">LinkedIn</span>
              </a>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
