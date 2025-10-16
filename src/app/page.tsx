import React from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, Linkedin, User, Briefcase, GraduationCap, Award, Star, Menu, X } from "lucide-react";

// Mobile Navigation Component
function MobileNavigation() {
  const [isOpen, setIsOpen] = React.useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-600 to-purple-700 shadow-lg">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="text-white font-bold text-lg">Khalid Masood Khan</div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black/50" onClick={() => setIsOpen(false)}>
          <div className="absolute right-0 top-0 h-full w-80 bg-gradient-to-b from-blue-600 to-purple-700 shadow-xl">
            <div className="p-6 pt-20">
              <nav className="space-y-4">
                <button
                  onClick={() => scrollToSection('summary')}
                  className="w-full text-left text-white hover:bg-white/10 p-3 rounded-lg transition-colors flex items-center gap-3"
                >
                  <User className="w-5 h-5" />
                  Professional Summary
                </button>
                <button
                  onClick={() => scrollToSection('experience')}
                  className="w-full text-left text-white hover:bg-white/10 p-3 rounded-lg transition-colors flex items-center gap-3"
                >
                  <Briefcase className="w-5 h-5" />
                  Experience
                </button>
                <button
                  onClick={() => scrollToSection('education')}
                  className="w-full text-left text-white hover:bg-white/10 p-3 rounded-lg transition-colors flex items-center gap-3"
                >
                  <GraduationCap className="w-5 h-5" />
                  Education
                </button>
                <button
                  onClick={() => scrollToSection('certifications')}
                  className="w-full text-left text-white hover:bg-white/10 p-3 rounded-lg transition-colors flex items-center gap-3"
                >
                  <Award className="w-5 h-5" />
                  Certifications
                </button>
                <button
                  onClick={() => scrollToSection('skills')}
                  className="w-full text-left text-white hover:bg-white/10 p-3 rounded-lg transition-colors flex items-center gap-3"
                >
                  <Star className="w-5 h-5" />
                  Key Skills
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full text-left text-white hover:bg-white/10 p-3 rounded-lg transition-colors flex items-center gap-3"
                >
                  <Mail className="w-5 h-5" />
                  Contact
                </button>
              </nav>
              
              {/* Contact Info in Mobile Menu */}
              <div className="mt-8 pt-6 border-t border-white/20">
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2 text-white/80">
                    <Mail className="w-4 h-4" />
                    <span>khalid_masood79@hotmail.com</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80">
                    <Phone className="w-4 h-4" />
                    <span>+92 300 8454448</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80">
                    <Phone className="w-4 h-4" />
                    <span>+92 345 4021637</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80">
                    <MapPin className="w-4 h-4" />
                    <span>Lahore, Pakistan</span>
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="mt-6">
                  <a
                    href="https://www.linkedin.com/in/KhalidKhanManager"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-sm"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Mobile Navigation */}
      <MobileNavigation />
      
      {/* Top Banner Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-8 px-4 sm:px-6 lg:px-8 pt-20 lg:pt-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Left Side - Name and Position */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                KHALID MASOOD KHAN
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-100 font-medium mb-4">
                Senior Manager – Operational Excellence
              </p>
              <div className="flex flex-col sm:flex-row gap-4 text-sm sm:text-base">
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <Mail className="w-4 h-4" />
                  <span>khalid_masood79@hotmail.com</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+92 300 8454448 | +92 345 4021637</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Lahore, Pakistan</span>
                </div>
              </div>
            </div>
            
            {/* Right Side - Profile Image */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl">
        <Image
                  src="/Khalid Masood Khan.jpg"
                  alt="Khalid Masood Khan"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
          priority
        />
              </div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center lg:justify-start">
            <a
              href="https://www.linkedin.com/in/KhalidKhanManager"
            target="_blank"
            rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn Profile
          </a>
          <a
              href="mailto:khalid_masood79@hotmail.com"
              className="inline-flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Professional Summary */}
        <section id="summary" className="mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <User className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
              Professional Summary
            </h2>
            <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
              Strategic HR and Operations Leader with over 22 years of progressive experience driving Organizational Excellence, Human Resource Transformation, and Corporate Governance across diversified industries. Adept at developing and implementing people-centric strategies that enhance productivity, engagement, and business performance. Having expertise in Artificial Intelligence (AI) and its practical implementation across multiple HR functions, including talent acquisition, performance management, learning & development, and employee engagement, to enhance efficiency, decision-making, and organizational capability. Recognized for leading cross-functional teams, aligning human capital strategies with corporate goals, and fostering cultures of innovation and continuous improvement through data-driven and technology-enabled HR practices.
            </p>
          </div>
        </section>

        {/* Professional Experience */}
        <section id="experience" className="mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
              Professional Experience
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-400 pl-4 sm:pl-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                  Senior Manager – Operational Excellence | Master Group of Industries
                </h3>
                <p className="text-blue-200 text-sm sm:text-base mb-3">Aug 2016 – Present</p>
                <ul className="text-gray-200 text-sm sm:text-base space-y-2 list-disc list-inside">
                  <li>Lead organizational excellence initiatives and continuous improvement programs across the group.</li>
                  <li>Designed and implemented HR process improvements resulting in reduced recruitment turnaround time and enhanced employee experience.</li>
                  <li>Introduced AI-assisted tools in HR operations to automate performance appraisals and streamline hiring workflows.</li>
                  <li>Partnered with senior leadership to develop and implement strategic manpower planning aligned with business goals.</li>
                  <li>Led change management initiatives fostering innovation, efficiency, and engagement.</li>
                  <li>Collaborated with HR teams on training needs assessment and leadership development programs.</li>
                  <li>Facilitated corporate governance and board meetings, ensuring compliance and operational transparency.</li>
                  <li>Provided executive advisory services to Managing Director and Chairman on HR and operational matters.</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-400 pl-4 sm:pl-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                  Corporate & Business Support Executive | Panasian Group of Companies
                </h3>
                <p className="text-green-200 text-sm sm:text-base mb-3">Jan 2013 – Aug 2016</p>
                <ul className="text-gray-200 text-sm sm:text-base space-y-2 list-disc list-inside">
                  <li>Coordinated administrative and corporate functions across departments to improve operational synergy.</li>
                  <li>Implemented business process standardization using KPI and SLA-driven insights.</li>
                  <li>Delivered training programs to enhance workforce efficiency and professional skills.</li>
                  <li>Supported compliance, internal communication, and cross-functional project alignment.</li>
                  <li>Arranged and managed high-level corporate meetings and leadership team interactions.</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-400 pl-4 sm:pl-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                  Secretary to Director Professional Development | The City School System
                </h3>
                <p className="text-purple-200 text-sm sm:text-base mb-3">Feb 2012 – Jan 2013</p>
                <ul className="text-gray-200 text-sm sm:text-base space-y-2 list-disc list-inside">
                  <li>Supported director-level HR and training operations with focus on organizational capability enhancement.</li>
                </ul>
              </div>

              <div className="border-l-4 border-orange-400 pl-4 sm:pl-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                  Customer Services & Sales Officer | Telenor Pakistan (Pvt.) Ltd
                </h3>
                <p className="text-orange-200 text-sm sm:text-base mb-3">Jan 2007 – Mar 2011</p>
                <ul className="text-gray-200 text-sm sm:text-base space-y-2 list-disc list-inside">
                  <li>Delivered customer engagement excellence and developed communication and negotiation skills foundational to HR practice.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
              Education
            </h2>
            <div className="grid gap-4 sm:gap-6">
              <div className="bg-white/5 rounded-lg p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                  Master of Business Administration (HRM Specialization)
                </h3>
                <p className="text-blue-200 text-sm sm:text-base">University of Sargodha, 2015</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                  Bachelor of Commerce (Humanitarian Group)
                </h3>
                <p className="text-blue-200 text-sm sm:text-base">University of the Punjab, 2000</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                  Multiple Diplomas & Certificates in Computer Sciences
                </h3>
                <p className="text-blue-200 text-sm sm:text-base">Modern College of Computer Sciences, Lahore (2000–2002)</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                  Higher Secondary School Certificate (Pre-Medical)
                </h3>
                <p className="text-blue-200 text-sm sm:text-base">Federal Board of Intermediate & Secondary Education, 1998</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                  Secondary School Certificate (Science)
                </h3>
                <p className="text-blue-200 text-sm sm:text-base">Federal Board of Intermediate & Secondary Education, 1996</p>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Development & Certifications */}
        <section id="certifications" className="mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Award className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
              Professional Development & Certifications
            </h2>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg p-4 sm:p-6 border border-blue-400/30">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                  AI for Professionals – LUMS, 2025
                </h3>
                <p className="text-gray-200 text-sm sm:text-base">
                  Expertise in applying Generative AI for HR automation, analytics, and decision support.
                </p>
              </div>
              <div className="bg-white/5 rounded-lg p-4 sm:p-6">
                <p className="text-gray-200 text-sm sm:text-base">
                  Training in Corporate Governance, Leadership Development, and Operational Transformation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Skills */}
        <section id="skills" className="mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Star className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
              Key Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Strategic HR Leadership",
                "AI-Powered HR Analytics",
                "Employee Engagement & Culture Building",
                "Learning & Development (L&D)",
                "Performance Management",
                "Change Management & Organizational Transformation",
                "Process Re-engineering & Operational Excellence",
                "Executive Advisory & Stakeholder Management"
              ].map((skill, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-4 text-center">
                  <span className="text-white text-sm sm:text-base font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-6 sm:p-8 text-white text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Connect?</h2>
            <p className="text-blue-100 mb-6 text-sm sm:text-base">
              Let&apos;s discuss how I can contribute to your organization&apos;s success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:khalid_masood79@hotmail.com"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                <Mail className="w-5 h-5" />
                Email Me
        </a>
        <a
                href="tel:+923008454448"
                className="inline-flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call Me
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
