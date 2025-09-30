import Card from '@/components/ui/Card';
import { ORGANIZERS, CONTACT_INFO } from '@/lib/constants';

const Organizers = () => {
  return (
        <section id="organizers" className="py-16 sm:py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Network connections */}
          <line x1="100" y1="150" x2="300" y2="150" stroke="purple" strokeWidth="1"/>
          <line x1="300" y1="150" x2="500" y2="150" stroke="purple" strokeWidth="1"/>
          <line x1="500" y1="150" x2="700" y2="150" stroke="purple" strokeWidth="1"/>
          <line x1="200" y1="300" x2="400" y2="300" stroke="purple" strokeWidth="1"/>
          <line x1="400" y1="300" x2="600" y2="300" stroke="purple" strokeWidth="1"/>
          <line x1="100" y1="150" x2="200" y2="300" stroke="purple" strokeWidth="1"/>
          <line x1="300" y1="150" x2="400" y2="300" stroke="purple" strokeWidth="1"/>
          <line x1="500" y1="150" x2="600" y2="300" stroke="purple" strokeWidth="1"/>
          <line x1="700" y1="150" x2="600" y2="300" stroke="purple" strokeWidth="1"/>
          
          {/* Network nodes */}
          <circle cx="100" cy="150" r="8" fill="purple" opacity="0.6"/>
          <circle cx="300" cy="150" r="8" fill="purple" opacity="0.6"/>
          <circle cx="500" cy="150" r="8" fill="purple" opacity="0.6"/>
          <circle cx="700" cy="150" r="8" fill="purple" opacity="0.6"/>
          <circle cx="200" cy="300" r="8" fill="purple" opacity="0.6"/>
          <circle cx="400" cy="300" r="8" fill="purple" opacity="0.6"/>
          <circle cx="600" cy="300" r="8" fill="purple" opacity="0.6"/>
        </svg>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/5 left-1/5 w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-indigo-300 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/4 left-2/3 w-3 h-3 bg-purple-300 rounded-full animate-bounce"></div>
        <div className="absolute top-2/3 right-1/5 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Organizers Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-purple-900 mb-4 sm:mb-6">
            Organizing Partners
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0">
            Pakistan's premier scientific institutions unite to deliver the nation's 
            first quantum computing hackathon, bringing together expertise in physics, 
            engineering, and quantum technologies.
          </p>
        </div>

        {/* Main Organizers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {ORGANIZERS.map((org, index) => (
            <Card 
              key={index}
              variant="glass" 
              className="p-6 sm:p-8 bg-purple-50 border-2 border-purple-200 hover:bg-purple-100 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                {/* Organization Logo */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 mb-4 sm:mb-6 flex items-center justify-center bg-white rounded-xl shadow-lg border border-gray-200 p-2">
                  {org.name.includes('CERN') || org.name.includes('OQI') ? (
                    <img 
                      src="/images/sponsors/oqi-logo-scaled.webp" 
                      alt="Open Quantum Institute (OQI) at CERN" 
                      className="w-full h-full object-contain"
                    />
                  ) : org.name.includes('PIEAS') ? (
                    <img 
                      src="/images/sponsors/pieas.png" 
                      alt="Pakistan Institute of Engineering and Applied Sciences" 
                      className="w-full h-full object-contain"
                    />
                  ) : org.name.includes('NCP') ? (
                    <img 
                      src="/images/sponsors/ncp.png" 
                      alt="National Center for Physics" 
                      className="w-full h-full object-contain"
                    />
                  ) : org.name.includes('NILOP') ? (
                    <img 
                      src="/images/sponsors/Nilop.jpg" 
                      alt="National Institute of Lasers and Optronics" 
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <span className="text-purple-600 font-bold text-sm sm:text-base">
                      {org.name.split(' ').map(word => word[0]).slice(0, 3).join('')}
                    </span>
                  )}
                </div>
                
                {/* Organization Name */}
                <h3 className="text-lg sm:text-xl font-bold text-purple-900 mb-2">
                  {org.name}
                </h3>
                
                {/* Role */}
                <div className="bg-purple-200 border border-purple-300 rounded-lg px-3 py-1 mb-3 sm:mb-4">
                  <span className="text-purple-800 text-xs sm:text-sm font-medium">
                    {org.role}
                  </span>
                </div>
                
                {/* Description */}
                <p className="text-gray-700 text-sm leading-relaxed">
                  {org.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Partnership Structure */}
        {/* Partnership Structure */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-purple-900 text-center mb-6 sm:mb-8">
            Partnership Structure
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
            <Card variant="glass" className="p-4 sm:p-6 bg-purple-50 border-2 border-purple-200 text-center">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">�</div>
              <h4 className="text-base sm:text-lg font-bold text-purple-900 mb-2 sm:mb-3">Host Institutions</h4>
              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                PIEAS, NILOP, and NCP provide venue, facilities, and local expertise
              </p>
              <div className="space-y-1 text-xs text-purple-700">
                <div>• Event hosting & logistics</div>
                <div>• Technical infrastructure</div>
                <div>• Local mentorship</div>
              </div>
            </Card>

            <Card variant="glass" className="p-4 sm:p-6 bg-blue-50 border-2 border-blue-200 text-center">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🌍</div>
              <h4 className="text-base sm:text-lg font-bold text-blue-900 mb-2 sm:mb-3">International Partner</h4>
              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                Open Quantum Institute (OQI) at CERN brings global quantum expertise
              </p>
              <div className="space-y-1 text-xs text-blue-700">
                <div>• Quantum training programs</div>
                <div>• International standards</div>
                <div>• Global networking</div>
              </div>
            </Card>

            <Card variant="glass" className="p-4 sm:p-6 bg-green-50 border-2 border-green-200 text-center">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🤝</div>
              <h4 className="text-base sm:text-lg font-bold text-green-900 mb-2 sm:mb-3">Collaborative Vision</h4>
              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                United commitment to advancing Pakistan's quantum capabilities
              </p>
              <div className="space-y-1 text-xs text-green-700">
                <div>• National capacity building</div>
                <div>• Research collaboration</div>
                <div>• Student development</div>
              </div>
            </Card>
          </div>
        </div>        {/* Project Leadership */}
        <div className="mb-12 sm:mb-16">
          <Card variant="glass" className="max-w-4xl mx-auto p-6 sm:p-8 bg-indigo-50 border-2 border-indigo-200">
            <h3 className="text-xl sm:text-2xl font-bold text-indigo-900 text-center mb-6 sm:mb-8">
              Project Leadership
            </h3>
            
            <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6">
              {/* Leader Photo */}
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden flex-shrink-0 shadow-lg border-4 border-indigo-200">
                <img 
                  src="/images/team/manzoor-ikram.png" 
                  alt="Dr. Manzoor Ikram - Project Manager" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h4 className="text-lg sm:text-xl font-bold text-indigo-900 mb-2">
                  {CONTACT_INFO.projectManager.name}
                </h4>
                <p className="text-purple-700 mb-3 font-medium">
                  {CONTACT_INFO.projectManager.title}
                </p>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Leading Pakistan's quantum computing hackathon initiative as Project Manager 
                  and OQI Liaison, bringing together national institutions and international 
                  expertise to advance quantum education and research in Pakistan.
                </p>
                <div className="bg-indigo-200 border border-indigo-300 rounded-lg px-4 py-2 inline-block">
                  <span className="text-indigo-800 text-sm font-medium">
                    📧 Project Manager & OQI Liaison
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Supporting Network */}
        <div className="text-center">
          <Card variant="glass" className="max-w-3xl mx-auto p-6 sm:p-8 bg-gradient-to-r from-purple-100 to-indigo-100 border-2 border-purple-200">
            <h3 className="text-xl sm:text-2xl font-bold text-purple-900 mb-3 sm:mb-4">
              Building Pakistan's Quantum Future
            </h3>
            <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              This hackathon represents a historic collaboration between Pakistan's leading 
              scientific institutions and international quantum experts, establishing a 
              foundation for long-term quantum research and development in the region.
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <div className="bg-blue-200 border border-blue-300 rounded-lg px-3 sm:px-4 py-2">
                <span className="text-blue-800 text-xs sm:text-sm font-medium">🔬 Research Excellence</span>
              </div>
              <div className="bg-purple-200 border border-purple-300 rounded-lg px-3 sm:px-4 py-2">
                <span className="text-purple-800 text-xs sm:text-sm font-medium">🎓 Student Development</span>
              </div>
              <div className="bg-indigo-200 border border-indigo-300 rounded-lg px-3 sm:px-4 py-2">
                <span className="text-indigo-800 text-xs sm:text-sm font-medium">🌐 Global Collaboration</span>
              </div>
            </div>
          </Card>
        </div>

      </div>
    </section>
  );
};

export default Organizers;