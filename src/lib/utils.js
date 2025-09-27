// Utility functions for the hackathon website

export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long', 
    day: 'numeric'
  });
}

export function calculateDaysUntil(targetDate) {
  const today = new Date();
  const target = new Date(targetDate);
  const diffTime = target - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

export function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

export function generateEmailSubject(type = 'general') {
  const subjects = {
    general: 'Quantum Hackathon Pakistan - General Inquiry',
    registration: 'Quantum Hackathon Pakistan - Registration Question',
    partnership: 'Quantum Hackathon Pakistan - Partnership Opportunity'
  };
  return subjects[type] || subjects.general;
}