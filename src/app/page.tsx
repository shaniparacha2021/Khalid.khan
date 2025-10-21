"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, Linkedin, User, Briefcase, GraduationCap, Award, Star, Menu, X, Globe, Languages, Target, TrendingUp, CheckCircle, Home as HomeIcon, User as AboutIcon, Settings as ServicesIcon, FileText as BlogIcon, MessageCircle as ContactIcon, ArrowRight, Download, Calendar, MessageCircle, Users } from "lucide-react";

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
                  onClick={() => scrollToSection('home')}
                  className="w-full text-left text-white hover:bg-white/10 p-3 rounded-lg transition-colors flex items-center gap-3"
                >
                  <HomeIcon className="w-5 h-5" />
                  Home
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="w-full text-left text-white hover:bg-white/10 p-3 rounded-lg transition-colors flex items-center gap-3"
                >
                  <AboutIcon className="w-5 h-5" />
                  About
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="w-full text-left text-white hover:bg-white/10 p-3 rounded-lg transition-colors flex items-center gap-3"
                >
                  <ServicesIcon className="w-5 h-5" />
                  Services
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
                  Expertise
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
                  <ContactIcon className="w-5 h-5" />
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

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Mobile Navigation */}
      <MobileNavigation />
      
      {/* Hero Section */}
     {/* Hero Section */}
<section
  id="home"
  className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20 px-6 lg:px-12 overflow-hidden"
>
  {/* Animated Background Elements */}
  <div className="absolute inset-0 overflow-hidden">
    {/* Floating Balloons (soft light orbs) */}
    <div className="absolute w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float-slow top-20 left-10"></div>
    <div className="absolute w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-float-fast bottom-20 right-20"></div>
    <div className="absolute w-48 h-48 bg-pink-400/10 rounded-full blur-3xl animate-float-mid top-1/2 left-1/3"></div>

    {/* Twinkling Stars */}
    <div className="absolute inset-0 overflow-hidden">
      {Array.from({ length: 35 }).map((_, i) => (
        <span
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            opacity: Math.random(),
          }}
        ></span>
      ))}
    </div>
  </div>

  {/* Main Content */}
  <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
    {/* Profile Image */}
    <div className="relative group flex-shrink-0">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-all duration-500"></div>
      <div className="relative w-56 h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl group-hover:border-white/50 transition-all duration-500 group-hover:scale-105">
        <Image
          src="/khalid-masood-khan.png"
          alt="Khalid Masood Khan"
          width={260}
          height={260}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          priority
        />
      </div>
    </div>

    {/* Info Section */}
    <div className="flex-1 space-y-6">
      <div className="transition-transform duration-700 hover:scale-[1.02]">
        <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent leading-tight">
          KHALID MASOOD KHAN
        </h1>
        <p className="text-2xl lg:text-3xl text-blue-100 font-medium mt-2">
          Strategic HR & Operations Leader
        </p>
        <p className="text-lg text-blue-200 font-light">
          AI-Driven HR Transformation | Organizational Excellence
        </p>
      </div>

      {/* About Summary (unchanged content) */}
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-700 ease-in-out hover:scale-[1.02]">
        <p className="text-gray-200 text-sm sm:text-base leading-relaxed mb-3">
          Experienced and service-oriented management professional with 22 years
          of progressive work in Operational Excellence, Human Resource
          Management, Corporate Governance, and Executive Office Operations.
          Adept at coordinating multicultural teams, driving performance, and
          implementing modern HR practices to achieve organizational success.
        </p>
        <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
          Exposed in diversified industries and also possess ability to perform
          well under work pressure, coordinate with multicultural personnel
          including various clients, meet tight deadlines, deal tactfully with
          various concerned agencies and surpass performance parameters.
          Self-motivated and result oriented with excellent communication,
          leadership, problem solving, decision making, time management and
          interpersonal skills.
        </p>
      </div>

      {/* Contact Info */}
      <div className="flex flex-wrap gap-6 text-blue-100">
        <div className="flex items-center gap-2">
          <Mail className="w-5 h-5" />
          <span className="text-sm sm:text-base">
            khalid_masood79@hotmail.com
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="w-5 h-5" />
          <span className="text-sm sm:text-base">+92 300 8454448</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5" />
          <span className="text-sm sm:text-base">Lahore, Pakistan</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 pt-2">
        <a
          href="https://www.linkedin.com/in/KhalidKhanManager"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-lg"
        >
          <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
          LinkedIn Profile
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </a>
        <a
          href="mailto:khalid_masood79@hotmail.com"
          className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 hover:scale-105 transition-all duration-300 shadow-lg"
        >
          <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
          Get In Touch
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </a>
      </div>
    </div>
  </div>

  {/* Tailwind Custom Animations */}
  <style jsx>{`
    @keyframes float-slow {
      0% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-25px);
      }
      100% {
        transform: translateY(0px);
      }
    }
    @keyframes float-mid {
      0% {
        transform: translateY(0px) translateX(0px);
      }
      50% {
        transform: translateY(-15px) translateX(10px);
      }
      100% {
        transform: translateY(0px) translateX(0px);
      }
    }
    @keyframes float-fast {
      0% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-40px);
      }
      100% {
        transform: translateY(0px);
      }
    }
    @keyframes twinkle {
      0%, 100% {
        opacity: 0.3;
      }
      50% {
        opacity: 1;
      }
    }

    .animate-float-slow {
      animation: float-slow 10s ease-in-out infinite;
    }
    .animate-float-mid {
      animation: float-mid 7s ease-in-out infinite;
    }
    .animate-float-fast {
      animation: float-fast 5s ease-in-out infinite;
    }
    .animate-twinkle {
      animation: twinkle 3s infinite ease-in-out;
    }
  `}</style>
