'use client';

import Card from '@/components/ui/Card';

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-purple-800 py-8 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-start mb-4">
            <a 
              href="/"
              className="bg-white/90 hover:bg-white text-purple-700 hover:text-purple-800 font-medium px-4 py-2 rounded-lg border border-purple-300 transition-all duration-200 transform hover:scale-105 shadow-sm"
            >
              ← Home
            </a>
          </div>
        </div>

        <Card variant="glass" className="p-8 bg-white/10 backdrop-blur-md border-white/20 text-center">
          
          {/* Registration Closed Notice */}
          <div className="mb-8">
            <div className="text-6xl mb-4">🔒</div>
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Registration Closed
            </h1>
            <p className="text-purple-200 text-lg max-w-xl mx-auto leading-relaxed">
              Thank you for your interest in Pakistan's First Quantum Computing Hackathon. 
              Registration has now closed.
            </p>
          </div>

          {/* Event Info */}
          <div className="bg-white/10 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">Event Details</h2>
            <div className="space-y-3 text-purple-200">
              <p className="flex items-center justify-center gap-2">
                <span className="text-xl">📅</span>
                <span>February 6-8, 2026</span>
              </p>
              <p className="flex items-center justify-center gap-2">
                <span className="text-xl">📍</span>
                <span>National Centre for Physics (NCP), Islamabad</span>
              </p>
              <p className="flex items-center justify-center gap-2">
                <span className="text-xl">👥</span>
                <span>42 finalists | 7 teams</span>
              </p>
              <p className="flex items-center justify-center gap-2">
                <span className="text-xl">📊</span>
                <span>950+ applications nationwide</span>
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <a href="/participants">
              <button className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg">
                View Final Teams
              </button>
            </a>
            <a href="/">
              <button className="w-full bg-white/20 hover:bg-white/30 text-white font-medium px-8 py-3 rounded-full transition-all duration-200 border border-white/30">
                Return to Homepage
              </button>
            </a>
          </div>

          {/* Contact Info */}
          <div className="mt-8 pt-6 border-t border-white/20">
            <p className="text-purple-300 text-sm">
              Have questions? Contact us through our <a href="/#contact" className="text-purple-200 underline hover:text-white">contact form</a>.
            </p>
          </div>

        </Card>
      </div>
    </div>
  );
};

export default RegisterPage;
