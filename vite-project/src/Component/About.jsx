import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  Suspense,
} from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
  AnimatePresence,
} from "framer-motion";
import {
  ArrowRight,
  Code,
  Headphones,
  ShieldCheck,
  Users,
  X,
} from "lucide-react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Float,
  Environment,
  PerspectiveCamera,
  Sphere,
} from "@react-three/drei";
import * as THREE from "three";

import img4 from "../Component/Mobile/img/Atlaimage.jpg";
import img5 from "../Component/Mobile/img/image11.png";
import MobileOnboarding from "./Mobile/Mobilebraing";
import { useNavigate } from "react-router-dom";
import img1 from "./Mobile/img/mobileviewpart1.png";
import img2 from "./Mobile/img/mobileviewpart2.png";
import img3 from "./Mobile/img/mobileviewpart3.png";
import img6 from "./Mobile/img/mobileview.png";
import FounderImg from "./Mobile/img/nagar.jpg";
import MdImg from "./Mobile/img/Md.jpg";
import CeoImg from "./Mobile/img/CEO.jpg";
const images = [img1, img2, img3];
// ────────────────────────────────────────────────
// COUNTER COMPONENT
// ────────────────────────────────────────────────
function Counter({ value, suffix = "", duration = 2.5 }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const target = parseFloat(value.replace(/[^0-9.]/g, "")) || 0;

    const controls = animate(count, target, {
      duration,
      ease: "easeOut",
    });

    return () => controls.stop();
  }, [isInView, value, duration, count]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-black mb-2">
      <motion.span>{rounded}</motion.span>
      {suffix && <span>{suffix}</span>}
    </div>
  );
}

// ────────────────────────────────────────────────
// SIMPLE 3D ANIMATED SPHERE (kept minimal)
// ────────────────────────────────────────────────
const AnimatedSphere = ({ position, color }) => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.007;
    }
  });

  return (
    <Float speed={1.6} rotationIntensity={0.9} floatIntensity={1.4}>
      <Sphere ref={meshRef} args={[1.3, 48, 48]} position={position}>
        <meshStandardMaterial color={color} roughness={0.4} metalness={0.6} />
      </Sphere>
    </Float>
  );
};

// ────────────────────────────────────────────────
// MAIN 3D SCENE
// ────────────────────────────────────────────────
const Scene3D = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.6}
      />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.4} color="#dc2626" />
      <pointLight position={[-10, -10, -10]} intensity={0.7} color="#ef4444" />

      <AnimatedSphere position={[-4, 2, -3]} color="#dc2626" />
      <AnimatedSphere position={[4, -2, -2]} color="#ef4444" />
      <AnimatedSphere position={[0, 3.5, 1]} color="#f87171" />

      <Environment preset="city" />
    </>
  );
};

// ────────────────────────────────────────────────
// PARTICLES CONFIG
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
      repulse: { distance: 140, duration: 0.4 },
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
      speed: 1.1,
      straight: false,
    },
    number: { density: { enable: true, area: 800 }, value: 70 },
    opacity: { value: 0.35 },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 3.5 } },
  },
  detectRetina: true,
};

// ────────────────────────────────────────────────
// MOTION VARIANTS
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
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

