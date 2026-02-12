// import React from "react";
// import { motion } from "framer-motion";
// import {
//   ArrowRight,
//   Code,
//   Smartphone,
//   Cloud,
//   Database,
//   ShieldCheck,
//   BarChart3,
//   HardDrive,
//   Users,
//   Briefcase,
//   Headphones,
//   CheckCircle,
//   Server,
// } from "lucide-react";

// const fadeInUp = {
//   hidden: { opacity: 0, y: 60 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.8, ease: "easeOut" },
//   },
// };

// const staggerContainer = {
//   hidden: {},
//   visible: {
//     transition: { staggerChildren: 0.2 },
//   },
// };

// const scaleOnHover = {
//   rest: { scale: 1 },
//   hover: { scale: 1.05, transition: { duration: 0.4 } },
// };

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-black text-white overflow-x-hidden">
//       {/* Hero Section */}
//       <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 overflow-hidden">
//         <div className="absolute inset-0 z-0">
//           <img
//             src="https://img.freepik.com/free-vector/black-background-with-red-glowing-low-poly-mesh_1017-20215.jpg"
//             alt="Tech Background"
//             className="w-full h-full object-cover scale-110 opacity-70"
//           />
//           <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-black/90" />
//           <div className="absolute inset-0 bg-red-950/15 mix-blend-multiply" />
//         </div>
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={staggerContainer}
//           className="relative z-10 max-w-7xl mx-auto text-center"
//         >
//           <motion.h1
//             variants={fadeInUp}
//             className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
//           >
//             ATLA KNOTS
//             <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-red-400 to-white">
//               IT SOLUTIONS
//             </span>
//           </motion.h1>

//           <motion.p
//             variants={fadeInUp}
//             className="text-xl md:text-2.5xl text-gray-300 max-w-4xl mx-auto mb-10 leading-relaxed"
//           >
//             Making technology impactful, dependable, and easy to use — for
//             businesses of all sizes.
//           </motion.p>

//           <motion.p
//             variants={fadeInUp}
//             className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12"
//           >
//             We build secure, future-ready software that drives efficiency and
//             digital transformation.
//           </motion.p>

//           <motion.div
//             variants={fadeInUp}
//             className="flex flex-col sm:flex-row gap-6 justify-center"
//           >
//             <button className="group relative inline-flex items-center gap-3 px-8 py-5 bg-red-600 hover:bg-red-700 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-red-900/50">
//               GET STARTED
//               <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
//             </button>

//             <button className="group relative inline-flex items-center gap-3 px-8 py-5 border border-red-600/60 hover:border-red-500 text-red-400 hover:text-red-300 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-red-950/30">
//               VIEW OUR WORK
//               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </button>
//           </motion.div>
//         </motion.div>

//         {/* Scroll indicator */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1.2, duration: 1 }}
//           className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
//         >
//           <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
//             <motion.div
//               animate={{ y: [0, 12, 0] }}
//               transition={{ repeat: Infinity, duration: 1.8 }}
//               className="w-1.5 h-1.5 bg-white rounded-full"
//             />
//           </div>
//           <span className="text-sm text-gray-500 tracking-widest">SCROLL</span>
//         </motion.div>
//       </section>

//       {/* Services Section - Updated with your content */}
//       <section className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-black to-gray-950">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           variants={staggerContainer}
//           className="max-w-7xl mx-auto"
//         >
//           <motion.h2
//             variants={fadeInUp}
//             className="text-5xl md:text-6xl font-bold text-center mb-6"
//           >
//             OUR <span className="text-red-500">SERVICES</span>
//           </motion.h2>

//           <motion.p
//             variants={fadeInUp}
//             className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto"
//           >
//             Comprehensive IT & BPO solutions — from development to support and
//             infrastructure
//           </motion.p>

//           <div className="space-y-20">
//             {/* 1. Information Technology Services */}

//             <div>
//               <h3 className="text-4xl font-bold mb-8 text-red-400 text-center">
//                 1. Information Technology Services
//               </h3>
//               <p className="text-lg text-gray-300 mb-10 text-center max-w-4xl mx-auto">
//                 Our IT services support companies at every stage of the product
//                 lifecycle.
//               </p>

//               <div className="grid md:grid-cols-3 gap-8">
//                 <motion.div
//                   variants={scaleOnHover}
//                   initial="rest"
//                   whileHover="hover"
//                   className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-8"
//                 >
//                   <Code className="w-12 h-12 text-red-500 mb-6 mx-auto" />
//                   <h4 className="text-2xl font-bold mb-4 text-center">
//                     Development
//                   </h4>
//                   <ul className="text-gray-300 space-y-3">
//                     <li>
//                       • Web application development (websites, optimization,
//                       data structures)
//                     </li>
//                     <li>
//                       • Mobile application development (secure, scalable,
//                       user-friendly solutions)
//                     </li>
//                   </ul>
//                 </motion.div>

