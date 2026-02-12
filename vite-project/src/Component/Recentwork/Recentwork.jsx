// // src/pages/RecentWork.jsx
// import React, { useCallback, useRef, Suspense, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import Particles from '@tsparticles/react';
// import { loadSlim } from '@tsparticles/slim';
// import { Canvas, useFrame } from "@react-three/fiber";
// import {
//   OrbitControls,
//   Float,
//   MeshDistortMaterial,
//   Sphere,
//   Box,
//   Environment,
//   PerspectiveCamera,
// } from "@react-three/drei";
// import * as THREE from "three";
// import {
//   Code,
//   Smartphone,
//   Globe,
//   ShoppingCart,
//   Building2,
//   Hospital,
//   GraduationCap,
//   Truck,
//   ExternalLink,
//   ArrowRight,
//   Calendar,
//   Users,
//   Award,
//   CheckCircle,
//   X,
// } from "lucide-react";

// // ────────────────────────────────────────────────
// // 3D COMPONENTS
// // ────────────────────────────────────────────────

// const AnimatedSphere = ({ position, color }) => {
//   const meshRef = useRef();

//   useFrame((state) => {
//     if (meshRef.current) {
//       meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
//       meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
//     }
//   });

//   return (
//     <Float speed={2} rotationIntensity={1} floatIntensity={2}>
//       <Sphere ref={meshRef} args={[1, 64, 64]} position={position}>
//         <MeshDistortMaterial
//           color={color}
//           distort={0.4}
//           speed={2}
//           roughness={0.2}
//           metalness={0.8}
//         />
//       </Sphere>
//     </Float>
//   );
// };

// const RotatingCubes = () => {
//   const groupRef = useRef();

//   useFrame((state) => {
//     if (groupRef.current) {
//       groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
//     }
//   });

//   const cubes = [];
//   const radius = 3;
//   const count = 8;

//   for (let i = 0; i < count; i++) {
//     const angle = (i / count) * Math.PI * 2;
//     const x = Math.cos(angle) * radius;
//     const z = Math.sin(angle) * radius;

//     cubes.push(
//       <Box key={i} position={[x, 0, z]} args={[0.3, 0.3, 0.3]}>
//         <meshStandardMaterial color="#dc2626" metalness={0.8} roughness={0.2} />
//       </Box>
//     );
//   }

//   return <group ref={groupRef}>{cubes}</group>;
// };

// const FloatingParticles3D = () => {
//   const particlesRef = useRef();
//   const count = 200;

//   const positions = new Float32Array(count * 3);
//   const colors = new Float32Array(count * 3);

//   for (let i = 0; i < count; i++) {
//     positions[i * 3] = (Math.random() - 0.5) * 20;
//     positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
//     positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

//     colors[i * 3] = 0.86;
//     colors[i * 3 + 1] = 0.15;
//     colors[i * 3 + 2] = 0.15;
//   }

//   useFrame((state) => {
//     if (particlesRef.current) {
//       particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
//       particlesRef.current.rotation.x = state.clock.getElapsedTime() * 0.03;
//     }
//   });

//   return (
//     <points ref={particlesRef}>
//       <bufferGeometry>
//         <bufferAttribute
//           attach="attributes-position"
//           count={count}
//           array={positions}
//           itemSize={3}
//         />
//         <bufferAttribute
//           attach="attributes-color"
//           count={count}
//           array={colors}
//           itemSize={3}
//         />
//       </bufferGeometry>
//       <pointsMaterial size={0.05} vertexColors transparent opacity={0.6} />
//     </points>
//   );
// };

