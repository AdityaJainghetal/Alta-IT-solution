// // import React from 'react'

// // const Service = () => {
// //   return (
// //     <div>
      
// //     </div>
// //   )
// // }

// // export default Service


// // // src/pages/Services.jsx
// // import React from 'react';

// // const Service = () => {
// //   return (
// //     <div className="relative min-h-screen bg-gray-950 text-gray-100 overflow-hidden pb-16">
// //       {/* Optional subtle gradient overlay */}
// //       <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-cyan-950/10 to-blue-950/5 pointer-events-none"></div>

// //       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
// //         {/* Page Header */}
// //         <div className="text-center mb-16 md:mb-20">
// //           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
// //             <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
// //               Our Services
// //             </span>
// //           </h1>
// //           <p className="mt-6 text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
// //             Comprehensive IT and BPO solutions designed to empower your business with efficiency, reliability, and growth.
// //           </p>
// //           <div className="mt-6 h-1 w-24 bg-cyan-500 mx-auto rounded-full"></div>
// //         </div>

// //         {/* Section 1: Information Technology Services */}
// //         <section className="mb-20 md:mb-28">
// //           <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
// //             {/* Image */}
// //             <div className="w-full lg:w-1/2">
// //               <img
// //                 src="https://dazonn.com/wp-content/uploads/2022/06/Benefits.jpg"
// //                 alt="IT Services - Development & Testing"
// //                 className="rounded-2xl shadow-2xl border border-gray-700 object-cover w-full h-80 lg:h-[500px]"
// //               />
// //             </div>

// //             {/* Content */}
// //             <div className="w-full lg:w-1/2 space-y-8">
// //               <h2 className="text-3xl md:text-4xl font-bold text-cyan-400">
// //                 Information Technology Services
// //               </h2>
// //               <p className="text-lg text-gray-300 leading-relaxed">
// //                 Our IT services support businesses throughout the entire product lifecycle, delivering scalable, secure, and high-performance solutions.
// //               </p>

// //               <div className="space-y-10">
// //                 {/* a. Development */}
// //                 <div>
// //                   <h3 className="text-2xl font-semibold text-white mb-4">a. Development</h3>
// //                   <ul className="space-y-4 text-gray-300">
// //                     <li className="flex items-start gap-3">
// //                       <div className="mt-1.5 h-3 w-3 rounded-full bg-cyan-500 flex-shrink-0"></div>
// //                       <div>
// //                         <span className="font-medium text-cyan-300">Web Application Development</span> – Website Creation, Website optimization, Data structure optimization
// //                       </div>
// //                     </li>
// //                     <li className="flex items-start gap-3">
// //                       <div className="mt-1.5 h-3 w-3 rounded-full bg-cyan-500 flex-shrink-0"></div>
// //                       <div>
// //                         <span className="font-medium text-cyan-300">Mobile Application Development</span>
// //                       </div>
// //                     </li>
// //                   </ul>
// //                   <p className="mt-4 text-gray-400">
// //                     We create user-friendly, scalable, and secure digital solutions using modern technologies to meet your business objectives.
// //                   </p>
// //                 </div>

// //                 {/* b. Testing */}
// //                 <div>
// //                   <h3 className="text-2xl font-semibold text-white mb-4">b. Testing</h3>
// //                   <ul className="space-y-3 text-gray-300">
// //                     <li className="flex items-start gap-3">
// //                       <div className="mt-1.5 h-3 w-3 rounded-full bg-cyan-500 flex-shrink-0"></div>
// //                       Web Application Testing
// //                     </li>
// //                     <li className="flex items-start gap-3">
// //                       <div className="mt-1.5 h-3 w-3 rounded-full bg-cyan-500 flex-shrink-0"></div>
// //                       Mobile Application Testing
// //                     </li>
// //                   </ul>
// //                   <p className="mt-4 text-gray-400">
// //                     Our testing services ensure product quality, performance, security, and reliability before deployment.
// //                   </p>
// //                 </div>

// //                 {/* c. Product Support */}
// //                 <div>
// //                   <h3 className="text-2xl font-semibold text-white mb-4">c. Product Support</h3>
// //                   <p className="text-gray-300 leading-relaxed">
// //                     We provide ongoing technical support and maintenance to ensure smooth operation, updates, and long-term product performance.
// //                   </p>
// //                   <ul className="mt-4 grid grid-cols-2 gap-4 text-sm text-gray-400">
// //                     <li>• Ticket support</li>
// //                     <li>• Incident report</li>
// //                     <li>• Change Management</li>
// //                     <li>• SLA (Service Level Agreement)</li>
// //                     <li>• KPIs</li>
// //                   </ul>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </section>