//                 <motion.div
//                   variants={scaleOnHover}
//                   initial="rest"
//                   whileHover="hover"
//                   className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-8"
//                 >
//                   <ShieldCheck className="w-12 h-12 text-red-500 mb-6 mx-auto" />
//                   <h4 className="text-2xl font-bold mb-4 text-center">
//                     Testing / Examination
//                   </h4>
//                   <ul className="text-gray-300 space-y-3">
//                     <li>• Web application testing</li>
//                     <li>• Mobile application testing</li>
//                     <li>
//                       Guarantees quality, performance, security, and reliability
//                       before deployment
//                     </li>
//                   </ul>
//                 </motion.div>

//                 <motion.div
//                   variants={scaleOnHover}
//                   initial="rest"
//                   whileHover="hover"
//                   className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-8"
//                 >
//                   <Server className="w-12 h-12 text-red-500 mb-6 mx-auto" />
//                   <h4 className="text-2xl font-bold mb-4 text-center">
//                     Product Assistance
//                   </h4>
//                   <ul className="text-gray-300 space-y-3">
//                     <li>
//                       Continuous support & maintenance for seamless operation
//                     </li>
//                     <li>
//                       Ticket support • Incident reporting • Change management
//                     </li>
//                     <li>SLA KPIs</li>
//                   </ul>
//                 </motion.div>
//               </div>
//             </div>
//             {/* 2. BPO Services */}
//             <div>
//               <h3 className="text-4xl font-bold mb-8 text-red-400 text-center">
//                 2. Business Process Outsourcing (BPO) Services
//               </h3>
//               <p className="text-lg text-gray-300 mb-10 text-center max-w-4xl mx-auto">
//                 Streamline operations and enhance customer engagement.
//               </p>
//               <section className="py-32 px-6 text-center bg-linear-to-t from-black via-gray-950 to-black">
//                 <motion.div
//                   initial="hidden"
//                   whileInView="visible"
//                   viewport={{ once: true }}
//                   variants={staggerContainer}
//                   className="mt-20 max-w-7xl mx-auto"
//                 >
//                   <img
//                     src="https://www.istockphoto.com/photos/software-company"
//                     alt=""
//                   />
//                   <motion.h3
//                     variants={fadeInUp}
//                     className="text-4xl md:text-5xl font-bold text-red-500 mb-12 text-center"
//                   >
//                     Inspiration Gallery
//                   </motion.h3>

//                   <motion.div
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true }}
//                     variants={staggerContainer}
//                     className="mt-20 max-w-7xl mx-auto"
//                   >
//                     <motion.img
//                       // src="https://img.freepik.com/free-photo/group-people-working-website-template_53876-25068.jpg?semt=ais_hybrid&w=740&q=80"
//                       className="w-64"
//                       initial={{ rotate: -10 }}
//                       animate={{ rotate: 10 }}
//                       transition={{ duration: 0.8, ease: "easeInOut" }}
//                     />

//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
//                       {/* Image 1 - Futuristic red grid - rotated */}
//                       <motion.div
//                         variants={fadeInUp}
//                         className="overflow-hidden rounded-2xl border border-gray-800 shadow-2xl"
//                         whileHover={{ scale: 1.05 }}
//                       >
//                         <div className="relative">
//                           <grok-card
//                             data-id="2fb022"
//                             data-type="image_card"
//                             data-plain-type="render_searched_image"
//                             data-arg-size="LARGE"
//                           ></grok-card>

//                           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
//                         </div>

//                         <div className="p-4 bg-black/70">
//                           <p className="text-sm text-gray-400">
//                             Futuristic digital red grid
//                           </p>
//                         </div>
//                       </motion.div>

//                       {/* Image 2 - Red neon corridor */}
//                       <motion.div
//                         variants={fadeInUp}
//                         // src="https://img.freepik.com/free-photo/group-people-working-website-template_53876-25068.jpg?semt=ais_hybrid&w=740&q=80"

//                         className="overflow-hidden rounded-2xl border border-gray-800 shadow-2xl rotate-[-30deg] hover:rotate-0 transition-transform duration-500"
//                         whileHover={{ scale: 1.08 }}
//                       >
//                         <img
//                           src="https://img.freepik.com/free-photo/group-people-working-website-template_53876-25068.jpg?semt=ais_hybrid&w=740&q=80"
//                           alt=""
//                         />
//                         {/* import { motion } from "framer-motion"; */}

//                         <grok-card
//                           data-id="5d1f91"
//                           data-type="image_card"
//                           data-plain-type="render_searched_image"
//                           data-arg-size="LARGE"
//                         ></grok-card>
//                       </motion.div>

//                       {/* Image 3 - Red LED grid pattern */}
//                       <motion.div
//                         variants={fadeInUp}
//                         className="overflow-hidden rounded-2xl border border-gray-800 shadow-2xl rotate-[30deg] hover:rotate-0 transition-transform duration-500"
//                         whileHover={{ scale: 1.08 }}
//                       >
//                         <grok-card
//                           data-id="0f8b7c"
//                           data-type="image_card"
//                           data-plain-type="render_searched_image"
//                           data-arg-size="LARGE"
//                         ></grok-card>
//                       </motion.div>

//                       {/* Image 4 - Dark dashboard UI */}
//                       <motion.div
//                         variants={fadeInUp}
//                         className="overflow-hidden rounded-2xl border border-gray-800 shadow-2xl rotate-[-25deg] hover:rotate-0 transition-transform duration-500"
//                         whileHover={{ scale: 1.08 }}
//                       >
//                         <grok-card
//                           data-id="9f8025"
//                           data-type="image_card"
//                           data-plain-type="render_searched_image"
//                           data-arg-size="LARGE"
//                         ></grok-card>
//                       </motion.div>

