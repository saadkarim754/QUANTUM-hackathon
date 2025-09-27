import Card from '@/components/ui/Card';
import { HACKATHON_INFO } from '@/lib/constants';

const About = () => {
  const methodology = [
    {
      step: 1,
      title: "Registration & Screening",
      description: "Students and young researchers will apply online. Based on background, motivation, competency and more, 70 applicants will be shortlisted.",
      icon: "📝"
    },
    {
      step: 2,
      title: "Preparatory Coursework", 
      description: "Shortlisted candidates will attend OQI-led online training in quantum principles and programming. They will complete assignments to demonstrate performance.",
      icon: "📚"
    },
    {
      step: 3,
      title: "Final Selection & Teams",
      description: "49 participants will be chosen based on their performance in course work and dedication and grouped into 7 diverse teams of 7 members each.",
      icon: "👥"
    },
    {
      step: 4,
      title: "Orientation & Mentorship",
      description: "Teams will be introduced to the hackathon format, SDG-driven challenges, and assigned expert mentors.",
      icon: "🎯"
    },
    {
      step: 5,
      title: "Hackathon Competition",
      description: "During the 3-day event at NCP, teams will develop and present innovative quantum solutions.",
      icon: "💻"
    },
    {
      step: 6,
      title: "Awards & Recognition",
      description: "Winning teams will receive cash prizes, medals, long time mentoring, participation in national and international summer colleges and invitations to present at the International Natural Sciences Conference (INSC).",
      icon: "🏆"
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
    <section id="about" className="py-16 sm:py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-40 h-40 bg-purple-300 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-purple-900 mb-4 sm:mb-6">
            About the Hackathon
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed px-2 sm:px-0">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {methodology.map((phase, index) => (
              <Card key={index} variant="glass" className="text-center p-6 h-full">
                <div className="text-4xl mb-4">{phase.icon}</div>
                <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  {phase.step}
                </div>
                <h4 className="text-lg font-bold text-purple-900 mb-3">
                  {phase.title}
                </h4>
                <p className="text-purple-700 text-sm leading-relaxed">
                  {phase.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Who Can Apply */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-purple-900 text-center mb-8">
            Who Can Apply?
          </h3>
          <div className="max-w-4xl mx-auto">
            <Card variant="glass" className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-bold text-purple-900 mb-4 flex items-center gap-2">
                    <span className="text-2xl">🎓</span>
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
                </div>
                <div>
                  <h4 className="text-xl font-bold text-purple-900 mb-4 flex items-center gap-2">
                    <span className="text-2xl">📊</span>
                    Selection Process
                  </h4>
                  <div className="space-y-4 text-sm text-purple-700">
                    <div className="flex justify-between items-center py-2 border-b border-purple-200">
                      <span>Applications</span>
                      <span className="font-bold text-purple-900">Open to all</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-purple-200">
                      <span>Shortlisted</span>
                      <span className="font-bold text-purple-900">70 candidates</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-purple-200">
                      <span>Final participants</span>
                      <span className="font-bold text-purple-900">49 finalists</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span>Team formation</span>
                      <span className="font-bold text-purple-900">7 teams of 7</span>
                    </div>
                  </div>
                </div>
              </div>
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
            <button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold px-8 py-3 rounded-full transition-all duration-200 transform hover:scale-105">
              Apply Now - Registration Opens Soon
            </button>
          </Card>
        </div>

      </div>
    </section>
  );
};

export default About;