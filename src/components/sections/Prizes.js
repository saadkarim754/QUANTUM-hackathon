import Card from '@/components/ui/Card';
import { PRIZES, CAREER_INCENTIVES } from '@/lib/constants';

const Prizes = () => {
  return (
    <section id="prizes" className="py-6 sm:py-12 bg-gradient-to-r from-pink-900 via-purple-900 to-blue-900 relative overflow-hidden">
      {/* Quantum wave background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-96 h-96 border-2 border-white rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
          <div className="absolute inset-12 border-2 border-white rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '15s' }}></div>
          <div className="absolute inset-24 border border-white rounded-full animate-spin" style={{ animationDuration: '10s' }}></div>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Prizes Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
            Prizes & Recognition
          </h2>
          <p className="text-sm sm:text-base text-purple-200 max-w-3xl mx-auto mb-4 sm:mb-6 leading-relaxed px-2 sm:px-0">
            Celebrating excellence in quantum innovation with substantial rewards
          </p>
        </div>

        {/* Main Prizes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 max-w-4xl mx-auto">
          {PRIZES.map((prize, index) => (
            <Card 
              key={index}
              variant="glass" 
              className={`p-4 sm:p-6 bg-white/10 backdrop-blur-md border-white/20 text-center transform transition-all duration-300 hover:scale-105 hover:bg-white/15 ${
                index === 0 ? 'md:scale-105 ring-2 ring-yellow-400/50' : ''
              }`}
            >
              {/* Prize Icon */}
              <div className={`text-3xl sm:text-5xl mb-3 sm:mb-4 ${index === 0 ? 'animate-bounce' : 'hover:scale-110 transition-transform'}`}>
                {prize.icon}
              </div>
              
              {/* Prize Position */}
              <h3 className={`text-lg sm:text-xl font-bold mb-2 ${
                index === 0 ? 'text-yellow-300' : 
                index === 1 ? 'text-gray-300' : 
                'text-orange-300'
              }`}>
                {prize.position}
              </h3>
              
              {/* Prize Details */}
              <p className="text-white text-sm sm:text-base font-semibold mb-3">
                {prize.prize}
              </p>
              
              {/* Special highlight for 1st place */}
              {index === 0 && (
                <div className="bg-yellow-500/20 border border-yellow-400/30 rounded-lg px-2 py-1">
                  <span className="text-yellow-200 text-xs font-medium">👑 Grand Champion</span>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Career Incentives - Paragraph Format */}
        <div className="text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
            {CAREER_INCENTIVES.title}
          </h3>
          
          <Card variant="glass" className="max-w-4xl mx-auto p-6 sm:p-8 bg-white/10 backdrop-blur-md border-white/20 mb-6 sm:mb-8">
            <p className="text-white text-sm sm:text-base leading-relaxed text-justify">
              {CAREER_INCENTIVES.description}
            </p>
          </Card>
        </div>

      </div>
    </section>
  );
};

export default Prizes;