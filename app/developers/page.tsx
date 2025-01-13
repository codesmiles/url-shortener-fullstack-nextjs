'use client';
import { motion } from 'framer-motion';

export default function Developers() {
  const codeExample = `
// Example API request
const response = await fetch('https://api.shortly.com/v1/shorten', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    url: 'https://example.com/very/long/url'
  })
});

const data = await response.json();
console.log(data.shortUrl); // https://shortly.com/abc123
`;

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Developer Resources</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Everything you need to integrate Shortly into your applications.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Quick Start</h2>
            <div className="bg-gray-900 text-white p-6 rounded-lg">
              <pre className="overflow-x-auto">
                <code>{codeExample}</code>
              </pre>
            </div>
            <div className="mt-6">
              <button className="bg-[#2BD0D0] text-white px-6 py-2 rounded-lg hover:bg-opacity-70 transition-colors">
                Get API Key
              </button>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Documentation</h2>
            <div className="space-y-4">
              <a href="#" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <h3 className="font-bold mb-2">REST API Reference</h3>
                <p className="text-gray-600">
                  Complete API documentation with examples and use cases.
                </p>
              </a>
              <a href="#" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <h3 className="font-bold mb-2">SDKs & Libraries</h3>
                <p className="text-gray-600">
                  Official SDKs for popular programming languages.
                </p>
              </a>
              <a href="#" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <h3 className="font-bold mb-2">Webhooks</h3>
                <p className="text-gray-600">
                  Real-time notifications for link events.
                </p>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Integration Guides</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 bg-white rounded-lg shadow-lg"
            >
              <h3 className="font-bold mb-4">Web Integration</h3>
              <p className="text-gray-600 mb-4">
                Learn how to integrate Shortly into your website or web application.
              </p>
              <a href="#" className="text-[#2BD0D0] hover:underline">Learn more →</a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-6 bg-white rounded-lg shadow-lg"
            >
              <h3 className="font-bold mb-4">Mobile SDK</h3>
              <p className="text-gray-600 mb-4">
                Integrate Shortly into your iOS or Android applications.
              </p>
              <a href="#" className="text-[#2BD0D0] hover:underline">Learn more →</a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-6 bg-white rounded-lg shadow-lg"
            >
              <h3 className="font-bold mb-4">Browser Extensions</h3>
              <p className="text-gray-600 mb-4">
                Build browser extensions using our API.
              </p>
              <a href="#" className="text-[#2BD0D0] hover:underline">Learn more →</a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
