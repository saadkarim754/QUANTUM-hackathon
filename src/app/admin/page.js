'use client';

import { useState, useEffect } from 'react';
import { collection, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { useAuth } from '@/contexts/AuthContext';
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import Card from '@/components/ui/Card';
import { exportAllDataToPDF, exportApprovedDataToPDF } from '@/lib/pdfExport';

const AdminDashboard = () => {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pdfExporting, setPdfExporting] = useState(false);
  const [selectedRegistration, setSelectedRegistration] = useState(null);
  const [filter, setFilter] = useState('all'); // all, pending, approved, rejected
  const { logout } = useAuth();

  useEffect(() => {
    fetchRegistrations();
  }, []);

  const fetchRegistrations = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'registrations'));
      const regs = [];
      querySnapshot.forEach((doc) => {
        regs.push({
          id: doc.id,
          ...doc.data()
        });
      });
      // Sort by submission date (newest first)
      regs.sort((a, b) => {
        if (a.submittedAt && b.submittedAt) {
          return b.submittedAt.seconds - a.submittedAt.seconds;
        }
        return 0;
      });
      setRegistrations(regs);
    } catch (error) {
      console.error('Error fetching registrations:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateRegistrationStatus = async (id, newStatus) => {
    try {
      await updateDoc(doc(db, 'registrations', id), {
        status: newStatus,
        updatedAt: new Date()
      });
      
      // If approved, add to approved students collection
      if (newStatus === 'approved') {
        const registration = registrations.find(reg => reg.id === id);
        if (registration) {
          await addDoc(collection(db, 'approvedStudents'), {
            ...registration,
            approvedAt: new Date(),
            originalRegistrationId: id
          });
        }
      }
      
      // Update local state
      setRegistrations(prev => 
        prev.map(reg => 
          reg.id === id ? { ...reg, status: newStatus } : reg
        )
      );
      
      if (selectedRegistration && selectedRegistration.id === id) {
        setSelectedRegistration(prev => ({ ...prev, status: newStatus }));
      }
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const deleteRegistration = async (id) => {
    if (window.confirm('Are you sure you want to delete this registration?')) {
      try {
        await deleteDoc(doc(db, 'registrations', id));
        setRegistrations(prev => prev.filter(reg => reg.id !== id));
        if (selectedRegistration && selectedRegistration.id === id) {
          setSelectedRegistration(null);
        }
      } catch (error) {
        console.error('Error deleting registration:', error);
      }
    }
  };

  const filteredRegistrations = registrations.filter(reg => {
    if (filter === 'all') return true;
    return reg.status === filter;
  });

  const exportToCSV = () => {
    const headers = [
      'Name', 'Email', 'Mobile', 'Gender', 'Subject', 'University', 
      'Programming Experience', 'Quantum Knowledge', 'Status', 'Submitted At'
    ];
    
    const csvData = filteredRegistrations.map(reg => [
      reg.name,
      reg.email,
      reg.mobileNo,
      reg.gender,
      reg.subject,
      reg.academicDetails?.[0]?.boardUniversity || '',
      reg.programmingExperience?.substring(0, 50) + '...' || '',
      reg.quantumKnowledge,
      reg.status,
      reg.submittedAt ? new Date(reg.submittedAt.seconds * 1000).toLocaleDateString() : ''
    ]);
    
    const csvContent = [headers, ...csvData]
      .map(row => row.map(field => `"${field}"`).join(','))
      .join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `quantum_hackathon_registrations_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const handleExportAllPDF = async () => {
    setPdfExporting(true);
    try {
      await exportAllDataToPDF();
      alert('✓ All data exported to PDF successfully!');
    } catch (error) {
      alert('✗ Error exporting PDF: ' + error.message);
    } finally {
      setPdfExporting(false);
    }
  };

  const handleExportApprovedPDF = async () => {
    setPdfExporting(true);
    try {
      await exportApprovedDataToPDF();
      alert('✓ Approved registrations exported to PDF successfully!');
    } catch (error) {
      alert('✗ Error exporting PDF: ' + error.message);
    } finally {
      setPdfExporting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-purple-800 flex items-center justify-center">
        <div className="text-white text-center">
          <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p>Loading registrations...</p>
        </div>
      </div>
    );
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-purple-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Admin Dashboard
              </h1>
              <p className="text-purple-200">
                Manage quantum hackathon registrations
              </p>
            </div>
            <div className="flex gap-4">
                            <a 
                href="/"
                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-lg transition-all duration-200 transform hover:scale-105 text-sm shadow-lg"
              >
                Home
              </a>
              <button 
                onClick={logout}
                className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-lg transition-all duration-200 transform hover:scale-105 text-sm shadow-lg"
              >
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 bg-white/10 backdrop-blur-md border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">{registrations.length}</div>
              <div className="text-purple-200 text-sm">Total Applications</div>
            </div>
          </Card>
          
          <Card className="p-6 bg-white/10 backdrop-blur-md border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">
                {registrations.filter(r => r.status === 'pending').length}
              </div>
              <div className="text-purple-200 text-sm">Pending Review</div>
            </div>
          </Card>
          
          <Card className="p-6 bg-white/10 backdrop-blur-md border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">
                {registrations.filter(r => r.status === 'approved').length}
              </div>
              <div className="text-purple-200 text-sm">Approved</div>
            </div>
          </Card>
          
          <Card className="p-6 bg-white/10 backdrop-blur-md border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-400">
                {registrations.filter(r => r.status === 'rejected').length}
              </div>
              <div className="text-purple-200 text-sm">Rejected</div>
            </div>
          </Card>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap gap-4 mb-6">
          <select 
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 bg-white/10 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            <option value="all" className="bg-gray-800 text-white">All Registrations</option>
            <option value="pending" className="bg-gray-800 text-white">Pending</option>
            <option value="approved" className="bg-gray-800 text-white">Approved</option>
            <option value="rejected" className="bg-gray-800 text-white">Rejected</option>
          </select>
          
          <button 
            onClick={exportToCSV}
            className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
          >
            Export CSV
          </button>

          <button 
            onClick={handleExportAllPDF}
            disabled={pdfExporting}
            className={`px-4 py-2 rounded-lg transition-colors text-white font-medium ${
              pdfExporting 
                ? 'bg-gray-600 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {pdfExporting ? '⏳ Exporting...' : '📄 Export All to PDF'}
          </button>

          <button 
            onClick={handleExportApprovedPDF}
            disabled={pdfExporting}
            className={`px-4 py-2 rounded-lg transition-colors text-white font-medium ${
              pdfExporting 
                ? 'bg-gray-600 cursor-not-allowed' 
                : 'bg-indigo-600 hover:bg-indigo-700'
            }`}
          >
            {pdfExporting ? '⏳ Exporting...' : '✓ Export Approved to PDF'}
          </button>
          
          <button 
            onClick={fetchRegistrations}
            className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
          >
            Refresh
          </button>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Registrations List */}
          <Card className="p-6 bg-white/10 backdrop-blur-md border-white/20">
            <h2 className="text-xl font-bold text-white mb-4">
              Registrations ({filteredRegistrations.length})
            </h2>
            
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {filteredRegistrations.map((registration) => (
                <div 
                  key={registration.id}
                  onClick={() => setSelectedRegistration(registration)}
                  className={`p-4 rounded-lg border cursor-pointer transition-all ${
                    selectedRegistration?.id === registration.id
                      ? 'bg-purple-600/30 border-purple-400'
                      : 'bg-white/5 border-white/20 hover:bg-white/10'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-white">{registration.name}</h3>
                      <p className="text-purple-200 text-sm">{registration.email}</p>
                      <p className="text-purple-300 text-xs">{registration.subject}</p>
                    </div>
                    <div className="text-right">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        registration.status === 'approved' ? 'bg-green-500/20 text-green-300' :
                        registration.status === 'rejected' ? 'bg-red-500/20 text-red-300' :
                        'bg-yellow-500/20 text-yellow-300'
                      }`}>
                        {registration.status || 'pending'}
                      </span>
                      <p className="text-purple-300 text-xs mt-1">
                        {registration.submittedAt ? 
                          new Date(registration.submittedAt.seconds * 1000).toLocaleDateString() : 
                          'Unknown date'
                        }
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              
              {filteredRegistrations.length === 0 && (
                <div className="text-center text-purple-300 py-8">
                  No registrations found for the selected filter.
                </div>
              )}
            </div>
          </Card>

          {/* Registration Details */}
          <Card className="p-6 bg-white/10 backdrop-blur-md border-white/20">
            {selectedRegistration ? (
              <div>
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-xl font-bold text-white">Registration Details</h2>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => updateRegistrationStatus(selectedRegistration.id, 'approved')}
                      className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white rounded text-sm"
                    >
                      Approve
                    </button>
                    <button 
                      onClick={() => updateRegistrationStatus(selectedRegistration.id, 'rejected')}
                      className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded text-sm"
                    >
                      Reject
                    </button>
                    <button 
                      onClick={() => deleteRegistration(selectedRegistration.id)}
                      className="px-3 py-1 bg-gray-600 hover:bg-gray-700 text-white rounded text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>

                <div className="space-y-4 max-h-96 overflow-y-auto">
                  
                  {/* Personal Info */}
                  <div>
                    <h3 className="font-semibold text-purple-200 mb-2">Personal Information</h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div><span className="text-purple-300">Name:</span> <span className="text-white">{selectedRegistration.name}</span></div>
                      <div><span className="text-purple-300">Father's Name:</span> <span className="text-white">{selectedRegistration.fatherName}</span></div>
                      <div><span className="text-purple-300">DOB:</span> <span className="text-white">{selectedRegistration.dateOfBirth}</span></div>
                      <div><span className="text-purple-300">CNIC:</span> <span className="text-white">{selectedRegistration.cnic}</span></div>
                      <div><span className="text-purple-300">Gender:</span> <span className="text-white">{selectedRegistration.gender}</span></div>
                      <div><span className="text-purple-300">Nationality:</span> <span className="text-white">{selectedRegistration.nationality}</span></div>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div>
                    <h3 className="font-semibold text-purple-200 mb-2">Contact Information</h3>
                    <div className="text-sm space-y-2">
                      <div><span className="text-purple-300">Email:</span> <span className="text-white">{selectedRegistration.email}</span></div>
                      <div><span className="text-purple-300">Mobile:</span> <span className="text-white">{selectedRegistration.mobileNo}</span></div>
                      <div><span className="text-purple-300">Address:</span> <span className="text-white">{selectedRegistration.postalAddress}</span></div>
                    </div>
                  </div>

                  {/* Academic Info */}
                  <div>
                    <h3 className="font-semibold text-purple-200 mb-2">Academic Information</h3>
                    <div className="text-sm space-y-2">
                      <div><span className="text-purple-300">Subject:</span> <span className="text-white">{selectedRegistration.subject}</span></div>
                      <div><span className="text-purple-300">Specialization:</span> <span className="text-white">{selectedRegistration.specialization}</span></div>
                    </div>
                    
                    {selectedRegistration.academicDetails && selectedRegistration.academicDetails.length > 0 && (
                      <div className="mt-4">
                        <h4 className="text-purple-300 text-sm mb-2">Academic Qualifications:</h4>
                        {selectedRegistration.academicDetails.map((academic, index) => (
                          <div key={index} className="bg-white/5 p-3 rounded mb-2 text-xs">
                            <div className="grid grid-cols-2 gap-2">
                              <div><strong>Degree:</strong> {academic.degreeType}</div>
                              <div><strong>University:</strong> {academic.boardUniversity}</div>
                              <div><strong>Year:</strong> {academic.passingYear}</div>
                              <div><strong>Percentage:</strong> {academic.percentage}%</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Experience */}
                  <div>
                    <h3 className="font-semibold text-purple-200 mb-2">Experience & Knowledge</h3>
                    <div className="text-sm space-y-3">
                      <div>
                        <span className="text-purple-300 block">Programming Experience:</span>
                        <span className="text-white text-xs">{selectedRegistration.programmingExperience}</span>
                      </div>
                      <div>
                        <span className="text-purple-300">Quantum Knowledge:</span> 
                        <span className="text-white"> {selectedRegistration.quantumKnowledge}</span>
                      </div>
                      <div>
                        <span className="text-purple-300 block">Motivation:</span>
                        <span className="text-white text-xs">{selectedRegistration.motivation}</span>
                      </div>
                      {selectedRegistration.researchExperience && (
                        <div>
                          <span className="text-purple-300 block">Research Experience:</span>
                          <span className="text-white text-xs">{selectedRegistration.researchExperience}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center text-purple-300 py-12">
                <p>Select a registration from the list to view details</p>
              </div>
            )}
          </Card>
        </div>
      </div>
      </div>
    </ProtectedRoute>
  );
};

export default AdminDashboard;