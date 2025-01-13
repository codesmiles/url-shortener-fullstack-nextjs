'use client';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Contact Us</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Have questions? We'd love to hear from you. Send us a message and we'll 
          respond as soon as possible.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#2BD0D0] focus:border-[#2BD0D0]"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#2BD0D0] focus:border-[#2BD0D0]"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#2BD0D0] focus:border-[#2BD0D0]"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#2BD0D0] focus:border-[#2BD0D0]"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#2BD0D0] text-white py-2 px-4 rounded-lg hover:bg-opacity-70 transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-50 p-8 rounded-lg"
          >
            <h2 className="text-2xl font-bold mb-6">Other Ways to Connect</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-bold mb-2">Support</h3>
                <p className="text-gray-600">
                  For technical support, please visit our{' '}
                  <a href="#" className="text-[#2BD0D0] hover:underline">Help Center</a>
                </p>
              </div>

              <div>
                <h3 className="font-bold mb-2">Sales</h3>
                <p className="text-gray-600">
                  For sales inquiries, email us at:{' '}
                  <a href="mailto:sales@shortly.com" className="text-[#2BD0D0] hover:underline">
                    sales@shortly.com
                  </a>
                </p>
              </div>

              <div>
                <h3 className="font-bold mb-2">Office</h3>
                <p className="text-gray-600">
                  123 Market Street<br />
                  Suite 456<br />
                  San Francisco, CA 94105
                </p>
              </div>

              <div>
                <h3 className="font-bold mb-2">Phone</h3>
                <p className="text-gray-600">
                  +1 (555) 123-4567
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