// //         {/* Section 2: BPO Services */}
// //         <section>
// //           <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16">
// //             {/* Image */}
// //             <div className="w-full lg:w-1/2">
// //               <img
// //                 src="https://dazonn.com/wp-content/uploads/2023/09/Blog-img.webp"
// //                 alt="BPO Services - Customer Support & Infrastructure"
// //                 className="rounded-2xl shadow-2xl border border-gray-700 object-cover w-full h-80 lg:h-[500px]"
// //               />
// //             </div>

// //             {/* Content */}
// //             <div className="w-full lg:w-1/2 space-y-8">
// //               <h2 className="text-3xl md:text-4xl font-bold text-cyan-400">
// //                 Business Process Outsourcing (BPO) Services
// //               </h2>
// //               <p className="text-lg text-gray-300 leading-relaxed">
// //                 Our BPO services help businesses streamline operations, improve customer engagement, and maintain high-quality support.
// //               </p>

// //               <div className="space-y-10">
// //                 {/* a. Voice, chat, & email support */}
// //                 <div>
// //                   <h3 className="text-2xl font-semibold text-white mb-4">a. Voice, Chat & Email Support</h3>
// //                   <ul className="space-y-4 text-gray-300">
// //                     <li className="flex items-start gap-3">
// //                       <div className="mt-1.5 h-3 w-3 rounded-full bg-cyan-500 flex-shrink-0"></div>
// //                       <div>
// //                         <span className="font-medium text-cyan-300">Voice support</span>: Inbound and outbound calls with timely resolution through active listening.
// //                       </div>
// //                     </li>
// //                     <li className="flex items-start gap-3">
// //                       <div className="mt-1.5 h-3 w-3 rounded-full bg-cyan-500 flex-shrink-0"></div>
// //                       <div>
// //                         <span className="font-medium text-cyan-300">Chat support</span>: Real-time assistance on online platforms for quick resolution.
// //                       </div>
// //                     </li>
// //                     <li className="flex items-start gap-3">
// //                       <div className="mt-1.5 h-3 w-3 rounded-full bg-cyan-500 flex-shrink-0"></div>
// //                       <div>
// //                         <span className="font-medium text-cyan-300">Email support</span>: Accurate resolution with proper documentation and clear communication.
// //                       </div>
// //                     </li>
// //                   </ul>
// //                 </div>

// //                 {/* b. Cataloguing */}
// //                 <div>
// //                   <h3 className="text-2xl font-semibold text-white mb-4">b. Cataloguing</h3>
// //                   <ul className="space-y-4 text-gray-300">
// //                     <li className="flex items-start gap-3">
// //                       <div className="mt-1.5 h-3 w-3 rounded-full bg-cyan-500 flex-shrink-0"></div>
// //                       <div>
// //                         <span className="font-medium text-cyan-300">Product description</span>: Complete descriptions with tags and keywords for visibility.
// //                       </div>
// //                     </li>
// //                     <li className="flex items-start gap-3">
// //                       <div className="mt-1.5 h-3 w-3 rounded-full bg-cyan-500 flex-shrink-0"></div>
// //                       <div>
// //                         <span className="font-medium text-cyan-300">Data validation & enrichment</span>: Accuracy checks, error correction, and attribute addition.
// //                       </div>
// //                     </li>
// //                   </ul>
// //                 </div>

// //                 {/* c. L2 Support */}
// //                 <div>
// //                   <h3 className="text-2xl font-semibold text-white mb-4">c. L2 (Level 2) Support</h3>
// //                   <p className="text-gray-300">
// //                     Handles complex issues escalated from Level 1 with in-depth diagnosis, root cause analysis, and efficient resolution using advanced expertise.
// //                   </p>
// //                 </div>

// //                 {/* d. Quality Assurance & Audit */}
// //                 <div>
// //                   <h3 className="text-2xl font-semibold text-white mb-4">d. Quality Assurance & Audit Process</h3>
// //                   <p className="text-gray-300 leading-relaxed">
// //                     Regular audits of customer interactions (calls/chats) ensure compliance with SOPs, SLAs, and client standards. Detailed feedback, coaching, and continuous improvement actions maintain high service quality.
// //                   </p>
// //                 </div>