// const Scene3D = () => {
//   return (
//     <>
//       <PerspectiveCamera makeDefault position={[0, 0, 8]} />
//       <OrbitControls
//         enableZoom={false}
//         enablePan={false}
//         autoRotate
//         autoRotateSpeed={0.5}
//         maxPolarAngle={Math.PI / 2}
//         minPolarAngle={Math.PI / 2}
//       />
//       <ambientLight intensity={0.5} />
//       <pointLight position={[10, 10, 10]} intensity={1} color="#dc2626" />
//       <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ef4444" />
//       <spotLight
//         position={[0, 5, 0]}
//         angle={0.3}
//         penumbra={1}
//         intensity={1}
//         color="#f87171"
//       />
//       <FloatingParticles3D />
//       <AnimatedSphere position={[-3, 2, -2]} color="#dc2626" />
//       <AnimatedSphere position={[3, -2, -1]} color="#ef4444" />
//       <AnimatedSphere position={[0, 3, 1]} color="#f87171" />
//       <RotatingCubes />
//       <Environment preset="city" />
//     </>
//   );
// };

// // ────────────────────────────────────────────────
// // PARTICLES CONFIGURATION
// // ────────────────────────────────────────────────

// const particlesOptions = {
//   fullScreen: { enable: false },
//   background: { color: { value: "transparent" } },
//   fpsLimit: 60,
//   interactivity: {
//     events: {
//       onClick: { enable: true, mode: "push" },
//       onHover: { enable: true, mode: "repulse" },
//       resize: true,
//     },
//     modes: {
//       push: { quantity: 4 },
//       repulse: { distance: 150, duration: 0.4 },
//     },
//   },
//   particles: {
//     color: { value: ["#dc2626", "#ef4444", "#f87171"] },
//     links: {
//       color: "#dc2626",
//       distance: 140,
//       enable: true,
//       opacity: 0.15,
//       width: 1,
//     },
//     move: {
//       direction: "none",
//       enable: true,
//       outModes: { default: "bounce" },
//       random: true,
//       speed: 1.2,
//       straight: false,
//     },
//     number: { density: { enable: true, area: 800 }, value: 70 },
//     opacity: { value: 0.3 },
//     shape: { type: "circle" },
//     size: { value: { min: 1, max: 3 } },
//   },
//   detectRetina: true,
// };

// // ────────────────────────────────────────────────
// // ANIMATION VARIANTS
// // ────────────────────────────────────────────────

// const fadeInUp = {
//   hidden: { opacity: 0, y: 60 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
// };

// const fadeInLeft = {
//   hidden: { opacity: 0, x: -60 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
// };

// const fadeInRight = {
//   hidden: { opacity: 0, x: 60 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
// };

// const scaleIn = {
//   hidden: { opacity: 0, scale: 0.8 },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

// const staggerContainer = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.15 } },
// };

// // ────────────────────────────────────────────────
// // PROJECT DATA
// // ────────────────────────────────────────────────

