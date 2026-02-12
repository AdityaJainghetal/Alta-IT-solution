
import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  Suspense,
} from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import {
  ArrowRight,
  Code,
  Headphones,
  ShieldCheck,
  Users,
  Zap,
  Target,
} from "lucide-react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Float,
  Text3D,
  MeshDistortMaterial,
  Sphere,
  Box,
  Environment,
  PerspectiveCamera,
} from "@react-three/drei";
import * as THREE from "three";
import MobileOnboarding from "./Mobile/Mobilebraing";
import img4 from "../Component/Mobile/img/sevenpart3.png";
import img5 from "../Component/Mobile/img/image11.png";

// ────────────────────────────────────────────────
// ANIMATED COUNTER COMPONENT
// ────────────────────────────────────────────────

function Counter({ value, suffix = "", duration = 2.5 }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    // Parse number (handles 50+, 100+, 99.9, etc.)
    let target = parseFloat(value.replace(/[^0-9.]/g, "")) || 0;

    const controls = animate(count, target, {
      duration,
      ease: "easeOut",
    });

    return () => controls.stop();
  }, [isInView, value, duration, count]);

  return (
    <div ref={ref} className="overflow-hidden">
      <div className="text-4xl font-black mb-2">
        <motion.span>{rounded}</motion.span>
        {suffix && <span>{suffix}</span>}
      </div>
    </div>
  );
}

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

const StatsCard3D = () => {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime()) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {[
        { pos: [-3, 0, 0], color: "#dc2626" },
        { pos: [-1, 0, 0], color: "#ef4444" },
        { pos: [1, 0, 0], color: "#f87171" },
        { pos: [3, 0, 0], color: "#fca5a5" },
      ].map((item, i) => (
        <Float key={i} speed={2} rotationIntensity={1} floatIntensity={2}>
          <Box position={item.pos} args={[0.8, 1.2, 0.3]}>
            <meshStandardMaterial
              color={item.color}
              metalness={0.7}
              roughness={0.3}
            />
          </Box>
        </Float>
      ))}
    </group>
  );
};

const HeroScene3D = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 6]} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={1}
      />
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={1.5} color="#dc2626" />
      <pointLight position={[-5, -5, -5]} intensity={0.8} color="#ef4444" />
      <StatsCard3D />
      <Environment preset="sunset" />
    </>
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
      <Environment preset="city" />
    </>
  );
};

// ────────────────────────────────────────────────
// PARTICLES CONFIGURATION
// ────────────────────────────────────────────────

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
// MAIN COMPONENT
// ────────────────────────────────────────────────

