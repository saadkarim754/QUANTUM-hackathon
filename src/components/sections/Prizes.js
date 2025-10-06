import Card from '@/components/ui/Card';
import { PRIZES, ADDITIONAL_BENEFITS } from '@/lib/constants';

const Prizes = () => {
  return (
    <section id="prizes" className="py-8 sm:py-20 bg-gradient-to-r from-pink-900 via-purple-900 to-blue-900 relative overflow-hidden">
      {/* Quantum wave background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-96 h-96 border-2 border-white rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
          <div className="absolute inset-12 border-2 border-white rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '15s' }}></div>
          <div className="absolute inset-24 border border-white rounded-full animate-spin" style={{ animationDuration: '10s' }}></div>
        </div>
        
        {/* Additional particles */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-pink-300 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-blue-300 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-purple-300 rounded-full animate-bounce"></div>
        <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Prizes Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Prizes & Recognition
          </h2>
          <p className="text-lg sm:text-xl text-purple-200 max-w-4xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0">
            Celebrating excellence in quantum innovation with substantial rewards and recognition
          </p>
        </div>

        {/* Main Prizes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
          {PRIZES.map((prize, index) => (
            <Card 
              key={index}
              variant="glass" 
              className={`p-8 bg-white/10 backdrop-blur-md border-white/20 text-center transform transition-all duration-300 hover:scale-105 hover:bg-white/15 ${
                index === 0 ? 'md:scale-110 ring-2 ring-yellow-400/50' : ''
              }`}
            >
              {/* Prize Icon */}
              <div className={`text-7xl mb-6 ${index === 0 ? 'animate-bounce' : 'hover:scale-110 transition-transform'}`}>
                {prize.icon}
              </div>
              
              {/* Prize Position */}
              <h3 className={`text-2xl font-bold mb-3 ${
                index === 0 ? 'text-yellow-300' : 
                index === 1 ? 'text-gray-300' : 
                'text-orange-300'
              }`}>
                {prize.position}
              </h3>
              
              {/* Prize Details */}
              <p className="text-white text-lg font-semibold mb-4">
                {prize.prize}
              </p>
              
              {/* Special highlight for 1st place */}
              {index === 0 && (
                <div className="bg-yellow-500/20 border border-yellow-400/30 rounded-lg px-3 py-2">
                  <span className="text-yellow-200 text-sm font-medium">👑 Grand Champion</span>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Beyond the Prizes
          </h3>
          <p className="text-center text-purple-200 mb-8 max-w-3xl mx-auto">
            All winning teams will receive additional benefits that extend far beyond monetary rewards:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {ADDITIONAL_BENEFITS.map((benefit, index) => (
              <Card key={index} variant="glass" className="p-6 bg-white/10 backdrop-blur-md border-white/20 text-center">
                <div className="text-3xl mb-4">
                  {index === 0 ? '🎓' : 
                   index === 1 ? '🌍' : 
                   index === 2 ? '📢' : 
                   index === 3 ? '🏛️' : '🤝'}
                </div>
                <p className="text-white text-sm leading-relaxed">
                  {benefit}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Recognition Opportunities */}
        <div className="mb-16">
          <Card variant="glass" className="max-w-5xl mx-auto p-8 bg-white/10 backdrop-blur-md border-white/20">
            <h3 className="text-2xl font-bold text-white text-center mb-6">
              International Recognition Platform
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-2xl">🏛️</span>
                  Conference Presentations
                </h4>
                <ul className="space-y-2 text-purple-200 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">•</span>
                    International Natural Sciences Conference (INSC)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">•</span>
                    International Nathiagalli Summer College
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">•</span>
                    National and international quantum conferences
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-2xl">🌟</span>
                  Career Development
                </h4>
                <ul className="space-y-2 text-purple-200 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">•</span>
                    Long-term mentorship from quantum experts
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">•</span>
                    Networking with international research community
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">•</span>
                    Future collaboration opportunities
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card variant="glass" className="max-w-3xl mx-auto p-8 bg-white/10 backdrop-blur-md border-white/20">
            <div className="text-5xl mb-4">🏆</div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Compete for Glory?
            </h3>
            <p className="text-purple-200 mb-6 leading-relaxed">
              This is more than a competition – it's your gateway to becoming part of Pakistan's 
              quantum computing pioneers and contributing to global scientific advancement.
            </p>
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg">
              🚀 Start Your Quantum Journey
            </button>
          </Card>
        </div>

      </div>
    </section>
  );
};

export default Prizes;