// //                 {/* Support & Infrastructure Setup */}
// //                 <div>
// //                   <h3 className="text-2xl font-semibold text-white mb-4">Support & Infrastructure Setup</h3>
// //                   <p className="text-gray-300 leading-relaxed mb-4">
// //                     End-to-end setup for efficient chat/call operations including fully equipped offices, robust IT infrastructure, advanced telephony, high-speed connectivity, data security, and power backup — ensuring reliable, secure, and scalable support.
// //                   </p>
// //                   <p className="text-gray-400">
// //                     Compliant with industry standards for uninterrupted business continuity.
// //                   </p>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </section>

// //         {/* CTA */}
// //         <div className="mt-20 text-center">
// //           <a
// //             href="/contact"
// //             className="inline-block px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-lg font-semibold rounded-xl shadow-xl hover:shadow-cyan-500/40 transition-all transform hover:-translate-y-1"
// //           >
// //             Ready to Partner? Contact Us →
// //           </a>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Service;

// // src/pages/Services.jsx
// import React from 'react';
// import { motion } from 'framer-motion';

// const fadeInUp = {
//   hidden: { opacity: 0, y: 60 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
// };

// const staggerContainer = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.2 } }
// };

// const scaleOnHover = {
//   hover: { scale: 1.03, transition: { duration: 0.3 } }
// };

// const Service = () => {
//   return (
//     <div className="relative min-h-screen bg-gray-950 text-gray-100 overflow-hidden pb-20">
//       {/* Background gradient for futuristic feel */}
//       <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-cyan-950/15 to-indigo-950/10 pointer-events-none"></div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
//         {/* Hero Header with animation */}
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={staggerContainer}
//           className="text-center mb-16 md:mb-24"
//         >
//           <motion.h1
//             variants={fadeInUp}
//             className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
//           >
//             <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
//               Our Services
//             </span>
//           </motion.h1>

//           <motion.p
//             variants={fadeInUp}
//             className="mt-6 text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto"
//           >
//             End-to-end IT excellence and premium BPO support — powering your business with innovation, reliability and scale.
//           </motion.p>

//           <motion.div
//             variants={fadeInUp}
//             className="mt-6 h-1 w-28 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"
//           />
//         </motion.div>

//         {/* IT Services Section */}
//         <motion.section
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           variants={staggerContainer}
//           className="mb-24 md:mb-32"
//         >
//           <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
//             {/* Image with hover scale */}
//             <motion.div variants={fadeInUp} whileHover="hover"  className="w-full lg:w-1/2">
//               <img
//                 src="https://s3.mordorintelligence.com/automotive-interior-ambient-lighting-market/automotive-interior-ambient-lighting-market-Automotive-Interior-Ambient-Lighting-Market-Market-Share-by-Propulsion-2024-1750759476534.webp"
//                 alt="Modern IT Dashboard"
//                 className="rounded-2xl shadow-2xl shadow-cyan-900/30 border border-cyan-900/40 object-cover w-full h-96 lg:h-[580px] transition-all duration-500"
//               />
//             </motion.div>

//             <div className="w-full lg:w-1/2 space-y-8">
//               <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-bold text-cyan-400">
//                 Information Technology Services
//               </motion.h2>

//               <motion.p variants={fadeInUp} className="text-lg text-gray-300 leading-relaxed">
//                 Comprehensive lifecycle support — from cutting-edge development to bullet-proof production stability.
//               </motion.p>

//               {/* Quick Highlights */}
//               <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-6">
//                 {[
//                   "Website & Enterprise Application Development",
//                   "Testing, Deployment & Production Support",
//                   "Long-term Application Maintenance (AMS)",
//                   "Digital Transformation & Consulting",
//                   "Government & PSU Projects"
//                 ].map((title, i) => (
//                   <motion.div
//                     key={i}
//                     variants={fadeInUp}
//                     className="bg-gray-900/60 border border-cyan-900/30 rounded-xl p-6 hover:border-cyan-500/60 hover:shadow-cyan-500/20 transition-all"
//                   >
//                     <h4 className="text-lg font-semibold text-white">{title}</h4>
//                   </motion.div>
//                 ))}
//               </motion.div>

