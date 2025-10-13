'use client';

import { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    // Personal Information
    name: '',
    fatherName: '',
    dateOfBirth: '',
    cnic: '',
    nationality: '',
    gender: '',
    maritalStatus: '',
    religion: '',
    domicile: '',
    placeOfBirth: '',
    
    // Contact Information
    postalAddress: '',
    mobileNo: '',
    phoneNo: '',
    email: '',
    
    // Academic Information
    rightHand: '',
    subject: '',
    specialization: '',
    
    // Academic Details (Array for multiple degrees)
    academicDetails: [
      {
        degreeType: '',
        majorSubjects: '',
        boardUniversity: '',
        passingYear: '',
        totalMarks: '',
        obtainedMarks: '',
        percentage: '',
        division: ''
      }
    ],
    
    // Research Experience
    researchExperience: '',
    
    // Terms and conditions
    agreeToTerms: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleAcademicChange = (index, field, value) => {
    const newAcademicDetails = [...formData.academicDetails];
    newAcademicDetails[index][field] = value;
    setFormData(prev => ({
      ...prev,
      academicDetails: newAcademicDetails
    }));
  };

  const addAcademicRow = () => {
    setFormData(prev => ({
      ...prev,
      academicDetails: [
        ...prev.academicDetails,
        {
          degreeType: '',
          majorSubjects: '',
          boardUniversity: '',
          passingYear: '',
          totalMarks: '',
          obtainedMarks: '',
          percentage: '',
          division: ''
        }
      ]
    }));
  };

  const removeAcademicRow = (index) => {
    if (formData.academicDetails.length > 1) {
      const newAcademicDetails = formData.academicDetails.filter((_, i) => i !== index);
      setFormData(prev => ({
        ...prev,
        academicDetails: newAcademicDetails
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Add the registration to Firestore
      const docRef = await addDoc(collection(db, 'registrations'), {
        ...formData,
        submittedAt: serverTimestamp(),
        status: 'pending'
      });
      
      console.log('Document written with ID: ', docRef.id);
      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        name: '',
        fatherName: '',
        dateOfBirth: '',
        cnic: '',
        nationality: 'Pakistani',
        gender: '',
        maritalStatus: '',
        religion: '',
        domicile: '',
        placeOfBirth: '',
        postalAddress: '',
        mobileNo: '',
        phoneNo: '',
        email: '',
        rightHand: '',
        subject: '',
        specialization: '',
        academicDetails: [{
          degreeType: '',
          majorSubjects: '',
          boardUniversity: '',
          passingYear: '',
          totalMarks: '',
          obtainedMarks: '',
          percentage: '',
          division: ''
        }],
        researchExperience: '',
        agreeToTerms: false
      });
      
    } catch (error) {
      console.error('Error adding document: ', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(''), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-purple-800 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
                {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-between items-center mb-4">
            <a 
              href="/"
              className="bg-white/90 hover:bg-white text-purple-700 hover:text-purple-800 font-medium px-4 py-2 rounded-lg border border-purple-300 transition-all duration-200 transform hover:scale-105 shadow-sm"
            >
              ← Home
            </a>
            <div></div> {/* Spacer for centering */}
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Quantum Hackathon Registration
          </h1>
          <p className="text-white max-w-2xl mx-auto">
            Join Pakistan's first quantum computing hackathon. Fill out the form below to apply. 
          </p>
        </div>

        <Card variant="glass" className="p-8 bg-white/10 backdrop-blur-md border-white/20">
          
          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="bg-green-500/20 border border-green-400/50 rounded-lg p-4 text-center mb-6">
              <p className="text-green-300 font-medium">
                ✅ Registration submitted successfully! We'll review your application and get back to you soon.
              </p>
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="bg-red-500/20 border border-red-400/50 rounded-lg p-4 text-center mb-6">
              <p className="text-red-300 font-medium">
                ❌ Error submitting registration. Please try again or contact us directly.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Personal Information */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6 border-b border-white/20 pb-2">
                📋 Personal Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-purple-200 text-sm font-medium mb-2">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-purple-200 text-sm font-medium mb-2">
                    Father's Name <span className="text-red-400">*</span>
                  </label>
                  <input 
                    type="text"
                    name="fatherName"
                    value={formData.fatherName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                    placeholder="Enter father's name"
                  />
                </div>
                
                <div>
                  <label className="block text-purple-200 text-sm font-medium mb-2">
                    Date of Birth <span className="text-red-400">*</span>
                  </label>
                  <input 
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-purple-200 text-sm font-medium mb-2">
                    CNIC No. <span className="text-red-400">*</span>
                  </label>
                  <input 
                    type="text"
                    name="cnic"
                    value={formData.cnic}
                    onChange={handleChange}
                    required
                    placeholder="12345-1234567-1"
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-purple-200 text-sm font-medium mb-2">
                    Nationality <span className="text-red-400">*</span>
                  </label>
                  <input 
                    type="text"
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                    placeholder="Pakistani"
                  />
                </div>
                
                <div>
                  <label className="block text-purple-200 text-sm font-medium mb-2">
                    Gender <span className="text-red-400">*</span>
                  </label>
                  <select 
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                  >
                    <option value="" className="bg-gray-800 text-white">Select Gender</option>
                    <option value="Male" className="bg-gray-800 text-white">Male</option>
                    <option value="Female" className="bg-gray-800 text-white">Female</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-purple-200 text-sm font-medium mb-2">
                    Marital Status
                  </label>
                  <select 
                    name="maritalStatus"
                    value={formData.maritalStatus}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                  >
                    <option value="" className="bg-gray-800 text-white">Select Status</option>
                    <option value="Single" className="bg-gray-800 text-white">Single</option>
                    <option value="Married" className="bg-gray-800 text-white">Married</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-purple-200 text-sm font-medium mb-2">
                    Religion
                  </label>
                  <input 
                    type="text"
                    name="religion"
                    value={formData.religion}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                    placeholder="Enter religion"
                  />
                </div>
                
                <div>
                  <label className="block text-purple-200 text-sm font-medium mb-2">
                    Domicile (District)
                  </label>
                  <input 
                    type="text"
                    name="domicile"
                    value={formData.domicile}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                    placeholder="Enter district"
                  />
                </div>
                
                <div>
                  <label className="block text-purple-200 text-sm font-medium mb-2">
                    Place of Birth
                  </label>
                  <input 
                    type="text"
                    name="placeOfBirth"
                    value={formData.placeOfBirth}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                    placeholder="Enter place of birth"
                  />
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-purple-700 to-indigo-600 bg-clip-text text-transparent mb-6 border-b border-purple-200 pb-2">
                Contact Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-purple-200 text-sm font-medium mb-2">
                    Postal Address <span className="text-red-400">*</span>
                  </label>
                  <textarea 
                    name="postalAddress"
                    value={formData.postalAddress}
                    onChange={handleChange}
                    required
                    rows="3"
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent resize-none"
                    placeholder="Enter complete postal address"
                  />
                </div>
                
                <div>
                  <label className="block text-purple-200 text-sm font-medium mb-2">
                    Mobile No. <span className="text-red-400">*</span>
                  </label>
                  <input 
                    type="tel"
                    name="mobileNo"
                    value={formData.mobileNo}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                    placeholder="+92 300 1234567"
                  />
                </div>
                
                <div>
                  <label className="block text-purple-200 text-sm font-medium mb-2">
                    Phone No.
                  </label>
                  <input 
                    type="tel"
                    name="phoneNo"
                    value={formData.phoneNo}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                    placeholder="+92 51 1234567"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-purple-200 text-sm font-medium mb-2">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
            </div>

            {/* Academic Information */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6 border-b border-white/20 pb-2">
                Academic Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-purple-200 text-sm font-medium mb-2">
                    Subject/Field <span className="text-red-400">*</span>
                  </label>
                  <input 
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                    placeholder="Physics, Computer Science, Mathematics, etc."
                  />
                </div>
                
                <div>
                  <label className="block text-purple-200 text-sm font-medium mb-2">
                    Specialization
                  </label>
                  <input 
                    type="text"
                    name="specialization"
                    value={formData.specialization}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                    placeholder="Quantum Physics, AI, etc."
                  />
                </div>
              </div>

              {/* Academic Details Table */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-semibold text-white">Academic Qualifications</h4>
                  <Button 
                    type="button"
                    onClick={addAcademicRow}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm"
                  >
                    + Add Degree
                  </Button>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-purple-200 text-left p-2">Degree</th>
                        <th className="text-purple-200 text-left p-2">Major Subjects</th>
                        <th className="text-purple-200 text-left p-2">Board/University</th>
                        <th className="text-purple-200 text-left p-2">Year</th>
                        <th className="text-purple-200 text-left p-2">Total</th>
                        <th className="text-purple-200 text-left p-2">Obtained</th>
                        <th className="text-purple-200 text-left p-2">%</th>
                        <th className="text-purple-200 text-left p-2">Division</th>
                        <th className="text-purple-200 text-left p-2">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {formData.academicDetails.map((academic, index) => (
                        <tr key={index} className="border-b border-white/10">
                          <td className="p-2">
                            <input 
                              type="text"
                              value={academic.degreeType}
                              onChange={(e) => handleAcademicChange(index, 'degreeType', e.target.value)}
                              className="w-full px-2 py-1 bg-white/10 border border-white/30 rounded text-white text-xs"
                              placeholder="BSc, MSc, etc."
                            />
                          </td>
                          <td className="p-2">
                            <input 
                              type="text"
                              value={academic.majorSubjects}
                              onChange={(e) => handleAcademicChange(index, 'majorSubjects', e.target.value)}
                              className="w-full px-2 py-1 bg-white/10 border border-white/30 rounded text-white text-xs"
                              placeholder="Physics, CS, etc."
                            />
                          </td>
                          <td className="p-2">
                            <input 
                              type="text"
                              value={academic.boardUniversity}
                              onChange={(e) => handleAcademicChange(index, 'boardUniversity', e.target.value)}
                              className="w-full px-2 py-1 bg-white/10 border border-white/30 rounded text-white text-xs"
                              placeholder="University name"
                            />
                          </td>
                          <td className="p-2">
                            <input 
                              type="number"
                              value={academic.passingYear}
                              onChange={(e) => handleAcademicChange(index, 'passingYear', e.target.value)}
                              className="w-full px-2 py-1 bg-white/10 border border-white/30 rounded text-white text-xs"
                              placeholder="2024"
                            />
                          </td>
                          <td className="p-2">
                            <input 
                              type="number"
                              value={academic.totalMarks}
                              onChange={(e) => handleAcademicChange(index, 'totalMarks', e.target.value)}
                              className="w-full px-2 py-1 bg-white/10 border border-white/30 rounded text-white text-xs"
                              placeholder="1100"
                            />
                          </td>
                          <td className="p-2">
                            <input 
                              type="number"
                              value={academic.obtainedMarks}
                              onChange={(e) => handleAcademicChange(index, 'obtainedMarks', e.target.value)}
                              className="w-full px-2 py-1 bg-white/10 border border-white/30 rounded text-white text-xs"
                              placeholder="950"
                            />
                          </td>
                          <td className="p-2">
                            <input 
                              type="number"
                              step="0.01"
                              value={academic.percentage}
                              onChange={(e) => handleAcademicChange(index, 'percentage', e.target.value)}
                              className="w-full px-2 py-1 bg-white/10 border border-white/30 rounded text-white text-xs"
                              placeholder="86.36"
                            />
                          </td>
                          <td className="p-2">
                            <input 
                              type="text"
                              value={academic.division}
                              onChange={(e) => handleAcademicChange(index, 'division', e.target.value)}
                              className="w-full px-2 py-1 bg-white/10 border border-white/30 rounded text-white text-xs"
                              placeholder="First"
                            />
                          </td>
                          <td className="p-2">
                            {formData.academicDetails.length > 1 && (
                              <button 
                                type="button"
                                onClick={() => removeAcademicRow(index)}
                                className="text-red-400 hover:text-red-300 text-xs"
                              >
                                ✕
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Research & Experience */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6 border-b border-white/20 pb-2">
                Research & Experience
              </h3>
              
                            <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Research Experience (200-250 words)
                  </label>
                  <textarea 
                    name="researchExperience"
                    value={formData.researchExperience}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 bg-white/90 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none shadow-sm"
                    placeholder="Describe your research experience, publications, projects, etc."
                  />
                </div>
              </div>
            </div>

            {/* Terms and Submit */}
            <div>
              <div className="flex items-start gap-3 mb-6">
                <input 
                  type="checkbox"
                  id="agreeToTerms"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  required
                  className="mt-1 w-4 h-4 text-purple-600 bg-white/10 border-white/30 rounded focus:ring-purple-500"
                />
                <label htmlFor="agreeToTerms" className="text-purple-200 text-sm">
                  <span className="text-red-400">*</span> I certify that the information provided by me is complete and correct to the best of my knowledge and belief. I understand that providing false information may result in disqualification.
                </label>
              </div>
              
              <div className="text-center">
                <Button 
                  type="submit"
                  disabled={isSubmitting || !formData.agreeToTerms}
                  className={`${
                    isSubmitting || !formData.agreeToTerms
                      ? 'bg-gray-500 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700'
                  } text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Submitting Registration...
                    </span>
                  ) : (
                    'Submit Registration'
                  )}
                </Button>
              </div>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default RegisterPage;