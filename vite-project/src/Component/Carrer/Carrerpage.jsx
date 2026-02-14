// src/pages/CareerPage.jsx
import React from 'react';

function CareerPage() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/30 via-black to-black pointer-events-none"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="text-red-600">Join</span> Our Team
          </h1>
          
          <p className="mt-6 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Be part of a team that's building the future.  
            We are looking for passionate, curious and bold people.
          </p>

          <div className="mt-10">
            <a
              href="#open-positions"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold text-lg px-10 py-5 rounded-lg transition-colors duration-300 shadow-lg shadow-red-900/40"
            >
              See Open Positions →
            </a>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Why Work <span className="text-red-600">With Us?</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Ownership & Impact",
                desc: "You’ll own real features from day one and see your work used by thousands.",
              },
              {
                title: "Rapid Growth",
                desc: "Fast-paced environment where you learn and level up every month.",
              },
              {
                title: "Great Team",
                desc: "Work with smart, kind, and ambitious people who actually enjoy working together.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-900/60 border border-gray-800 p-8 rounded-xl hover:border-red-800/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-red-500 mb-4">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-20 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Open <span className="text-red-600">Positions</span>
          </h2>

          <div className="space-y-6">
            {[
            
              {
                role: "Product Designer (UI/UX)",
                location: "Remote",
                type: "Full-time",
              },
              {
                role: "Growth & Marketing Lead",
                location: "Remote",
                type: "Full-time",
              },
            ].map((job, i) => (
              <div
                key={i}
                className="group bg-gray-900/70 border border-gray-800 p-6 md:p-8 rounded-xl hover:border-red-700/60 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div>
                  <h3 className="text-2xl font-semibold group-hover:text-red-500 transition-colors">
                    {job.role}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-4 text-gray-400">
                    <span>{job.location}</span>
                    <span>•</span>
                    <span>{job.type}</span>
                  </div>
                </div>

                <a
                  href="#"
                  className="bg-red-600/90 hover:bg-red-600 px-8 py-4 rounded-lg font-medium transition-colors whitespace-nowrap"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>

          
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-24 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to <span className="text-red-600">build</span> something epic?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Join us and leave your mark.
          </p>
          <a
            href="#open-positions"
            className="inline-block bg-red-600 hover:bg-red-700 px-12 py-6 text-xl font-semibold rounded-xl shadow-xl shadow-red-900/30 transition-all duration-300"
          >
            Explore Open Roles →
          </a>
        </div>
      </section>

    </div>
  );
}

export default CareerPage;