//                       {/* Image 5 - Modern app interface dark mode */}
//                       <motion.div
//                         variants={fadeInUp}
//                         className="overflow-hidden rounded-2xl border border-gray-800 shadow-2xl rotate-[28deg] hover:rotate-0 transition-transform duration-500"
//                         whileHover={{ scale: 1.08 }}
//                       >
//                         <grok-card
//                           data-id="1ea0a6"
//                           data-type="image_card"
//                           data-plain-type="render_searched_image"
//                           data-arg-size="LARGE"
//                         ></grok-card>
//                       </motion.div>

//                       {/* Image 6 - Cybersecurity red neon lock */}
//                       <motion.div
//                         variants={fadeInUp}
//                         className="overflow-hidden rounded-2xl border border-gray-800 shadow-2xl rotate-[-32deg] hover:rotate-0 transition-transform duration-500"
//                         whileHover={{ scale: 1.08 }}
//                       >
//                         <grok-card
//                           data-id="bce634"
//                           data-type="image_card"
//                           data-plain-type="render_searched_image"
//                           data-arg-size="LARGE"
//                         ></grok-card>
//                       </motion.div>
//                     </div>

//                     <motion.p
//                       variants={fadeInUp}
//                       className="text-gray-400 mt-12 text-lg text-center"
//                     >
//                       Dark, modern tech & BPO inspired visuals — tilted at ~30°
//                       for dynamic feel
//                     </motion.p>
//                   </motion.div>
//                   <motion.p
//                     variants={fadeInUp}
//                     className="text-gray-400 mt-10 text-lg"
//                   >
//                     Modern tech & BPO visuals — dark, dynamic, and professional.
//                   </motion.p>
//                 </motion.div>
//               </section>
//               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//                 <motion.div
//                   variants={scaleOnHover}
//                   initial="rest"
//                   whileHover="hover"
//                   className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-8"
//                 >
//                   <Headphones className="w-12 h-12 text-red-500 mb-6 mx-auto" />
//                   <h4 className="text-2xl font-bold mb-4 text-center">
//                     Voice, Chat & Email Support
//                   </h4>
//                   <ul className="text-gray-300 space-y-2 text-sm">
//                     <li>• Inbound/outbound voice support</li>
//                     <li>• Real-time chat assistance</li>
//                     <li>• Structured email handling & documentation</li>
//                   </ul>
//                 </motion.div>

//                 <motion.div
//                   variants={scaleOnHover}
//                   initial="rest"
//                   whileHover="hover"
//                   className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-8"
//                 >
//                   <BarChart3 className="w-12 h-12 text-red-500 mb-6 mx-auto" />
//                   <h4 className="text-2xl font-bold mb-4 text-center">
//                     Cataloguing
//                   </h4>
//                   <ul className="text-gray-300 space-y-2 text-sm">
//                     <li>
//                       • Detailed product descriptions with tags & keywords
//                     </li>
//                     <li>• Data validation, error correction & enrichment</li>
//                   </ul>
//                 </motion.div>

//                 <motion.div
//                   variants={scaleOnHover}
//                   initial="rest"
//                   whileHover="hover"
//                   className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-8"
//                 >
//                   <Users className="w-12 h-12 text-red-500 mb-6 mx-auto" />
//                   <h4 className="text-2xl font-bold mb-4 text-center">
//                     Level 2 (L2) Support
//                   </h4>
//                   <p className="text-gray-300 text-sm">
//                     Advanced troubleshooting for escalated complex issues —
//                     in-depth diagnosis and root cause resolution.
//                   </p>
//                 </motion.div>

//                 <motion.div
//                   variants={scaleOnHover}
//                   initial="rest"
//                   whileHover="hover"
//                   className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-8"
//                 >
//                   <CheckCircle className="w-12 h-12 text-red-500 mb-6 mx-auto" />
//                   <h4 className="text-2xl font-bold mb-4 text-center">
//                     Quality Assurance & Audits
//                   </h4>
//                   <p className="text-gray-300 text-sm">
//                     Regular audits of interactions (calls/chats), SOP/SLA
//                     compliance, feedback, coaching, and continuous improvement.
//                   </p>
//                 </motion.div>
//               </div>
//             </div>

//             {/* 3. Support & Infrastructure Setup */}
//             <div className="text-center">
//               <h3 className="text-4xl font-bold mb-8 text-red-400">
//                 3. Support & Infrastructure Setup
//               </h3>
//               <p className="text-lg text-gray-300 max-w-4xl mx-auto">
//                 End-to-end setup for efficient BPO operations: fully equipped
//                 offices, strong IT infrastructure, advanced telephony,
//                 high-speed networks, servers, workstations, data security, and
//                 power backup — ensuring reliable, secure, and scalable service
//                 delivery.
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* Why Choose Us */}
//       <section className="py-24 px-6 md:px-12 lg:px-24 bg-black">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-150px" }}
//           variants={staggerContainer}
//           className="max-w-7xl mx-auto"
//         >
//           <motion.h2
//             variants={fadeInUp}
//             className="text-5xl md:text-6xl font-bold text-center mb-16"
//           >
//             WHY <span className="text-red-500">CHOOSE US</span>
//           </motion.h2>