// const projects = [
//   {
//     id: 1,
//     title: "E-Commerce Platform",
//     category: "Web Application",
//     client: "RetailCo India",
//     year: "2024",
//     icon: ShoppingCart,
//     image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&w=800&q=80",
//     description: "Complete e-commerce solution with inventory management, payment gateway integration, and real-time order tracking. Built for scalability with microservices architecture.",
//     technologies: ["React", "Node.js", "MongoDB", "AWS", "Stripe"],
//     features: [
//       "Multi-vendor marketplace",
//       "Real-time inventory sync",
//       "Advanced search & filters",
//       "Automated email notifications",
//       "Analytics dashboard"
//     ],
//     results: [
//       "40% increase in conversions",
//       "10,000+ active users",
//       "99.9% uptime achieved"
//     ],
//     link: "#",
//     color: "from-red-500 to-orange-500"
//   },
//   {
//     id: 2,
//     title: "Healthcare Management System",
//     category: "Enterprise Application",
//     client: "HealthPlus Hospitals",
//     year: "2024",
//     icon: Hospital,
//     image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
//     description: "Comprehensive hospital management system handling patient records, appointment scheduling, billing, and pharmacy management with HIPAA compliance.",
//     technologies: ["Java Spring Boot", "Angular", "PostgreSQL", "Docker"],
//     features: [
//       "Patient portal & EMR",
//       "Appointment scheduling",
//       "Billing & insurance claims",
//       "Pharmacy integration",
//       "Doctor dashboard"
//     ],
//     results: [
//       "50+ departments connected",
//       "5000+ daily appointments",
//       "30% faster patient processing"
//     ],
//     link: "#",
//     color: "from-red-600 to-pink-600"
//   },
//   {
//     id: 3,
//     title: "Government Portal",
//     category: "Public Sector",
//     client: "Ministry of Digital India",
//     year: "2023",
//     icon: Building2,
//     image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
//     description: "Citizen services portal providing online access to government services, document verification, and complaint management with multi-language support.",
//     technologies: ["React", "Java", "Oracle DB", "Red Hat", "Aadhaar API"],
//     features: [
//       "Multi-language interface",
//       "Aadhaar authentication",
//       "Document verification",
//       "Grievance redressal",
//       "Mobile responsive"
//     ],
//     results: [
//       "2M+ citizens registered",
//       "15+ services digitized",
//       "80% reduction in processing time"
//     ],
//     link: "#",
//     color: "from-red-700 to-rose-700"
//   },
//   {
//     id: 4,
//     title: "Education Platform",
//     category: "EdTech Solution",
//     client: "LearnHub Academy",
//     year: "2024",
//     icon: GraduationCap,
//     image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
//     description: "Interactive learning management system with live classes, assignments, quizzes, and progress tracking for students and teachers.",
//     technologies: ["Next.js", "Node.js", "MySQL", "WebRTC", "AWS S3"],
//     features: [
//       "Live video classes",
//       "Interactive assignments",
//       "Progress analytics",
//       "Parent dashboard",
//       "Certificate generation"
//     ],
//     results: [
//       "25,000+ students enrolled",
//       "500+ courses published",
//       "95% satisfaction rate"
//     ],
//     link: "#",
//     color: "from-orange-600 to-red-600"
//   },
//   {
//     id: 5,
//     title: "Logistics & Fleet Management",
//     category: "Mobile + Web App",
//     client: "FastTrack Logistics",
//     year: "2023",
//     icon: Truck,
//     image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&w=800&q=80",
//     description: "Real-time fleet tracking system with route optimization, driver management, and automated delivery notifications.",
//     technologies: ["React Native", "Python", "PostgreSQL", "Google Maps API"],
//     features: [
//       "Real-time GPS tracking",
//       "Route optimization",
//       "Driver mobile app",
//       "Automated notifications",
//       "Fuel consumption analytics"
//     ],
//     results: [
//       "200+ vehicles tracked",
//       "25% fuel cost reduction",
//       "40% faster deliveries"
//     ],
//     link: "#",
//     color: "from-red-500 to-rose-500"
//   },
//   {
//     id: 6,
//     title: "Banking Mobile App",
//     category: "FinTech Application",
//     client: "SecureBank Ltd.",
//     year: "2024",
//     icon: Smartphone,
//     image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
//     description: "Secure mobile banking application with biometric authentication, instant transfers, bill payments, and investment tracking.",
//     technologies: ["Flutter", "Java Spring", "MySQL", "Redis", "Firebase"],
//     features: [
//       "Biometric authentication",
//       "Instant money transfer",
//       "Bill payments",
//       "Investment portfolio",
//       "Card management"
//     ],
//     results: [
//       "100,000+ downloads",
//       "50,000+ daily transactions",
//       "4.8★ app store rating"
//     ],
//     link: "#",
//     color: "from-rose-600 to-red-600"
//   }
// ];

// // ────────────────────────────────────────────────
// // MAIN COMPONENT
// // ────────────────────────────────────────────────

// const RecentWork = () => {
//   const particlesInit = useCallback(async (engine) => {
//     await loadSlim(engine);
//   }, []);

//   const [selectedProject, setSelectedProject] = useState(null);
//   const [filter, setFilter] = useState("All");

