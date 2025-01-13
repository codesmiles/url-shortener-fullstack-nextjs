'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">About Shortly</h1>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                At Shortly, we're on a mission to simplify link management and empower businesses 
                to make the most of their online presence. We believe that every link should be 
                an opportunity to engage, track, and optimize your digital communications.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Our Story</h2>
              <p className="text-gray-600 leading-relaxed">
                Founded in 2023, Shortly emerged from a simple idea: make link management 
                accessible to everyone. What started as a basic URL shortener has evolved into 
                a comprehensive platform serving millions of users worldwide.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Our Values</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Simplicity</h3>
                  <p className="text-gray-600">
                    We believe in making complex things simple and accessible.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Innovation</h3>
                  <p className="text-gray-600">
                    We continuously evolve to meet the changing needs of our users.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Reliability</h3>
                  <p className="text-gray-600">
                    We provide a service you can count on, 24/7.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Security</h3>
                  <p className="text-gray-600">
                    We prioritize the safety and privacy of our users' data.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
