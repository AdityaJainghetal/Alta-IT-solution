// import React, { useCallback, useState } from 'react';
// import Particles from '@tsparticles/react';
// import { loadSlim } from '@tsparticles/slim';
// import { motion } from 'framer-motion';
// import {
//   Mail, Phone, MapPin, Send, Building2, Clock, CheckCircle, AlertCircle
// } from 'lucide-react';
// import axios from 'axios';

// // Particles config same as before
// const particlesOptions = {
//   fullScreen: { enable: true, zIndex: -1 },
//   background: { color: { value: 'transparent' } },
//   fpsLimit: 60,
//   interactivity: {
//     events: {
//       onClick: { enable: true, mode: 'push' },
//       onHover: { enable: true, mode: 'repulse' },
//       resize: true,
//     },
//     modes: {
//       push: { quantity: 4 },
//       repulse: { distance: 150, duration: 0.4 },
//     },
//   },
//   particles: {
//     color: { value: ['#22d3ee', '#60a5fa', '#a78bfa'] },
//     links: { color: '#ffffff', distance: 150, enable: true, opacity: 0.25, width: 1 },
//     move: { direction: 'none', enable: true, outModes: { default: 'bounce' }, random: true, speed: 1.2, straight: false },
//     number: { density: { enable: true, area: 800 }, value: 70 },
//     opacity: { value: 0.45 },
//     shape: { type: 'circle' },
//     size: { value: { min: 1, max: 4 } },
//   },
//   detectRetina: true,
// };

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 14 } },
// };

// const Contact = () => {
//   const particlesInit = useCallback(async (engine) => {
//     await loadSlim(engine);
//   }, []);

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     subject: '',
//     message: ''
//   });

//   const [status, setStatus] = useState({ type: '', message: '' });
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     // Clear status when user starts typing again
//     if (status.message) setStatus({ type: '', message: '' });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setStatus({ type: '', message: '' });

//     try {
//       const response = await axios.post('https://atla-knots-solution-admin.onrender.com/api/contacts', formData, {
//         headers: { 'Content-Type': 'application/json' },
//       });

//       if (response.data.success) {
//         setStatus({
//           type: 'success',
//           message: 'Message sent successfully! We will get back to you soon.'
//         });
//         setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
//       }
//     } catch (error) {
//       console.error('Contact form error:', error);
//       const errorMsg = error.response?.data?.message || 'Something went wrong. Please try again.';
//       setStatus({ type: 'error', message: errorMsg });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="relative min-h-screen bg-gray-950 text-gray-100 overflow-hidden">
//       <Particles id="tsparticles-contact" init={particlesInit} options={particlesOptions} className="absolute inset-0 z-0" />

//       <div className="relative z-10">
//         {/* Hero Section */}
//         <section className="relative py-24 md:py-32 lg:py-40">
//           <div className="absolute inset-0 bg-gradient-to-br from-gray-950/70 via-cyan-950/20 to-blue-950/10 pointer-events-none"></div>

//           <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
//             <motion.div variants={containerVariants} initial="hidden" animate="visible">
//               <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
//                 <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
//                   Get in Touch
//                 </span>
//               </motion.h1>
//               <motion.p variants={itemVariants} className="mt-6 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
//                 Have questions or ready to start a project? We're here to help.
//               </motion.p>
//             </motion.div>
//           </div>
//         </section>

//         {/* Contact Form + Info + Map */}
//         <section className="py-16 md:py-24 border-t border-gray-800 bg-gray-950/60 backdrop-blur-sm">
//           <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//             <div className="grid lg:grid-cols-2 gap-12">
//               {/* Left: Contact Info */}
//               <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
//                 <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Contact Information</h2>