//   const categories = ["All", "Web Application", "Enterprise Application", "Mobile + Web App", "Public Sector", "EdTech Solution", "FinTech Application"];

//   const filteredProjects = filter === "All" 
//     ? projects 
//     : projects.filter(p => p.category === filter);

//   return (
//     <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
//       {/* 3D Canvas Background */}
//       <div className="fixed inset-0 z-0">
//         <Canvas>
//           <Suspense fallback={null}>
//             <Scene3D />
//           </Suspense>
//         </Canvas>
//       </div>

//       {/* Particles Background */}
//       <div className="fixed inset-0 z-0">
//         <Particles
//           id="tsparticles-work"
//           init={particlesInit}
//           options={particlesOptions}
//         />
//       </div>

//       {/* Gradient Overlays */}
//       <div className="fixed inset-0 pointer-events-none z-0">
//         <div className="absolute top-20 right-0 w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-pulse" />
//         <div className="absolute bottom-40 left-0 w-96 h-96 bg-red-800/15 rounded-full blur-3xl animate-pulse delay-1000" />
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-3xl" />
//       </div>

//       {/* Dark overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 z-10 pointer-events-none" />

//       <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
//         {/* Hero Section */}
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={staggerContainer}
//           className="text-center mb-20"
//         >
//           <motion.h1
//             variants={fadeInUp}
//             className="text-5xl md:text-6xl lg:text-7xl font-black mb-6"
//           >
//             OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-red-400">RECENT WORK</span>
//           </motion.h1>

//           <motion.p
//             variants={fadeInUp}
//             className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
//           >
//             Delivering exceptional digital solutions across industries — from startups to enterprises.
//           </motion.p>

//           <motion.div
//             variants={fadeInUp}
//             className="mt-8 h-1.5 w-36 bg-gradient-to-r from-red-600 to-rose-600 mx-auto rounded-full"
//           />
//         </motion.div>

//         {/* Filter Tabs */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeInUp}
//           className="flex flex-wrap justify-center gap-3 mb-16"
//         >
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setFilter(cat)}
//               className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
//                 filter === cat
//                   ? "bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-lg shadow-red-900/50"
//                   : "bg-gray-900/60 text-gray-300 border border-gray-800 hover:border-red-600/50"
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </motion.div>

//         {/* Stats */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={staggerContainer}
//           className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
//         >
//           {[
//             { num: "50+", label: "Projects Delivered" },
//             { num: "100+", label: "Happy Clients" },
//             { num: "25+", label: "Industries Served" },
//             { num: "99.9%", label: "Success Rate" },
//           ].map((stat, i) => (
//             <motion.div
//               key={i}
//               variants={scaleIn}
//               className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-red-900/30 rounded-2xl p-6 text-center"
//             >
//               <div className="text-4xl font-black text-red-500 mb-2">{stat.num}</div>
//               <p className="text-gray-400 text-sm">{stat.label}</p>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Projects Grid */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           variants={staggerContainer}
//           className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
//         >
//           <AnimatePresence mode="wait">
//             {filteredProjects.map((project, index) => (
//               <motion.div
//                 key={project.id}
//                 variants={scaleIn}
//                 initial="hidden"
//                 animate="visible"
//                 exit={{ opacity: 0, scale: 0.8 }}
//                 whileHover={{ y: -10 }}
//                 onClick={() => setSelectedProject(project)}
//                 className="group cursor-pointer"
//               >
//                 <div className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm border border-red-900/30 rounded-3xl overflow-hidden hover:border-red-600/60 transition-all duration-500 hover:shadow-2xl hover:shadow-red-900/40">
//                   {/* Image */}
//                   <div className="relative h-64 overflow-hidden">
//                     <img
//                       src={project.image}
//                       alt={project.title}
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                     />
//                     <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-40 group-hover:opacity-60 transition-opacity`} />
//                     <div className="absolute top-4 right-4">
//                       <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-full">
//                         <project.icon className="w-5 h-5 text-red-400" />
//                       </div>
//                     </div>
//                   </div>