//           <div className="grid md:grid-cols-3 gap-10 lg:gap-16 text-center">
//             {[
//               {
//                 icon: Users,
//                 title: "True Partnership",
//                 desc: "We become an extension of your team — understanding your business deeply.",
//               },
//               {
//                 icon: Briefcase,
//                 title: "Enterprise Expertise",
//                 desc: "Proven experience in BFSI, retail, government & PSU projects.",
//               },
//               {
//                 icon: HardDrive,
//                 title: "Long-term Support",
//                 desc: "24×7 production support, SLA-based maintenance & AMS.",
//               },
//             ].map((item, idx) => (
//               <motion.div key={idx} variants={fadeInUp}>
//                 <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gray-900/80 mb-8 mx-auto">
//                   <item.icon className="w-10 h-10 text-red-500" />
//                 </div>
//                 <h3 className="text-3xl font-bold mb-5">{item.title}</h3>
//                 <p className="text-gray-400 leading-relaxed max-w-xs mx-auto">
//                   {item.desc}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </section>

//       {/* Final CTA + Inspiration Gallery */}
//     </div>
//   );
// }

// // import React from "react";
// // import { motion } from "framer-motion";
// // import {
// //   ArrowRight,
// //   Code,
// //   Smartphone,
// //   Server,
// //   ShieldCheck,
// //   Headphones,
// //   BarChart3,
// //   Users,
// //   Briefcase,
// //   HardDrive ,
// //   CheckCircle,
// // } from "lucide-react";

// // const fadeInUp = {
// //   hidden: { opacity: 0, y: 60 },
// //   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
// // };

// // const staggerContainer = {
// //   hidden: {},
// //   visible: { transition: { staggerChildren: 0.2 } },
// // };

// // const scaleOnHover = {
// //   rest: { scale: 1 },
// //   hover: { scale: 1.05, transition: { duration: 0.4 } },
// // };

// // export default function Home() {
// //   return (
// //     <div className="min-h-screen bg-black text-white overflow-x-hidden">
// //       {/* Hero Section */}
// //       <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 overflow-hidden">
// //         <div className="absolute inset-0 z-0">
// //           <img
// //             src="https://img.freepik.com/free-vector/black-background-with-red-glowing-low-poly-mesh_1017-20215.jpg"
// //             alt="Tech Background"
// //             className="w-full h-full object-cover scale-110 opacity-70"
// //           />
// //           <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-black/90" />
// //           <div className="absolute inset-0 bg-red-950/15 mix-blend-multiply" />
// //         </div>

// //         <motion.div
// //           initial="hidden"
// //           animate="visible"
// //           variants={staggerContainer}
// //           className="relative z-10 max-w-7xl mx-auto text-center"
// //         >
// //           <motion.h1
// //             variants={fadeInUp}
// //             className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
// //           >
// //             ATLA KNOTS
// //             <br />
// //             <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-red-400 to-white">
// //               IT SOLUTIONS
// //             </span>
// //           </motion.h1>

// //           <motion.p
// //             variants={fadeInUp}
// //             className="text-xl md:text-2.5xl text-gray-300 max-w-4xl mx-auto mb-10 leading-relaxed"
// //           >
// //             Making technology impactful, dependable, and easy to use — for businesses of all sizes.
// //           </motion.p>

// //           <motion.p
// //             variants={fadeInUp}
// //             className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12"
// //           >
// //             We build secure, future-ready software that drives efficiency and digital transformation.
// //           </motion.p>

// //           <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center">
// //             <button className="group relative inline-flex items-center gap-3 px-8 py-5 bg-red-600 hover:bg-red-700 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-red-900/50">
// //               GET STARTED
// //               <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
// //             </button>

// //             <button className="group relative inline-flex items-center gap-3 px-8 py-5 border border-red-600/60 hover:border-red-500 text-red-400 hover:text-red-300 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-red-950/30">
// //               VIEW OUR WORK
// //               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
// //             </button>
// //           </motion.div>
// //         </motion.div>

// //         {/* Scroll indicator */}
// //         <motion.div
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 1 }}
// //           transition={{ delay: 1.2, duration: 1 }}
// //           className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
// //         >
// //           <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
// //             <motion.div
// //               animate={{ y: [0, 12, 0] }}
// //               transition={{ repeat: Infinity, duration: 1.8 }}
// //               className="w-1.5 h-1.5 bg-white rounded-full"
// //             />
// //           </div>
// //           <span className="text-sm text-gray-500 tracking-widest">SCROLL</span>
// //         </motion.div>
// //       </section>

// //       {/* Services Section */}
// //       <section className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-black to-gray-950">
// //         <motion.div
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true, margin: "-100px" }}
// //           variants={staggerContainer}
// //           className="max-w-7xl mx-auto"
// //         >
// //           <motion.h2 variants={fadeInUp} className="text-5xl md:text-6xl font-bold text-center mb-6">
// //             OUR <span className="text-red-500">SERVICES</span>
// //           </motion.h2>