</section>




      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* About Section */}
        <section id="about" className="mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <User className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
              Professional Highlights
            </h2>
            
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

        {/* Services Section */}
        <section id="services" className="mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <ServicesIcon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
              Professional Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl p-6 border border-blue-400/30 hover:border-blue-400/50 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Strategic HR Consulting</h3>
                </div>
                <p className="text-gray-200 text-sm leading-relaxed mb-4">
                  Comprehensive HR strategy development, organizational design, and workforce planning to drive business success.
                </p>
                <ul className="text-gray-300 text-xs space-y-1">
                  <li>• Strategic Workforce Planning</li>
                  <li>• Organizational Development</li>
                  <li>• Change Management</li>
                  <li>• HR Policy Development</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-xl p-6 border border-green-400/30 hover:border-green-400/50 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">AI-Driven HR Solutions</h3>
                </div>
                <p className="text-gray-200 text-sm leading-relaxed mb-4">
                  Modern AI-powered HR automation, analytics, and decision support systems for enhanced efficiency.
                </p>
                <ul className="text-gray-300 text-xs space-y-1">
                  <li>• AI-Assisted Recruitment</li>
                  <li>• Performance Analytics</li>
                  <li>• HR Process Automation</li>
                  <li>• Predictive Workforce Analytics</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-purple-400/30 hover:border-purple-400/50 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Operational Excellence</h3>
                </div>
                <p className="text-gray-200 text-sm leading-relaxed mb-4">
                  Process optimization, continuous improvement, and operational transformation to maximize efficiency.
                </p>
                <ul className="text-gray-300 text-xs space-y-1">
                  <li>• Process Optimization</li>
                  <li>• Continuous Improvement</li>
                  <li>• Quality Management</li>
                  <li>• Operational Transformation</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl p-6 border border-orange-400/30 hover:border-orange-400/50 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Executive Advisory</h3>
                </div>
                <p className="text-gray-200 text-sm leading-relaxed mb-4">
                  Strategic advisory services for senior leadership on HR, governance, and operational matters.
                </p>
                <ul className="text-gray-300 text-xs space-y-1">
                  <li>• Corporate Governance</li>
                  <li>• Executive Coaching</li>
                  <li>• Strategic Planning</li>
                  <li>• Board Advisory</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-xl p-6 border border-teal-400/30 hover:border-teal-400/50 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-teal-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Talent Management</h3>
                </div>
                <p className="text-gray-200 text-sm leading-relaxed mb-4">
                  End-to-end talent acquisition, development, and retention strategies for organizational growth.
                </p>
                <ul className="text-gray-300 text-xs space-y-1">
                  <li>• Talent Acquisition</li>
                  <li>• Performance Management</li>
                  <li>• Leadership Development</li>
                  <li>• Succession Planning</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl p-6 border border-indigo-400/30 hover:border-indigo-400/50 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Training & Development</h3>
                </div>
                <p className="text-gray-200 text-sm leading-relaxed mb-4">
                  Customized training programs and professional development initiatives for organizational capability building.
                </p>
                <ul className="text-gray-300 text-xs space-y-1">
                  <li>• Leadership Training</li>
                  <li>• Skills Development</li>
                  <li>• Team Building</li>
                  <li>• Professional Coaching</li>
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
                  <li>Complete Management of CEO&apos;s Office independently</li>
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

        {/* Call to Action Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-2xl p-8 sm:p-12 text-white text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Transform Your Organization?</h2>
            <p className="text-indigo-100 mb-8 text-lg max-w-3xl mx-auto">
              Let&apos;s discuss how my 22+ years of experience in HR transformation, operational excellence, and AI-driven solutions can drive your organization&apos;s success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="mailto:khalid_masood79@hotmail.com"
                className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition-colors text-lg"
              >
                <Mail className="w-5 h-5" />
                Schedule a Consultation
        </a>
        <a
                href="tel:+923008454448"
                className="inline-flex items-center gap-2 bg-indigo-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-600 transition-colors text-lg"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <ContactIcon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
              Get In Touch
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <div>
                      <div className="text-white font-medium">Email</div>
                      <div className="text-gray-300">khalid_masood79@hotmail.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-400" />
                    <div>
                      <div className="text-white font-medium">Phone</div>
                      <div className="text-gray-300">+92 300 8454448 (Mobile)</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-blue-400" />
                    <div>
                      <div className="text-white font-medium">Location</div>
                      <div className="text-gray-300">Lahore, Pakistan</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5 text-blue-400" />
                    <div>
                      <div className="text-white font-medium">LinkedIn</div>
                      <a href="https://www.linkedin.com/in/khalidkhanmanager" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                        linkedin.com/in/khalidkhanmanager
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <a
                    href="mailto:khalid_masood79@hotmail.com"
                    className="flex items-center gap-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <Mail className="w-5 h-5 text-blue-400" />
                    <span className="text-white">Send Email</span>
                    <ArrowRight className="w-4 h-4 text-gray-400 ml-auto" />
                  </a>
                  <a
                    href="tel:+923008454448"
                    className="flex items-center gap-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <Phone className="w-5 h-5 text-green-400" />
                    <span className="text-white">Call Now</span>
                    <ArrowRight className="w-4 h-4 text-gray-400 ml-auto" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/khalidkhanmanager"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-blue-400" />
                    <span className="text-white">Connect on LinkedIn</span>
                    <ArrowRight className="w-4 h-4 text-gray-400 ml-auto" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