//                   {/* Content */}
//                   <div className="p-6">
//                     <div className="flex items-center justify-between mb-3">
//                       <span className="text-red-400 text-sm font-semibold">{project.category}</span>
//                       <span className="text-gray-500 text-sm flex items-center gap-1">
//                         <Calendar className="w-4 h-4" />
//                         {project.year}
//                       </span>
//                     </div>

//                     <h3 className="text-2xl font-bold mb-2 group-hover:text-red-400 transition-colors">
//                       {project.title}
//                     </h3>

//                     <p className="text-gray-400 text-sm mb-4 line-clamp-2">
//                       {project.description}
//                     </p>

//                     <div className="flex flex-wrap gap-2 mb-4">
//                       {project.technologies.slice(0, 3).map((tech, i) => (
//                         <span
//                           key={i}
//                           className="px-3 py-1 bg-red-950/40 border border-red-800/50 rounded-full text-red-300 text-xs"
//                         >
//                           {tech}
//                         </span>
//                       ))}
//                       {project.technologies.length > 3 && (
//                         <span className="px-3 py-1 bg-gray-800/50 rounded-full text-gray-400 text-xs">
//                           +{project.technologies.length - 3}
//                         </span>
//                       )}
//                     </div>

//                     <button className="flex items-center gap-2 text-red-400 font-semibold group-hover:gap-3 transition-all">
//                       View Details
//                       <ArrowRight className="w-4 h-4" />
//                     </button>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </motion.div>

//         {/* CTA Section */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeInUp}
//           className="text-center py-20"
//         >
//           <h2 className="text-4xl md:text-5xl font-black mb-6">
//             Ready to Start Your <span className="text-red-500">Project</span>?
//           </h2>
//           <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
//             Let's build something amazing together. Get in touch with our team today.
//           </p>
//           <a
//             href="/contact"
//             className="inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 rounded-full text-xl font-bold shadow-2xl shadow-red-900/50 transition-all hover:-translate-y-2"
//           >
//             Let's Talk
//             <ArrowRight className="w-6 h-6" />
//           </a>
//         </motion.div>
//       </div>

//       {/* Project Detail Modal */}
//       <AnimatePresence>
//         {selectedProject && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setSelectedProject(null)}
//             className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-6"
//           >
//             <motion.div
//               initial={{ scale: 0.9, y: 50 }}
//               animate={{ scale: 1, y: 0 }}
//               exit={{ scale: 0.9, y: 50 }}
//               onClick={(e) => e.stopPropagation()}
//               className="bg-gradient-to-br from-gray-900 to-black border border-red-900/40 rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
//             >
//               {/* Close Button */}
//               <button
//                 onClick={() => setSelectedProject(null)}
//                 className="absolute top-6 right-6 bg-red-600/20 hover:bg-red-600 p-3 rounded-full transition-colors z-10"
//               >
//                 <X className="w-6 h-6" />
//               </button>

//               {/* Image Header */}
//               <div className="relative h-96">
//                 <img
//                   src={selectedProject.image}
//                   alt={selectedProject.title}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className={`absolute inset-0 bg-gradient-to-t ${selectedProject.color} opacity-50`} />
//               </div>

//               {/* Content */}
//               <div className="p-8 md:p-12">
//                 <div className="flex items-start justify-between mb-6">
//                   <div>
//                     <div className="flex items-center gap-4 mb-3">
//                       <span className="px-4 py-2 bg-red-950/40 border border-red-800/50 rounded-full text-red-300 text-sm font-semibold">
//                         {selectedProject.category}
//                       </span>
//                       <span className="text-gray-500 flex items-center gap-2">
//                         <Calendar className="w-4 h-4" />
//                         {selectedProject.year}
//                       </span>
//                     </div>
//                     <h2 className="text-4xl md:text-5xl font-black mb-2">{selectedProject.title}</h2>
//                     <p className="text-xl text-gray-400">Client: {selectedProject.client}</p>
//                   </div>
//                   <selectedProject.icon className="w-16 h-16 text-red-500" />
//                 </div>

