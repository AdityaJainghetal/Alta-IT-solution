import React, { useCallback, useEffect, useRef, useState } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import {
  Code,
  ShieldCheck,
  Rocket,
  Users,
  Server,
  Headphones,
} from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 14,
      duration: 0.7,
    },
  },
};

const fadeInOnScrollVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Home = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  // Particles options (same as before)
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
      color: { value: ["#22d3ee", "#60a5fa", "#a78bfa"] },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.25,
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
      opacity: { value: 0.45 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 4 } },
    },
    detectRetina: true,
  };

  // Scroll animation observer
  const sectionRefs = useRef([]);
  const [inViewSections, setInViewSections] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInViewSections((prev) => [
              ...new Set([...prev, entry.target.id]),
            ]);
          }
        });
      },
      { threshold: 0.15 },
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Code,
      title: "Website & Enterprise Application Development",
      desc: "Custom web and enterprise solutions tailored to your business goals.",
    },
    {
      icon: ShieldCheck,
      title: "Testing, Deployment & Production Support",
      desc: "Rigorous QA, smooth deployment, and 24/7 production reliability.",
    },
    {
      icon: Server,
      title: "Long-term Application Maintenance & Support (AMS)",
      desc: "Proactive maintenance, updates, and performance optimization.",
    },
    {
      icon: Rocket,
      title: "Digital Transformation & IT Consulting",
      desc: "Strategic guidance to modernize operations and adopt emerging technologies.",
    },
    {
      icon: Users,
      title: "Government & PSU Projects",
      desc: "Trusted delivery of secure, compliant solutions for public sector needs.",
    },
    {
      icon: Headphones,
      title: "Dedicated Support & Partnership",
      desc: "Long-term collaboration focused on your success and growth.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gray-950 text-gray-100 overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0 z-0"
      />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950/70 via-cyan-950/20 to-blue-950/10 pointer-events-none"></div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40 text-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              >
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
                  Alta Knots IT Solution
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="mt-6 text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto"
              >
                Making technology simple, reliable, and impactful for businesses
                of every size.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="mt-6 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto"
              >
                We design, build, and support digital solutions that help
                organizations work smarter and embrace digital transformation
                with confidence.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
              >
                <a
                  href="#services"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-cyan-500/40 transition-all transform hover:-translate-y-1"
                >
                  Explore Our Services
                </a>
                <a
                  href="#contact"
                  className="px-8 py-4 bg-transparent border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-semibold rounded-lg transition-all"
                >
                  Get in Touch
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <motion.section
          id="about"
          ref={(el) => (sectionRefs.current[0] = el)}
          initial="hidden"
          animate={inViewSections.includes("about") ? "visible" : "hidden"}
          variants={fadeInOnScrollVariants}
          className="py-20 md:py-28 border-t border-gray-800 bg-gray-950/60 backdrop-blur-sm"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Who We Are
              </h2>
              <div className="mt-4 h-1 w-20 bg-cyan-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Alta Knots IT Solution is a modern IT services and software
                  development company dedicated to making technology simple,
                  reliable, and impactful for businesses of every size.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Our strength lies in combining deep technical expertise with a
                  clear understanding of real business needs...
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  At Alta Knots, we believe in transparency, quality, and
                  long-term partnerships...
                </p>
              </div>

              <div className="flex justify-center">
                <div className="w-full max-w-md aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl border border-gray-700 flex items-center justify-center">
                  <span className="text-gray-500 text-xl">
                    Company Vision Illustration
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Services Section */}
        <motion.section
          id="services"
          ref={(el) => (sectionRefs.current[1] = el)}
          initial="hidden"
          animate={inViewSections.includes("services") ? "visible" : "hidden"}
          variants={containerVariants}
          className="py-20 md:py-28 bg-gray-900/40 border-t border-b border-gray-800"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                What We Do
              </h2>
              <p className="mt-4 text-xl text-gray-400">
                End-to-end IT services covering the complete software lifecycle
              </p>
              <div className="mt-4 h-1 w-20 bg-cyan-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:border-cyan-500/60 hover:shadow-cyan-500/20 transition-all group backdrop-blur-sm"
                >
                  <service.icon className="h-12 w-12 text-cyan-500 mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-400">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          id="cta"
          ref={(el) => (sectionRefs.current[2] = el)}
          initial="hidden"
          animate={inViewSections.includes("cta") ? "visible" : "hidden"}
          variants={fadeInOnScrollVariants}
          className="py-20 md:py-28"
        >
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business with Reliable Technology?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Partner with Alta Knots IT Solution and experience technology that
              works for you — not against you.
            </p>
            <a
              href="#contact"
              className="inline-block px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-lg font-semibold rounded-xl shadow-xl hover:shadow-cyan-500/40 transition-all transform hover:-translate-y-1"
            >
              Let's Start a Conversation →
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Home;