const About = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const testimonials = [
    {
      text: "ATLA Knots transformed our entire digital infrastructure. Their team delivered beyond expectations!",
      author: "Sarah Johnson",
      role: "CEO, TechStart Inc",
      rating: 5,
    },
    {
      text: "24/7 support that actually works. They're always there when we need them. True partners!",
      author: "Michael Chen",
      role: "CTO, GlobalSoft",
      rating: 5,
    },
    {
      text: "From concept to deployment in record time. Their expertise in mobile apps is unmatched.",
      author: "Priya Sharma",
      role: "Founder, AppVenture",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0 z-0"
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-20 right-0 w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 left-0 w-96 h-96 bg-red-800/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-3xl" />
      </div>

      {/* ==================== HERO SECTION ==================== */}
      <section className="relative min-h-screen flex items-center justify-center px-6 sm:px-10 lg:px-16 py-12">
        <div className="absolute inset-0 z-0">
          <Canvas>
            <Suspense fallback={null}>
              <Scene3D />
            </Suspense>
          </Canvas>
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-red-950/40 via-black/60 to-black/80 z-0" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 w-full max-w-7xl mx-auto text-center"
        >
          <motion.div variants={fadeInUp} className="mb-10 pt-25">
            <h1 className="text-6xl sm:text-10xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-4">
              ATLA KNOTS
            </h1>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-red-500 animate-gradient">
                Your Technology Partner
              </span>
            </h2>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            We build powerful, secure, and future-ready{" "}
            <span className="text-red-400 font-semibold">
              IT & BPO solutions
            </span>{" "}
            — so your business can focus on growth, not technology.
          </motion.p>

          {/* Content + Image Blocks */}
        <div className="space-y-24 lg:space-y-40">
  
  {/* Block 1 - Image right side */}
  <div className="relative flex flex-col md:flex-row items-stretch gap-0 min-h-[500px] lg:min-h-[680px] pt-16 md:pt-24 lg:pt-32 xl:pt-40">
    
    {/* Text - left side */}
    <div className="w-full md:w-5/12 lg:w-4/12 xl:w-5/12 
      pl-6 md:pl-12 lg:pl-16 xl:pl-24 
      pr-6 md:pr-10 lg:pr-16 
      py-12 md:py-16 lg:py-20 
      bg-gradient-to-r from-gray-900/90 to-transparent 
      z-10 flex flex-col justify-center order-2 md:order-1">
      
      <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
        Building the <span className="text-red-500">Future</span> of Business Technology
      </h3>

      <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-xl">
        At <span className="font-semibold text-white">ATLA Knots</span>, we believe technology should empower—not complicate.
        Our expert team delivers custom software, mobile apps, cloud solutions, and 24/7 BPO support that drive real business results.
      </p>

      <button className="px-8 py-4 bg-red-600 hover:bg-red-700 rounded-full font-semibold transition duration-300 w-fit">
        Get Started
      </button>
    </div>

    {/* Image - right side */}
    <div className="w-full md:w-7/12 lg:w-8/12 xl:w-7/12 
      bg-black flex items-center justify-center 
      order-1 md:order-2">
      
      <img
        src={img4}
        alt="Tech Collaboration"
        className="w-full h-full max-h-[680px] object-contain shadow-2xl"
      />
    </div>
  </div>


  {/* Block 2 - Image left side */}
  <div className="relative flex flex-col md:flex-row-reverse items-stretch gap-0 min-h-[500px] lg:min-h-[680px] pt-16 md:pt-24 lg:pt-32 xl:pt-40">
    
    {/* Text */}
    <div className="w-full md:w-5/12 lg:w-4/12 xl:w-5/12 
      pr-6 md:pr-12 lg:pr-16 xl:pr-24 
      pl-6 md:pl-10 lg:pl-16 
      py-12 md:py-16 lg:py-20 
      bg-gradient-to-l from-gray-900/90 to-transparent 
      z-10 flex flex-col justify-center">
      
      <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
        Innovation Meets <span className="text-red-500">Excellence</span>
      </h3>

      <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-xl">
        With cutting-edge technology and a client-first approach, we transform businesses through seamless digital solutions.
        Experience the power of innovation with ATLA Knots.
      </p>

      <button className="px-8 py-4 bg-red-600 hover:bg-red-700 rounded-full font-semibold transition duration-300 w-fit">
        Learn More
      </button>
    </div>

    {/* Image - left side */}
    <div className="w-full md:w-7/12 lg:w-8/12 xl:w-7/12 
      bg-black flex items-center justify-center">
      
      <img
        src={img5}
        alt="Tech Innovation"
        className="w-full h-full max-h-[680px] object-contain shadow-2xl"
      />
    </div>
  </div>

</div>


          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="mt-16 flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <button className="px-12 py-6 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-xl font-bold shadow-lg shadow-red-900/50 hover:shadow-red-900/70 transition">
              Start Building Your Future <ArrowRight className="inline ml-2" />
            </button>
            <button className="px-10 py-6 border-2 border-red-600/60 rounded-full text-red-400 hover:bg-red-950/40 transition">
              See Our Solutions <ArrowRight className="inline ml-2" />
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* ==================== ABOUT SECTION ==================== */}
      <section className="relative py-20 px-6 sm:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
              ABOUT <span className="text-red-500">ATLA KNOTS</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              Technology that connects. Solutions that deliver. Partnerships
              that last.
            </p>
          </motion.div>

          {/* 3D Stats */}
          <div className="relative h-[400px] mb-16">
            <Canvas>
              <Suspense fallback={null}>
                <HeroScene3D />
              </Suspense>
            </Canvas>
          </div>

          {/* About Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-12 items-center mb-16"
          >
            <motion.div variants={fadeInLeft} className="space-y-6">
              <h5 className="text-red-400 font-semibold text-xl">
                About Our Solution
              </h5>
              <h2 className="text-4xl md:text-5xl font-bold">
                #1 Partner For Your Business Growth
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                We deliver cutting-edge technology solutions that transform
                businesses. From custom software development to 24/7 BPO
                support, our team ensures your digital infrastructure is robust,
                scalable, and secure.
              </p>
              <div className="grid grid-cols-2 gap-8 my-8">
                <div>
                  <div className="text-red-500 text-4xl font-black">50+</div>
                  <p className="text-gray-400">Projects Delivered</p>
                </div>
                <div>
                  <div className="text-red-500 text-4xl font-black">100+</div>
                  <p className="text-gray-400">Happy Clients</p>
                </div>
              </div>
              <button className="px-10 py-4 bg-red-600 hover:bg-red-700 rounded-full text-lg font-semibold transition">
                Read More →
              </button>
            </motion.div>

            <motion.div variants={fadeInRight}>
              <img
                src="https://img.freepik.com/free-photo/group-multinational-busy-people-working-office_146671-15658.jpg?w=740"
                alt="Team working"
                className="rounded-2xl shadow-2xl w-full object-cover border border-red-900/30"
              />
            </motion.div>
          </motion.div>

          {/* Animated Stats Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          >
            {[
              { num: "50+", label: "Projects Delivered", icon: Code },
              { num: "24/7", label: "Support Coverage", icon: Headphones },
              { num: "90%", label: "Uptime Commitment", icon: ShieldCheck },
              { num: "99+", label: "Happy Clients", icon: Users },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-gray-900 to-black border border-red-900/30 rounded-2xl p-8 text-center"
              >
                <item.icon className="w-12 h-12 mx-auto mb-4 text-red-500" />

                {item.num.includes("/") ? (
                  <div className="text-4xl font-black mb-2">{item.num}</div>
                ) : (
                  <Counter
                    value={item.num}
                    suffix={item.num.includes("+") ? "+" : item.num.includes("%") ? "%" : ""}
                    duration={2.8} // slightly longer for better feel
                  />
                )}

                <p className="text-gray-400">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile Onboarding */}
          <div className="mb-16">
            <MobileOnboarding />
          </div>

          {/* Testimonials */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-5xl font-black text-center mb-12">
              What Our <span className="text-red-500">Clients Say</span>
            </h2>

            <div className="relative max-w-4xl mx-auto h-80 md:h-72">
              {testimonials.map((t, idx) => (
                <motion.div
                  key={idx}
                  animate={{
                    opacity: idx === activeTestimonial ? 1 : 0,
                    scale: idx === activeTestimonial ? 1 : 0.9,
                  }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-black/90 border border-red-900/30 rounded-3xl p-10 flex flex-col justify-between"
                >
                  <div className="flex gap-1 text-red-500 text-2xl">
                    {"★".repeat(t.rating)}
                  </div>
                  <p className="text-2xl italic text-gray-100">"{t.text}"</p>
                  <div>
                    <p className="font-bold">{t.author}</p>
                    <p className="text-gray-500 text-sm">{t.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`h-3 rounded-full transition-all ${
                    i === activeTestimonial
                      ? "w-10 bg-red-600"
                      : "w-3 bg-gray-700"
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center py-20"
          >
            <h3 className="text-5xl md:text-6xl font-black mb-8">
              Ready to build something{" "}
              <span className="text-red-500">great</span> together?
            </h3>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Let's turn your vision into reality. Our team is ready to start
              today.
            </p>
            <button className="px-12 py-6 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-2xl font-bold shadow-2xl hover:shadow-red-900/70 transition">
              LET'S START THE CONVERSATION →
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;