//                 <p className="text-lg text-gray-300 leading-relaxed mb-8">
//                   {selectedProject.description}
//                 </p>

//                 {/* Technologies */}
//                 <div className="mb-8">
//                   <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
//                     <Code className="w-6 h-6 text-red-500" />
//                     Technologies Used
//                   </h3>
//                   <div className="flex flex-wrap gap-3">
//                     {selectedProject.technologies.map((tech, i) => (
//                       <span
//                         key={i}
//                         className="px-5 py-2.5 bg-red-950/40 border border-red-800/50 rounded-full text-red-300 font-medium"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Features */}
//                 <div className="mb-8">
//                   <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
//                     <CheckCircle className="w-6 h-6 text-red-500" />
//                     Key Features
//                   </h3>
//                   <div className="grid md:grid-cols-2 gap-3">
//                     {selectedProject.features.map((feature, i) => (
//                       <div key={i} className="flex items-center gap-3 text-gray-300">
//                         <div className="w-2 h-2 bg-red-500 rounded-full" />
//                         {feature}
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Results */}
//                 <div className="mb-8">
//                   <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
//                     <Award className="w-6 h-6 text-red-500" />
//                     Results & Impact
//                   </h3>
//                   <div className="grid md:grid-cols-3 gap-4">
//                     {selectedProject.results.map((result, i) => (
//                       <div
//                         key={i}
//                         className="bg-gradient-to-br from-red-950/40 to-transparent border border-red-800/50 rounded-2xl p-6 text-center"
//                       >
//                         <p className="text-2xl font-bold text-red-400 mb-2">{result.split(' ')[0]}</p>
//                         <p className="text-sm text-gray-300">{result.split(' ').slice(1).join(' ')}</p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* CTA Button */}
//                 <a
//                   href={selectedProject.link}
//                   className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 rounded-full font-bold transition-all hover:shadow-xl hover:shadow-red-900/50"
//                 >
//                   View Live Project
//                   <ExternalLink className="w-5 h-5" />
//                 </a>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default RecentWork;


