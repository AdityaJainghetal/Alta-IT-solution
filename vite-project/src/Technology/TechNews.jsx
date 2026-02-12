// // import React from 'react';
// // import { Newspaper, ExternalLink, Clock, Cpu, Zap, Globe } from 'lucide-react';

// // const TechNews = () => {
// //   // You can update / add your own company news here
  
  
// //   const newsItems = [
// //     {
// //       id: 1,
// //       title: "Our Company Launches New AI-Powered Feature",
// //       description: "We just released a groundbreaking update that boosts performance by 40% using next-gen AI.",
// //       date: "Feb 10, 2026",
// //       category: "Company Update",
// //       icon: <Cpu className="w-5 h-5" />,
// //       link: "#",
// //     },
// //     {
// //       id: 2,
// //       title: "Cisco Unveils AI Networking Chip to Challenge Nvidia",
// //       description: "New silicon aims to optimize data center AI workloads with better efficiency.",
// //       date: "Feb 10, 2026",
// //       category: "Hardware",
// //       icon: <Zap className="w-5 h-5" />,
// //       link: "https://www.reuters.com/technology",
// //     },
// //     {
// //       id: 3,
// //       title: "Alibaba Releases AI Model for Robotics & Physical AI",
// //       description: "Chinese tech giant pushes 'physical AI' with robot control capabilities.",
// //       date: "Feb 10, 2026",
// //       category: "AI",
// //       icon: <Globe className="w-5 h-5" />,
// //       link: "https://www.cnbc.com/technology",
// //     },
// //     {
// //       id: 4,
// //       title: "ChatGPT Starts Showing Ads – New Revenue Stream",
// //       description: "OpenAI begins testing advertisements inside ChatGPT interface.",
// //       date: "Feb 9, 2026",
// //       category: "Industry",
// //       icon: <Newspaper className="w-5 h-5" />,
// //       link: "https://techcrunch.com/",
// //     },
// //     {
// //       id: 5,
// //       title: "xAI Opens New Office – Joins Growing AI Hub",
// //       description: "Elon Musk’s xAI expands presence in Bellevue AI corridor.",
// //       date: "Feb 9, 2026",
// //       category: "Company News",
// //       icon: <Cpu className="w-5 h-5" />,
// //       link: "https://www.geekwire.com/",
// //     },
// //   ];

// //   return (
// //     <div className="min-h-screen bg-black text-gray-100 p-6 md:p-10">
// //       {/* Header */}
// //       <div className="max-w-5xl mx-auto">
// //         <div className="flex items-center justify-between mb-10">
// //           <div className="flex items-center gap-3">
// //             <Newspaper className="w-10 h-10 text-red-600" strokeWidth={2.5} />
// //             <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
// //               Tech<span className="text-red-600">News</span>
// //             </h1>
// //           </div>
// //           <p className="text-gray-400 text-sm md:text-base">
// //             Latest updates from tech world & our company
// //           </p>
// //         </div>

// //         {/* News Grid */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //           {newsItems.map((item) => (
// //             <div
// //               key={item.id}
// //               className="group bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-red-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-red-900/20"
// //             >
// //               {/* Card Header */}
// //               <div className="bg-gradient-to-r from-red-950/30 to-transparent p-5 border-b border-gray-800">
// //                 <div className="flex items-center justify-between">
// //                   <div className="flex items-center gap-3">
// //                     <div className="p-2 bg-red-900/30 rounded-lg text-red-500">
// //                       {item.icon}
// //                     </div>
// //                     <span className="text-xs font-semibold uppercase tracking-wider text-red-400">
// //                       {item.category}
// //                     </span>
// //                   </div>
// //                   <div className="flex items-center gap-1 text-gray-500 text-xs">
// //                     <Clock className="w-3.5 h-3.5" />
// //                     {item.date}
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Content */}
// //               <div className="p-6">
// //                 <h2 className="text-xl font-bold mb-3 group-hover:text-red-500 transition-colors">
// //                   {item.title}
// //                 </h2>
// //                 <p className="text-gray-300 text-sm leading-relaxed mb-6">
// //                   {item.description}
// //                 </p>