//                 <div className="space-y-8">
//                   <div className="flex items-start gap-5">
//                     <div className="p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-xl">
//                       <Building2 className="h-7 w-7 text-cyan-400" />
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-semibold text-white">Our Office</h3>
//                       <p className="mt-2 text-gray-300 leading-relaxed">
//                         103, Goyal Vihar,<br />
//                         Plot No 31-C, Zone 2,<br />
//                         M.P. Nagar, Bhopal - 462011<br />
//                         Madhya Pradesh, India
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-5">
//                     <div className="p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-xl">
//                       <Phone className="h-7 w-7 text-cyan-400" />
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-semibold text-white">Phone</h3>
//                       <p className="mt-2 text-gray-300">
//                         <a href="tel:+917869636070" className="hover:text-cyan-400 transition">+91 78696 36070</a>
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-5">
//                     <div className="p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-xl">
//                       <Mail className="h-7 w-7 text-cyan-400" />
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-semibold text-white">Email</h3>
//                       <p className="mt-2 text-gray-300">
//                         <a href="mailto:ATLAknotssolution@gmail.com" className="hover:text-cyan-400 transition">
//                           ATLAknotssolution@gmail.com
//                         </a>
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-5">
//                     <div className="p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-xl">
//                       <Clock className="h-7 w-7 text-cyan-400" />
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-semibold text-white">Working Hours</h3>
//                       <p className="mt-2 text-gray-300">
//                         Mon – Sat: 10:00 AM – 7:00 PM<br />
//                         Sunday: Closed
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>

//               {/* Right: Form + Map */}
//               <div className="space-y-12">
//                 {/* Form */}
//                 <motion.div
//                   initial={{ opacity: 0, x: 50 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.8 }}
//                   viewport={{ once: true }}
//                   className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8 md:p-10 backdrop-blur-sm shadow-2xl"
//                 >
//                   <h2 className="text-3xl font-bold text-white mb-8">Send Us a Message</h2>

//                   {/* Status Messages */}
//                   {status.message && (
//                     <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
//                       status.type === 'success'
//                         ? 'bg-green-900/40 border border-green-500/50 text-green-300'
//                         : 'bg-red-900/40 border border-red-500/50 text-red-300'
//                     }`}>
//                       {status.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
//                       <p>{status.message}</p>
//                     </div>
//                   )}

//                   <form onSubmit={handleSubmit} className="space-y-6">
//                     <div className="grid sm:grid-cols-2 gap-6">
//                       <input
//                         type="text"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         placeholder="Your Name"
//                         required
//                         disabled={loading}
//                         className="w-full px-5 py-4 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-cyan-500 text-white placeholder-gray-500 disabled:opacity-60"
//                       />
//                       <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         placeholder="Your Email"
//                         required
//                         disabled={loading}
//                         className="w-full px-5 py-4 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-cyan-500 text-white placeholder-gray-500 disabled:opacity-60"
//                       />
//                     </div>

//                     <input
//                       type="tel"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       placeholder="Phone (Optional)"
//                       disabled={loading}
//                       className="w-full px-5 py-4 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-cyan-500 text-white placeholder-gray-500 disabled:opacity-60"
//                     />

//                     <input
//                       type="text"
//                       name="subject"
//                       value={formData.subject}
//                       onChange={handleChange}
//                       placeholder="Subject"
//                       required
//                       disabled={loading}
//                       className="w-full px-5 py-4 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-cyan-500 text-white placeholder-gray-500 disabled:opacity-60"
//                     />

//                     <textarea
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       rows="6"
//                       placeholder="Your Message..."
//                       required
//                       disabled={loading}
//                       className="w-full px-5 py-4 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-cyan-500 text-white placeholder-gray-500 resize-none disabled:opacity-60"
//                     ></textarea>

//                     <button
//                       type="submit"
//                       disabled={loading}
//                       className={`w-full px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg transition-all flex items-center justify-center gap-3 ${
//                         loading ? 'opacity-70 cursor-not-allowed' : 'hover:from-cyan-600 hover:to-blue-700 hover:shadow-cyan-500/40 hover:-translate-y-1'
//                       }`}
//                     >
//                       {loading ? (
//                         <>Sending...</>
//                       ) : (
//                         <>
//                           <Send size={20} /> Send Message
//                         </>
//                       )}
//                     </button>
//                   </form>
//                 </motion.div>

