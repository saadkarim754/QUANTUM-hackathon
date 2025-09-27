import Card from '@/components/ui/Card';
import { TIMELINE, EVALUATION_CRITERIA } from '@/lib/constants';

const Timeline = () => {
  return (
    <section id="timeline" className="py-16 sm:py-20 bg-gradient-to-r from-purple-800 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Quantum particles background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-300 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-purple-200 rounded-full animate-bounce"></div>
        <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-purple-300 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 right-1/5 w-2 h-2 bg-purple-200 rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Timeline Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Competition Timeline
          </h2>
          <p className="text-lg sm:text-xl text-purple-200 max-w-3xl mx-auto px-2 sm:px-0">
            A structured multi-stage process designed to identify and develop Pakistan's 
            brightest quantum computing talents
          </p>
        </div>

        {/* Timeline Steps */}
        <div className="relative mb-20">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-400 to-purple-600 hidden lg:block"></div>
          
          <div className="space-y-12 lg:space-y-16">
            {TIMELINE.map((phase, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}>
                
                {/* Timeline content */}
                <div className="flex-1 max-w-lg">
                  <Card variant="glass" className="p-6 bg-white/10 backdrop-blur-md border-white/20">
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">
                          {phase.phase}
                        </h3>
                        <p className="text-purple-200 text-sm mb-3 leading-relaxed">
                          {phase.description}
                        </p>
                        <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg px-3 py-1 inline-block">
                          <span className="text-purple-200 text-sm font-medium">
                            📅 {phase.deadline}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Timeline dot (for large screens) */}
                <div className="hidden lg:block relative">
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full border-4 border-purple-800 shadow-lg"></div>
                  <div className="absolute inset-0 w-6 h-6 bg-purple-300 rounded-full animate-ping opacity-30"></div>
                </div>

                {/* Spacer for alignment */}
                <div className="flex-1 max-w-lg hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Evaluation Criteria */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Evaluation Criteria
            </h3>
            <p className="text-purple-200 text-lg">
              Projects will be judged by a panel of international experts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {EVALUATION_CRITERIA.map((criteria, index) => (
              <Card key={index} variant="glass" className="p-6 bg-white/10 backdrop-blur-md border-white/20 text-center">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {criteria.weight}
                </div>
                <h4 className="text-lg font-bold text-white mb-3">
                  {criteria.title}
                </h4>
                <p className="text-purple-200 text-sm leading-relaxed">
                  {criteria.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card variant="glass" className="max-w-2xl mx-auto p-8 bg-white/10 backdrop-blur-md border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready for the Challenge?
            </h3>
            <p className="text-purple-200 mb-6">
              Registration opens soon! Be among the first to apply for Pakistan's 
              most prestigious quantum computing competition.
            </p>
            <button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg">
              Get Notified When Registration Opens
            </button>
          </Card>
        </div>

      </div>
    </section>
  );
};

export default Timeline;