// src/pages/RecentWork.jsx
import React, { useCallback, useRef, Suspense, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
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
import {
  Code,
  Smartphone,
  Globe,
  ShoppingCart,
  Building2,
  Hospital,
  GraduationCap,
  Truck,
  ExternalLink,
  ArrowRight,
  Calendar,
  Users,
  Award,
  CheckCircle,
  X,
} from "lucide-react";

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

const Scene3D = () => {
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
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

// ────────────────────────────────────────────────
// PROJECT DATA
// ────────────────────────────────────────────────

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Application",
    client: "RetailCo India",
    year: "2024",
    icon: ShoppingCart,
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&w=800&q=80",
    description: "Complete e-commerce solution with inventory management, payment gateway integration, and real-time order tracking. Built for scalability with microservices architecture.",
    technologies: ["React", "Node.js", "MongoDB", "AWS", "Stripe"],
    features: [
      "Multi-vendor marketplace",
      "Real-time inventory sync",
      "Advanced search & filters",
      "Automated email notifications",
      "Analytics dashboard"
    ],
    results: [
      "40% increase in conversions",
      "10,000+ active users",
      "99.9% uptime achieved"
    ],
    link: "#",
    color: "from-red-500 to-orange-500"
  },
  {
    id: 2,
    title: "Healthcare Management System",
    category: "Enterprise Application",
    client: "HealthPlus Hospitals",
    year: "2024",
    icon: Hospital,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    description: "Comprehensive hospital management system handling patient records, appointment scheduling, billing, and pharmacy management with HIPAA compliance.",
    technologies: ["Java Spring Boot", "Angular", "PostgreSQL", "Docker"],
    features: [
      "Patient portal & EMR",
      "Appointment scheduling",
      "Billing & insurance claims",
      "Pharmacy integration",
      "Doctor dashboard"
    ],
    results: [
      "50+ departments connected",
      "5000+ daily appointments",
      "30% faster patient processing"
    ],
    link: "#",
    color: "from-red-600 to-pink-600"
  },
  {
    id: 3,
    title: "Government Portal",
    category: "Public Sector",
    client: "Ministry of Digital India",
    year: "2023",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    description: "Citizen services portal providing online access to government services, document verification, and complaint management with multi-language support.",
    technologies: ["React", "Java", "Oracle DB", "Red Hat", "Aadhaar API"],
    features: [
      "Multi-language interface",
      "Aadhaar authentication",
      "Document verification",
      "Grievance redressal",
      "Mobile responsive"
    ],
    results: [
      "2M+ citizens registered",
      "15+ services digitized",
      "80% reduction in processing time"
    ],
    link: "#",
    color: "from-red-700 to-rose-700"
  },
  {
    id: 4,
    title: "Education Platform",
    category: "EdTech Solution",
    client: "LearnHub Academy",
    year: "2024",
    icon: GraduationCap,
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
    description: "Interactive learning management system with live classes, assignments, quizzes, and progress tracking for students and teachers.",
    technologies: ["Next.js", "Node.js", "MySQL", "WebRTC", "AWS S3"],
    features: [
      "Live video classes",
      "Interactive assignments",
      "Progress analytics",
      "Parent dashboard",
      "Certificate generation"
    ],
    results: [
      "25,000+ students enrolled",
      "500+ courses published",
      "95% satisfaction rate"
    ],
    link: "#",
    color: "from-orange-600 to-red-600"
  },
  {
    id: 5,
    title: "Logistics & Fleet Management",
    category: "Mobile + Web App",
    client: "FastTrack Logistics",
    year: "2023",
    icon: Truck,
    image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&w=800&q=80",
    description: "Real-time fleet tracking system with route optimization, driver management, and automated delivery notifications.",
    technologies: ["React Native", "Python", "PostgreSQL", "Google Maps API"],
    features: [
      "Real-time GPS tracking",
      "Route optimization",
      "Driver mobile app",
      "Automated notifications",
      "Fuel consumption analytics"
    ],
    results: [
      "200+ vehicles tracked",
      "25% fuel cost reduction",
      "40% faster deliveries"
    ],
    link: "#",
    color: "from-red-500 to-rose-500"
  },
  {
    id: 6,
    title: "Banking Mobile App",
    category: "FinTech Application",
    client: "SecureBank Ltd.",
    year: "2024",
    icon: Smartphone,
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    description: "Secure mobile banking application with biometric authentication, instant transfers, bill payments, and investment tracking.",
    technologies: ["Flutter", "Java Spring", "MySQL", "Redis", "Firebase"],
    features: [
      "Biometric authentication",
      "Instant money transfer",
      "Bill payments",
      "Investment portfolio",
      "Card management"
    ],
    results: [
      "100,000+ downloads",
      "50,000+ daily transactions",
      "4.8★ app store rating"
    ],
    link: "#",
    color: "from-rose-600 to-red-600"
  }
];

// ────────────────────────────────────────────────
// MAIN COMPONENT
// ────────────────────────────────────────────────

