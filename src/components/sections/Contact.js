'use client';

import { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import Card from '@/components/ui/Card';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Store contact message in Firestore
      await addDoc(collection(db, 'contactMessages'), {
        ...formData,
        submittedAt: serverTimestamp(),
        status: 'unread'
      });
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(''), 5000);
    }
  };
  return (
    <section id="contact" className="py-8 sm:py-12 bg-gradient-to-r from-indigo-900 via-purple-900 to-purple-800 relative overflow-hidden">
      {/* Simple background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/5 text-2xl text-white animate-pulse">@</div>
        <div className="absolute top-1/3 right-1/4 text-xl text-white animate-bounce">�</div>
        <div className="absolute bottom-1/4 left-1/3 text-2xl text-white animate-pulse">🤝</div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
            Have Questions?
          </h2>
          <p className="text-sm sm:text-base text-purple-200 max-w-2xl mx-auto mb-6 leading-relaxed">
            Get in touch with our team for any questions about the hackathon, registration, or participation.
          </p>
        </div>

        {/* Contact Form */}
        <Card variant="glass" className="p-6 sm:p-8 bg-white/10 backdrop-blur-md border-white/20">
          <h3 className="text-base sm:text-lg font-bold text-white mb-4 sm:mb-6 text-center">
            Ask a Question
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {submitStatus === 'success' && (
              <div className="bg-green-500/20 border border-green-400/50 rounded-lg p-4 text-center">
                <p className="text-green-300 font-medium">✅ Message sent successfully! We'll get back to you soon.</p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="bg-red-500/20 border border-red-400/50 rounded-lg p-4 text-center">
                <p className="text-red-300 font-medium">❌ Error sending message. Please try again or contact us directly.</p>
              </div>
            )}
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-purple-200 text-sm font-medium mb-2">Name</label>
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent text-sm"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-purple-200 text-sm font-medium mb-2">Email</label>
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent text-sm"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-purple-200 text-sm font-medium mb-2">Subject</label>
              <select 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent text-sm"
              >
                <option value="" className="bg-gray-800 text-white">Select a topic</option>
                <option value="event" className="bg-gray-800 text-white">Event Information</option>
                <option value="participant" className="bg-gray-800 text-white">Participant Questions</option>
                <option value="technical" className="bg-gray-800 text-white">Technical Questions</option>
                <option value="partnership" className="bg-gray-800 text-white">Partnership Opportunities</option>
                <option value="general" className="bg-gray-800 text-white">General Inquiry</option>
              </select>
            </div>
            
            <div>
              <label className="block text-purple-200 text-sm font-medium mb-2">Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent text-sm resize-none"
                placeholder="Type your question here..."
              ></textarea>
            </div>
            
            <div className="text-center">
              <button 
                type="submit"
                disabled={isSubmitting}
                className={`${
                  isSubmitting 
                    ? 'bg-gray-500 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700'
                } text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg text-sm sm:text-base`}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
            </div>
          </form>
          
          <div className="mt-6 sm:mt-8 pt-6 border-t border-white/20 text-center">
            <p className="text-purple-300 text-xs mb-2">
              Messages will be sent to the organizing committee at: <strong>info@quantumhackathon.pk</strong>
            </p>
            <p className="text-purple-300 text-xs">
              We typically respond within 24-48 hours. For urgent matters, please contact our organizing committee directly.
            </p>
          </div>
        </Card>

      </div>
    </section>
  );
};

export default Contact;