//                 {/* Google Map */}
//                 <motion.div
//                   initial={{ opacity: 0, x: 50 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.8, delay: 0.2 }}
//                   viewport={{ once: true }}
//                   className="bg-gray-900/50 border border-gray-700 rounded-2xl overflow-hidden shadow-2xl h-96"
//                 >
//                   <iframe
//                     title="ATLA Knots Office Location - MP Nagar, Bhopal"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.058!2d77.430!3d23.199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39631f8a00000001%3A0x0!2sM.P.+Nagar+Zone+2%2C+Bhopal%2C+Madhya+Pradesh+462011!5e0!3m2!1sen!2sin!4v1738000000000!5m2!1sen!2sin"
//                     width="100%"
//                     height="100%"
//                     style={{ border: 0 }}
//                     allowFullScreen=""
//                     loading="lazy"
//                     referrerPolicy="no-referrer-when-downgrade"
//                   ></iframe>
//                 </motion.div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Contact;

// import React, { useCallback, useState } from 'react';
// import Particles from '@tsparticles/react';
// import { loadSlim } from '@tsparticles/slim';
// import { motion } from 'framer-motion';
// import {
//   Mail, Phone, MapPin, Send, Building2, Clock, CheckCircle, AlertCircle
// } from 'lucide-react';
// import axios from 'axios';

// // Updated particles — red theme
// const particlesOptions = {
//   fullScreen: { enable: true, zIndex: -1 },
//   background: { color: { value: 'transparent' } },
//   fpsLimit: 60,
//   interactivity: {
//     events: {
//       onClick: { enable: true, mode: 'push' },
//       onHover: { enable: true, mode: 'repulse' },
//       resize: true,
//     },
//     modes: {
//       push: { quantity: 4 },
//       repulse: { distance: 150, duration: 0.4 },
//     },
//   },
//   particles: {
//     color: { value: ['#ef4444', '#f87171', '#dc2626'] }, // shades of red
//     links: { color: '#ffffff', distance: 150, enable: true, opacity: 0.20, width: 1 },
//     move: { direction: 'none', enable: true, outModes: { default: 'bounce' }, random: true, speed: 1.3, straight: false },
//     number: { density: { enable: true, area: 800 }, value: 80 },
//     opacity: { value: 0.50 },
//     shape: { type: 'circle' },
//     size: { value: { min: 1, max: 5 } },
//   },
//   detectRetina: true,
// };

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 14 } },
// };

// const Contact = () => {
//   const particlesInit = useCallback(async (engine) => {
//     await loadSlim(engine);
//   }, []);

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     subject: '',
//     message: ''
//   });

//   const [status, setStatus] = useState({ type: '', message: '' });
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     if (status.message) setStatus({ type: '', message: '' });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setStatus({ type: '', message: '' });

//     try {
//       const response = await axios.post('https://atla-knots-solution-admin.onrender.com/api/contacts', formData, {
//         headers: { 'Content-Type': 'application/json' },
//       });

//       if (response.data.success) {
//         setStatus({
//           type: 'success',
//           message: 'Message sent successfully! We will get back to you soon.'
//         });
//         setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
//       }
//     } catch (error) {
//       console.error('Contact form error:', error);
//       const errorMsg = error.response?.data?.message || 'Something went wrong. Please try again.';
//       setStatus({ type: 'error', message: errorMsg });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="relative min-h-screen bg-black text-gray-100 overflow-hidden">
//       <Particles id="tsparticles-contact" init={particlesInit} options={particlesOptions} className="absolute inset-0 z-0" />

//       <div className="relative z-10">
//         {/* Hero Section */}
//         <section className="relative py-24 md:py-32 lg:py-40">
//           <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-red-950/30 to-red-900/10 pointer-events-none"></div>

//           <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
//             <motion.div variants={containerVariants} initial="hidden" animate="visible">
//               <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
//                 <span className="bg-gradient-to-r from-red-500 via-red-400 to-rose-500 bg-clip-text text-transparent">
//                   Get in Touch
//                 </span>
//               </motion.h1>
//               <motion.p variants={itemVariants} className="mt-6 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
//                 Have questions or ready to start a project? We're here to help.
//               </motion.p>
//             </motion.div>
//           </div>
//         </section>

