'use client';

import { useState, useMemo } from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

const ParticipantsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Team data from the final list
  const teams = [
    {
      id: "A",
      name: "Team A",
      mentors: "Dr. Muhammad Ilyas, Dr. Ammaria Javed",
      members: [
        "Muhammad Shaheer Saleh",
        "Zoya Arooj", 
        "Sara Nargis",
        "Aasia Bibi",
        "Sobaan Qadeer",
        "Muhammad Warsham Qaiser"
      ]
    },
    {
      id: "B",
      name: "Team B",
      mentors: "Dr. Bilal Tariq, Dr. Nauhaila",
      members: [
        "Subhan Ud Din",
        "Syeda Samia Fatima",
        "Syed Muhammad Ali Bukhari",
        "Hafsa Naz",
        "Ahmed Mubarak Faisal",
        "Mehwish Roqaiya"
      ]
    },
    {
      id: "C",
      name: "Team C",
      mentors: "Dr. Muzammil, Dr. Muhammad Kashif",
      members: [
        "Falak Dinar",
        "Wajiha Masood", 
        "Muhammad Haroon Umar", 
        "Sidra Azam",
        "Muhammad Mudassar",
        "Laiba Saifullah"
      ]
    },
    {
      id: "D",
      name: "Team D",
      mentors: "Dr. Kamran Rehan, Mr.Muhammad Waqas Haseeb",
      members: [
        "Muhammad Latif",
        "Muskan Aman Khan", 
        "Tooba Bibi",
        "Misbah Riaz", 
        "Muhammad Ayyaz", 
        "Naeem Ahmed"
      ]
    },
    {
      id: "E",
      name: "Team E",
      mentors: "Dr. Malik Ahmad, Dr. Shakir ullah",
      members: [
        "Syed Aamir Abbas",
        "Javeria Ashfaq",
        "Huma Sabir",
        "Muhammad Osama",
        "safoora Rana", 
        "Fatima Afzal"
      ]
    },
    {
      id: "F",
      name: "Team F",
      mentors: "Dr. Sabih Ud Din Khan, Dr. Sayed Abbas Zulqarnain Naqvi",
      members: [
        "Mahum Noor",
        "Fatma Zafar",
        "Saif Ullah khalid",
        "Muneeb ur Rehman", 
        "Syeda Afia Shah", 
        "Asim Javed"
      ]
    },
    {
      id: "G",
      name: "Team G",
      mentors: "Dr. Muhammad Faryad, Dr. Aeysha Khalique",
      members: [
        "Muhammad Ubaid ur Rehman",
        "Muhammad Ahmed", 
        "Maham Shahzadi", 
        "Ayesha Shabbir", 
        "Mirza Dur e Adan", 
        "Muhammad Daniyal"
      ]
    }
  ];

  // Filter teams based on search term
  const filteredTeams = useMemo(() => {
    if (!searchTerm.trim()) return teams;
    
    const searchLower = searchTerm.toLowerCase();
    return teams.filter(team => 
      team.name.toLowerCase().includes(searchLower) ||
      team.mentors.toLowerCase().includes(searchLower) ||
      team.members.some(member => member.toLowerCase().includes(searchLower))
    );
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-purple-800">
      <Navigation />
      
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Final Teams
          </h1>
          <p className="text-lg text-purple-200 mb-6">
            Meet the 7 confirmed teams for the Quantum Computing Hackathon!
          </p>
          
          {/* Status Info Box */}
          <div className="max-w-3xl mx-auto bg-green-500/10 backdrop-blur-md border border-green-500/30 rounded-xl p-4 mb-8">
            <h2 className="text-lg font-bold text-green-200 mb-2">✅ Teams Finalized</h2>
            <p className="text-green-100">
              All teams have been formed and mentors assigned. Get ready for the hackathon on February 6th!
            </p>
          </div>
        </div>

        {/* Search Box */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="relative">
            <input
              type="text"
              placeholder="Search teams, mentors, or members..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-white/30 rounded-xl text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent text-lg"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-purple-200">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Teams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTeams.map((team) => (
            <div 
              key={team.id} 
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl overflow-hidden hover:bg-white/15 transition-all duration-300 transform hover:scale-[1.02]"
            >
              {/* Card Header */}
              <div className="bg-purple-600/30 px-6 py-4 border-b border-white/10 flex justify-between items-center">
                <h3 className="text-xl font-bold text-white">{team.name}</h3>
                <span className="bg-purple-500 text-white text-xs px-2 py-1 rounded-full">{team.members.length} Members</span>
              </div>
              
              <div className="p-6">
                {/* Mentors */}
                <div className="mb-4">
                  <h4 className="text-xs uppercase tracking-wider text-purple-300 font-semibold mb-2">Mentors</h4>
                  <p className="text-white font-medium">{team.mentors}</p>
                </div>
                
                {/* Members */}
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-purple-300 font-semibold mb-2">Team Members</h4>
                  <ul className="space-y-1">
                    {team.members.map((member, idx) => (
                      <li key={idx} className="text-purple-100 flex items-center">
                        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>
                        {member}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredTeams.length === 0 && (
          <div className="text-center py-12">
            <p className="text-purple-200 text-lg">No teams found matching your search.</p>
          </div>
        )}

        {/* Back to Home Button */}
        <div className="text-center mt-12">
          <a href="/">
            <button className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3 rounded-full border border-white/30 transition-all duration-200 transform hover:scale-105">
              ← Back to Home
            </button>
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ParticipantsPage;