// //                 {/* Footer / Link */}
// //                 <a
// //                   href={item.link}
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 font-medium text-sm transition-colors"
// //                 >
// //                   Read more
// //                   <ExternalLink className="w-4 h-4" />
// //                 </a>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Footer note */}
// //         <div className="mt-12 text-center text-gray-500 text-sm">
// //           Add your latest company announcements in the <code>newsItems</code> array
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default TechNews;

// // import React, { useState } from 'react';
// // import { Newspaper, ExternalLink, Clock, Cpu, Zap, Globe } from 'lucide-react';

// // const TechNews = () => {
// //   // You can update / add your own company news here
// //   const newsItems = [
// //     {
// //       id: 1,
// //       title: "Our Company Launches New AI-Powered Feature",
// //       description: "We just released a groundbreaking update that boosts performance by 40% using next-gen AI.",
// //       date: "Feb 10, 2026",
// //       category: "Company Update",
// //       icon: <Cpu className="w-5 h-5" />,
// //       link: "#",
// //     },
// //     {
// //       id: 2,
// //       title: "Cisco Unveils AI Networking Chip to Challenge Nvidia",
// //       description: "New silicon aims to optimize data center AI workloads with better efficiency.",
// //       date: "Feb 10, 2026",
// //       category: "Hardware",
// //       icon: <Zap className="w-5 h-5" />,
// //       link: "https://www.reuters.com/technology",
// //     },
// //     {
// //       id: 3,
// //       title: "Alibaba Releases AI Model for Robotics & Physical AI",
// //       description: "Chinese tech giant pushes 'physical AI' with robot control capabilities.",
// //       date: "Feb 10, 2026",
// //       category: "AI",
// //       icon: <Globe className="w-5 h-5" />,
// //       link: "https://www.cnbc.com/technology",
// //     },
// //     {
// //       id: 4,
// //       title: "ChatGPT Starts Showing Ads – New Revenue Stream",
// //       description: "OpenAI begins testing advertisements inside ChatGPT interface.",
// //       date: "Feb 9, 2026",
// //       category: "Industry",
// //       icon: <Newspaper className="w-5 h-5" />,
// //       link: "https://techcrunch.com/",
// //     },
// //     {
// //       id: 5,
// //       title: "xAI Opens New Office – Joins Growing AI Hub",
// //       description: "Elon Musk’s xAI expands presence in Bellevue AI corridor.",
// //       date: "Feb 9, 2026",
// //       category: "Company News",
// //       icon: <Cpu className="w-5 h-5" />,
// //       link: "https://www.geekwire.com/",
// //     },
// //   ];

// //   const [selectedCategory, setSelectedCategory] = useState("All");

// //   // Get unique categories + "All"
// //   const categories = ["All", ...new Set(newsItems.map(item => item.category))];

// //   // Filter news based on selected category
// //   const filteredNews = selectedCategory === "All"
// //     ? newsItems
// //     : newsItems.filter(item => item.category === selectedCategory);

// //   return (
// //     <div className="min-h-screen bg-black text-gray-100 p-6 md:p-10">
// //       {/* Header */}
// //       <div className="max-w-5xl mx-auto">
// //         <div className="flex items-center justify-between mb-10">
// //           <div className="flex items-center gap-3">
// //             <Newspaper className="w-10 h-10 text-red-600" strokeWidth={2.5} />
// //             <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
// //               Tech<span className="text-red-600">News</span>
// //             </h1>
// //           </div>
      
// //         </div>

