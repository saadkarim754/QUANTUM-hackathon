import Card from '@/components/ui/Card';
import { SDG_THEMES } from '@/lib/constants';

const Themes = () => {
  return (
        <section id="themes" className="py-8 sm:py-20 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* SDG background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,200 Q100,100 200,200 T400,200" stroke="white" strokeWidth="2" fill="none"/>
          <path d="M0,150 Q150,50 300,150 T600,150" stroke="white" strokeWidth="1" fill="none" opacity="0.5"/>
          <path d="M0,250 Q100,300 200,250 T400,250" stroke="white" strokeWidth="1" fill="none" opacity="0.3"/>
        </svg>
      </div>

      {/* Floating quantum particles */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/6 left-1/6 w-2 h-2 bg-pink-300 rounded-full animate-pulse"></div>
        <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-indigo-300 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 left-1/5 w-3 h-3 bg-purple-300 rounded-full animate-bounce"></div>
        <div className="absolute top-2/3 right-1/6 w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-2/3 w-1 h-1 bg-indigo-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/4 right-2/5 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Themes Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            SDG Challenge Themes
          </h2>
          <p className="text-xl text-purple-200 max-w-4xl mx-auto mb-8 leading-relaxed">
            The hackathon will address selected <strong>UN Sustainable Development Goals</strong>, 
            localized for Pakistan's needs. Teams will develop quantum-powered solutions 
            for real-world challenges.
          </p>
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-3 border border-white/20">
            <span className="text-white font-medium">🎯 Choose from 8 Challenge Areas</span>
          </div>
        </div>

        {/* SDG Themes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {SDG_THEMES.map((theme, index) => (
            <Card 
              key={index} 
              variant="glass" 
              className="p-6 bg-white/10 backdrop-blur-md border-white/20 text-center hover:bg-white/15 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group"
            >
              {/* Theme Icon */}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {theme.icon}
              </div>
              
              {/* Theme Title */}
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-200 transition-colors">
                {theme.title}
              </h3>
              
              {/* Theme Description */}
              <p className="text-purple-200 text-sm leading-relaxed mb-4">
                {theme.description}
              </p>
              
              {/* Color indicator */}
              <div className={`w-full h-2 rounded-full ${theme.color} opacity-60 group-hover:opacity-80 transition-opacity`}></div>
            </Card>
          ))}
        </div>

        {/* Challenge Examples */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Sample Challenge Areas
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card variant="glass" className="p-8 bg-white/10 backdrop-blur-md border-white/20">
              <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-2xl">🏥</span>
                Healthcare Innovation
              </h4>
              <ul className="space-y-2 text-purple-200 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">•</span>
                  Quantum-enhanced medical diagnostics for rural areas
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">•</span>
                  Drug discovery optimization using quantum algorithms
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">•</span>
                  Secure patient data management with quantum encryption
                </li>
              </ul>
            </Card>

            <Card variant="glass" className="p-8 bg-white/10 backdrop-blur-md border-white/20">
              <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-2xl">🌱</span>
                Environmental Solutions
              </h4>
              <ul className="space-y-2 text-purple-200 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">•</span>
                  Climate modeling and prediction systems
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">•</span>
                  Quantum optimization for renewable energy grids
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">•</span>
                  Biodiversity monitoring using quantum sensors
                </li>
              </ul>
            </Card>

            <Card variant="glass" className="p-8 bg-white/10 backdrop-blur-md border-white/20">
              <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-2xl">📚</span>
                Education Technology
              </h4>
              <ul className="space-y-2 text-purple-200 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">•</span>
                  Personalized learning with quantum machine learning
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">•</span>
                  Language learning platforms in Urdu and local languages
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">•</span>
                  Remote education infrastructure optimization
                </li>
              </ul>
            </Card>

            <Card variant="glass" className="p-8 bg-white/10 backdrop-blur-md border-white/20">
              <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-2xl">💼</span>
                Economic Empowerment
              </h4>
              <ul className="space-y-2 text-purple-200 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">•</span>
                  Quantum-secured digital payment systems
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">•</span>
                  Supply chain optimization for small businesses
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">•</span>
                  Financial inclusion through quantum cryptography
                </li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Innovation Focus */}
        <div className="text-center">
          <Card variant="glass" className="max-w-4xl mx-auto p-8 bg-white/10 backdrop-blur-md border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Innovation Meets Impact
            </h3>
            <p className="text-purple-200 mb-6 leading-relaxed">
              Your quantum solution should demonstrate both <strong>technical innovation</strong> and 
              <strong>real-world applicability</strong>. Focus on problems that matter to Pakistani 
              communities while pushing the boundaries of quantum technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg px-4 py-2">
                <span className="text-purple-200 font-medium">💡 Quantum Innovation</span>
              </div>
              <div className="bg-pink-500/20 border border-pink-400/30 rounded-lg px-4 py-2">
                <span className="text-pink-200 font-medium">🌍 Local Impact</span>
              </div>
              <div className="bg-indigo-500/20 border border-indigo-400/30 rounded-lg px-4 py-2">
                <span className="text-indigo-200 font-medium">🚀 Global Relevance</span>
              </div>
            </div>
          </Card>
        </div>

      </div>
    </section>
  );
};

export default Themes;