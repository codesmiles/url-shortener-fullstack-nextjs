'use client';
import { motion } from 'framer-motion';

export default function Support() {
  const faqs = [
    {
      question: "How do I create a shortened link?",
      answer: "Simply paste your long URL into the shortener input field on our homepage and click 'Shorten It!'. You'll instantly receive a shortened version of your link."
    },
    {
      question: "Are the shortened links permanent?",
      answer: "Yes, all shortened links are permanent and will not expire. However, we recommend keeping track of your important links in your account."
    },
    {
      question: "Can I customize my shortened links?",
      answer: "Yes, with a Premium account you can create custom branded links using your own domain name or choose custom back-halves for your shortened URLs."
    },
    {
      question: "Is there a limit to how many links I can create?",
      answer: "Free accounts can create up to 50 links per month. Premium accounts have unlimited link creation."
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
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Support Center</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Find answers to common questions or get in touch with our support team.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-lg text-center"
          >
            <div className="w-16 h-16 bg-[#2BD0D0] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Getting Started</h3>
            <p className="text-gray-600 mb-4">
              New to Shortly? Learn the basics and get started quickly.
            </p>
            <a href="#" className="text-[#2BD0D0] hover:underline">View Guides →</a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white p-6 rounded-lg shadow-lg text-center"
          >
            <div className="w-16 h-16 bg-[#2BD0D0] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Live Chat</h3>
            <p className="text-gray-600 mb-4">
              Chat with our support team in real-time.
            </p>
            <button className="text-[#2BD0D0] hover:underline">Start Chat →</button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-6 rounded-lg shadow-lg text-center"
          >
            <div className="w-16 h-16 bg-[#2BD0D0] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Email Support</h3>
            <p className="text-gray-600 mb-4">
              Send us an email and we'll respond within 24 hours.
            </p>
            <a href="mailto:support@shortly.com" className="text-[#2BD0D0] hover:underline">
              Email Us →
            </a>
          </motion.div>
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