// //         {/* Category Filter Buttons */}
// //         <div className="flex flex-wrap gap-3 mb-10">
// //           {categories.map((category) => (
// //             <button
// //               key={category}
// //               onClick={() => setSelectedCategory(category)}
// //               className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
// //                 ${selectedCategory === category
// //                   ? "bg-red-600 text-white shadow-lg shadow-red-900/40"
// //                   : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700"
// //                 }`}
// //             >
// //               {category}
// //             </button>
// //           ))}
// //         </div>

// //         {/* News Grid */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //           {filteredNews.map((item) => (
// //             <div
// //               key={item.id}
// //               className="group bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-red-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-red-900/20"
// //             >
// //               {/* Card Header */}
// //               <div className="bg-gradient-to-r from-red-950/30 to-transparent p-5 border-b border-gray-800">
// //                 <div className="flex items-center justify-between">
// //                   <div className="flex items-center gap-3">
// //                     <div className="p-2 bg-red-900/30 rounded-lg text-red-500">
// //                       {item.icon}
// //                     </div>
// //                     <span className="text-xs font-semibold uppercase tracking-wider text-red-400">
// //                       {item.category}
// //                     </span>
// //                   </div>
// //                   <div className="flex items-center gap-1 text-gray-500 text-xs">
// //                     <Clock className="w-3.5 h-3.5" />
// //                     {item.date}
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Content */}
// //               <div className="p-6">
// //                 <h2 className="text-xl font-bold mb-3 group-hover:text-red-500 transition-colors">
// //                   {item.title}
// //                 </h2>
// //                 <p className="text-gray-300 text-sm leading-relaxed mb-6">
// //                   {item.description}
// //                 </p>

// //                 {/* Footer / Link */}
// //                 <a
// //                   href={item.link}
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 font-medium text-sm transition-colors"
// //                 >
// //                   Read more
// //                   <ExternalLink className="w-4 h-4" />
// //                 </a>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         {filteredNews.length === 0 && (
// //           <div className="text-center text-gray-400 mt-12 text-lg">
// //             No news found in this category.
// //           </div>
// //         )}

// //         {/* Footer note */}
        
// //       </div>
// //     </div>
// //   );
// // };

// // export default TechNews;

// import React, { useState, useEffect } from 'react';
// import { Newspaper, ExternalLink, Clock, Cpu, Zap, Globe } from 'lucide-react';

// const TechNews = () => {
//   const [newsItems, setNewsItems] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch tech news from your backend
//   useEffect(() => {
//     const fetchTechNews = async () => {
//       try {
//         setLoading(true);
//         setError(null);

//         // Assuming your backend has: GET /tech → returns array of news/tech items
//         const response = await fetch('http://localhost:8000/tech', {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         });

//         if (!response.ok) {
//           throw new Error(`Server responded with status ${response.status}`);
//         }

//         const data = await response.json();

//         // Make sure the data matches the expected structure
//         // Expected fields: title, description, date, category, link (icon we handle in frontend)
//         const formattedData = data.map((item, index) => ({
//           id: item._id || index + 1,                // use _id if MongoDB, else fallback
//           title: item.title || 'Untitled',
//           description: item.description || 'No description available',
//           date: item.date || new Date().toLocaleDateString('en-US', {
//             month: 'short',
//             day: 'numeric',
//             year: 'numeric'
//           }),
//           category: item.category || 'General',
//           link: item.link || item.url || '#',
//           // icon will be assigned in render based on category
//         }));

//         setNewsItems(formattedData);
//       } catch (err) {
//         console.error('Error fetching tech news:', err);
//         setError('Failed to load news. Please try again later.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTechNews();
//   }, []);

//   // Get unique categories + "All"
//   const categories = ["All", ...new Set(newsItems.map(item => item.category))];

//   // Filter news based on selected category
//   const filteredNews = selectedCategory === "All"
//     ? newsItems
//     : newsItems.filter(item => item.category === selectedCategory);

