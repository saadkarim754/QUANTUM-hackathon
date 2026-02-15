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
          
          {/* Social Links */}
          <div className="mt-8 flex justify-center gap-4">
            <a 
              href="https://www.instagram.com/quantum_computing_hackathon/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Follow on Instagram
            </a>
            <a 
              href="https://www.linkedin.com/company/quantum-computing-hackathon/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              Connect on LinkedIn
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Winners;