// //           <motion.p variants={fadeInUp} className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
// //             Comprehensive IT & BPO solutions — from development to support and infrastructure
// //           </motion.p>

// //           <div className="space-y-20">
// //             {/* 1. Information Technology Services */}
// //             <div>
// //               <h3 className="text-4xl font-bold mb-8 text-red-400 text-center">1. Information Technology Services</h3>
// //               <p className="text-lg text-gray-300 mb-10 text-center max-w-4xl mx-auto">
// //                 Our IT services support companies at every stage of the product lifecycle.
// //               </p>

// //               <div className="grid md:grid-cols-3 gap-8">
// //                 <motion.div variants={scaleOnHover} initial="rest" whileHover="hover" className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
// //                   <Code className="w-12 h-12 text-red-500 mb-6 mx-auto" />
// //                   <h4 className="text-2xl font-bold mb-4 text-center">Development</h4>
// //                   <ul className="text-gray-300 space-y-3">
// //                     <li>• Web application development (websites, optimization, data structures)</li>
// //                     <li>• Mobile application development (secure, scalable, user-friendly solutions)</li>
// //                   </ul>
// //                 </motion.div>

// //                 <motion.div variants={scaleOnHover} initial="rest" whileHover="hover" className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
// //                   <ShieldCheck className="w-12 h-12 text-red-500 mb-6 mx-auto" />
// //                   <h4 className="text-2xl font-bold mb-4 text-center">Testing / Examination</h4>
// //                   <ul className="text-gray-300 space-y-3">
// //                     <li>• Web application testing</li>
// //                     <li>• Mobile application testing</li>
// //                     <li>Guarantees quality, performance, security, and reliability before deployment</li>
// //                   </ul>
// //                 </motion.div>

// //                 <motion.div variants={scaleOnHover} initial="rest" whileHover="hover" className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
// //                   <Server className="w-12 h-12 text-red-500 mb-6 mx-auto" />
// //                   <h4 className="text-2xl font-bold mb-4 text-center">Product Assistance</h4>
// //                   <ul className="text-gray-300 space-y-3">
// //                     <li>Continuous support & maintenance for seamless operation</li>
// //                     <li>Ticket support • Incident reporting • Change management</li>
// //                     <li>SLA KPIs</li>
// //                   </ul>
// //                 </motion.div>
// //               </div>
// //             </div>

// //             {/* 2. BPO Services */}
// //             <div>
// //               <h3 className="text-4xl font-bold mb-8 text-red-400 text-center">2. Business Process Outsourcing (BPO) Services</h3>
// //               <p className="text-lg text-gray-300 mb-10 text-center max-w-4xl mx-auto">
// //                 Streamline operations and enhance customer engagement.
// //               </p>

// //               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
// //                 <motion.div variants={scaleOnHover} initial="rest" whileHover="hover" className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
// //                   <Headphones className="w-12 h-12 text-red-500 mb-6 mx-auto" />
// //                   <h4 className="text-2xl font-bold mb-4 text-center">Voice, Chat & Email Support</h4>
// //                   <ul className="text-gray-300 space-y-2 text-sm">
// //                     <li>• Inbound/outbound voice support</li>
// //                     <li>• Real-time chat assistance</li>
// //                     <li>• Structured email handling & documentation</li>
// //                   </ul>
// //                 </motion.div>

// //                 <motion.div variants={scaleOnHover} initial="rest" whileHover="hover" className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
// //                   <BarChart3 className="w-12 h-12 text-red-500 mb-6 mx-auto" />
// //                   <h4 className="text-2xl font-bold mb-4 text-center">Cataloguing</h4>
// //                   <ul className="text-gray-300 space-y-2 text-sm">
// //                     <li>• Detailed product descriptions with tags & keywords</li>
// //                     <li>• Data validation, error correction & enrichment</li>
// //                   </ul>
// //                 </motion.div>

// //                 <motion.div variants={scaleOnHover} initial="rest" whileHover="hover" className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
// //                   <Users className="w-12 h-12 text-red-500 mb-6 mx-auto" />
// //                   <h4 className="text-2xl font-bold mb-4 text-center">Level 2 (L2) Support</h4>
// //                   <p className="text-gray-300 text-sm">
// //                     Advanced troubleshooting for escalated complex issues — in-depth diagnosis and root cause resolution.
// //                   </p>
// //                 </motion.div>

// //                 <motion.div variants={scaleOnHover} initial="rest" whileHover="hover" className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
// //                   <CheckCircle className="w-12 h-12 text-red-500 mb-6 mx-auto" />
// //                   <h4 className="text-2xl font-bold mb-4 text-center">Quality Assurance & Audits</h4>
// //                   <p className="text-gray-300 text-sm">
// //                     Regular audits of interactions (calls/chats), SOP/SLA compliance, feedback, coaching, and continuous improvement.
// //                   </p>
// //                 </motion.div>
// //               </div>
// //             </div>