//         {/* Contact Form + Info + Map */}
//         <section className="py-16 md:py-24 border-t border-gray-800 bg-black/60 backdrop-blur-sm">
//           <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//             <div className="grid lg:grid-cols-2 gap-12">
//               {/* Left: Contact Info */}
//               <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
//                 <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Contact Information</h2>

//                 <div className="space-y-8">
//                   <div className="flex items-start gap-5">
//                     <div className="p-4 bg-red-900/20 border border-red-700/40 rounded-xl">
//                       <Building2 className="h-7 w-7 text-red-500" />
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-semibold text-white">Our Office</h3>
//                       <p className="mt-2 text-gray-300 leading-relaxed">
//                         103, Goyal Vihar,<br />
//                         Plot No 31-C, Zone 2,<br />
//                         M.P. Nagar, Bhopal - 462011<br />
//                         Madhya Pradesh, India
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-5">
//                     <div className="p-4 bg-red-900/20 border border-red-700/40 rounded-xl">
//                       <Phone className="h-7 w-7 text-red-500" />
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-semibold text-white">Phone</h3>
//                       <p className="mt-2 text-gray-300">
//                         <a href="tel:+917869636070" className="hover:text-red-400 transition">+91 78696 36070</a>
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-5">
//                     <div className="p-4 bg-red-900/20 border border-red-700/40 rounded-xl">
//                       <Mail className="h-7 w-7 text-red-500" />
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-semibold text-white">Email</h3>
//                       <p className="mt-2 text-gray-300">
//                         <a href="mailto:ATLAknotssolution@gmail.com" className="hover:text-red-400 transition">
//                           ATLAknotssolution@gmail.com
//                         </a>
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-5">
//                     <div className="p-4 bg-red-900/20 border border-red-700/40 rounded-xl">
//                       <Clock className="h-7 w-7 text-red-500" />
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-semibold text-white">Working Hours</h3>
//                       <p className="mt-2 text-gray-300">
//                         Mon – Sat: 10:00 AM – 7:00 PM<br />
//                         Sunday: Closed
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>

//               {/* Right: Form + Map */}
//               <div className="space-y-12">
//                 {/* Form */}
//                 <motion.div
//                   initial={{ opacity: 0, x: 50 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.8 }}
//                   viewport={{ once: true }}
//                   className="bg-gray-950/70 border border-gray-800 rounded-2xl p-8 md:p-10 backdrop-blur-sm shadow-2xl shadow-red-950/30"
//                 >
//                   <h2 className="text-3xl font-bold text-white mb-8">Send Us a Message</h2>

//                   {/* Status Messages */}
//                   {status.message && (
//                     <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
//                       status.type === 'success'
//                         ? 'bg-green-950/50 border border-green-700/60 text-green-300'
//                         : 'bg-red-950/50 border border-red-700/60 text-red-300'
//                     }`}>
//                       {status.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
//                       <p>{status.message}</p>
//                     </div>
//                   )}

//                   <form onSubmit={handleSubmit} className="space-y-6">
//                     <div className="grid sm:grid-cols-2 gap-6">
//                       <input
//                         type="text"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         placeholder="Your Name"
//                         required
//                         disabled={loading}
//                         className="w-full px-5 py-4 bg-gray-900/60 border border-gray-700 rounded-lg focus:border-red-500 text-white placeholder-gray-500 disabled:opacity-60 transition"
//                       />
//                       <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         placeholder="Your Email"
//                         required
//                         disabled={loading}
//                         className="w-full px-5 py-4 bg-gray-900/60 border border-gray-700 rounded-lg focus:border-red-500 text-white placeholder-gray-500 disabled:opacity-60 transition"
//                       />
//                     </div>

//                     <input
//                       type="tel"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       placeholder="Phone (Optional)"
//                       disabled={loading}
//                       className="w-full px-5 py-4 bg-gray-900/60 border border-gray-700 rounded-lg focus:border-red-500 text-white placeholder-gray-500 disabled:opacity-60 transition"
//                     />

//                     <input
//                       type="text"
//                       name="subject"
//                       value={formData.subject}
//                       onChange={handleChange}
//                       placeholder="Subject"
//                       required
//                       disabled={loading}
//                       className="w-full px-5 py-4 bg-gray-900/60 border border-gray-700 rounded-lg focus:border-red-500 text-white placeholder-gray-500 disabled:opacity-60 transition"
//                     />

