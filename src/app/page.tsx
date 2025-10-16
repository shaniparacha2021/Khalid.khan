'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Award, 
  Users, 
  Target, 
  BookOpen, 
  GraduationCap, 
  Star, 
  ArrowRight, 
  Briefcase, 
  Calendar, 
  Building,
  CheckCircle,
  ExternalLink
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">KM</span>
              </div>
              <span className="text-white font-bold text-xl">Khalid Masood Khan</span>
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Experience', 'Education', 'Contact'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="text-white/80 hover:text-white transition-colors font-medium"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.h1 
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="text-5xl lg:text-7xl font-black text-white leading-tight"
                >
                  Strategic HR & Operations
                  <motion.span 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                  >
                    Leader
                  </motion.span>
                </motion.h1>
                <motion.p 
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-xl text-blue-100 max-w-2xl"
                >
                  Driving Organizational Excellence & AI-Driven HR Transformation with 22+ years of progressive experience
                </motion.p>
              </div>
              
              <motion.div 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                {[
                  { icon: Award, text: "22+ Years Experience", color: "text-blue-400" },
                  { icon: Users, text: "HR Leadership", color: "text-purple-400" },
                  { icon: Target, text: "AI Integration", color: "text-green-400" }
                ].map((item, index) => (
                  <motion.div
                    key={item.text}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
                  >
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                    <span className="text-white font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get In Touch
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/KhalidKhanManager"
            target="_blank"
            rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold rounded-xl transition-all duration-300 border border-white/20"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                  <ExternalLink className="w-4 h-4 ml-2" />
                </motion.a>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
          >
            <Image
                    src="/khalid-masood-khan.png"
                    alt="Khalid Masood Khan - Strategic HR & Operations Leader"
                    width={500}
                    height={600}
                    className="rounded-2xl shadow-2xl"
                    priority
                  />
                </motion.div>
                <motion.div 
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center"
                >
                  <Award className="w-12 h-12 text-white" />
                </motion.div>
                <motion.div 
                  initial={{ scale: 0, rotate: 180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center"
                >
                  <Target className="w-10 h-10 text-white" />
                </motion.div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Professional Summary
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <p className="text-lg text-blue-100 leading-relaxed mb-6">
                  Strategic HR and Operations Leader with over <span className="text-blue-400 font-bold">22 years</span> of progressive experience driving 
                  <span className="text-purple-400 font-bold"> Organizational Excellence</span>, 
                  <span className="text-purple-400 font-bold"> Human Resource Transformation</span>, 
                  and <span className="text-purple-400 font-bold">Corporate Governance</span> across diversified industries.
                </p>
                <p className="text-lg text-blue-100 leading-relaxed">
                  Adept at developing and implementing people-centric strategies that enhance productivity, engagement, and business performance through data-driven and technology-enabled HR practices.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/20">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Users className="w-6 h-6 mr-2 text-blue-400" />
                  Key Expertise
                </h3>
                <ul className="space-y-3">
                  {['Strategic HR Management', 'AI Integration in HR', 'Organizational Development', 'Change Management', 'Talent Acquisition', 'Performance Management'].map((item, index) => (
                    <motion.li 
                      key={index}
                      initial={{ x: 20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="flex items-center text-blue-100"
                    >
                      <Star className="w-4 h-4 text-yellow-400 mr-3" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Core Competencies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Strategic Human Resource Management',
              'Organizational Development (OD) & Change Management',
              'Talent Acquisition & Workforce Planning',
              'Learning & Leadership Development',
              'Performance Management Systems',
              'Employee Engagement & Retention Strategies',
              'AI Integration in HR & Business Processes',
              'Corporate Governance & Compliance',
              'Operational Excellence & Continuous Improvement'
            ].map((competency, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white font-medium group-hover:text-blue-100 transition-colors">{competency}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
          </motion.div>

          <div className="space-y-8">
            {/* Current Role */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/20"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Senior Manager – Operational Excellence
                    </h3>
                    <p className="text-xl text-blue-300 font-semibold">Master Group of Industries</p>
                  </div>
                </div>
                <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full text-sm mt-4 lg:mt-0">
                  <Calendar className="w-4 h-4 mr-2" />
                  Aug 2016 – Present
                </span>
              </div>
              <ul className="space-y-4">
                {[
                  'Lead organizational excellence initiatives and continuous improvement programs across the group',
                  'Designed and implemented HR process improvements resulting in reduced recruitment turnaround time',
                  'Introduced AI-assisted tools in HR operations to automate performance appraisals',
                  'Partnered with senior leadership to develop strategic manpower planning aligned with business goals',
                  'Led change management initiatives fostering innovation, efficiency, and engagement',
                  'Provided executive advisory services to Managing Director and Chairman on HR matters'
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-start text-blue-100"
                  >
                    <ArrowRight className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Previous Roles */}
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Corporate & Business Support Executive",
                  company: "Panasian Group of Companies",
                  period: "2013-2016",
                  icon: Building,
                  color: "from-green-500 to-teal-500",
                  items: [
                    "Coordinated administrative and corporate functions",
                    "Implemented business process standardization",
                    "Delivered training programs for workforce efficiency"
                  ]
                },
                {
                  title: "Secretary to Director",
                  company: "The City School System",
                  period: "2012-2013",
                  icon: BookOpen,
                  color: "from-purple-500 to-pink-500",
                  items: [
                    "Supported director-level HR operations",
                    "Focus on organizational capability enhancement"
                  ]
                }
              ].map((role, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-10 h-10 bg-gradient-to-r ${role.color} rounded-lg flex items-center justify-center`}>
                      <role.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{role.title}</h3>
                      <p className="text-sm text-blue-300">{role.period}</p>
                    </div>
                  </div>
                  <p className="text-blue-300 font-semibold mb-4">{role.company}</p>
                  <ul className="space-y-2 text-blue-100 text-sm">
                    {role.items.map((item, itemIndex) => (
                      <li key={itemIndex}>• {item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section id="education" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Education & Certifications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: GraduationCap,
                title: "MBA (HRM)",
                institution: "University of Sargodha",
                year: "2015",
                color: "from-green-500/20 to-teal-500/20",
                borderColor: "border-green-400/20",
                iconColor: "text-green-400",
                textColor: "text-green-300"
              },
              {
                icon: BookOpen,
                title: "B.Com",
                institution: "University of the Punjab",
                year: "2000",
                color: "from-purple-500/20 to-pink-500/20",
                borderColor: "border-purple-400/20",
                iconColor: "text-purple-400",
                textColor: "text-purple-300"
              },
              {
                icon: Award,
                title: "AI for Professionals",
                institution: "LUMS",
                year: "2025",
                color: "from-blue-500/20 to-indigo-500/20",
                borderColor: "border-blue-400/20",
                iconColor: "text-blue-400",
                textColor: "text-blue-300"
              }
            ].map((edu, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`bg-gradient-to-br ${edu.color} backdrop-blur-sm rounded-2xl p-6 border ${edu.borderColor}`}
              >
                <div className="flex items-center mb-4">
                  <edu.icon className={`w-8 h-8 ${edu.iconColor} mr-3`} />
                  <h3 className="text-xl font-bold text-white">{edu.title}</h3>
                </div>
                <p className={`${edu.textColor} font-semibold mb-2`}>{edu.institution}</p>
                <p className="text-white/80 text-sm">{edu.year}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
            <p className="text-xl text-blue-100 mt-6">Ready to discuss your next project?</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <motion.div 
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    {[
                      {
                        icon: Mail,
                        label: "Email",
                        value: "khalid_masood79@hotmail.com",
                        href: "mailto:khalid_masood79@hotmail.com",
                        color: "from-blue-500 to-purple-500"
                      },
                      {
                        icon: Phone,
                        label: "Phone",
                        value: "+92 300 8454448",
                        href: "tel:+923008454448",
                        color: "from-green-500 to-teal-500"
                      },
                      {
                        icon: MapPin,
                        label: "Location",
                        value: "Lahore, Pakistan",
                        href: "#",
                        color: "from-purple-500 to-pink-500"
                      }
                    ].map((contact, index) => (
                      <motion.div 
                        key={index}
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-4"
                      >
                        <div className={`w-12 h-12 bg-gradient-to-r ${contact.color} rounded-lg flex items-center justify-center`}>
                          <contact.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-blue-300 font-semibold">{contact.label}</p>
                          <a 
                            href={contact.href}
                            className="text-white hover:text-blue-300 transition-colors"
                          >
                            {contact.value}
                          </a>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.div 
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/20"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">Connect With Me</h3>
                  <motion.a
                    href="https://www.linkedin.com/in/KhalidKhanManager"
          target="_blank"
          rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-xl transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    Connect on LinkedIn
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                </motion.div>
              </motion.div>

              {/* Key Skills */}
              <motion.div 
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-6">Key Skills</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      'Strategic HR Leadership',
                      'AI-Powered HR Analytics',
                      'Employee Engagement & Culture Building',
                      'Learning & Development (L&D)',
                      'Performance Management',
                      'Change Management & Organizational Transformation',
                      'Process Re-engineering & Operational Excellence',
                      'Executive Advisory & Stakeholder Management'
                    ].map((skill, index) => (
                      <motion.div 
                        key={index}
                        initial={{ x: 20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02, x: 5 }}
                        className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                      >
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-white font-medium">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-sm py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-3 mb-6"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">KM</span>
            </div>
            <span className="text-white font-bold text-xl">Khalid Masood Khan</span>
          </motion.div>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-blue-200 mb-6"
          >
            Strategic HR & Operations Leader | AI-Driven HR Transformation
          </motion.p>
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-6 mb-8"
          >
            {[
              { icon: Mail, href: "mailto:khalid_masood79@hotmail.com" },
              { icon: Phone, href: "tel:+923008454448" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/KhalidKhanManager" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-blue-300 hover:text-white transition-colors"
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm"
          >
            &copy; 2024 Khalid Masood Khan. All rights reserved.
          </motion.p>
        </div>
      </footer>
    </div>
  );
}