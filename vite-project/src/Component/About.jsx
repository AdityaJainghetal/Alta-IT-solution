import React, { useCallback, useEffect, useRef, useState } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion } from "framer-motion";
// import {
//   Code, ShieldCheck, Rocket, Users, Server, Headphones,
//   BuildingOffice, Globe, Lightbulb, HeartHandshake
// } from 'lucide-react';

// Same particles config as Home
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

// Animation variants (same as Home)
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
    transition: { type: "spring", stiffness: 120, damping: 14, duration: 0.7 },
  },
};

const fadeInOnScrollVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const About = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  // Scroll observer (same as Home)
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

  return (
    <div className="relative min-h-screen bg-gray-950 text-gray-100 overflow-hidden">
      {/* Particles Background - same as Home */}
      <Particles
        id="tsparticles-about"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0 z-0"
      />

      <div className="relative z-10">
        {/* Hero / Intro Section */}
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
                  About Alta Knots
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
                We blend technical expertise with deep business understanding to
                deliver practical, secure, and future-ready solutions.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Company Description Section */}
        <motion.section
          id="who-we-are"
          ref={(el) => (sectionRefs.current[0] = el)}
          initial="hidden"
          animate={inViewSections.includes("who-we-are") ? "visible" : "hidden"}
          variants={fadeInOnScrollVariants}
          className="py-20 md:py-28 border-t border-gray-800 bg-gray-950/60 backdrop-blur-sm"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Who We Are
              </h2>
              <div className="mt-4 h-1 w-20 bg-cyan-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <motion.p
                  variants={itemVariants}
                  className="text-lg text-gray-300 leading-relaxed"
                >
                  Alta Knots IT Solution is here to make technology simple,
                  reliable, and impactful for businesses of every size. We
                  design and build software that helps organizations work
                  smarter, streamline their processes, and embrace digital
                  transformation with confidence.
                </motion.p>

                <motion.p
                  variants={itemVariants}
                  className="text-lg text-gray-300 leading-relaxed"
                >
                  Our team blends technical know-how with a clear understanding
                  of business needs, so every solution we deliver is practical,
                  secure, and ready for the future. Whether it’s custom
                  software, web applications, or system integration, we focus on
                  creating results that truly matter.
                </motion.p>

                <motion.p
                  variants={itemVariants}
                  className="text-lg text-gray-300 leading-relaxed"
                >
                  We believe in transparency, quality, and building long-term
                  partnerships. For us, it’s not just about completing
                  projects—it’s about earning trust and becoming the technology
                  partner you can always count on.
                </motion.p>
              </div>

              <motion.div
                variants={itemVariants}
                className="flex justify-center"
              >
                {/* Placeholder for illustration - can replace with real image */}
                <div className="w-full max-w-md aspect-video bg-gradient-to-br from-gray-800 via-cyan-950 to-blue-950 rounded-2xl shadow-2xl border border-gray-700 flex items-center justify-center overflow-hidden">
                  <span className="text-gray-400 text-xl font-medium">
                    Our Vision & Innovation
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Our Approach & Mission */}
        <motion.section
          id="approach"
          ref={(el) => (sectionRefs.current[1] = el)}
          initial="hidden"
          animate={inViewSections.includes("approach") ? "visible" : "hidden"}
          variants={containerVariants}
          className="py-20 md:py-28 bg-gray-900/40 border-t border-b border-gray-800"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Our Approach & Mission
              </h2>
              <div className="mt-4 h-1 w-20 bg-cyan-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Approach */}
              <motion.div variants={itemVariants} className="space-y-8">
                <h3 className="text-2xl font-bold text-cyan-400">
                  Our Approach
                </h3>
                <p className="text-lg text-gray-300">
                  We believe that technology should empower businesses for a
                  smooth working experience.
                </p>
                <div className="flex flex-wrap gap-4">
                  {["Simplicity", "Reliability", "Quality"].map(
                    (point, idx) => (
                      <div
                        key={idx}
                        className="px-6 py-3 bg-gray-800/70 border border-cyan-900/50 rounded-full text-cyan-300 font-medium shadow-sm"
                      >
                        {point}
                      </div>
                    ),
                  )}
                </div>
              </motion.div>

              {/* Mission & Vision */}
              <motion.div variants={itemVariants} className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-cyan-400">
                    Our Mission
                  </h3>
                  <p className="mt-4 text-lg text-gray-300 italic">
                    "To help businesses grow and innovate by delivering reliable
                    IT solutions that drive efficiency, clarity, and long-term
                    success."
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-cyan-400">
                    Our Vision
                  </h3>
                  <p className="mt-4 text-lg text-gray-300 italic">
                    "To be a trusted global IT services and consulting partner
                    delivering end-to-end digital solutions across industries."
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Why Choose Us CTA */}
        <motion.section
          id="why-us"
          ref={(el) => (sectionRefs.current[2] = el)}
          initial="hidden"
          animate={inViewSections.includes("why-us") ? "visible" : "hidden"}
          variants={fadeInOnScrollVariants}
          className="py-20 md:py-28"
        >
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
              Why Choose Alta Knots IT Solution?
            </h2>

            <p className="text-xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
              It’s not just about completing projects—it’s about building trust.
              We focus on long-term partnerships and work as an extension of
              your team, becoming the technology partner you can always count
              on.
            </p>

            <p className="text-lg text-gray-400 mb-12">
              We measure our success by your success, and we’re committed to
              delivering results that truly matter.
            </p>

            <a
              href="#contact" // ya "/contact" route
              className="inline-block px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-lg font-semibold rounded-xl shadow-xl hover:shadow-cyan-500/40 transition-all transform hover:-translate-y-1"
            >
              Partner With Us Today →
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
