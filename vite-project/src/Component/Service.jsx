


// src/pages/Services.jsx
import React, { useCallback, useRef, Suspense } from 'react';
import { motion } from 'framer-motion';
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

// Particles Config (red theme)
const particlesOptions = {
  fullScreen: { enable: false },
  background: { color: { value: 'transparent' } },
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: { enable: true, mode: 'repulse' },
      onClick: { enable: true, mode: 'push' },
      resize: true,
    },
    modes: {
      repulse: { distance: 120, duration: 0.4 },
      push: { quantity: 4 },
    },
  },
  particles: {
    color: { value: ['#ef4444', '#f87171', '#dc2626', '#b91c1c'] },
    links: { color: '#ffffff', distance: 140, enable: true, opacity: 0.18, width: 1 },
    move: { enable: true, speed: 1.2, direction: 'none', random: true, outModes: 'bounce' },
    number: { density: { enable: true, area: 800 }, value: 70 },
    opacity: { value: 0.45, random: true },
    shape: { type: 'circle' },
    size: { value: { min: 1, max: 5 } },
  },
  detectRetina: true,
};

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 70 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.3 },
  },
};

const cardHover = {
  rest: {
    scale: 1,
    y: 0,
    boxShadow: '0 10px 15px -3px rgba(0,0,0,0.3)',
  },
  hover: {
    scale: 1.04,
    y: -8,
    boxShadow: '0 25px 50px -12px rgba(239, 68, 68, 0.4)',
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

const imageHover = {
  rest: { scale: 1.05 },
  hover: { scale: 1.12, transition: { duration: 0.7, ease: 'easeOut' } },
};

const Service = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-gray-100 overflow-hidden scrollbar-hide ">
      {/* Custom scrollbar hide styles */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      {/* Background Container - contained, not fixed */}
      <div className="absolute inset-0 z-0" style={{ height: 'calc(100vh + 2000px)' }}>
        {/* 3D Canvas Background */}
        <div className="absolute inset-0 z-0">
          <Canvas>
            <Suspense fallback={null}>
              <Scene3D />
            </Suspense>
          </Canvas>
        </div>

        {/* Background Particles */}
        <div className="absolute inset-0 z-0">
          <Particles
            id="tsparticles-services"
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

        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 z-10 pointer-events-none" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16 md:py-28">
        {/* Hero Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center mb-20 md:mb-32"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight pt-30"
          >
            <span className="bg-gradient-to-r from-red-500 via-rose-500 to-red-400 bg-clip-text text-transparent">
              Our Services
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed"
          >
            End-to-end IT solutions & premium BPO services — empowering your business with innovation, reliability, and scale.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-8 h-1.5 w-36 bg-gradient-to-r from-red-600 to-rose-600 mx-auto rounded-full"
          />
        </motion.div>

        {/* IT Services Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mb-28 md:mb-40"
        >
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Image */}
            <motion.div
              variants={fadeInUp}
              className="w-full lg:w-1/2 rounded-3xl overflow-hidden border border-red-900/40 shadow-2xl shadow-red-950/30 relative group"
            >
              <motion.div
                initial="rest"
                whileHover="hover"
                variants={imageHover}
                className="w-full h-96 lg:h-[920px]"
              >
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80"
                  alt="Modern development & code"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            </motion.div>

            {/* Content */}
            <div className="w-full lg:w-1/2 space-y-10 pt-80">
              <motion.h2
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-400 to-rose-500 bg-clip-text text-transparent"
              >
                Information Technology Services
              </motion.h2>

              <motion.p variants={fadeInUp} className="text-xl text-gray-300 leading-relaxed">
                Full-cycle development — from concept to deployment and long-term success.
              </motion.p>

              <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Website & Enterprise Apps", desc: "Custom portals, dashboards, ERP & scalable solutions" },
                  { title: "Testing & Deployment", desc: "Automated & manual QA, CI/CD, smooth production rollout" },
                  { title: "Application Maintenance (AMS)", desc: "Proactive monitoring, updates, performance tuning" },
                  { title: "Digital Transformation", desc: "Cloud migration, legacy modernization, strategy" },
                  { title: "Government & PSU Projects", desc: "Secure systems, citizen portals, compliance-focused delivery" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    initial="rest"
                    animate="rest"
                    whileHover="hover"
                    className="bg-gray-950/70 backdrop-blur-md border border-red-900/40 rounded-2xl p-7 hover:border-red-600/60 transition-all"
                  >
                    <h4 className="text-xl font-semibold text-white mb-3">{item.title}</h4>
                    <p className="text-gray-400">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Tech Stack */}
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 mt-8">
                {['Java + Spring Boot', 'React / Next.js', 'Node.js', 'PostgreSQL / MongoDB', 'AWS / Azure'].map((tech) => (
                  <span
                    key={tech}
                    className="px-5 py-2.5 bg-red-950/40 border border-red-800/50 rounded-full text-red-300 text-sm font-medium backdrop-blur-sm"
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
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
            {/* Image */}
            <motion.div
              variants={fadeInUp}
              className="w-full lg:w-1/2 rounded-3xl overflow-hidden border border-red-900/40 shadow-2xl shadow-red-950/30 relative group"
            >
              <motion.div
                initial="rest"
                whileHover="hover"
                variants={imageHover}
                className="w-full h-96 lg:h-[620px]"
              >
                <img
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80"
                  alt="Professional support team"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            </motion.div>

            {/* Content */}
            <div className="w-full lg:w-1/2 space-y-10">
              <motion.h2
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-400 to-rose-500 bg-clip-text text-transparent"
              >
                Business Process Outsourcing (BPO)
              </motion.h2>

              <motion.p variants={fadeInUp} className="text-xl text-gray-300 leading-relaxed">
                High-quality customer support, data operations & back-office excellence — 24/7 ready.
              </motion.p>

              <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Voice • Chat • Email Support",
                    desc: "Inbound / outbound calls, live chat, structured email handling",
                  },
                  {
                    title: "Cataloguing & Data Enrichment",
                    desc: "Product descriptions, SEO tags, image validation, attribute correction",
                  },
                  {
                    title: "Level 2 (L2) Support",
                    desc: "Advanced troubleshooting, root cause analysis, escalated issue resolution",
                  },
                  {
                    title: "Quality & Infrastructure",
                    desc: "SLA compliance, regular audits, coaching, fully equipped call centers",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    initial="rest"
                    animate="rest"
                    whileHover="hover"
                    className="bg-gray-950/70 backdrop-blur-md border border-red-900/40 rounded-2xl p-7 hover:border-red-600/60 transition-all"
                  >
                    <h4 className="text-xl font-semibold text-white mb-3">{item.title}</h4>
                    <p className="text-gray-400">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="mt-24 md:mt-32 text-center"
        >
          <a
            href="/contact"
            className="inline-block px-12 py-6 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white text-xl font-semibold rounded-2xl shadow-2xl shadow-red-900/50 transition-all transform hover:-translate-y-2 active:scale-95"
          >
            Ready to Elevate Your Business? → Get in Touch
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Service;