//                     <textarea
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       rows="6"
//                       placeholder="Your Message..."
//                       required
//                       disabled={loading}
//                       className="w-full px-5 py-4 bg-gray-900/60 border border-gray-700 rounded-lg focus:border-red-500 text-white placeholder-gray-500 resize-none disabled:opacity-60 transition"
//                     ></textarea>

//                     <button
//                       type="submit"
//                       disabled={loading}
//                       className={`w-full px-10 py-5 bg-gradient-to-r from-red-600 to-rose-600 text-white font-semibold rounded-xl shadow-lg shadow-red-900/40 transition-all flex items-center justify-center gap-3 ${
//                         loading
//                           ? 'opacity-70 cursor-not-allowed'
//                           : 'hover:from-red-700 hover:to-rose-700 hover:shadow-red-600/50 hover:-translate-y-1'
//                       }`}
//                     >
//                       {loading ? (
//                         <>Sending...</>
//                       ) : (
//                         <>
//                           <Send size={20} /> Send Message
//                         </>
//                       )}
//                     </button>
//                   </form>
//                 </motion.div>

//                 {/* Google Map */}
//                 <motion.div
//                   initial={{ opacity: 0, x: 50 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.8, delay: 0.2 }}
//                   viewport={{ once: true }}
//                   className="bg-gray-950/70 border border-gray-800 rounded-2xl overflow-hidden shadow-2xl shadow-red-950/30 h-96"
//                 >
//                   <iframe
//                     title="ATLA Knots Office Location - MP Nagar, Bhopal"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.058!2d77.430!3d23.199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39631f8a00000001%3A0x0!2sM.P.+Nagar+Zone+2%2C+Bhopal%2C+Madhya+Pradesh+462011!5e0!3m2!1sen!2sin!4v1738000000000!5m2!1sen!2sin"
//                     width="100%"
//                     height="100%"
//                     style={{ border: 0 }}
//                     allowFullScreen=""
//                     loading="lazy"
//                     referrerPolicy="no-referrer-when-downgrade"
//                   ></iframe>
//                 </motion.div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React, { useCallback, useState } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion } from "framer-motion";
import { Mail, Phone, Building2, Clock, Send } from "lucide-react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Don't forget to import CSS

// Particles config (unchanged - red theme)
const particlesOptions = {
  fullScreen: { enable: true, zIndex: -1 },
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
    color: { value: ["#ef4444", "#f87171", "#dc2626"] },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.2,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: { default: "bounce" },
      random: true,
      speed: 1.3,
      straight: false,
    },
    number: { density: { enable: true, area: 800 }, value: 80 },
    opacity: { value: 0.5 },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 5 } },
  },
  detectRetina: true,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 14 },
  },
};