// ────────────────────────────────────────────────
// MAIN ABOUT COMPONENT (with form/modal)
// ────────────────────────────────────────────────
export default function About() {
  const navigate = useNavigate(); // ✅ FIXED: Moved inside component

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);
  const [selectedImg, setSelectedImg] = useState(null);

  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    category: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await fetch(
        "https://atla-knots-solution-admin-1.onrender.com/query/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to submit. Please try again.");
      }

      await response.json();

      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        category: "",
      });

      setTimeout(() => {
        setIsModalOpen(false);
        setSuccess(false);
      }, 2000);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

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

      {/* Gradient blobs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-20 right-0 w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 left-0 w-96 h-96 bg-red-800/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-3xl" />
      </div>

      {/* ==================== HERO SECTION ==================== */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="absolute inset-0 z-0">
          <Canvas>
            <Suspense fallback={null}>
              <Scene3D />
            </Suspense>
          </Canvas>
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-red-950/50 via-black/70 to-black/90 z-0" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 w-full max-w-7xl mx-auto text-center"
        >
          <motion.div variants={fadeInUp} className="mb-10 pt-16 md:pt-24">
            <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-black tracking-tighter mb-4">
              ATLA KNOTS
            </h1>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-red-600 animate-gradient-x">
                Your Technology Partner
              </span>
            </h2>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed px-4"
          >
            We build powerful, secure, and future-ready{" "}
            <span className="text-red-400 font-semibold">
              IT & BPO solutions
            </span>{" "}
            — so your business can focus on growth, not technology.
          </motion.p>

          {/* Image + Text Blocks */}
          <div className="space-y-16 lg:space-y-24 pb-16 pt-20">
            {/* Block 1 */}
            <div className="flex flex-col md:flex-row items-stretch min-h-[500px] lg:min-h-[680px]">
              <div className="w-full md:w-5/12 lg:w-5/12 bg-gradient-to-r from-gray-900/90 to-transparent z-10 flex flex-col justify-center order-2 md:order-1 px-6 md:px-10 lg:px-16 py-12 md:py-16">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                  Building the <span className="text-red-500">Future</span>
                </h3>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-xl">
                  At{" "}
                  <span className="font-semibold text-white">ATLA Knots</span>,
                  we believe technology should empower—not complicate.
                </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-8 py-4 bg-red-600 hover:bg-red-700 rounded-full font-semibold transition w-fit"
                >
                  Get Started
                </button>
              </div>
              <div className="w-full md:w-12/12 order-1 md:order-2">
                <img
                  src={img4}
                  alt="Collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Block 2 */}
            <div className="flex flex-col md:flex-row-reverse items-stretch min-h-[500px] lg:min-h-[680px]">
              <div className="w-full md:w-5/12 lg:w-5/12 bg-gradient-to-l from-gray-900/90 to-transparent z-10 flex flex-col justify-center px-6 md:px-10 lg:px-16 py-12 md:py-16">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                  Innovation Meets{" "}
                  <span className="text-red-500">Excellence</span>
                </h3>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-xl">
                  We transform businesses through seamless digital solutions.
                </p>
              </div>

              {/* Image container with hover effect */}
              <div className="w-full md:w-7/12 relative group overflow-hidden">
                <img
                  src={img1}
                  alt="Innovation"
                  className="w-full h-full object-contain md:object-cover transition-opacity duration-500 group-hover:opacity-0"
                />

                <img
                  src={img6}
                  alt="Innovation Hover"
                  className="w-full h-full object-contain md:object-cover absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center px-4"
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-12 py-6 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-xl font-bold shadow-lg shadow-red-900/50 hover:shadow-red-900/70 transition flex items-center gap-2"
            >
              Start Building Your Future <ArrowRight className="w-6 h-6" />
            </button>

            <button
              onClick={() => navigate("/recentwork")}
              className="px-10 py-6 border-2 border-red-600/60 rounded-full text-red-400 hover:bg-red-950/40 transition flex items-center gap-3 font-medium"
            >
              See Our Solutions <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>

          {/* ===================== CONTACT MODAL / FORM ===================== */}
          <AnimatePresence>
            {isModalOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
                onClick={(e) => {
                  if (e.target === e.currentTarget) setIsModalOpen(false);
                }}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0, y: 50 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.8, opacity: 0, y: 50 }}
                  className="bg-gray-900 border border-red-900/30 rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden"
                >
                  <div className="bg-gradient-to-r from-red-900/80 to-red-800/60 px-6 py-4 flex justify-between items-center">
                    <h2 className="text-xl font-bold text-white">
                      Get in Touch
                    </h2>
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="text-white hover:text-red-300 transition"
                      aria-label="Close modal"
                    >
                      <X className="w-7 h-7" />
                    </button>
                  </div>

                  <form onSubmit={handleSubmit} className="p-6 space-y-5">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name *"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-600"
                    />

                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-600"
                    />

                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number *"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-600"
                    />

                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-600"
                    >
                      <option value="" disabled>
                        Select Category *
                      </option>
                      <option value="SEO">SEO</option>
                      <option value="Software Developer">
                        Software Developer
                      </option>
                      <option value="BPO">BPO</option>
                      <option value="Digital Marketing">
                        Digital Marketing
                      </option>
                      <option value="Web Development">Web Development</option>
                      <option value="Other">Other</option>
                    </select>

                    <textarea
                      name="message"
                      placeholder="Your Message / Requirement..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-600"
                    />

                    <button
                      type="submit"
                      disabled={loading}
                      className={`w-full py-4 rounded-lg font-bold text-lg transition ${
                        loading
                          ? "bg-gray-700 cursor-not-allowed"
                          : "bg-red-700 hover:bg-red-600 shadow-lg shadow-red-900/40"
                      }`}
                    >
                      {loading ? "Sending..." : "Submit Inquiry"}
                    </button>

                    {success && (
                      <p className="text-green-400 text-center font-medium">
                        Thank you! We'll get back to you soon.
                      </p>
                    )}
                    {error && (
                      <p className="text-red-400 text-center">{error}</p>
                    )}
                  </form>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* ==================== ABOUT / STATS / TESTIMONIALS SECTION ==================== */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <h2 className="text-5xl md:text-7xl font-black mb-6">
              ABOUT <span className="text-red-500">ATLA KNOTS</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto px-4">
              Technology that connects. Solutions that deliver. Partnerships
              that last.
            </p>
          </motion.div>

          {/* 3D decoration */}
          <div className="relative h-96 mb-12 rounded-2xl overflow-hidden border border-red-900/20">
            <Canvas>
              <Suspense fallback={null}>
                <Scene3D />
              </Suspense>
            </Canvas>
          </div>

          {/* About content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8 items-center mb-12"
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
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-10 py-4 bg-red-600 hover:bg-red-700 rounded-full text-lg font-semibold transition"
              >
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

          {/* Stats Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
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
                <Counter
                  value={item.num}
                  suffix={
                    item.num.includes("+")
                      ? "+"
                      : item.num.includes("%")
                        ? "%"
                        : ""
                  }
                  duration={2.8}
                />
                <p className="text-gray-400">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile Onboarding */}
          <div className="mb-12">
            <MobileOnboarding />
          </div>

          {/* ==================== MEET OUR LEADERSHIP TEAM SECTION ==================== */}
          <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-950">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="text-center mb-12"
              >
                <h2 className="text-5xl md:text-7xl font-black mb-4">
                  Meet Our <span className="text-red-500">Leadership</span>
                </h2>
                <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                  The visionaries driving ATLA Knots toward innovation and
                  excellence
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Leader 1 - Founder */}
                <motion.div
                  variants={scaleIn}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="bg-gray-900/60 backdrop-blur-sm border border-red-900/30 rounded-2xl overflow-hidden shadow-xl shadow-red-950/30 transition-all duration-300"
                >
                  <div className="relative">
                    <img
                      src={FounderImg}
                      alt="Rakesh Nagar - Founder"
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-bold mb-1 text-white">
                      Rakesh Nagar
                    </h3>
                    <p className="text-red-400 font-semibold mb-3">Founder</p>
                    <p className="text-gray-400 text-sm mb-3">
                      15+ Years of Experience
                    </p>
                    <p className="text-gray-300 text-sm">
                      Visionary leader with over 15 years of experience in IT
                      and digital transformation, steering the company's
                      strategic direction.
                    </p>
                  </div>
                </motion.div>

                {/* Leader 2 - Managing Director */}
                <motion.div
                  variants={scaleIn}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="bg-gray-900/60 backdrop-blur-sm border border-red-900/30 rounded-2xl overflow-hidden shadow-xl shadow-red-950/30 transition-all duration-300"
                >
                  <div className="relative">
                    <img
                      src={MdImg}
                      alt="Aley Nabi - Managing Director"
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-bold mb-1 text-white">
                      Aley Nabi
                    </h3>
                    <p className="text-red-400 font-semibold mb-3">
                      Managing Director
                    </p>

                    <p className="text-gray-400 text-sm mb-3">
                      10+ Years of Experience
                    </p>
                    <p className="text-gray-300 text-sm">
                      Expert in operational excellence and client relations,
                      ensuring seamless delivery of our services while fostering
                      strong partnerships.
                    </p>
                  </div>
                </motion.div>

                {/* Leader 3 - Chief Executive Officer */}
                <motion.div
                  variants={scaleIn}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="bg-gray-900/60 backdrop-blur-sm border border-red-900/30 rounded-2xl overflow-hidden shadow-xl shadow-red-950/30 transition-all duration-300"
                >
                  <div className="relative">
                    <img
                      src={CeoImg}
                      alt="Ghulam Haider - Chief Executive Officer"
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-bold mb-1 text-white">
                      Ghulam Haider
                    </h3>
                    <p className="text-red-400 font-semibold mb-2">
                      Chief Executive Officer
                    </p>

                    <p className="text-gray-400 text-sm mb-3">
                      10+ Years of Experience
                    </p>

                    <p className="text-gray-300 text-sm leading-relaxed">
                      Driving strategic growth, innovation, and strong client
                      partnerships while shaping the company’s long-term vision
                      and success.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12"
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
                  style={{
                    pointerEvents: idx === activeTestimonial ? "auto" : "none",
                  }}
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
                  aria-label={`View testimonial ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center py-16"
          >
            <h3 className="text-5xl md:text-6xl font-black mb-8 px-4">
              Ready to build something{" "}
              <span className="text-red-500">great</span> together?
            </h3>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto px-4">
              Let's turn your vision into reality. Our team is ready to start
              today.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-12 py-6 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-2xl font-bold shadow-2xl hover:shadow-red-900/70 transition"
            >
              LET'S START THE CONVERSATION →
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
