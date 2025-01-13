'use client';
import { motion } from 'framer-motion';

export default function Blog() {
  const blogPosts = [
    {
      title: "Maximizing Link Performance: Best Practices for 2025",
      date: "January 13, 2025",
      excerpt: "Learn how to optimize your shortened links for better engagement and click-through rates.",
      category: "Tips & Tricks"
    },
    {
      title: "The Future of URL Shortening",
      date: "January 10, 2025",
      excerpt: "Explore upcoming trends in link management and URL shortening technology.",
      category: "Industry News"
    },
    {
      title: "Case Study: How Company X Increased CTR by 150%",
      date: "January 5, 2025",
      excerpt: "A detailed look at how one company revolutionized their link strategy.",
      category: "Case Studies"
    },
    {
      title: "New Feature Alert: Advanced Analytics Dashboard",
      date: "January 1, 2025",
      excerpt: "Introducing our new analytics dashboard with enhanced tracking capabilities.",
      category: "Product Updates"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Blog</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Stay up to date with the latest insights, tips, and news about link management 
          and digital marketing.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <span className="text-sm text-[#2BD0D0] font-semibold">
                  {post.category}
                </span>
                <h2 className="text-xl font-bold mt-2 mb-3">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {post.date}
                  </span>
                  <a 
                    href="#" 
                    className="text-[#2BD0D0] hover:underline text-sm font-semibold"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-[#2BD0D0] text-white px-8 py-3 rounded-lg hover:bg-opacity-70 transition-colors">
            Load More Posts
          </button>
        </div>
      </motion.div>
    </div>
  );
}
