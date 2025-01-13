'use client';
import { motion } from 'framer-motion';

export default function Careers() {
  const positions = [
    {
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time"
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "San Francisco, CA",
      type: "Full-time"
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time"
    },
    {
      title: "Marketing Manager",
      department: "Marketing",
      location: "New York, NY",
      type: "Full-time"
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
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Join Our Team</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Help us build the future of link management. We're looking for passionate 
          individuals who want to make an impact.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Why Shortly?</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#2BD0D0] mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">Competitive salary and equity packages</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#2BD0D0] mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">Comprehensive health, dental, and vision coverage</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#2BD0D0] mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">Flexible work arrangements and unlimited PTO</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#2BD0D0] mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">Professional development budget</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Our Values</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#2BD0D0] mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-gray-600">Innovation First: We're always pushing boundaries</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#2BD0D0] mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <span className="text-gray-600">Team First: Collaboration is our superpower</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#2BD0D0] mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
                <span className="text-gray-600">Customer Focus: We succeed when you succeed</span>
              </li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-8">Open Positions</h2>
        <div className="space-y-6">
          {positions.map((position, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row md:items-center md:justify-between"
            >
              <div>
                <h3 className="text-xl font-bold mb-2">{position.title}</h3>
                <div className="space-x-4">
                  <span className="text-gray-600">{position.department}</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-600">{position.location}</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-600">{position.type}</span>
                </div>
              </div>
              <button className="mt-4 md:mt-0 bg-[#2BD0D0] text-white px-6 py-2 rounded-lg hover:bg-opacity-70 transition-colors">
                Apply Now
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