const RecentWork = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Web Application", "Enterprise Application", "Mobile + Web App", "Public Sector", "EdTech Solution", "FinTech Application"];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Background Container - stops before footer */}
      <div className="absolute inset-0 z-0" style={{ height: 'calc(100vh + 2000px)' }}>
        {/* 3D Canvas Background */}
        <div className="absolute inset-0 z-0">
          <Canvas>
            <Suspense fallback={null}>
              <Scene3D />
            </Suspense>
          </Canvas>
        </div>

        {/* Particles Background */}
        <div className="absolute inset-0 z-0">
          <Particles
            id="tsparticles-work"
            init={particlesInit}
            options={particlesOptions}
          />
        </div>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-20 right-0 w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-40 left-0 w-96 h-96 bg-red-800/15 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-3xl" />
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 z-10 pointer-events-none" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
        {/* Hero Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center mb-20"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-6xl lg:text-7xl font-black mb-6"
          >
            OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-red-400">RECENT WORK</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Delivering exceptional digital solutions across industries — from startups to enterprises.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-8 h-1.5 w-36 bg-gradient-to-r from-red-600 to-rose-600 mx-auto rounded-full"
          />
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                filter === cat
                  ? "bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-lg shadow-red-900/50"
                  : "bg-gray-900/60 text-gray-300 border border-gray-800 hover:border-red-600/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {[
            { num: "50+", label: "Projects Delivered" },
            { num: "100+", label: "Happy Clients" },
            { num: "25+", label: "Industries Served" },
            { num: "99.9%", label: "Success Rate" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-red-900/30 rounded-2xl p-6 text-center"
            >
              <div className="text-4xl font-black text-red-500 mb-2">{stat.num}</div>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={scaleIn}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer"
              >
                <div className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm border border-red-900/30 rounded-3xl overflow-hidden hover:border-red-600/60 transition-all duration-500 hover:shadow-2xl hover:shadow-red-900/40">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-40 group-hover:opacity-60 transition-opacity`} />
                    <div className="absolute top-4 right-4">
                      <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-full">
                        <project.icon className="w-5 h-5 text-red-400" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-red-400 text-sm font-semibold">{project.category}</span>
                      <span className="text-gray-500 text-sm flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {project.year}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold mb-2 group-hover:text-red-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-red-950/40 border border-red-800/50 rounded-full text-red-300 text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1 bg-gray-800/50 rounded-full text-gray-400 text-xs">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    <button className="flex items-center gap-2 text-red-400 font-semibold group-hover:gap-3 transition-all">
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center py-20"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to Start Your <span className="text-red-500">Project</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Let's build something amazing together. Get in touch with our team today.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 rounded-full text-xl font-bold shadow-2xl shadow-red-900/50 transition-all hover:-translate-y-2"
          >
            Let's Talk
            <ArrowRight className="w-6 h-6" />
          </a>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-gray-900 to-black border border-red-900/40 rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 bg-red-600/20 hover:bg-red-600 p-3 rounded-full transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Image Header */}
              <div className="relative h-96">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${selectedProject.color} opacity-50`} />
              </div>

              {/* Content */}
              <div className="p-8 md:p-12">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-4 mb-3">
                      <span className="px-4 py-2 bg-red-950/40 border border-red-800/50 rounded-full text-red-300 text-sm font-semibold">
                        {selectedProject.category}
                      </span>
                      <span className="text-gray-500 flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {selectedProject.year}
                      </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black mb-2">{selectedProject.title}</h2>
                    <p className="text-xl text-gray-400">Client: {selectedProject.client}</p>
                  </div>
                  <selectedProject.icon className="w-16 h-16 text-red-500" />
                </div>

                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  {selectedProject.description}
                </p>

                {/* Technologies */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Code className="w-6 h-6 text-red-500" />
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-5 py-2.5 bg-red-950/40 border border-red-800/50 rounded-full text-red-300 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-red-500" />
                    Key Features
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {selectedProject.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 text-gray-300">
                        <div className="w-2 h-2 bg-red-500 rounded-full" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Award className="w-6 h-6 text-red-500" />
                    Results & Impact
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {selectedProject.results.map((result, i) => (
                      <div
                        key={i}
                        className="bg-gradient-to-br from-red-950/40 to-transparent border border-red-800/50 rounded-2xl p-6 text-center"
                      >
                        <p className="text-2xl font-bold text-red-400 mb-2">{result.split(' ')[0]}</p>
                        <p className="text-sm text-gray-300">{result.split(' ').slice(1).join(' ')}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href={selectedProject.link}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 rounded-full font-bold transition-all hover:shadow-xl hover:shadow-red-900/50"
                >
                  View Live Project
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RecentWork;