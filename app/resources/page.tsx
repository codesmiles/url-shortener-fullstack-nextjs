'use client';
import { motion } from 'framer-motion';

export default function Resources() {
  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Resources</h1>
        <p className="text-center text-gray-600 mb-12">Everything you need to get the most out of Shortly</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Documentation */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Documentation</h3>
            <p className="text-gray-600 mb-4">
              Comprehensive guides and API documentation to help you integrate Shortly into your workflow.
            </p>
            <a href="#" className="text-[#2BD0D0] hover:underline">Learn More →</a>
          </div>

          {/* Blog */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Blog</h3>
            <p className="text-gray-600 mb-4">
              Stay up to date with the latest features, tips, and best practices for link management.
            </p>
            <a href="#" className="text-[#2BD0D0] hover:underline">Read Posts →</a>
          </div>

          {/* Case Studies */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Case Studies</h3>
            <p className="text-gray-600 mb-4">
              See how other companies are using Shortly to improve their link management.
            </p>
            <a href="#" className="text-[#2BD0D0] hover:underline">View Studies →</a>
          </div>

          {/* Help Center */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Help Center</h3>
            <p className="text-gray-600 mb-4">
              Get answers to common questions and learn how to make the most of Shortly.
            </p>
            <a href="#" className="text-[#2BD0D0] hover:underline">Get Help →</a>
          </div>

          {/* API Reference */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">API Reference</h3>
            <p className="text-gray-600 mb-4">
              Technical documentation for developers integrating Shortly into their applications.
            </p>
            <a href="#" className="text-[#2BD0D0] hover:underline">View API Docs →</a>
          </div>

          {/* Community */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Community</h3>
            <p className="text-gray-600 mb-4">
              Join our community of developers and marketers to share tips and get help.
            </p>
            <a href="#" className="text-[#2BD0D0] hover:underline">Join Now →</a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