const Contact = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const [formData, setFormData] = useState({
    usernamee: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "https://atla-knots-solution-admin.onrender.com/api/contact/create",
        formData,
        {
          headers: { "Content-Type": "application/json" },
        },
      );

      // Success toast
      toast.success(
        "Message sent successfully! We will get back to you soon.",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        },
      );

      // Reset form
      setFormData({ usernamee: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Contact form error:", error);

      const errorMsg =
        error.response?.data?.message ||
        error.response?.data?.error ||
        "Something went wrong. Please try again.";

      // Error toast
      toast.error(errorMsg, {
        position: "top-right",
        autoClose: 6000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-gray-100 overflow-hidden">
      {/* Add ToastContainer here */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <Particles
        id="tsparticles-contact"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0 z-0"
      />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 lg:py-40">
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-red-950/30 to-red-900/10 pointer-events-none"></div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              >
                <span className="bg-gradient-to-r from-red-500 via-red-400 to-rose-500 bg-clip-text text-transparent">
                  Get in Touch
                </span>
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="mt-6 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
              >
                Have questions or ready to start a project? We're here to help.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form + Info + Map */}
        <section className="py-16 md:py-24 border-t border-gray-800 bg-black/60 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left: Contact Info */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
                  Contact Information
                </h2>

                <div className="space-y-8">
                  <div className="flex items-start gap-5">
                    <div className="p-4 bg-red-900/20 border border-red-700/40 rounded-xl">
                      <Building2 className="h-7 w-7 text-red-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        Our Office
                      </h3>
                      <p className="mt-2 text-gray-300 leading-relaxed">
                        103, Goyal Vihar,
                        <br />
                        Plot No 31-C, Zone 2,
                        <br />
                        M.P. Nagar, Bhopal - 462011
                        <br />
                        Madhya Pradesh, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="p-4 bg-red-900/20 border border-red-700/40 rounded-xl">
                      <Phone className="h-7 w-7 text-red-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        Phone
                      </h3>
                      <p className="mt-2 text-gray-300">
                        <a
                          href="tel:+917869636070"
                          className="hover:text-red-400 transition"
                        >
                          +91 78696 36070
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="p-4 bg-red-900/20 border border-red-700/40 rounded-xl">
                      <Mail className="h-7 w-7 text-red-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        Email
                      </h3>
                      <p className="mt-2 text-gray-300">
                        <a
                          href="mailto:ATLAknotssolution@gmail.com"
                          className="hover:text-red-400 transition"
                        >
                          ATLAknotssolution@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="p-4 bg-red-900/20 border border-red-700/40 rounded-xl">
                      <Clock className="h-7 w-7 text-red-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        Working Hours
                      </h3>
                      <p className="mt-2 text-gray-300">
                        Mon – Sat: 10:00 AM – 7:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right: Form */}
              <div className="space-y-12">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-gray-950/70 border border-gray-800 rounded-2xl p-8 md:p-10 backdrop-blur-sm shadow-2xl shadow-red-950/30"
                >
                  <h2 className="text-3xl font-bold text-white mb-8">
                    Send Us a Message
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <input
                        type="text"
                        name="usernamee"
                        value={formData.usernamee}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        disabled={loading}
                        className="w-full px-5 py-4 bg-gray-900/60 border border-gray-700 rounded-lg focus:border-red-500 text-white placeholder-gray-500 disabled:opacity-60 transition"
                      />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                        disabled={loading}
                        className="w-full px-5 py-4 bg-gray-900/60 border border-gray-700 rounded-lg focus:border-red-500 text-white placeholder-gray-500 disabled:opacity-60 transition"
                      />
                    </div>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone (Optional)"
                      disabled={loading}
                      className="w-full px-5 py-4 bg-gray-900/60 border border-gray-700 rounded-lg focus:border-red-500 text-white placeholder-gray-500 disabled:opacity-60 transition"
                    />

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      placeholder="Your Message..."
                      required
                      disabled={loading}
                      className="w-full px-5 py-4 bg-gray-900/60 border border-gray-700 rounded-lg focus:border-red-500 text-white placeholder-gray-500 resize-none disabled:opacity-60 transition"
                    ></textarea>

                    <button
                      type="submit"
                      disabled={loading}
                      className={`w-full px-10 py-5 bg-gradient-to-r from-red-600 to-rose-600 text-white font-semibold rounded-xl shadow-lg shadow-red-900/40 transition-all flex items-center justify-center gap-3 ${
                        loading
                          ? "opacity-70 cursor-not-allowed"
                          : "hover:from-red-700 hover:to-rose-700 hover:shadow-red-600/50 hover:-translate-y-1"
                      }`}
                    >
                      {loading ? (
                        <>Sending...</>
                      ) : (
                        <>
                          <Send size={20} /> Send Message
                        </>
                      )}
                    </button>
                  </form>
                </motion.div>

                {/* Google Map */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gray-950/70 border border-gray-800 rounded-2xl overflow-hidden shadow-2xl shadow-red-950/30 h-96"
                >
                  <iframe
                    title="ATLA Knots Office Location - MP Nagar, Bhopal"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.058!2d77.430!3d23.199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39631f8a00000001%3A0x0!2sM.P.+Nagar+Zone+2%2C+Bhopal%2C+Madhya+Pradesh+462011!5e0!3m2!1sen!2sin!4v1738000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
