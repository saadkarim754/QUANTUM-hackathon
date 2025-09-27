import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { CONTACT_INFO } from '@/lib/constants';

const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-gradient-to-r from-indigo-900 via-purple-900 to-purple-800 relative overflow-hidden">
      {/* Quantum circuit background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Communication waves */}
          <path d="M100,300 Q200,200 300,300 T500,300" stroke="white" strokeWidth="2" fill="none" opacity="0.6"/>
          <path d="M150,250 Q250,150 350,250 T550,250" stroke="white" strokeWidth="1" fill="none" opacity="0.4"/>
          <path d="M150,350 Q250,450 350,350 T550,350" stroke="white" strokeWidth="1" fill="none" opacity="0.4"/>
          <path d="M200,300 Q300,200 400,300 T600,300" stroke="white" strokeWidth="1.5" fill="none" opacity="0.5"/>
        </svg>
      </div>

      {/* Floating contact icons */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/5 text-2xl text-white animate-pulse">📧</div>
        <div className="absolute top-1/3 right-1/4 text-xl text-white animate-bounce">📱</div>
        <div className="absolute bottom-1/4 left-1/3 text-2xl text-white animate-pulse">🤝</div>
        <div className="absolute top-2/3 right-1/5 text-xl text-white animate-ping">💬</div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Get Involved
          </h2>
          <p className="text-xl text-purple-200 max-w-4xl mx-auto mb-8 leading-relaxed">
            Ready to be part of Pakistan's quantum revolution? Have questions about the hackathon 
            or interested in partnerships? We'd love to hear from you.
          </p>
        </div>

        {/* Main Contact Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Primary Contact */}
          <Card variant="glass" className="p-8 bg-white/10 backdrop-blur-md border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Primary Contact
            </h3>
            
            <div className="flex flex-col items-center">
              {/* Contact Photo Placeholder */}
              <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mb-6">
                <span className="text-white font-bold text-2xl">MI</span>
              </div>
              
              <h4 className="text-xl font-bold text-white mb-2">
                {CONTACT_INFO.projectManager.name}
              </h4>
              <p className="text-purple-200 mb-4 text-center">
                {CONTACT_INFO.projectManager.title}
              </p>
              
              <div className="bg-indigo-500/20 border border-indigo-400/30 rounded-lg px-4 py-3 w-full">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-xl">📧</span>
                  <span className="text-indigo-200 font-medium">
                    Email for Inquiries & Partnerships
                  </span>
                </div>
              </div>
            </div>
          </Card>

          {/* Registration Status */}
          <Card variant="glass" className="p-8 bg-white/10 backdrop-blur-md border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Registration Status
            </h3>
            
            <div className="space-y-6">
              <div className="text-center">
                <div className="bg-yellow-500/20 border-2 border-yellow-400/50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl animate-pulse">⏳</span>
                </div>
                <h4 className="text-lg font-bold text-yellow-300 mb-2">
                  Coming Soon
                </h4>
                <p className="text-purple-200 text-sm">
                  Registration portal and detailed challenges will be announced soon
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-purple-200">Registration Opens</span>
                  <span className="text-white font-medium">January 2026</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-purple-200">Application Deadline</span>
                  <span className="text-white font-medium">January 15, 2026</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-purple-200">Hackathon Event</span>
                  <span className="text-white font-medium">February 6-8, 2026</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card variant="glass" className="p-6 bg-white/10 backdrop-blur-md border-white/20 text-center hover:bg-white/15 transition-all duration-300">
            <div className="text-4xl mb-4">❓</div>
            <h4 className="text-lg font-bold text-white mb-3">General Inquiries</h4>
            <p className="text-purple-200 text-sm mb-4 leading-relaxed">
              Questions about the hackathon format, eligibility, or competition details
            </p>
            <Button variant="outline" size="sm" className="text-purple-200 border-purple-300 hover:bg-purple-100/10">
              Ask Questions
            </Button>
          </Card>

          <Card variant="glass" className="p-6 bg-white/10 backdrop-blur-md border-white/20 text-center hover:bg-white/15 transition-all duration-300">
            <div className="text-4xl mb-4">🤝</div>
            <h4 className="text-lg font-bold text-white mb-3">Partnership Opportunities</h4>
            <p className="text-purple-200 text-sm mb-4 leading-relaxed">
              Interested in sponsoring or collaborating with Pakistan's quantum hackathon
            </p>
            <Button variant="outline" size="sm" className="text-purple-200 border-purple-300 hover:bg-purple-100/10">
              Partner With Us
            </Button>
          </Card>

          <Card variant="glass" className="p-6 bg-white/10 backdrop-blur-md border-white/20 text-center hover:bg-white/15 transition-all duration-300">
            <div className="text-4xl mb-4">📰</div>
            <h4 className="text-lg font-bold text-white mb-3">Media & Press</h4>
            <p className="text-purple-200 text-sm mb-4 leading-relaxed">
              Press inquiries, interviews, and media coverage opportunities
            </p>
            <Button variant="outline" size="sm" className="text-purple-200 border-purple-300 hover:bg-purple-100/10">
              Media Contact
            </Button>
          </Card>
        </div>

        {/* Newsletter Signup */}
        <div className="mb-16">
          <Card variant="glass" className="max-w-4xl mx-auto p-8 bg-white/10 backdrop-blur-md border-white/20 text-center">
            <div className="text-4xl mb-4">📬</div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated
            </h3>
            <p className="text-purple-200 mb-6">
              Be the first to know when registration opens and receive updates 
              about Pakistan's quantum computing hackathon.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
              />
              <Button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700">
                Notify Me
              </Button>
            </div>
            
            <p className="text-purple-300 text-xs mt-3">
              We'll only send you important updates about the hackathon. No spam, ever.
            </p>
          </Card>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <Card variant="glass" className="max-w-3xl mx-auto p-8 bg-white/10 backdrop-blur-md border-white/20">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Make History?
            </h3>
            <p className="text-purple-200 mb-6 leading-relaxed">
              Join us in launching Pakistan's quantum computing future. Whether you're a student, 
              researcher, organization, or just curious about quantum technologies, there's a place 
              for you in this groundbreaking initiative.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700">
                🎓 Student Registration
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4 text-purple-200 border-purple-300 hover:bg-purple-100/10">
                🤝 Partnership Inquiry
              </Button>
            </div>
          </Card>
        </div>

      </div>
    </section>
  );
};

export default Contact;