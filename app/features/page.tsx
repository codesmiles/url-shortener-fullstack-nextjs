'use client';
import { motion } from 'framer-motion';

export default function Features() {
  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Features</h1>
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Link Shortening</h3>
            <p className="text-gray-600">
              Build your brand's recognition with our powerful link shortening service. 
              Create memorable and shareable links in seconds.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Analytics Dashboard</h3>
            <p className="text-gray-600">
              Track your links' performance with detailed analytics. Monitor clicks, 
              geographic data, and referral sources.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Custom Links</h3>
            <p className="text-gray-600">
              Create branded links with custom domains. Maintain brand consistency 
              across all your shortened URLs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">API Access</h3>
            <p className="text-gray-600">
              Integrate our link shortening service into your applications with our 
              robust API. Scale your link management effortlessly.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
