
import React, { Suspense, useCallback, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
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
import { ArrowRight } from "lucide-react";

// Import your images
import img1 from "../Mobile/img/recent3.jpg";
import img2 from "../Mobile/img/recent4.jpg";
import img3 from "../Mobile/img/recent5.jpg";
import img4 from "../Mobile/img/recent6.jpg";
import img5 from "../Mobile/img/recent1.jpg";
import img6 from "../Mobile/img/recent8.jpg";
import img7 from "../Mobile/img/recent2.jpg";
import img8 from "../Mobile/img/recent10.jpg";
import img9 from "../Mobile/img/recent11.jpg";


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
      </Box>,
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


const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};


const portfolioItems = [
  {
    id: "1561",
    title: "Parineek",
    categories: ["Consultancy", "Global Business", "Industrial", "UI/UX"],
    image: img1,
  },
  {
    id: "1554",
    title: "Nova Quinta",
    categories: ["Consultancy", "Corporate", "Global Business", "UI/UX"],
    image: img2,
  },
  {
    id: "1541",
    title: "FirstMeridian",
    categories: ["Consultancy", "Resourcing"],
    image: img3,
  },
  {
    id: "1533",
    title: "AIOne Health",
    categories: [
      "Consultancy",
      "Corporate",
      "Medical",
      "SAAS",
      "Software",
      "UI/UX",
    ],
    image: img6,
  },
  {
    id: "1522",
    title: "Clanbridge",
    categories: ["Hospitality", "Lifestyle", "Real Estate", "UI/UX"],
    image: img4,
  },
  {
    id: "1477",
    title: "Acutok",
    categories: ["Consultancy", "SAAS", "Software", "UI/UX"],
    image: img5,
  },
  {
    id: "1473",
    title: "MentorPOS",
    categories: ["Consultancy", "SAAS", "Software", "UI/UX"],
    image: img8,
  },
  {
    id: "1456",
    title: "Alankaram",
    categories: ["Ecommerce", "Furniture", "Lifestyle"],
    image: img7,
  },
  {
    id: "1517",
    title: "Aaalay",
    categories: ["Consultancy", "SAAS", "Software", "UI/UX"],
    image: img9,
  },
];

const allCategories = [
  "All",
  ...new Set(portfolioItems.flatMap((item) => item.categories)),
];


const RecentWork = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const [activeFilter, setActiveFilter] = useState("All");

  const filteredItems = useMemo(() => {
    if (activeFilter === "All") return portfolioItems;
    return portfolioItems.filter((item) =>
      item.categories.includes(activeFilter),
    );
  }, [activeFilter]);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Background Effects */}
      <div
        className="absolute inset-0 z-0"
        style={{ height: "calc(100vh + 3000px)" }}
      >
        <div className="absolute inset-0 z-0">
          <Canvas>
            <Suspense fallback={null}>
              <Scene3D />
            </Suspense>
          </Canvas>
        </div>

        <div className="absolute inset-0 z-0 pointer-events-none">
          <Particles
            id="tsparticles-work"
            init={particlesInit}
            options={particlesOptions}
          />
        </div>

        {/* Gradient Orbs */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-20 right-0 w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-40 left-0 w-96 h-96 bg-red-800/15 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-3xl" />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 z-10 pointer-events-none" />
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 md:py-20 lg:py-24">
        {/* Hero */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center mb-16 md:mb-20"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 tracking-tight"
          >
            OUR{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-rose-500 to-pink-500">
              RECENT WORK
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Delivering exceptional digital solutions across industries — from
            startups to enterprises.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-8 h-1.5 w-40 bg-gradient-to-r from-red-600 to-rose-600 mx-auto rounded-full"
          />
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 md:mb-16">
          {allCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`
                px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold uppercase tracking-wide
                transition-all duration-300 border
                ${
                  activeFilter === category
                    ? "bg-red-600/90 text-white border-red-500 shadow-lg shadow-red-900/40"
                    : "bg-white/5 text-gray-200 border-gray-700 hover:bg-white/10 hover:border-gray-500"
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry Grid – NO rounded corners */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-0">
          {filteredItems.length === 0 ? (
            <div className="col-span-full text-center text-gray-400 text-xl">
              No projects found in this category.
            </div>
          ) : (
            filteredItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="
                  group relative overflow-hidden
                  bg-gray-900/40 backdrop-blur-md
                  border border-gray-800/60
                  shadow-xl shadow-black/40
                  transition-all duration-500
                  hover:shadow-2xl hover:shadow-red-900/40 hover:-translate-y-2
                "
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    w-full h-auto aspect-4/5 object-cover
                    transition-transform duration-700 ease-out
                    group-hover:scale-110
                  "
                  loading="lazy"
                />

                {/* Hover Overlay */}
                <div
                  className="
                  absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent
                  flex flex-col items-center justify-end pb-8 px-6
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-500
                "
                >
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base font-medium uppercase tracking-wider text-gray-300">
                    {item.categories.join(" • ")}
                  </p>
                </div>
              </motion.div>
            ))
          )}
        </div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mt-20 md:mt-28 py-12 md:py-16"
        >
          <h2 className="text-4xl sm:text-5xl font-black mb-6">
            Ready to Build <span className="text-red-500">Something Great</span>
            ?
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Let's turn your vision into a powerful digital experience.
          </p>
          <a
            href="/contact"
            className="
              inline-flex items-center px-8 sm:px-10 py-4 sm:py-5
              bg-gradient-to-r from-red-600 to-rose-600
              hover:from-red-700 hover:to-rose-700
              rounded-full text-lg sm:text-xl font-bold
              shadow-xl shadow-red-900/40
              transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl
            "
          >
            Get in Touch
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default RecentWork;