// //             {/* 3. Support & Infrastructure Setup */}
// //             <div className="text-center">
// //               <h3 className="text-4xl font-bold mb-8 text-red-400">3. Support & Infrastructure Setup</h3>
// //               <p className="text-lg text-gray-300 max-w-4xl mx-auto">
// //                 End-to-end setup for efficient BPO operations: fully equipped offices, strong IT infrastructure, advanced telephony, high-speed networks, servers, workstations, data security, and power backup — ensuring reliable, secure, and scalable service delivery.
// //               </p>
// //             </div>
// //           </div>
// //         </motion.div>
// //       </section>

// //       {/* Why Choose Us */}
// //       <section className="py-24 px-6 md:px-12 lg:px-24 bg-black">
// //         <motion.div
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true, margin: "-150px" }}
// //           variants={staggerContainer}
// //           className="max-w-7xl mx-auto"
// //         >
// //           <motion.h2 variants={fadeInUp} className="text-5xl md:text-6xl font-bold text-center mb-16">
// //             WHY <span className="text-red-500">CHOOSE US</span>
// //           </motion.h2>

// //           <div className="grid md:grid-cols-3 gap-10 lg:gap-16 text-center">
// //             {[
// //               { icon: Users, title: "True Partnership", desc: "We become an extension of your team — understanding your business deeply." },
// //               { icon: Briefcase, title: "Enterprise Expertise", desc: "Proven experience in BFSI, retail, government & PSU projects." },
// //               { icon: HardDrive, title: "Long-term Support", desc: "24×7 production support, SLA-based maintenance & AMS." },
// //             ].map((item, idx) => (
// //               <motion.div key={idx} variants={fadeInUp}>
// //                 <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gray-900/80 mb-8 mx-auto">
// //                   <item.icon className="w-10 h-10 text-red-500" />
// //                 </div>
// //                 <h3 className="text-3xl font-bold mb-5">{item.title}</h3>
// //                 <p className="text-gray-400 leading-relaxed max-w-xs mx-auto">{item.desc}</p>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </motion.div>
// //       </section>

// //       {/* Inspiration Gallery - Cleaned & Fixed */}
// //       <section className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-t from-black via-gray-950 to-black text-center">
// //         <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-7xl mx-auto">
// //           <motion.h3 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-red-500 mb-12">
// //             Inspiration Gallery
// //           </motion.h3>

// //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
// //             {/* Example images — replace src with your own if needed */}
// //             <motion.div variants={fadeInUp} className="overflow-hidden rounded-2xl border border-gray-800 shadow-2xl" whileHover={{ scale: 1.05 }}>
// //               <div className="relative">
// //                 <img
// //                   src="https://thumbs.dreamstime.com/b/abstract-red-tech-background-matrix-style-grid-structure-glowing-lines-points-dark-color-dominates-futuristic-pattern-modern-359002854.jpg"
// //                   alt="Futuristic red digital grid"
// //                   className="w-full h-64 object-cover"
// //                 />
// //                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
// //               </div>
// //               <div className="p-4 bg-black/70">
// //                 <p className="text-sm text-gray-400">Futuristic digital red grid</p>
// //               </div>
// //             </motion.div>

// //             <motion.div
// //               variants={fadeInUp}
// //               className="overflow-hidden rounded-2xl border border-gray-800 shadow-2xl rotate-[-3deg] hover:rotate-0 transition-transform duration-500"
// //               whileHover={{ scale: 1.08 }}
// //             >
// //               <img
// //                 src="https://thumbs.dreamstime.com/b/neon-lights-illuminate-cyberpunk-corridor-long-dark-industrial-lit-bright-pink-red-tubes-creating-futuristic-321136831.jpg"
// //                 alt="Red neon corridor"
// //                 className="w-full h-64 object-cover"
// //               />
// //               <div className="p-4 bg-black/70">
// //                 <p className="text-sm text-gray-400">Red neon cyberpunk corridor</p>
// //               </div>
// //             </motion.div>

// //             <motion.div
// //               variants={fadeInUp}
// //               className="overflow-hidden rounded-2xl border border-gray-800 shadow-2xl rotate-[4deg] hover:rotate-0 transition-transform duration-500"
// //               whileHover={{ scale: 1.08 }}
// //             >
// //               <img
// //                 src="https://thumbs.dreamstime.com/b/futuristic-background-red-led-lights-arranged-grid-pattern-network-glowing-night-abstract-dark-atmosphere-bokeh-textured-411702883.jpg"
// //                 alt="Red LED grid"
// //                 className="w-full h-64 object-cover"
// //               />
// //               <div className="p-4 bg-black/70">
// //                 <p className="text-sm text-gray-400">Red LED grid pattern</p>
// //               </div>
// //             </motion.div>

// //             {/* Add 3 more similar cards for dashboard, cybersecurity, workspace if you want */}
// //           </div>

// //           <motion.p variants={fadeInUp} className="text-gray-400 mt-12 text-lg text-center">
// //             Dark, modern tech & BPO inspired visuals — slightly tilted for dynamic feel
// //           </motion.p>
// //         </motion.div>
// //       </section>
// //     </div>
// //   );
// // }


import React, { useCallback, useRef, Suspense } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code,
  Smartphone,
  Cloud,
  Database,
  ShieldCheck,
  BarChart3,
  HardDrive,
  Users,
  Briefcase,
  Headphones,
  CheckCircle,
  Server,
} from "lucide-react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Float,
  MeshDistortMaterial,
  Sphere,
  Box,
  Environment,
  PerspectiveCamera,
} from "@react-three/drei";
import * as THREE from "three";