//   // Simple icon mapping based on category (you can expand this)
//   const getIconForCategory = (category) => {
//     switch (category?.toLowerCase()) {
//       case 'ai':
//       case 'artificial intelligence':
//         return <Cpu className="w-5 h-5" />;
//       case 'hardware':
//         return <Zap className="w-5 h-5" />;
//       case 'company update':
//       case 'company news':
//         return <Cpu className="w-5 h-5" />;
//       case 'industry':
//         return <Newspaper className="w-5 h-5" />;
//       default:
//         return <Globe className="w-5 h-5" />;
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-black text-gray-100 flex items-center justify-center">
//         <div className="text-xl">Loading latest tech news...</div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-black text-gray-100 flex items-center justify-center">
//         <div className="text-xl text-red-500">{error}</div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-black text-gray-100 p-6 md:p-10">
//       {/* Header */}
//       <div className="max-w-5xl mx-auto">
//         <div className="flex items-center justify-between mb-10">
//           <div className="flex items-center gap-3">
//             <Newspaper className="w-10 h-10 text-red-600" strokeWidth={2.5} />
//             <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
//               Tech<span className="text-red-600">News</span>
//             </h1>
//           </div>
//         </div>

//         {/* Category Filter Buttons */}
//         <div className="flex flex-wrap gap-3 mb-10">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setSelectedCategory(category)}
//               className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
//                 ${selectedCategory === category
//                   ? "bg-red-600 text-white shadow-lg shadow-red-900/40"
//                   : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700"
//                 }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         {/* News Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredNews.map((item) => (
//             <div
//               key={item.id}
//               className="group bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-red-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-red-900/20"
//             >
//               {/* Card Header */}
//               <div className="bg-gradient-to-r from-red-950/30 to-transparent p-5 border-b border-gray-800">
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-3">
//                     <div className="p-2 bg-red-900/30 rounded-lg text-red-500">
//                       {getIconForCategory(item.category)}
//                     </div>
//                     <span className="text-xs font-semibold uppercase tracking-wider text-red-400">
//                       {item.category}
//                     </span>
//                   </div>
//                   <div className="flex items-center gap-1 text-gray-500 text-xs">
//                     <Clock className="w-3.5 h-3.5" />
//                     {item.date}
//                   </div>
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="p-6">
//                 <h2 className="text-xl font-bold mb-3 group-hover:text-red-500 transition-colors">
//                   {item.title}
//                 </h2>
//                 <p className="text-gray-300 text-sm leading-relaxed mb-6">
//                   {item.description}
//                 </p>

//                 {/* Footer / Link */}
//                 <a
//                   href={item.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 font-medium text-sm transition-colors"
//                 >
//                   Read more
//                   <ExternalLink className="w-4 h-4" />
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>

//         {filteredNews.length === 0 && (
//           <div className="text-center text-gray-400 mt-12 text-lg">
//             No news found in this category.
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TechNews;

// import React, { useState, useEffect } from 'react';
// import { Newspaper, ExternalLink, Clock, Cpu, Zap, Globe } from 'lucide-react';

// const TechNews = () => {
//   const [newsItems, setNewsItems] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchTechNews = async () => {
//       try {
//         setLoading(true);
//         setError(null);

//         const response = await fetch('http://localhost:8000/tech', {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         });

//         if (!response.ok) {
//           throw new Error(`Server responded with status ${response.status}`);
//         }

//         const data = await response.json();

//         // Handle both single object and array responses
//         let itemsArray = [];
//         if (Array.isArray(data)) {
//           itemsArray = data;
//         } else if (data && typeof data === 'object' && data !== null) {
//           itemsArray = [data];
//         } else {
//           itemsArray = [];
//         }

