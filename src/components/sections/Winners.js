'use client';

import Card from '@/components/ui/Card';

const Winners = () => {
  const winners = [
    {
      team: "Team G",
      position: "1st Place",
      image: "/images/TEAMG-1stprize.JPG",
      color: "from-yellow-400 to-amber-500",
      borderColor: "border-yellow-400",
      bgColor: "bg-yellow-50"
    },
    {
      team: "Team A",
      position: "2nd Place", 
      image: "/images/TEAMA-2ndprize.JPG",
      color: "from-gray-300 to-gray-400",
      borderColor: "border-gray-400",
      bgColor: "bg-gray-50"
    },
    {
      team: "Team C",
      position: "3rd Place",
      image: "/images/TEAMC-thirdprize.JPG",
      color: "from-orange-400 to-amber-600",
      borderColor: "border-orange-400",
      bgColor: "bg-orange-50"
    }
  ];

  return (
    <section id="winners" className="py-12 sm:py-20 bg-gradient-to-b from-purple-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-24 h-24 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-purple-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-purple-900 mb-4">
            🏆 Hackathon Winners
          </h2>
          <p className="text-sm sm:text-lg text-gray-700 max-w-3xl mx-auto">
            Congratulations to the winning teams who demonstrated exceptional innovation in quantum computing!
          </p>
        </div>

        {/* Winners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {winners.map((winner, index) => (
            <div 
              key={index} 
              className={`transform transition-all duration-300 hover:scale-105 ${index === 0 ? 'md:order-2' : index === 1 ? 'md:order-1' : 'md:order-3'}`}
            >
              <Card className={`overflow-hidden ${winner.bgColor} border-2 ${winner.borderColor} shadow-lg`}>
                {/* Position Badge */}
                <div className={`bg-gradient-to-r ${winner.color} text-white text-center py-3`}>
                  <span className="text-xl sm:text-2xl font-bold">{winner.position}</span>
                </div>
                
                {/* Team Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={winner.image} 
                    alt={`${winner.team} - ${winner.position}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Team Name */}
                <div className="p-4 text-center">
                  <h3 className="text-lg sm:text-xl font-bold text-purple-900">{winner.team}</h3>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Group Photo Section */}
        <div className="text-center">
          <h3 className="text-xl sm:text-3xl font-bold text-purple-900 mb-6">
            The Complete Team
          </h3>
          <p className="text-sm sm:text-base text-gray-700 mb-6 max-w-2xl mx-auto">
            Organizers, mentors, and all 42 participants who made Pakistan's first Quantum Computing Hackathon a success.
          </p>
          
          <Card className="overflow-hidden max-w-5xl mx-auto shadow-xl border-2 border-purple-200">
            <div className="relative">
              <img 
                src="/images/All-team-photo.JPG" 
                alt="All participants and organizers of Quantum Computing Hackathon Pakistan"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-900/80 to-transparent p-4 sm:p-6">
                <p className="text-white text-center text-sm sm:text-lg font-semibold">
                  #QuantumHackathonPakistan • February 6-8, 2026
                </p>
              </div>
            </div>
          </Card>
        </div>

      </div>
    </section>
  );
};

export default Winners;