//               {/* Tech Stack Pills */}
//               <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
//                 {['Java + Spring Boot', 'React / Angular', 'Node.js', 'MySQL / PostgreSQL', 'AWS / Azure / GCP'].map((tech) => (
//                   <span
//                     key={tech}
//                     className="px-5 py-2 bg-cyan-950/40 border border-cyan-800/50 rounded-full text-cyan-300 text-sm font-medium shadow-sm"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </motion.div>
//             </div>
//           </div>

//           {/* Core Offerings Grid */}
//           <motion.div variants={staggerContainer} className="mt-16 grid lg:grid-cols-2 gap-10">
//             {/* A. Development */}
//             <motion.div variants={fadeInUp} className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8 hover:border-cyan-600/50 transition-all">
//               <h3 className="text-2xl font-bold text-cyan-400 mb-6">A. Application & Website Development</h3>
//               <ul className="space-y-4 text-gray-300">
//                 <li>• Corporate websites & portals</li>
//                 <li>• Enterprise-grade web applications</li>
//                 <li>• Dashboards & data visualization</li>
//                 <li>• Native & cross-platform mobile apps</li>
//                 <li>• Microservices & cloud-native architecture</li>
//               </ul>
//             </motion.div>

//             {/* B. Domain Solutions (with image) */}
//             <motion.div variants={fadeInUp} className="bg-gray-900/50 border border-gray-700 rounded-2xl overflow-hidden">
//               <div className="p-8">
//                 <h3 className="text-2xl font-bold text-cyan-400 mb-6">B. Domain-Based Solutions</h3>
//                 <div className="space-y-6">
//                   <div>
//                     <h4 className="text-xl font-semibold text-white">Banking & Financial</h4>
//                     <p className="text-gray-400 mt-2">Core banking • Loans • Payments • KYC/AML • Secure APIs</p>
//                   </div>
//                   <div>
//                     <h4 className="text-xl font-semibold text-white">Retail & E-Commerce</h4>
//                     <p className="text-gray-400 mt-2">Platforms • Inventory • Gateways • CRM & Loyalty</p>
//                   </div>
//                   <div>
//                     <h4 className="text-xl font-semibold text-white">Enterprise & Government</h4>
//                     <p className="text-gray-400 mt-2">HRMS • ERP • Citizen portals • Secure apps</p>
//                   </div>
//                 </div>
//               </div>
//               <img
//                 src="https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2022-12/cHJpdmF0ZS9zdGF0aWMvaW1hZ2Uvd2Vic2l0ZS8yMDIyLTA0L2xyL2lzMTY4MzYtaW1hZ2Uta3oyZHk2dmkuanBn_1.jpg"
//                 alt="E-commerce Dashboard"
//                 className="w-full h-64 object-cover"
//               />
//             </motion.div>

//             {/* C. Testing */}
//             <motion.div variants={fadeInUp} className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8">
//               <h3 className="text-2xl font-bold text-cyan-400 mb-6">C. Testing & Quality Assurance</h3>
//               <ul className="space-y-4 text-gray-300">
//                 <li>• Manual & exploratory testing</li>
//                 <li>• Automation frameworks</li>
//                 <li>• Load & performance benchmarking</li>
//                 <li>• Security & penetration testing</li>
//               </ul>
//             </motion.div>

//             {/* D. Support */}
//             <motion.div variants={fadeInUp} className="bg-gradient-to-br from-gray-900/80 to-blue-950/30 border border-cyan-900/50 rounded-2xl p-8 text-center">
//               <h3 className="text-2xl font-bold text-cyan-400 mb-6">D. Production Support & Maintenance</h3>
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div className="space-y-3">
//                   <p className="text-gray-300">24×7 Monitoring</p>
//                   <p className="text-gray-300">Incident & Problem Management</p>
//                   <p className="text-gray-300">SLA Compliance</p>
//                 </div>
//                 <div className="space-y-3">
//                   <p className="text-gray-300">Bug Fixing & Enhancements</p>
//                   <p className="text-gray-300">Performance Tuning</p>
//                   <p className="text-gray-300">Proactive Maintenance</p>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         </motion.section>