//         const formattedData = itemsArray.map((item, index) => ({
//           id: item._id || `item-${index + 1}`,
//           title: data.title || 'Untitled',
//           description: item.description || 'No description available',
//           date: item.updatedAt
//             ? new Date(item.updatedAt).toLocaleDateString('en-US', {
//                 month: 'short',
//                 day: 'numeric',
//                 year: 'numeric'
//               })
//             : new Date().toLocaleDateString('en-US', {
//                 month: 'short',
//                 day: 'numeric',
//                 year: 'numeric'
//               }),
//           category: item.category || 'General',
//           link: item.link || item.url || '#',
//           image: item.images && item.images.length > 0 ? item.images[0] : null,
//         }));

//         setNewsItems(formattedData);
//       } catch (err) {
//         console.error('Error fetching tech news:', err);
//         setError('Failed to load news. Please try again later.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTechNews();
//   }, []);

//   // Get unique categories + "All"
//   const categories = ["All", ...new Set(newsItems.map(item => item.category))];

//   // Filter news based on selected category
//   const filteredNews = selectedCategory === "All"
//     ? newsItems
//     : newsItems.filter(item => item.category === selectedCategory);

//   // Icon based on category
//   const getIconForCategory = (category) => {
//     const cat = category?.toLowerCase() || '';
//     if (cat.includes('ai') || cat.includes('artificial intelligence')) {
//       return <Cpu className="w-5 h-5" />;
//     }
//     if (cat.includes('hardware')) {
//       return <Zap className="w-5 h-5" />;
//     }
//     if (cat.includes('company') || cat.includes('update')) {
//       return <Cpu className="w-5 h-5" />;
//     }
//     if (cat.includes('industry') || cat.includes('news')) {
//       return <Newspaper className="w-5 h-5" />;
//     }
//     return <Globe className="w-5 h-5" />;
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-black text-gray-100 flex items-center justify-center p-6">
//         <div className="text-xl">Loading latest tech news...</div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-black text-gray-100 flex items-center justify-center p-6">
//         <div className="text-xl text-red-500">{error}</div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-black text-gray-100 p-6 md:p-10">
//       <div className="max-w-5xl mx-auto">
//         {/* Header */}
//         <div className="flex items-center justify-between mb-10">
//           <div className="flex items-center gap-3">
//             <Newspaper className="w-10 h-10 text-red-600" strokeWidth={2.5} />
//             <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
//               Tech<span className="text-red-600">News</span>
//             </h1>
//           </div>
//         </div>

//         {/* Category Filter Buttons */}
//         <div className="flex flex-wrap gap-3 mb-10">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setSelectedCategory(category)}
//               className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
//                 ${selectedCategory === category
//                   ? "bg-red-600 text-white shadow-lg shadow-red-900/40"
//                   : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700"
//                 }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         {/* News Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredNews.map((item) => (
//             <div
//               key={item.id}
//               className="group bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-red-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-red-900/20"
//             >
//               {/* Card Header */}
//               <div className="bg-gradient-to-r from-red-950/30 to-transparent p-5 border-b border-gray-800">
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-3">
//                     <div className="p-2 bg-red-900/30 rounded-lg text-red-500">
//                       {getIconForCategory(item.category)}
//                     </div>
//                     <span className="text-xs font-semibold uppercase tracking-wider text-red-400">
//                       {item.category}
//                     </span>
//                   </div>
//                   <div className="flex items-center gap-1 text-gray-500 text-xs">
//                     <Clock className="w-3.5 h-3.5" />
//                     {item.date}
//                   </div>
//                 </div>
//               </div>

//               {/* Image (if available) */}
//               {item.image && (
//                 <div className="h-48 overflow-hidden">
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                   />
//                 </div>
//               )}

//               {/* Content */}
//               <div className="p-6">
//                 <h2 className="text-xl font-bold mb-3 group-hover:text-red-500 transition-colors">
//                   {item.title}
//                 </h2>
//                 <p className="text-gray-300 text-sm leading-relaxed mb-6">
//                   {item.description}
//                 </p>

//                 {/* Footer / Link */}
//                 <a
//                   href={item.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 font-medium text-sm transition-colors"
//                 >
//                   Read more
//                   <ExternalLink className="w-4 h-4" />
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>

