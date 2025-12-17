'use client';

import { useState, useMemo } from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

const ParticipantsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Participant data from the uploaded list
  const participants = [
    { srNo: 1, name: "Asim", institute: "National University of Sciences and Technology", city: "Haripur" },
    { srNo: 2, name: "Subhan Ud Din", institute: "Abbottabad University of Science and Technology", city: "Uper Dir" },
    { srNo: 3, name: "Rameen Rizwan", institute: "Khwaja Fareed University of Engineering and Information Technology", city: "Rahim Yar khan" },
    { srNo: 4, name: "Farhan Mushtaq Hashmi", institute: "UET Taxila", city: "Islamabad" },
    { srNo: 5, name: "Muhammad Imran", institute: "The Islaima University Bahwalpure", city: "Lodhran" },
    { srNo: 6, name: "Ahmed Mubarak Faisal", institute: "NILOP", city: "Lahore" },
    { srNo: 7, name: "Abrar Khan", institute: "University of Science & Technolgy Bannu", city: "LakiMarwat" },
    { srNo: 8, name: "Hilal Khan", institute: "University of Science and Technology Bannu", city: "Bannu" },
    { srNo: 9, name: "Fayaz Ullah", institute: "COMSET University Islamabad", city: "Islamabad" },
    { srNo: 10, name: "Laiba Saifullah", institute: "Quaid e Azam University Islamabad", city: "Lower Dir" },
    { srNo: 11, name: "Muhammad Ammar", institute: "FAST NUCES", city: "Islamabad" },
    { srNo: 12, name: "Rabia Amin Khan", institute: "SEECS NUST, Islamad", city: "Attock" },
    { srNo: 13, name: "Zeshan Mirza", institute: "Karakoram International University", city: "Gilgit" },
    { srNo: 14, name: "Nawab Ullah Baig", institute: "Karakoram International University Gilglt Baltistan", city: "Gilgit" },
    { srNo: 15, name: "Misbah Riaz", institute: "University of Haripur", city: "Haripur" },
    { srNo: 16, name: "Syed Aamir Abbas", institute: "Air University Islamabad", city: "Murree" },
    { srNo: 17, name: "Dilawar Hussain", institute: "Virtual University of Pakistan", city: "Jehlum" },
    { srNo: 18, name: "Asawer Ayesha", institute: "National University of Sciences and Technology", city: "Chakwal" },
    { srNo: 19, name: "Dur e Adan", institute: "PIEAS", city: "Islamabad" },
    { srNo: 20, name: "Muhammad Shaheer Saleh", institute: "National University of Sciences and Technology", city: "Islamabad" },
    { srNo: 21, name: "Syed Muhammad Sajjad Hussain", institute: "National University of Sciences and Technology", city: "Lahore" },
    { srNo: 22, name: "Muhammad Ayaz Khan", institute: "International Islamic University Islamabad", city: "Islamabad" },
    { srNo: 23, name: "Ayesha Saleem Khan", institute: "Quaid-i-Azam University, Islamabad", city: "Chakwal" },
    { srNo: 24, name: "Muhammad Sultan", institute: "", city: "Queta" },
    { srNo: 25, name: "Syed Muhammad Ali Bukhari", institute: "National University of Sciences & Technology", city: "Attock" },
    { srNo: 26, name: "Sana Begum", institute: "Malakand University Chakdara", city: "Mardan" },
    { srNo: 27, name: "Huzaifa Bilal", institute: "National University of Sciences and Technology", city: "Islamabad" },
    { srNo: 28, name: "Fatima Zafar", institute: "NILOP", city: "Islamabad" },
    { srNo: 29, name: "Farzam ur Rehman", institute: "National University of Sciences and Technology", city: "Islamabad" },
    { srNo: 30, name: "Muhammad Tufail Ajmal", institute: "National University of Sciences and Technology", city: "Islamabad" },
    { srNo: 31, name: "Muhammad Haroon Umar", institute: "National University of Sciences and Technology", city: "Charsadda" },
    { srNo: 32, name: "Muhammad Ubaid Ur Rehman", institute: "University of Southern California", city: "Okara" },
    { srNo: 33, name: "Huma Sabir", institute: "NILOP", city: "Rawalpindi" },
    { srNo: 34, name: "Muneeb ur Rehman", institute: "PIEAS, Islamabad", city: "Islamabad" },
    { srNo: 35, name: "Javeria Ashfaq", institute: "PIEAS, Islamabad", city: "Islamabad" },
    { srNo: 36, name: "Muhammad Ahmed", institute: "NILOP", city: "Bahwalnagar" },
    { srNo: 37, name: "Sana Gul", institute: "Quaid Azam University Islamabad", city: "Lower Dir" },
    { srNo: 38, name: "Mahum Noor", institute: "National University of Sciences and Technology", city: "Islamabad" },
    { srNo: 39, name: "Sara Nargis", institute: "PIEAS, Islamabad", city: "Rawalpindi" },
    { srNo: 40, name: "Safoora Rana", institute: "PIEAS, Islamabad.", city: "Islamabad" },
    { srNo: 41, name: "Zoya Arooj", institute: "COMSATS University, Islamaad", city: "Rawalpindi" },
    { srNo: 42, name: "Amjad Hussain", institute: "GINOR, Gilgit", city: "Gilgit" },
    { srNo: 43, name: "Muhammad Zaid", institute: "Quaid I Azam University, Islamabad", city: "Hayderabad" },
    { srNo: 44, name: "Mehwish Roqaiya", institute: "PIEAS, Islamabad", city: "Islamabad" },
    { srNo: 45, name: "Saif Ullah Khalid", institute: "Comsats, islamabad", city: "Islamabad" },
    { srNo: 46, name: "Muhammad Ammar Raza", institute: "National University of Sciences and Technology", city: "Karachi" },
    { srNo: 47, name: "Falak Dinar", institute: "NILOP", city: "Maradan" },
    { srNo: 48, name: "Nawal Nasarullah", institute: "Air University", city: "Islamabad" },
    { srNo: 49, name: "Maham Shahzadi", institute: "National University of Sciences and Technology", city: "Islamabad" },
    { srNo: 50, name: "Faiq Mansoor", institute: "Optics Lab islamabad", city: "Islamabad" },
    { srNo: 51, name: "Areej Khan", institute: "NED University of Engineering and Technology", city: "Karachi" },
    { srNo: 52, name: "Syeda Samia Fatima", institute: "NED University of Engineering and Technology", city: "Karachi" },
    { srNo: 53, name: "Riza Siddiqui", institute: "NED University of Engineering and Technology", city: "Karachi" },
    { srNo: 54, name: "Araj Zaheer", institute: "NED University of Engineering & Technology, Karachi", city: "Karachi" },
    { srNo: 55, name: "Alveera Mehfooz", institute: "Ned university of engineering and technology", city: "Karachi" },
    { srNo: 56, name: "Muhammad Latif", institute: "NED University", city: "Karachi" },
    { srNo: 57, name: "Muhammad Luqman", institute: "COMSAT university Islamabad", city: "Kohat" },
    { srNo: 58, name: "Ali Asghar", institute: "GIKI university", city: "Jhang" },
    { srNo: 59, name: "Maaidah Kaleem", institute: "Lahore University of Management Sciences", city: "Lahore" },
    { srNo: 60, name: "Fatima Afzal", institute: "Lahore College for Women University (LCWU)", city: "Lahore" },
    { srNo: 61, name: "Muhammad Daniyal", institute: "Lahore University of Management Sciences", city: "Lahore" },
    { srNo: 62, name: "Qasim Ali", institute: "GCU Lahore", city: "Islamabad" },
    { srNo: 63, name: "Arifa Haleem", institute: "The university of Lahore", city: "Rawalpindi" },
    { srNo: 64, name: "Qasim Ali Chawla", institute: "Lahore University of Management Sciences", city: "Lahore" },
    { srNo: 65, name: "Muhammad Salman Hassan Siddiqui", institute: "Lahore University of Management Sciences", city: "Karachi" },
    { srNo: 66, name: "Muntaha Akram", institute: "The University of Punjab", city: "Kasur" },
    { srNo: 67, name: "Sobaan Qadeer", institute: "Lahore University of Management Sciences", city: "Lahore" },
    { srNo: 68, name: "Muhammad Osama", institute: "National University of Sciences and Technology", city: "Karachi" },
    { srNo: 69, name: "Tooba Bibi", institute: "National University of Sciences and Technology", city: "Mansehra" },
    { srNo: 70, name: "Fizza Azhar", institute: "Hazara University, Mansehra", city: "Islamabad" },
    { srNo: 71, name: "Hafsa Naseer", institute: "GIKI university", city: "Mardan" },
    { srNo: 72, name: "Aasia Bibi", institute: "University of Mianwali", city: "Mianwali" },
    { srNo: 73, name: "Muskan Aman Khan", institute: "Namal University Mianwali", city: "Mianwali" },
    { srNo: 74, name: "Ejaz Ahmed", institute: "Namal University Mianwali", city: "Mianwali" },
    { srNo: 75, name: "Syeda Afia Shah", institute: "UET Peshawar", city: "Peshawar" },
    { srNo: 76, name: "Muhammad Warsham Qaiser", institute: "GIKI university", city: "Swabi" },
    { srNo: 77, name: "Sundus Sarwar", institute: "Khwaja Fareed University of Engineering and Information Technology", city: "Rahim Yar Khan" },
    { srNo: 78, name: "Muhammad Ibrahim Tayyab", institute: "National University of Sciences and Technology", city: "Rawalpindi" },
    { srNo: 79, name: "Ayesha Shabbir Mirza", institute: "Fatima Jinnah Women University, Rawalpindi", city: "Rawalpindi" },
    { srNo: 80, name: "Sidra Azam", institute: "University of Sargodha", city: "Sargodha" },
    { srNo: 81, name: "Areeba Shahid", institute: "University of Engineering and Technology, Taxila", city: "Faisalabad" },
    { srNo: 82, name: "Rabbia Mahum", institute: "UET Taxila", city: "Wahcant" },
    { srNo: 83, name: "Hafsa Naz", institute: "University Of Agriculture, Faisalabad.", city: "Faisalabad" },
    { srNo: 84, name: "Muhammad Shaif Imran", institute: "FAST, NUCES, Islamabad", city: "Islamabad" },
    { srNo: 85, name: "Ayesha Arshad", institute: "Institute of Space Technology, Islamabad", city: "Rawalpindi" },
    { srNo: 86, name: "Kamran Ahmad", institute: "University of The Punjab, Lahore", city: "" },
    { srNo: 87, name: "Mubashir Developer", institute: "University of Mianwali", city: "" },
    { srNo: 88, name: "Muhammad Ayyaz", institute: "Pakistan Institute of Engineering and Applied Sciences", city: "" },
    { srNo: 89, name: "Muhammad Mudassar", institute: "Government College University Lahore", city: "" },
    { srNo: 90, name: "Muhammad Shaif Imran", institute: "FAST, NUCES", city: "" },
    { srNo: 91, name: "Naeem Ahmad", institute: "PIEAS", city: "" },
    { srNo: 92, name: "Rafia Batool", institute: "Quaid-e-Azam University Islamabad", city: "" },
    { srNo: 93, name: "Wajiha Masood", institute: "PIEAS", city: "" },
    { srNo: 94, name: "Wajya Ajmal", institute: "Quaid-i-Azam University", city: "" },
    { srNo: 95, name: "Zahid Bilal", institute: "Khushkhal Khan Khattak University Karak", city: "" },
    { srNo: 96, name: "Zoha Imran", institute: "Shaheed Benazir Bhutto Women University", city: "" }
  ];

  // Filter participants based on search term
  const filteredParticipants = useMemo(() => {
    if (!searchTerm.trim()) return participants;
    
    const searchLower = searchTerm.toLowerCase();
    return participants.filter(p => 
      p.name.toLowerCase().includes(searchLower) ||
      p.institute.toLowerCase().includes(searchLower) ||
      p.city.toLowerCase().includes(searchLower)
    );
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-purple-800">
      <Navigation />
      
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            List of Selected Candidates
          </h1>
          <p className="text-lg text-purple-200 mb-6">
            Congratulations to all candidates selected for the Quantum Computing Hackathon!
          </p>
          
          {/* Important Dates Info Box */}
          <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-bold text-white mb-4">📅 Important Dates</h2>
            <div className="text-left space-y-2 text-purple-100">
              <p>• <strong>November 24th:</strong> Online course conducted by OQI will start</p>
              <p>• <strong>December 31st:</strong> Final selection will be completed</p>
              <p>• <strong>January 5th:</strong> Teams will be formed and mentors will be assigned</p>
            </div>
          </div>
        </div>

        {/* Search Box */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by name, institute, or city..."
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
          <p className="text-purple-200 text-sm mt-2 text-center">
            {filteredParticipants.length} of {participants.length} participants shown
          </p>
        </div>

        {/* Participants List */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-purple-600/30">
                <tr>
                  <th className="px-4 py-4 text-left text-sm font-semibold text-white">Sr. No.</th>
                  <th className="px-4 py-4 text-left text-sm font-semibold text-white">Name</th>
                  <th className="px-4 py-4 text-left text-sm font-semibold text-white hidden md:table-cell">Institute</th>
                  <th className="px-4 py-4 text-left text-sm font-semibold text-white">City</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {filteredParticipants.map((participant, index) => (
                  <tr 
                    key={participant.srNo} 
                    className="hover:bg-white/5 transition-colors"
                  >
                    <td className="px-4 py-4 text-purple-100 font-medium">{participant.srNo}</td>
                    <td className="px-4 py-4 text-white font-semibold">{participant.name}</td>
                    <td className="px-4 py-4 text-purple-200 text-sm hidden md:table-cell">{participant.institute || 'N/A'}</td>
                    <td className="px-4 py-4 text-purple-200">{participant.city}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {filteredParticipants.length === 0 && (
            <div className="text-center py-12">
              <p className="text-purple-200 text-lg">No participants found matching your search.</p>
            </div>
          )}
        </div>

        {/* Back to Home Button */}
        <div className="text-center mt-8">
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
