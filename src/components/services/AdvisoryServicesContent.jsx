'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, Target, Search, Users, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import WaveSeparator from '../ui/WaveSeparator';
const Modal = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        exit={{ opacity: 0, y: -50 }}
        className="bg-white w-full max-w-2xl h-auto max-h-[90vh] overflow-y-auto rounded-lg shadow-lg p-6 relative"
      >
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-gray-800">✖</button>
        <div className="flex items-center gap-4">
          <div className="text-4xl text-blue-500">{data.icon}</div>
          <h2 className="text-2xl font-bold text-gray-800">{data.title}</h2>
        </div>
        <div className="mt-4 space-y-3">
          {data.content.map((item) => (
            <p key={item.id} className="text-gray-700">{item.text}</p>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
const AdvisoryServicesContent = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };
  const [selectedData, setSelectedData] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = (data) => {
    setSelectedData(data);
    setModalOpen(true);
  };
  
  const closeModal = () => setModalOpen(false);
  const accordionData = [
    {
      title: "Strategic Go-to-Market Planning",
      icon: <Target className="w-8 h-8 text-blue-500" />,
      content: [
        {
          id: 1,
          text: <span key="intro">Looking to enter the booming{' '}
            <span>SCF</span> market or enhance your current offerings? We&apos;ll help you craft a winning strategy:
          </span>
        },
        {
          id: 2,
          text: <span key="market">
            <span className="text-gray-600 font-bold text-lg">Market Assessment:</span> Get a comprehensive analysis of{' '}
            <span className="bg-blue-100 px-1 rounded">market feasibility</span>,{' '}
            <span className="bg-blue-100 px-1 rounded">competition</span>,{' '}
            <span className="bg-blue-100 px-1 rounded">key players</span>, and{' '}
            <span className="bg-blue-100 px-1 rounded">target sectors</span>. We&apos;ll pinpoint your product&apos;s strengths and areas for improvement.
          </span>
        },
        {
          id: 3,
          text: <span key="sales">
            <span className="text-gray-600 font-bold text-lg">Sales Plan:</span> Develop a robust{' '}
            <span className="bg-blue-100 px-1 rounded">sales strategy</span>, including{' '}
            <span className="bg-blue-100 px-1 rounded">market approach</span>,{' '}
            <span className="bg-blue-100 px-1 rounded">client profiles</span>,{' '}
            <span className="bg-blue-100 px-1 rounded">partnership opportunities</span>, and{' '}
            <span className="bg-blue-100 px-1 rounded">key performance metrics</span>. Our plan ensures a streamlined sales process and maximizes your success.
          </span>
        }
      ]
    },
    {
      title: "In-Depth Solution Audit",
      icon: <Search className="w-8 h-8 text-green-500" />,
      content: [
        {
          id: 4,
          text: <span key="audit-intro">Is your{' '}
            <span>SCF</span> platform performing at its best? Our solution audit provides clarity:
          </span>
        },
        {
          id: 5,
          text: <span key="platform">
            <span className="text-gray-600 font-bold text-lg">Platform Review:</span> Determine if your solution is a{' '}
            <span className="bg-blue-100 px-1 rounded">Minimum Viable Product (MVP)</span> or a{' '}
            <span className="bg-blue-100 px-1 rounded">leading-edge offering</span>.
          </span>
        },
        {
          id: 6,
          text: <span key="analysis">
            <span className="text-gray-600 font-bold text-lg">Feature Analysis:</span> Identify{' '}
            <span className="bg-blue-100 px-1 rounded">key strengths</span>,{' '}
            <span className="bg-blue-100 px-1 rounded">differentiators</span>, and{' '}
            <span className="bg-blue-100 px-1 rounded">limitations</span> impacting your platform&apos;s effectiveness.
          </span>
        },
        {
          id: 7,
          text: <span key="recommendations">
            <span className="text-gray-600 font-bold text-lg">Actionable Recommendations:</span> Receive{' '}
            <span className="bg-blue-100 px-1 rounded">detailed insights</span> and{' '}
            <span className="bg-blue-100 px-1 rounded">strategic recommendations</span> to enhance your solution.
          </span>
        }
      ]
    },
    {
      title: "Expert Platform & Partner Selection",
      icon: <Users className="w-8 h-8 text-purple-500" />,
      content: [
        {
          id: 8,
          text: <span key="partner-intro">Choosing the right partners and technology is crucial for{' '}
            <span>SCF</span> success. We offer:
          </span>
        },
        {
          id: 9,
          text: <span key="evaluation">
            <span className="text-gray-600 font-bold text-lg">Evaluation Process:</span> Benefit from our{' '}
            <span className="bg-blue-100 px-1 rounded">rigorous evaluation criteria</span> and{' '}
            <span className="bg-blue-100 px-1 rounded">scoring methodology</span> to select the best{' '}
            <span className="bg-blue-100 px-1 rounded">origination</span>,{' '}
            <span className="bg-blue-100 px-1 rounded">technology</span>, and{' '}
            <span className="bg-blue-100 px-1 rounded">funding partners</span>.
          </span>
        },
        {
          id: 10,
          text: <span key="support">
            <span className="text-gray-600 font-bold text-lg">Support Services:</span> We assist with{' '}
            <span className="bg-blue-100 px-1 rounded">RFP preparation</span>,{' '}
            <span className="bg-blue-100 px-1 rounded">response analysis</span>,{' '}
            <span className="bg-blue-100 px-1 rounded">system demonstrations</span>,{' '}
            <span className="bg-blue-100 px-1 rounded">reference checks</span>, and{' '}
            <span className="bg-blue-100 px-1 rounded">contract negotiations</span> to help you make informed decisions.
          </span>
        }
      ]
    },
    {
      title: "Navigating Accounting Challenges",
      icon: <BookOpen className="w-8 h-8 text-red-500" />,
      content: [
        {
          id: 11,
          text: <span key="accounting-intro">Implementing a Supply Chain Finance program can bring complex accounting issues. Our expertise helps you:</span>
        },
        {
          id: 12,
          text: <span key="best-practices">
            <span className="text-gray-600 font-bold text-lg">Accounting Best Practices:</span> Navigate the{' '}
            <span className="bg-blue-100 px-1 rounded">intricacies of accounting treatment</span> with our expert guidance.
          </span>
        },
        {
          id: 13,
          text: <span key="templates">
            <span className="text-gray-600 font-bold text-lg">Communication Templates:</span> Utilize our templates for{' '}
            <span className="bg-blue-100 px-1 rounded">effective communication</span> with{' '}
            <span className="bg-blue-100 px-1 rounded">auditors</span>, ensuring a favorable opinion on your program.
          </span>
        }
      ]
    }
  ];

  return (
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h2 className="subheading">Transform Your Supply Chain Finance Strategy</h2>
        <p className="paragraph max-w-5xl mx-auto">
          Are you ready to take your Supply Chain Finance (SCF) initiatives to the next level? Partner with our experienced team to navigate challenges and seize growth opportunities in your SCF strategy.
        </p>
      </div>

      <div className="rounded-lg mb-16">
        <h3 className="subheading text-center">Why Choose Our Advisory Services?</h3>
{/* 
        <div className="space-y-6">
          {accordionData.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                className="flex justify-between items-center w-full p-6 text-left transition-colors duration-200"
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex items-center">
                  <div className="mr-4">{item.icon}</div>
                  <span className="text-xl font-semibold text-gray-800">{item.title}</span>
                </div>
                <motion.div
                  animate={{ rotate: activeAccordion === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6 text-gray-500" />
                </motion.div>
              </button>
              <AnimatePresence>
                {activeAccordion === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-gray-50 border-t border-gray-200">
                      {item.content.map((paragraph) => (
                        <motion.p
                          key={paragraph.id}
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.1, duration: 0.3 }}
                          className="text-gray-700 text-lg mb-4 last:mb-0"
                        >
                          {paragraph.text}
                        </motion.p>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div> */}
     <div className="h-auto bg-gray-100 p-2 md:p-8">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      {accordionData.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
        >
          <div className="md:p-6 p-2 flex-1" onClick={() => openModal(item)}>
            <div className="flex  items-center ">
              <div className="md:text-3xl text-2xl mr-4">{item.icon}</div>
              <h3 className="md:text-xl text-sm font-semibold text-gray-800">{item.title}</h3>
            </div>
            <p className="text-gray-600">{item.description}</p>
          </div>
          {/* <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 mt-auto">
            <button className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors duration-200">
              Learn More →
            </button>
          </div> */}
        </motion.div>
      ))}
    </div>
  </div>
  {selectedData && <Modal isOpen={isModalOpen} onClose={closeModal} data={selectedData} />}
</div>

      </div>

      <div className="text-center bg-blue-600 text-white rounded-lg p-12">
        <h4 className="text-3xl font-bold mb-4">Ready to elevate your SCF strategy?</h4>
        <p className="text-xl mb-8">Let&apos;s connect and explore how our Advisory Services can help you achieve your goals.</p>
        <Link href="/contact-us" className="bg-white text-blue-600 hover:bg-blue-100 font-bold py-3 px-8 rounded-full transition-colors duration-200 text-lg">
          Contact Us Today
        </Link>
      </div>
     
    </div>
  );
};

export default AdvisoryServicesContent;