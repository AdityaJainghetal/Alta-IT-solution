import React, { useState, useEffect } from "react";
import { Newspaper, ExternalLink, Clock, Cpu, Zap, Globe } from "lucide-react";

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

        const response = await fetch(
          "https://atla-knots-solution-admin-1.onrender.com/tech",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          },
        );

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
          title: item.title || "Untitled",
          description: item.description || "No description available",
          date:
            item.updatedAt || item.createdAt
              ? new Date(item.updatedAt || item.createdAt).toLocaleDateString(
                  "en-US",
                  {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  },
                )
              : new Date().toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                }),
          // category is now an object → item.category.name
          category: item.category?.name || "General",
          link: item.link || item.url || "#",
          image: item.images && item.images.length > 0 ? item.images[0] : null,
        }));

        setNewsItems(formattedData);
      } catch (err) {
        console.error("Error fetching tech news:", err);
        setError("Failed to load news. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchTechNews();
  }, []);

  // Get unique categories + "All"
  const categories = [
    "All",
    ...new Set(newsItems.map((item) => item.category)),
  ];

  // Filter news based on selected category
  const filteredNews =
    selectedCategory === "All"
      ? newsItems
      : newsItems.filter((item) => item.category === selectedCategory);

  // Icon based on category
  const getIconForCategory = (category) => {
    const cat = (category || "").toLowerCase();
    if (cat.includes("ai") || cat.includes("artificial intelligence")) {
      return <Cpu className="w-5 h-5" />;
    }
    if (cat.includes("hardware")) {
      return <Zap className="w-5 h-5" />;
    }
    if (cat.includes("company") || cat.includes("update")) {
      return <Cpu className="w-5 h-5" />;
    }
    if (cat.includes("industry") || cat.includes("news")) {
      return <Newspaper className="w-5 h-5" />;
    }
    if (cat.includes("software") || cat.includes("developer")) {
      return <Cpu className="w-5 h-5" />;
    }
    return <Globe className="w-5 h-5" />;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-gray-100 flex flex-col items-center justify-center p-6">
        <div className="relative w-24 h-24">
          {/* Outer ring */}
          <div className="absolute inset-0 border-4 border-gray-800 border-t-red-600 rounded-full animate-spin"></div>
          {/* Middle ring */}
          <div className="absolute inset-3 border-4 border-gray-800 border-r-red-500 rounded-full animate-spin" style={{ animationDuration: '1.5s', animationDirection: 'reverse' }}></div>
          {/* Inner ring */}
          <div className="absolute inset-6 border-4 border-gray-800 border-b-red-400 rounded-full animate-spin" style={{ animationDuration: '2s' }}></div>
          {/* Center glow */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-red-600 rounded-full animate-pulse shadow-lg shadow-red-600/50"></div>
        </div>
        <div className="mt-8 flex items-center gap-2">
          <Newspaper className="w-5 h-5 text-red-600 animate-pulse" />
          <p className="text-lg text-gray-400 animate-pulse">Loading latest tech news...</p>
        </div>
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
                ${
                  selectedCategory === category
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