// ────────────────────────────────────────────────
// 3D COMPONENTS
// ────────────────────────────────────────────────

const AnimatedSphere = ({ position, color }) => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 64, 64]} position={position}>
        <MeshDistortMaterial
          color={color}
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

const RotatingCubes = () => {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });

  const cubes = [];
  const radius = 3;
  const count = 8;

  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;

    cubes.push(
      <Box key={i} position={[x, 0, z]} args={[0.3, 0.3, 0.3]}>
        <meshStandardMaterial color="#dc2626" metalness={0.8} roughness={0.2} />
      </Box>
    );
  }

  return <group ref={groupRef}>{cubes}</group>;
};

const FloatingParticles3D = () => {
  const particlesRef = useRef();
  const count = 200;

  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

    colors[i * 3] = 0.86;
    colors[i * 3 + 1] = 0.15;
    colors[i * 3 + 2] = 0.15;
  }

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      particlesRef.current.rotation.x = state.clock.getElapsedTime() * 0.03;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} vertexColors transparent opacity={0.6} />
    </points>
  );
};

const HeroScene3D = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#dc2626" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ef4444" />
      <spotLight
        position={[0, 5, 0]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        color="#f87171"
      />
      <FloatingParticles3D />
      <AnimatedSphere position={[-3, 2, -2]} color="#dc2626" />
      <AnimatedSphere position={[3, -2, -1]} color="#ef4444" />
      <AnimatedSphere position={[0, 3, 1]} color="#f87171" />
      <RotatingCubes />
      <Environment preset="city" />
    </>
  );
};

// ────────────────────────────────────────────────
// PARTICLES CONFIGURATION
// ────────────────────────────────────────────────

const particlesOptions = {
  fullScreen: { enable: false },
  background: { color: { value: "transparent" } },
  fpsLimit: 60,
  interactivity: {
    events: {
      onClick: { enable: true, mode: "push" },
      onHover: { enable: true, mode: "repulse" },
      resize: true,
    },
    modes: {
      push: { quantity: 4 },
      repulse: { distance: 150, duration: 0.4 },
    },
  },
  particles: {
    color: { value: ["#dc2626", "#ef4444", "#f87171"] },
    links: {
      color: "#dc2626",
      distance: 140,
      enable: true,
      opacity: 0.15,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: { default: "bounce" },
      random: true,
      speed: 1.2,
      straight: false,
    },
    number: { density: { enable: true, area: 800 }, value: 70 },
    opacity: { value: 0.3 },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 3 } },
  },
  detectRetina: true,
};

// ────────────────────────────────────────────────
// ANIMATION VARIANTS
// ────────────────────────────────────────────────

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const scaleOnHover = {
  rest: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.4 } },
};

// ────────────────────────────────────────────────
// MAIN COMPONENT
// ────────────────────────────────────────────────

