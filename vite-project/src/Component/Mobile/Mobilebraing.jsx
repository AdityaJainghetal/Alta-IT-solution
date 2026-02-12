// import React, { useEffect, useState } from "react";
// import img1 from "../Mobile/img/screenshot-1.png";
// import img2 from "../Mobile/img/screenshot-2.png";
// import img3 from "../Mobile/img/screenshot-3.png";

// const MobileOnboarding = () => {
//   const images = [img1, img2, img3];
//   const [active, setActive] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActive((prev) => (prev + 1) % images.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

//       {/* Mobile Frame */}
//       <div className="relative w-[280px] h-[560px] rounded-[2.5rem] bg-black shadow-2xl p-2">

//         {/* Screen */}
//         <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-gradient-to-br from-purple-600 to-blue-500">

//           {/* Slider Images */}
//           {images.map((img, index) => (
//             <img
//               key={index}
//               src={img}
//               alt="onboarding"
//               className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
//                 active === index ? "opacity-100" : "opacity-0"
//               }`}
//             />
//           ))}

//           {/* Overlay Content */}
//           <div className="absolute bottom-0 w-full px-6 pb-8 text-white bg-gradient-to-t from-black/60 to-transparent">
//             <h2 className="text-2xl font-bold mb-1">TRANSFORM</h2>
//             <p className="text-sm opacity-90 mb-4">
//               Control your own fitness routine wherever you are.
//             </p>

//             {/* Dots */}
//             <div className="flex justify-center gap-2 mb-4">
//               {images.map((_, i) => (
//                 <span
//                   key={i}
//                   className={`w-2 h-2 rounded-full ${
//                     active === i ? "bg-white" : "bg-white/40"
//                   }`}
//                 />
//               ))}
//             </div>

//             {/* Bottom Buttons */}
//             <div className="flex justify-between text-xs uppercase">
//               <button className="opacity-80">Skip</button>
//               <button className="font-semibold">Next</button>
//             </div>
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default MobileOnboarding;


// import React, { useEffect, useState } from "react";
// import img1 from "../Mobile/img/screenshot-1.png";
// import img2 from "../Mobile/img/screenshot-2.png";
// import img3 from "../Mobile/img/screenshot-3.png";

// const MobileOnboarding = () => {
//   const images = [img1, img2, img3];
//   const [active, setActive] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActive((prev) => (prev + 1) % images.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-black px-4">
//  <h1 className="text-white mb-4 animated slideInDown">The Revolutionary App That Helps To Control Your Own Fitness</h1>
//          <p className="text-sm text-gray-300 mb-4 leading-relaxed">
//               Smart digital solutions to manage, scale and grow your business
//               with secure and modern technology.
//             </p>                     {/* <p className="text-white pb-3 animated slideInDown">Tempor rebum no at dolore lorem clita rebum rebum ipsum rebum stet dolor sed justo kasd. Ut dolor sed magna dolor sea diam. Sit diam sit justo amet ipsum vero ipsum clita lorem</p> */}
//       {/* Mobile Frame */}
//       <div className="relative w-[280px] h-[560px] rounded-[2.5rem] bg-black shadow-[0_20px_60px_rgba(255,0,0,0.25)] p-2">

//         {/* Screen */}
//         <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-gradient-to-br from-black via-zinc-900 to-red-900">

//           {/* Slider Images */}
//           {images.map((img, index) => (
//             <img
//               key={index}
//               src={img}
//               alt="onboarding"
//               className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
//                 active === index ? "opacity-100" : "opacity-0"
//               }`}
//             />
//           ))}

//           {/* Overlay Content */}
//           <div className="absolute bottom-0 w-full px-6 pb-8 text-white bg-gradient-to-t from-black/90 via-black/60 to-transparent">

//             <h2 className="text-2xl font-bold mb-1 tracking-wide">
//               IT SOLUTIONS
//             </h2>

          

//             {/* Dots */}
//             <div className="flex justify-center gap-2 mb-4">
//               {images.map((_, i) => (
//                 <span
//                   key={i}
//                   className={`w-2 h-2 rounded-full transition ${
//                     active === i ? "bg-red-500" : "bg-red-500/30"
//                   }`}
//                 />
//               ))}
//             </div>

//             {/* Bottom Buttons */}
//             <div className="flex justify-between text-xs uppercase text-gray-300">
//               <button className="hover:text-red-500 transition">
//                 Skip
//               </button>
//               <button className="font-semibold text-red-500">
//                 Next
//               </button>
//             </div>

//           </div>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default MobileOnboarding;


import React, { useEffect, useState } from "react";
import img1 from "../Mobile/img/screenshot-1.png";
import img2 from "../Mobile/img/screenshot-2.png";
import img3 from "../Mobile/img/screenshot-3.png";

const MobileOnboarding = () => {
  const images = [img1, img2, img3];
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black px-4 py-16">
      
      {/* Main Wrapper */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* Left Content */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-white text-2xl md:text-4xl font-bold mb-4 leading-snug">
            The Revolutionary App That Helps To Control Your Digital Business
          </h1>

          <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
            Smart IT solutions to manage, scale and grow your business with
            secure, modern and high-performance technology.
          </p>

          <button className="inline-block px-8 py-3 rounded-full bg-red-600 text-white font-medium hover:bg-red-700 transition">
            Get Started
          </button>
        </div>

        {/* Right Mobile Mockup */}
        <div className="md:w-1/2 flex justify-center">

          <div className="
            relative 
            w-[240px] h-[480px]
            sm:w-[260px] sm:h-[520px]
            md:w-[280px] md:h-[560px]
            rounded-[2.5rem] 
            bg-black 
            shadow-[0_20px_60px_rgba(255,0,0,0.25)] 
            p-2
          ">

            {/* Screen */}
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-gradient-to-br from-black via-zinc-900 to-red-900">

              {/* Slider Images */}
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="onboarding"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                    active === index ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}

              {/* Overlay */}
              <div className="absolute bottom-0 w-full px-5 pb-6 text-white bg-gradient-to-t from-black/90 via-black/60 to-transparent">

                {/* <h2 className="text-lg font-bold tracking-wide mb-2">
                  IT SOLUTIONS
                </h2> */}

                {/* Dots */}
                <div className="flex justify-center gap-2 mb-4">
                  {images.map((_, i) => (
                    <span
                      key={i}
                      className={`w-2 h-2 rounded-full ${
                        active === i ? "bg-red-500" : "bg-red-500/30"
                      }`}
                    />
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex justify-between text-xs uppercase text-gray-300">
                  <button className="hover:text-red-500 transition">
                    Skip
                  </button>
                  <button className="font-semibold text-red-500">
                    Next
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MobileOnboarding;
