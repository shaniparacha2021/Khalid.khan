"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, Linkedin, User, Briefcase, GraduationCap, Award, Star, Menu, X, Globe, Languages, Target, Users, TrendingUp, CheckCircle } from "lucide-react";

// Mobile Navigation Component
function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

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
      <div className="xl:hidden fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-600 to-purple-700 shadow-lg">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="text-white font-bold text-lg">Khalid Masood Khan</div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-3 hover:bg-white/20 rounded-lg transition-all duration-200 border border-white/20 hover:border-white/40 hover:scale-105"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="xl:hidden fixed inset-0 z-40 bg-black/50" onClick={() => setIsOpen(false)}>
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
                  Key Expertise
                </button>
                <button
                  onClick={() => scrollToSection('languages')}
                  className="w-full text-left text-white hover:bg-white/10 p-3 rounded-lg transition-colors flex items-center gap-3"
                >
                  <Languages className="w-5 h-5" />
                  Languages
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
                    <span>+92 300 8454448 (Mobile)</span>
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
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-8 px-4 sm:px-6 lg:px-8 pt-20 xl:pt-8">
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
                  <span>+92 300 8454448 (Mobile)</span>
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
                  src="/khalid-masood-khan.png"
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
              Highly experienced and service-oriented management professional with 22 years progressive work exposure in Operational Excellence & Compliance, Human Resource Management, Project Monitoring & Follow ups, Corporate Governance, Executive Office Management, Business Support & Coordination, General Administration, Local and International Correspondence, End to end Travel & Logistic Support, Customer Services.
            </p>
            <p className="text-gray-200 text-sm sm:text-base leading-relaxed mt-4">
              Exposed in diversified industries and also possess ability to perform well under work pressure, coordinate with multicultural personnel including various clients, meet tight deadlines, deal tactfully with various concerned agencies and surpass performance parameters. Self-motivated and result oriented with excellent communication, leadership, problem solving, decision making, time management and interpersonal skills.
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <Target className="w-4 h-4 text-blue-400" />
                  Professional Highlights
                </h4>
                <ul className="text-gray-200 text-sm space-y-1">
                  <li>• Introduced modern HR practices and AI tools to streamline hiring and performance evaluation</li>
                  <li>• Led organizational improvement projects that enhanced efficiency and employee experience</li>
                  <li>• Partnered with leadership to strengthen corporate governance and strategic workforce planning</li>
                  <li>• Committed to developing people, building strong teams, and fostering long-term organizational growth</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  Core Competencies
                </h4>
                <ul className="text-gray-200 text-sm space-y-1">
                  <li>• Strategic Planning & Execution</li>
                  <li>• Client/Vendor Management</li>
                  <li>• Leadership & Team Development</li>
                  <li>• AI-Driven HR Transformation</li>
                  <li>• Operational Excellence</li>
                  <li>• Corporate Governance</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Experience */}
        <section id="experience" className="mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
              Professional Experience
            </h2>
            <div className="space-y-8">
              <div className="border-l-4 border-blue-400 pl-4 sm:pl-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                  Senior Manager – Operational Excellence | Master Group of Industries
                </h3>
                <p className="text-blue-200 text-sm sm:text-base mb-3">August 2016 – Present (9 years 3 months) | Lahore, Punjab, Pakistan</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-white font-semibold mb-2 text-sm">HR Operations & Management</h4>
                    <ul className="text-gray-200 text-sm space-y-1 list-disc list-inside">
                      <li>Oversaw end-to-end recruitment processes, from manpower planning and job design to onboarding and orientation</li>
                      <li>Implemented competency-based appraisal systems, linking individual performance metrics with organizational objectives</li>
                      <li>Formulated and updated HR policies in alignment with labor laws, company standards, and corporate governance principles</li>
                      <li>Introduced AI-assisted tools in HR operations to automate performance appraisals and streamline hiring workflows</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2 text-sm">Strategic Leadership & Governance</h4>
                    <ul className="text-gray-200 text-sm space-y-1 list-disc list-inside">
                      <li>Lead organizational excellence initiatives and continuous improvement programs across multiple business units</li>
                      <li>Developed strategic workforce planning frameworks aligned with corporate goals</li>
                      <li>Advised executive leadership on HR transformation, governance, and operational strategies</li>
                      <li>Facilitated corporate governance and board meetings, ensuring compliance and operational transparency</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="text-white font-semibold mb-2 text-sm">Operational Excellence & Project Management</h4>
                  <ul className="text-gray-200 text-sm space-y-1 list-disc list-inside">
                    <li>Developing and implementing new processes and procedures to improve operational efficiency</li>
                    <li>Establish and maintain a company-wide culture of continuous improvement and Operations Excellence</li>
                    <li>Leading projects aimed at improving operational efficiency and reducing costs</li>
                    <li>Conduct regular project reviews to assure accomplishment of key results</li>
                    <li>Provide leadership and direction to project teams for step changes and breakthrough levels of improvement</li>
                  </ul>
                </div>
              </div>

              <div className="border-l-4 border-green-400 pl-4 sm:pl-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                  Corporate & Business Support Executive | Panasian Group of Companies
                </h3>
                <p className="text-green-200 text-sm sm:text-base mb-3">January 2013 – August 2016 (3 years 8 months) | Lahore</p>
                <ul className="text-gray-200 text-sm space-y-1 list-disc list-inside">
                  <li>Complete Management of CEO's Office independently</li>
                  <li>Complete Travel and Logistic Support at Group Level</li>
                  <li>Visa Processing, Hotel Reservations at Group Level</li>
                  <li>Scheduling and arranging important meetings and conferences whenever required</li>
                  <li>Communicating with clients by attaining telephone calls and fax messages</li>
                  <li>Planning and organizing meetings with the clients and attaining overseas conference calls</li>
                  <li>Responding to the client and customer inquiries on a timely basis and providing word processing and secretarial support wherever necessary</li>
                  <li>Undertaking research, gathering information, as well as sorting and categorizing it accordingly</li>
                  <li>Coordination & Support for Human Resource Department</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-400 pl-4 sm:pl-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                  Secretary to Director Professional Development | The City School System
                </h3>
                <p className="text-purple-200 text-sm sm:text-base mb-3">February 2012 – January 2013 (1 year) | Lahore, Punjab, Pakistan</p>
                <ul className="text-gray-200 text-sm space-y-1 list-disc list-inside">
                  <li>Supported director-level HR and training operations to enhance organizational capability</li>
                  <li>Assisted in designing and coordinating professional development programs for staff</li>
                  <li>Maintained effective communication and documentation for HR and training initiatives</li>
                </ul>
              </div>

              <div className="border-l-4 border-orange-400 pl-4 sm:pl-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                  Customer Services & Sales Officer | Telenor Pakistan (Pvt.) Ltd
                </h3>
                <p className="text-orange-200 text-sm sm:text-base mb-3">January 2007 – March 2011 (4 years 3 months) | Lahore, Punjab, Pakistan</p>
                <ul className="text-gray-200 text-sm space-y-1 list-disc list-inside">
                  <li>Delivered exceptional customer service and ensured positive client experiences across all touchpoints</li>
                  <li>Handled inquiries, resolved issues efficiently, and maintained high customer satisfaction levels</li>
                  <li>Developed strong communication and negotiation skills, laying a foundation for future HR expertise</li>
                </ul>
              </div>

              <div className="border-l-4 border-yellow-400 pl-4 sm:pl-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                  Assistant Supervisor / Office Manager | Descon Engineering Limited
                </h3>
                <p className="text-yellow-200 text-sm sm:text-base mb-3">January 2005 – July 2006 (1 year 7 months)</p>
                <ul className="text-gray-200 text-sm space-y-1 list-disc list-inside">
                  <li>Provided assistance to the General Manager in official and operational matters</li>
                  <li>Made meeting schedules, agendas, and coordinated follow-ups for timely execution</li>
                  <li>Managed complete travel arrangements including bookings, logistics, and itineraries</li>
                  <li>Handled HR activities including scrutiny of documents, conducting interviews, drafting agreements, and annual appraisals</li>
                  <li>Prepared and delivered presentations for management and client meetings</li>
                </ul>
              </div>

              <div className="border-l-4 border-indigo-400 pl-4 sm:pl-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                  Computer Operator / Clerk | Defence Housing Authority (DHA)
                </h3>
                <p className="text-indigo-200 text-sm sm:text-base mb-3">October 2002 – December 2004 (2 years 3 months) | Lahore</p>
                <ul className="text-gray-200 text-sm space-y-1 list-disc list-inside">
                  <li>Managed computerized accounting operations and maintained accurate financial records</li>
                  <li>Processed payroll using automated payroll management systems</li>
                  <li>Coordinated with banks for financial transactions and reconciliations</li>
                  <li>Updated and maintained Plot Management System databases</li>
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
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg p-4 sm:p-6 border border-blue-400/30">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                  Master of Business Administration - MBA, Human Resources Management/Personnel Administration
                </h3>
                <p className="text-blue-200 text-sm sm:text-base">University of Sargodha | August 2013 - December 2015</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                  Bachelor of Commerce (B.Com.), Business/Commerce, General
                </h3>
                <p className="text-blue-200 text-sm sm:text-base">University of the Punjab | September 1998 - October 2000</p>
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
                  Artificial Intelligence for Professional – LUMS, 2025
                </h3>
                <p className="text-gray-200 text-sm sm:text-base">
                  Expertise in applying Generative AI for HR automation, analytics, and decision support.
                </p>
              </div>
              <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg p-4 sm:p-6 border border-green-400/30">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                  Master Yourself – Strategic Skills to Partner with your Boss, Managers, Clients/Vendors
                </h3>
                <p className="text-gray-200 text-sm sm:text-base">
                  Advanced training in strategic partnership skills, leadership development, and stakeholder management.
                </p>
              </div>
              <div className="bg-white/5 rounded-lg p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                  Additional Professional Development
                </h3>
                <p className="text-gray-200 text-sm sm:text-base">
                  Training in Corporate Governance, Leadership Development, and Operational Transformation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Expertise */}
        <section id="skills" className="mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Star className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
              Key Expertise
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Strategic Planning",
                "Client/Vendor Management",
                "Strategic HR Management",
                "AI Integration in HR",
                "Organizational Development",
                "Change Management",
                "Talent Acquisition",
                "Performance Management",
                "Operational Excellence",
                "Corporate Governance",
                "Executive Office Management",
                "Project Monitoring & Follow-ups"
              ].map((skill, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-4 text-center hover:bg-white/10 transition-colors">
                  <span className="text-white text-sm sm:text-base font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Languages */}
        <section id="languages" className="mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Languages className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
              Languages
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg p-4 border border-green-400/30">
                <h3 className="text-white font-semibold mb-2">Native or Bilingual</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-200 text-sm">Punjabi</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-200 text-sm">Saraiki</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-200 text-sm">Urdu</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg p-4 border border-blue-400/30">
                <h3 className="text-white font-semibold mb-2">Professional Working</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-400" />
                    <span className="text-gray-200 text-sm">English</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg p-4 border border-yellow-400/30">
                <h3 className="text-white font-semibold mb-2">Elementary</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-yellow-400" />
                    <span className="text-gray-200 text-sm">Pothohari</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-yellow-400" />
                    <span className="text-gray-200 text-sm">Pashto</span>
                  </div>
                </div>
              </div>
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
              <a
                href="https://www.linkedin.com/in/khalidkhanmanager"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <a
                href="https://khalid-khan.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors"
              >
                <Globe className="w-5 h-5" />
                Personal Website
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