//         {/* BPO Section */}
//         <motion.section
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           variants={staggerContainer}
//         >
//           <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
//             <motion.div variants={fadeInUp} whileHover="hover" className="w-full lg:w-1/2">
//               <img
//                 src="https://dazonnassist.com/wp-content/uploads/2025/02/a-a-modern-office-boardroom-is-5fbd3ae0-9339-46b9-a8c6-a2dc856426ee-1.jpg"
//                 alt="Modern BPO Call Center"
//                 className="rounded-2xl shadow-2xl shadow-cyan-900/30 border border-cyan-900/40 object-cover w-full h-96 lg:h-[580px] transition-all duration-500"
//               />
//             </motion.div>

//             <div className="w-full lg:w-1/2 space-y-8">
//               <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-bold text-cyan-400">
//                 Business Process Outsourcing (BPO)
//               </motion.h2>

//               <motion.p variants={fadeInUp} className="text-lg text-gray-300 leading-relaxed">
//                 Premium customer experience & back-office operations — voice, chat, email, cataloguing, L2 support and full infrastructure setup.
//               </motion.p>

//               <motion.div variants={staggerContainer} className="space-y-10">
//                 <div>
//                   <h3 className="text-2xl font-semibold text-white mb-4">Voice • Chat • Email Support</h3>
//                   <ul className="space-y-3 text-gray-300">
//                     <li>• Inbound/Outbound voice with active listening</li>
//                     <li>• Real-time chat assistance</li>
//                     <li>• Structured email handling & documentation</li>
//                   </ul>
//                 </div>

//                 <div>
//                   <h3 className="text-2xl font-semibold text-white mb-4">Cataloguing & Data Enrichment</h3>
//                   <p className="text-gray-300">
//                     Rich product descriptions • Accurate data validation • Image & attribute enrichment
//                   </p>
//                 </div>

//                 <div className="grid md:grid-cols-2 gap-8">
//                   <div>
//                     <h3 className="text-xl font-semibold text-white mb-3">L2 Support</h3>
//                     <p className="text-gray-300">Advanced troubleshooting & root cause resolution for escalated issues</p>
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-semibold text-white mb-3">Quality & Audits</h3>
//                     <p className="text-gray-300">Regular interaction audits • Coaching • Continuous SOP/SLA improvement</p>
//                   </div>
//                 </div>

//                 <div>
//                   <h3 className="text-2xl font-semibold text-white mb-4">Infrastructure Setup</h3>
//                   <p className="text-gray-300">
//                     Fully equipped workspaces • Robust telephony & network • High availability • Security & backup systems
//                   </p>
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </motion.section>

//         {/* Final CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="mt-20 text-center"
//         >
//           <a
//             href="/contact"
//             className="inline-block px-12 py-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-xl font-semibold rounded-2xl shadow-2xl hover:shadow-cyan-500/40 transition-all transform hover:-translate-y-2"
//           >
//             Let's Discuss Your Project →
//           </a>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Service;

// src/pages/Services.jsx
import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const cardHover = {
  rest: {
    scale: 1,
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
  },
  hover: {
    scale: 1.03,
    boxShadow: "0 20px 25px -5px rgba(34, 211, 238, 0.3), 0 10px 10px -5px rgba(34, 211, 238, 0.2)",
    transition: { duration: 0.4 }
  }
};

