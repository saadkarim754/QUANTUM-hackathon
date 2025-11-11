import jsPDF from 'jspdf';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

/**
 * Fetches all data from Firebase and exports to PDF
 * This function reads data WITHOUT modifying or deleting anything
 */
export const exportAllDataToPDF = async () => {
  try {
    // Fetch all registrations from Firestore
    const registrationsSnapshot = await getDocs(collection(db, 'registrations'));
    const registrations = [];
    
    registrationsSnapshot.forEach((doc) => {
      registrations.push({
        id: doc.id,
        ...doc.data()
      });
    });

    // Create PDF
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 10;
    const contentWidth = pageWidth - 2 * margin;
    let currentY = margin;

    // Helper function to add text with word wrapping
    const addWrappedText = (text, fontSize = 10, bold = false) => {
      pdf.setFontSize(fontSize);
      if (bold) pdf.setFont(undefined, 'bold');
      else pdf.setFont(undefined, 'normal');

      const lines = pdf.splitTextToSize(text, contentWidth);
      const lineHeight = fontSize * 0.3528; // rough conversion to mm

      if (currentY + lineHeight * lines.length > pageHeight - margin) {
        pdf.addPage();
        currentY = margin;
      }

      pdf.text(lines, margin, currentY);
      currentY += lineHeight * lines.length + 2;
      return currentY;
    };

    // Helper function to check if new page needed
    const checkPageBreak = (spaceNeeded = 20) => {
      if (currentY + spaceNeeded > pageHeight - margin) {
        pdf.addPage();
        currentY = margin;
      }
    };

    // Title
    pdf.setFontSize(16);
    pdf.setFont(undefined, 'bold');
    pdf.text('QUANTUM Hackathon - Registrations Export', margin, currentY);
    currentY += 15;

    // Export metadata
    pdf.setFontSize(10);
    pdf.setFont(undefined, 'normal');
    pdf.text(`Export Date: ${new Date().toLocaleString()}`, margin, currentY);
    currentY += 8;
    pdf.text(`Total Records: ${registrations.length}`, margin, currentY);
    currentY += 12;

    // Summary statistics
    const approved = registrations.filter(r => r.status === 'approved').length;
    const rejected = registrations.filter(r => r.status === 'rejected').length;
    const pending = registrations.filter(r => r.status === 'pending').length;

    pdf.setFont(undefined, 'bold');
    pdf.text('Summary Statistics:', margin, currentY);
    currentY += 6;
    pdf.setFont(undefined, 'normal');
    pdf.text(`  • Total Applications: ${registrations.length}`, margin, currentY);
    currentY += 5;
    pdf.text(`  • Approved: ${approved}`, margin, currentY);
    currentY += 5;
    pdf.text(`  • Rejected: ${rejected}`, margin, currentY);
    currentY += 5;
    pdf.text(`  • Pending: ${pending}`, margin, currentY);
    currentY += 12;

    // Individual registrations
    pdf.setFont(undefined, 'bold');
    pdf.text('Individual Registrations:', margin, currentY);
    currentY += 8;

    registrations.forEach((registration, index) => {
      checkPageBreak(30);

      // Registration header
      pdf.setFontSize(11);
      pdf.setFont(undefined, 'bold');
      pdf.text(`#${index + 1}: ${registration.name}`, margin, currentY);
      currentY += 6;

      // Registration details
      pdf.setFontSize(9);
      pdf.setFont(undefined, 'normal');

      const details = [
        `Email: ${registration.email || 'N/A'}`,
        `Mobile: ${registration.mobileNo || 'N/A'}`,
        `Gender: ${registration.gender || 'N/A'}`,
        `Subject: ${registration.subject || 'N/A'}`,
        `Status: ${registration.status || 'Pending'}`,
        `Father's Name: ${registration.fatherName || 'N/A'}`,
        `DOB: ${registration.dateOfBirth || 'N/A'}`,
        `CNIC: ${registration.cnic || 'N/A'}`,
        `Nationality: ${registration.nationality || 'N/A'}`,
        `Address: ${registration.postalAddress || 'N/A'}`,
        `Specialization: ${registration.specialization || 'N/A'}`
      ];

      details.forEach(detail => {
        if (currentY > pageHeight - margin - 5) {
          pdf.addPage();
          currentY = margin;
        }
        pdf.text(detail, margin + 2, currentY);
        currentY += 4;
      });

      // Academic details
      if (registration.academicDetails && registration.academicDetails.length > 0) {
        if (currentY > pageHeight - margin - 10) {
          pdf.addPage();
          currentY = margin;
        }

        pdf.setFont(undefined, 'bold');
        pdf.text('Academic Qualifications:', margin + 2, currentY);
        currentY += 4;
        pdf.setFont(undefined, 'normal');

        registration.academicDetails.forEach((academic) => {
          if (currentY > pageHeight - margin - 5) {
            pdf.addPage();
            currentY = margin;
          }

          const academicInfo = [
            `  Degree: ${academic.degreeType || 'N/A'}`,
            `  University: ${academic.boardUniversity || 'N/A'}`,
            `  Passing Year: ${academic.passingYear || 'N/A'}`,
            `  Percentage: ${academic.percentage || 'N/A'}%`
          ];

          academicInfo.forEach(info => {
            if (currentY > pageHeight - margin - 5) {
              pdf.addPage();
              currentY = margin;
            }
            pdf.text(info, margin + 4, currentY);
            currentY += 4;
          });
        });
      }

      // Experience
      if (registration.programmingExperience) {
        if (currentY > pageHeight - margin - 10) {
          pdf.addPage();
          currentY = margin;
        }

        pdf.setFont(undefined, 'bold');
        pdf.text('Programming Experience:', margin + 2, currentY);
        currentY += 4;
        pdf.setFont(undefined, 'normal');

        const expLines = pdf.splitTextToSize(
          registration.programmingExperience,
          contentWidth - 4
        );
        expLines.forEach(line => {
          if (currentY > pageHeight - margin - 5) {
            pdf.addPage();
            currentY = margin;
          }
          pdf.text(line, margin + 4, currentY);
          currentY += 4;
        });
      }

      // Research Experience
      if (registration.researchExperience) {
        if (currentY > pageHeight - margin - 10) {
          pdf.addPage();
          currentY = margin;
        }

        pdf.setFont(undefined, 'bold');
        pdf.text('Research Experience:', margin + 2, currentY);
        currentY += 4;
        pdf.setFont(undefined, 'normal');

        const researchLines = pdf.splitTextToSize(
          registration.researchExperience,
          contentWidth - 4
        );
        researchLines.forEach(line => {
          if (currentY > pageHeight - margin - 5) {
            pdf.addPage();
            currentY = margin;
          }
          pdf.text(line, margin + 4, currentY);
          currentY += 4;
        });
      }

      // Quantum Knowledge
      if (registration.quantumKnowledge) {
        if (currentY > pageHeight - margin - 5) {
          pdf.addPage();
          currentY = margin;
        }
        pdf.setFont(undefined, 'bold');
        pdf.text(`Quantum Knowledge: ${registration.quantumKnowledge}`, margin + 2, currentY);
        currentY += 4;
      }

      // Motivation
      if (registration.motivation) {
        if (currentY > pageHeight - margin - 10) {
          pdf.addPage();
          currentY = margin;
        }

        pdf.setFont(undefined, 'bold');
        pdf.text('Motivation:', margin + 2, currentY);
        currentY += 4;
        pdf.setFont(undefined, 'normal');

        const motLines = pdf.splitTextToSize(
          registration.motivation,
          contentWidth - 4
        );
        motLines.forEach(line => {
          if (currentY > pageHeight - margin - 5) {
            pdf.addPage();
            currentY = margin;
          }
          pdf.text(line, margin + 4, currentY);
          currentY += 4;
        });
      }

      // Submitted date
      if (registration.submittedAt) {
        if (currentY > pageHeight - margin - 5) {
          pdf.addPage();
          currentY = margin;
        }
        pdf.setFont(undefined, 'normal');
        pdf.setTextColor(128);
        const submitDate = new Date(registration.submittedAt.seconds * 1000).toLocaleString();
        pdf.text(`Submitted: ${submitDate}`, margin + 2, currentY);
        pdf.setTextColor(0);
        currentY += 6;
      }

      // Add page break after each profile (except the last one)
      if (index < registrations.length - 1) {
        pdf.addPage();
        currentY = margin;
      } else {
        currentY += 2;
      }
    });

    // Footer
    const pageCount = pdf.internal.pages.length - 1;
    for (let i = 1; i <= pageCount; i++) {
      pdf.setPage(i);
      pdf.setFontSize(8);
      pdf.setTextColor(150);
      pdf.text(
        `Page ${i} of ${pageCount}`,
        pageWidth / 2,
        pageHeight - 5,
        { align: 'center' }
      );
    }

    // Save PDF
    const fileName = `quantum_hackathon_registrations_${new Date().toISOString().split('T')[0]}.pdf`;
    pdf.save(fileName);

    return { success: true, message: 'PDF exported successfully' };
  } catch (error) {
    console.error('Error exporting to PDF:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Export only approved registrations to PDF
 */
export const exportApprovedDataToPDF = async () => {
  try {
    const registrationsSnapshot = await getDocs(collection(db, 'registrations'));
    const registrations = [];
    
    registrationsSnapshot.forEach((doc) => {
      const data = doc.data();
      if (data.status === 'approved') {
        registrations.push({
          id: doc.id,
          ...data
        });
      }
    });

    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 10;
    const contentWidth = pageWidth - 2 * margin;
    let currentY = margin;

    // Title
    pdf.setFontSize(16);
    pdf.setFont(undefined, 'bold');
    pdf.text('QUANTUM Hackathon - Approved Registrations', margin, currentY);
    currentY += 15;

    // Export metadata
    pdf.setFontSize(10);
    pdf.setFont(undefined, 'normal');
    pdf.text(`Export Date: ${new Date().toLocaleString()}`, margin, currentY);
    currentY += 8;
    pdf.text(`Total Approved Records: ${registrations.length}`, margin, currentY);
    currentY += 12;

    // Approved registrations list
    registrations.forEach((registration, index) => {
      if (currentY > pageHeight - margin - 15) {
        pdf.addPage();
        currentY = margin;
      }

      pdf.setFontSize(11);
      pdf.setFont(undefined, 'bold');
      pdf.text(`#${index + 1}: ${registration.name}`, margin, currentY);
      currentY += 6;

      pdf.setFontSize(9);
      pdf.setFont(undefined, 'normal');
      const details = [
        `Email: ${registration.email || 'N/A'}`,
        `Mobile: ${registration.mobileNo || 'N/A'}`,
        `Subject: ${registration.subject || 'N/A'}`,
        `University: ${registration.academicDetails?.[0]?.boardUniversity || 'N/A'}`
      ];

      details.forEach(detail => {
        if (currentY > pageHeight - margin - 5) {
          pdf.addPage();
          currentY = margin;
        }
        pdf.text(detail, margin + 2, currentY);
        currentY += 4;
      });

      currentY += 3;
    });

    const fileName = `quantum_hackathon_approved_${new Date().toISOString().split('T')[0]}.pdf`;
    pdf.save(fileName);

    return { success: true, message: 'Approved registrations exported successfully' };
  } catch (error) {
    console.error('Error exporting approved data:', error);
    return { success: false, error: error.message };
  }
};