//         {filteredNews.length === 0 && (
//           <div className="text-center text-gray-400 mt-12 text-lg">
//             No news found in this category.
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TechNews;

import React, { useState, useEffect } from 'react';
import { Newspaper, ExternalLink, Clock, Cpu, Zap, Globe } from 'lucide-react';

const TechNews = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTechNews = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch('http://localhost:8000/tech', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`Server responded with status ${response.status}`);
        }

        const result = await response.json();

        // The real structure is: { success: true, count: 1, message: "...", data: [ ... ] }
        // So we need to use result.data
        let items = result.data || [];

        // Make sure it's always an array
        if (!Array.isArray(items)) {
          items = [];
        }

        const formattedData = items.map((item, index) => ({
          id: item._id || `item-${index + 1}`,
          title: item.title || 'Untitled',
          description: item.description || 'No description available',
          date: item.updatedAt || item.createdAt
            ? new Date(item.updatedAt || item.createdAt).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              })
            : new Date().toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              }),
          // category is now an object → item.category.name
          category: item.category?.name || 'General',
          link: item.link || item.url || '#',
          image: item.images && item.images.length > 0 ? item.images[0] : null,
        }));

        setNewsItems(formattedData);
      } catch (err) {
        console.error('Error fetching tech news:', err);
        setError('Failed to load news. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchTechNews();
  }, []);

  // Get unique categories + "All"
  const categories = ["All", ...new Set(newsItems.map(item => item.category))];

  // Filter news based on selected category
  const filteredNews = selectedCategory === "All"
    ? newsItems
    : newsItems.filter(item => item.category === selectedCategory);

  // Icon based on category
  const getIconForCategory = (category) => {
    const cat = (category || '').toLowerCase();
    if (cat.includes('ai') || cat.includes('artificial intelligence')) {
      return <Cpu className="w-5 h-5" />;
    }
    if (cat.includes('hardware')) {
      return <Zap className="w-5 h-5" />;
    }
    if (cat.includes('company') || cat.includes('update')) {
      return <Cpu className="w-5 h-5" />;
    }
    if (cat.includes('industry') || cat.includes('news')) {
      return <Newspaper className="w-5 h-5" />;
    }
    if (cat.includes('software') || cat.includes('developer')) {
      return <Cpu className="w-5 h-5" />;
    }
    return <Globe className="w-5 h-5" />;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-gray-100 flex items-center justify-center p-6">
        <div className="text-xl">Loading latest tech news...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black text-gray-100 flex items-center justify-center p-6">
        <div className="text-xl text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-gray-100 p-6 md:p-10">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <Newspaper className="w-10 h-10 text-red-600" strokeWidth={2.5} />
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Tech<span className="text-red-600">News</span>
            </h1>
          </div>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${selectedCategory === category
                  ? "bg-red-600 text-white shadow-lg shadow-red-900/40"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.map((item) => (
            <div
              key={item.id}
              className="group bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-red-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-red-900/20"
            >
              {/* Card Header */}
              <div className="bg-gradient-to-r from-red-950/30 to-transparent p-5 border-b border-gray-800">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-red-900/30 rounded-lg text-red-500">
                      {getIconForCategory(item.category)}
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-red-400">
                      {item.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500 text-xs">
                    <Clock className="w-3.5 h-3.5" />
                    {item.date}
                  </div>
                </div>
              </div>

              {/* Image (if available) */}
              {item.image && (
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-6">
                <h2 className="text-xl font-bold mb-3 group-hover:text-red-500 transition-colors">
                  {item.title}
                </h2>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Footer / Link */}
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 font-medium text-sm transition-colors"
                >
                  Read more
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredNews.length === 0 && (
          <div className="text-center text-gray-400 mt-12 text-lg">
            No news found in this category.
          </div>
        )}
      </div>
    </div>
  );
};

export default TechNews;