const Service = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-950 to-black text-gray-100 overflow-hidden pb-24">
      {/* Subtle animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/20 via-blue-950/10 to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16 md:py-28">
        {/* Hero Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center mb-20 md:mb-28"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight"
          >
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
              Our Services
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto font-light"
          >
            End-to-end IT excellence & premium BPO support — powering your business with innovation, scale and trust.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-8 h-1.5 w-32 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"
          />
        </motion.div>

        {/* IT Services Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer}
          className="mb-28 md:mb-40"
        >
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left Image – hover scale + glow */}
            <motion.div
              variants={fadeInUp}
              whileHover="hover"
             
              className="w-full lg:w-1/2 rounded-3xl overflow-hidden border border-cyan-900/40 shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
                alt="Modern Code & Dashboard"
                className="w-full h-96 lg:h-[620px] object-cover transition-transform duration-700"
              />
            </motion.div>

            {/* Right Content */}
            <div className="w-full lg:w-1/2 space-y-10">
              <motion.h2
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-bold text-cyan-400 tracking-tight"
              >
                Information Technology Services
              </motion.h2>

              <motion.p variants={fadeInUp} className="text-xl text-gray-300 leading-relaxed">
                Full lifecycle support — from visionary development to mission-critical stability.
              </motion.p>

              {/* Glassmorphic Cards */}
              <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Website & Enterprise Apps", desc: "Custom portals, dashboards & scalable enterprise solutions" },
                  { title: "Testing & Deployment", desc: "Comprehensive QA, smooth launches & production readiness" },
                  { title: "Long-term Maintenance (AMS)", desc: "Proactive updates, bug fixes & performance optimization" },
                  { title: "Digital Transformation", desc: "Cloud migration, modernization & strategic consulting" },
                  { title: "Government & PSU Projects", desc: "Secure portals, citizen services & long-term contracts" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    whileHover="hover"
                   
                    className="bg-gray-900/50 backdrop-blur-xl border border-cyan-900/40 rounded-2xl p-7 hover:border-cyan-500/60 transition-all"
                  >
                    <h4 className="text-xl font-semibold text-white mb-3">{item.title}</h4>
                    <p className="text-gray-400 text-base">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Tech Stack */}
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 mt-10">
                {['Java + Spring Boot', 'React / Angular', 'Node.js', 'MySQL / PostgreSQL', 'AWS / Azure / GCP'].map((tech) => (
                  <span
                    key={tech}
                    className="px-5 py-2.5 bg-cyan-950/50 border border-cyan-800/50 rounded-full text-cyan-300 text-sm font-medium shadow-sm backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* BPO Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer}
        >
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
            {/* Right Image */}
            <motion.div
              variants={fadeInUp}
              whileHover="hover"
              
              className="w-full lg:w-1/2 rounded-3xl overflow-hidden border border-cyan-900/40 shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80"
                alt="Professional Call Center Team"
                className="w-full h-96 lg:h-[620px] object-cover transition-transform duration-700"
              />
            </motion.div>

            {/* Left Content */}
            <div className="w-full lg:w-1/2 space-y-10">
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-cyan-400">
                Business Process Outsourcing (BPO)
              </motion.h2>

              <motion.p variants={fadeInUp} className="text-xl text-gray-300 leading-relaxed">
                Premium customer experience & operational excellence — voice, chat, email, cataloguing, L2 support & full infrastructure.
              </motion.p>

              {/* Glassmorphic Feature Cards */}
              <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-6">
                <motion.div variants={fadeInUp} whileHover="hover" className="bg-gray-900/50 backdrop-blur-xl border border-cyan-900/40 rounded-2xl p-7">
                  <h3 className="text-xl font-semibold text-white mb-4">Voice • Chat • Email Support</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li>• Inbound / Outbound voice with active listening</li>
                    <li>• Real-time chat resolution</li>
                    <li>• Structured email handling & documentation</li>
                  </ul>
                </motion.div>

                <motion.div variants={fadeInUp} whileHover="hover" className="bg-gray-900/50 backdrop-blur-xl border border-cyan-900/40 rounded-2xl p-7">
                  <h3 className="text-xl font-semibold text-white mb-4">Cataloguing & Data</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li>• Rich product descriptions with SEO tags</li>
                    <li>• Data validation & enrichment</li>
                    <li>• Missing attributes & images correction</li>
                  </ul>
                </motion.div>

                <motion.div variants={fadeInUp} whileHover="hover" className="bg-gray-900/50 backdrop-blur-xl border border-cyan-900/40 rounded-2xl p-7">
                  <h3 className="text-xl font-semibold text-white mb-4">L2 (Level 2) Support</h3>
                  <p className="text-gray-300">
                    Advanced troubleshooting, root cause analysis & resolution for escalated issues.
                  </p>
                </motion.div>

                <motion.div variants={fadeInUp} whileHover="hover" className="bg-gray-900/50 backdrop-blur-xl border border-cyan-900/40 rounded-2xl p-7">
                  <h3 className="text-xl font-semibold text-white mb-4">Quality Assurance & Infrastructure</h3>
                  <p className="text-gray-300">
                    Regular audits, coaching, SOP/SLA compliance + fully equipped offices, telephony, high-speed network & backup systems.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <a
            href="/contact"
            className="inline-block px-12 py-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-xl font-semibold rounded-2xl shadow-2xl hover:shadow-cyan-500/50 transition-all transform hover:-translate-y-2 active:scale-95"
          >
            Ready to Transform Your Business? → Contact Us
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Service;