export default function Home() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Particles Background */}
      <div className="fixed inset-0 z-0">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesOptions}
        />
      </div>

      {/* Gradient Overlays */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 right-0 w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 left-0 w-96 h-96 bg-red-800/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-3xl" />
      </div>

      {/* Hero Section with 3D Background */}
      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 overflow-hidden">
        {/* 3D Canvas Background */}
        <div className="absolute inset-0 z-0">
          <Canvas>
            <Suspense fallback={null}>
              <HeroScene3D />
            </Suspense>
          </Canvas>
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 z-0" />
        <div className="absolute inset-0 bg-red-950/15 mix-blend-multiply z-0" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 max-w-7xl mx-auto text-center"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          >
            ATLA KNOTS
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-red-400 to-white">
              IT SOLUTIONS
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-10 leading-relaxed"
          >
            Making technology impactful, dependable, and easy to use — for
            businesses of all sizes.
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12"
          >
            We build secure, future-ready software that drives efficiency and
            digital transformation.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <button className="group relative inline-flex items-center gap-3 px-8 py-5 bg-red-600 hover:bg-red-700 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-red-900/50">
              GET STARTED
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="group relative inline-flex items-center gap-3 px-8 py-5 border border-red-600/60 hover:border-red-500 text-red-400 hover:text-red-300 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-red-950/30">
              VIEW OUR WORK
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.8 }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
          <span className="text-sm text-gray-500 tracking-widest">SCROLL</span>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="relative py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-black to-gray-950">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-bold text-center mb-6"
          >
            OUR <span className="text-red-500">SERVICES</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto"
          >
            Comprehensive IT & BPO solutions — from development to support and
            infrastructure
          </motion.p>

          <div className="space-y-20">
            {/* 1. Information Technology Services */}
            <div>
              <h3 className="text-4xl font-bold mb-8 text-red-400 text-center">
                1. Information Technology Services
              </h3>
              <p className="text-lg text-gray-300 mb-10 text-center max-w-4xl mx-auto">
                Our IT services support companies at every stage of the product
                lifecycle.
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                <motion.div
                  variants={scaleOnHover}
                  initial="rest"
                  whileHover="hover"
                  className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-8"
                >
                  <Code className="w-12 h-12 text-red-500 mb-6 mx-auto" />
                  <h4 className="text-2xl font-bold mb-4 text-center">
                    Development
                  </h4>
                  <ul className="text-gray-300 space-y-3">
                    <li>
                      • Web application development (websites, optimization,
                      data structures)
                    </li>
                    <li>
                      • Mobile application development (secure, scalable,
                      user-friendly solutions)
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  variants={scaleOnHover}
                  initial="rest"
                  whileHover="hover"
                  className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-8"
                >
                  <ShieldCheck className="w-12 h-12 text-red-500 mb-6 mx-auto" />
                  <h4 className="text-2xl font-bold mb-4 text-center">
                    Testing / Examination
                  </h4>
                  <ul className="text-gray-300 space-y-3">
                    <li>• Web application testing</li>
                    <li>• Mobile application testing</li>
                    <li>
                      Guarantees quality, performance, security, and reliability
                      before deployment
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  variants={scaleOnHover}
                  initial="rest"
                  whileHover="hover"
                  className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-8"
                >
                  <Server className="w-12 h-12 text-red-500 mb-6 mx-auto" />
                  <h4 className="text-2xl font-bold mb-4 text-center">
                    Product Assistance
                  </h4>
                  <ul className="text-gray-300 space-y-3">
                    <li>
                      Continuous support & maintenance for seamless operation
                    </li>
                    <li>
                      Ticket support • Incident reporting • Change management
                    </li>
                    <li>SLA KPIs</li>
                  </ul>
                </motion.div>
              </div>
            </div>

            {/* 2. BPO Services */}
            <div>
              <h3 className="text-4xl font-bold mb-8 text-red-400 text-center">
                2. Business Process Outsourcing (BPO) Services
              </h3>
              <p className="text-lg text-gray-300 mb-10 text-center max-w-4xl mx-auto">
                Streamline operations and enhance customer engagement.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <motion.div
                  variants={scaleOnHover}
                  initial="rest"
                  whileHover="hover"
                  className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-8"
                >
                  <Headphones className="w-12 h-12 text-red-500 mb-6 mx-auto" />
                  <h4 className="text-2xl font-bold mb-4 text-center">
                    Voice, Chat & Email Support
                  </h4>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• Inbound/outbound voice support</li>
                    <li>• Real-time chat assistance</li>
                    <li>• Structured email handling & documentation</li>
                  </ul>
                </motion.div>

                <motion.div
                  variants={scaleOnHover}
                  initial="rest"
                  whileHover="hover"
                  className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-8"
                >
                  <BarChart3 className="w-12 h-12 text-red-500 mb-6 mx-auto" />
                  <h4 className="text-2xl font-bold mb-4 text-center">
                    Cataloguing
                  </h4>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>
                      • Detailed product descriptions with tags & keywords
                    </li>
                    <li>• Data validation, error correction & enrichment</li>
                  </ul>
                </motion.div>

                <motion.div
                  variants={scaleOnHover}
                  initial="rest"
                  whileHover="hover"
                  className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-8"
                >
                  <Users className="w-12 h-12 text-red-500 mb-6 mx-auto" />
                  <h4 className="text-2xl font-bold mb-4 text-center">
                    Level 2 (L2) Support
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Advanced troubleshooting for escalated complex issues —
                    in-depth diagnosis and root cause resolution.
                  </p>
                </motion.div>

                <motion.div
                  variants={scaleOnHover}
                  initial="rest"
                  whileHover="hover"
                  className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-8"
                >
                  <CheckCircle className="w-12 h-12 text-red-500 mb-6 mx-auto" />
                  <h4 className="text-2xl font-bold mb-4 text-center">
                    Quality Assurance & Audits
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Regular audits of interactions (calls/chats), SOP/SLA
                    compliance, feedback, coaching, and continuous improvement.
                  </p>
                </motion.div>
              </div>
            </div>

            {/* 3. Support & Infrastructure Setup */}
            <div className="text-center">
              <h3 className="text-4xl font-bold mb-8 text-red-400">
                3. Support & Infrastructure Setup
              </h3>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto">
                End-to-end setup for efficient BPO operations: fully equipped
                offices, strong IT infrastructure, advanced telephony,
                high-speed networks, servers, workstations, data security, and
                power backup — ensuring reliable, secure, and scalable service
                delivery.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-24 px-6 md:px-12 lg:px-24 bg-black">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-bold text-center mb-16"
          >
            WHY <span className="text-red-500">CHOOSE US</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10 lg:gap-16 text-center">
            {[
              {
                icon: Users,
                title: "True Partnership",
                desc: "We become an extension of your team — understanding your business deeply.",
              },
              {
                icon: Briefcase,
                title: "Enterprise Expertise",
                desc: "Proven experience in BFSI, retail, government & PSU projects.",
              },
              {
                icon: HardDrive,
                title: "Long-term Support",
                desc: "24×7 production support, SLA-based maintenance & AMS.",
              },
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp}>
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gray-900/80 mb-8 mx-auto">
                  <item.icon className="w-10 h-10 text-red-500" />
                </div>
                <h3 className="text-3xl font-bold mb-5">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed max-w-xs mx-auto">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}