'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, Globe, Search, Handshake, DollarSign, TrendingUp, ArrowUpCircle, Wallet, HandshakeIcon} from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';

const ConsultingServicesContent = () => {
    const [activeAccordion, setActiveAccordion] = useState(null);

    const toggleAccordion = (index) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };

    // const accordionData = [
    //     {
    //       title: "Go-to-Market Strategy for Supply Chain Finance",
    //       icon: <Globe className="w-8 h-8 text-blue-500" />,
    //       content: [
    //         <span key="intro-1">Break into the booming{' '}
    //           <span>SCF</span> market with confidence:
    //         </span>,
    //         <span key="strategic">
    //           <span className="text-gray-600 font-bold text-lg">Strategic Positioning:</span> Leverage{' '}
    //           <span className="bg-blue-100 px-1 rounded">data-driven insights</span>,{' '}
    //           <span className="bg-blue-100 px-1 rounded">industry best practices</span>, and{' '}
    //           <span className="bg-blue-100 px-1 rounded">market analytics</span> to position your offering effectively.
    //         </span>,
    //         <span key="market">
    //           <span className="text-gray-600 font-bold text-lg">Market Entry Plan:</span> Define your{' '}
    //           <span className="bg-blue-100 px-1 rounded">target audience</span>,{' '}
    //           <span className="bg-blue-100 px-1 rounded">value proposition</span>,{' '}
    //           <span className="bg-blue-100 px-1 rounded">competitive advantages</span>, and{' '}
    //           <span className="bg-blue-100 px-1 rounded">market differentiation strategy</span> for maximum impact.
    //         </span>
    //       ]
    //     },
    //     {
    //       title: "Supply Chain Finance Solution Audit",
    //       icon: <Search className="w-8 h-8 text-green-500" />,
    //       content: [
    //         <span key="intro-2">Ensure your{' '}
    //           <span>SCF</span> platform delivers peak performance:
    //         </span>,
    //         <span key="analysis">
    //           <span className="text-gray-600 font-bold text-lg">Comprehensive Analysis:</span> Evaluate{' '}
    //           <span className="bg-blue-100 px-1 rounded">platform capabilities</span>,{' '}
    //           <span className="bg-blue-100 px-1 rounded">operational efficiency</span>, and{' '}
    //           <span className="bg-blue-100 px-1 rounded">system performance</span> to identify opportunities.
    //         </span>,
    //         <span key="enhancement">
    //           <span className="text-gray-600 font-bold text-lg">Enhancement Strategy:</span> Receive{' '}
    //           <span className="bg-blue-100 px-1 rounded">actionable recommendations</span> for{' '}
    //           <span className="bg-blue-100 px-1 rounded">performance optimization</span>,{' '}
    //           <span className="bg-blue-100 px-1 rounded">scalability improvements</span>, and{' '}
    //           <span className="bg-blue-100 px-1 rounded">supplier relationship management</span>.
    //         </span>
    //       ]
    //     },
    //     {
    //       title: "SCF Platform & Partner Selection",
    //       icon: <Handshake className="w-8 h-8 text-purple-500" />,
    //       content: [
    //         <span key="intro-3">Make informed decisions for your{' '}
    //           <span>SCF</span> ecosystem:
    //         </span>,
    //         <span key="evaluation">
    //           <span className="text-gray-600 font-bold text-lg">Evaluation Framework:</span> Access our{' '}
    //           <span className="bg-blue-100 px-1 rounded">objective assessment criteria</span>,{' '}
    //           <span className="bg-blue-100 px-1 rounded">technology evaluation</span>, and{' '}
    //           <span className="bg-blue-100 px-1 rounded">partner vetting process</span>.
    //         </span>,
    //         <span key="integration">
    //           <span className="text-gray-600 font-bold text-lg">Integration Planning:</span> Ensure{' '}
    //           <span className="bg-blue-100 px-1 rounded">seamless implementation</span>,{' '}
    //           <span className="bg-blue-100 px-1 rounded">business alignment</span>, and{' '}
    //           <span className="bg-blue-100 px-1 rounded">sustainable growth</span> through strategic partnerships.
    //         </span>
    //       ]
    //     },
    //     {
    //       title: "SCF Accounting Treatment",
    //       icon: <DollarSign className="w-8 h-8 text-red-500" />,
    //       content: [
    //         <span key="intro-4">Master the financial complexities of{' '}
    //           <span>SCF</span> with expert guidance:
    //         </span>,
    //         <span key="compliance">
    //           <span className="text-gray-600 font-bold text-lg">Compliance & Reporting:</span> Navigate{' '}
    //           <span className="bg-blue-100 px-1 rounded">regulatory requirements</span>,{' '}
    //           <span className="bg-blue-100 px-1 rounded">accounting standards</span>, and{' '}
    //           <span className="bg-blue-100 px-1 rounded">reporting practices</span>.
    //         </span>,
    //         <span key="risk">
    //           <span className="text-gray-600 font-bold text-lg">Risk Management:</span> Implement{' '}
    //           <span className="bg-blue-100 px-1 rounded">financial controls</span>,{' '}
    //           <span className="bg-blue-100 px-1 rounded">transparency measures</span>, and{' '}
    //           <span className="bg-blue-100 px-1 rounded">risk mitigation strategies</span> for your SCF operations.
    //         </span>
    //       ]
    //     }
    //   ];
const accordionData =[ {
  title: "Go-to-Market Strategy for Supply Chain Finance",
  icon: <Globe className="w-12 h-12 text-blue-500" />,
  backgroundColor: "bg-blue-50",
  borderColor: "border-blue-200",
  iconBackground: "bg-blue-100",
  content: [
    <span key="intro-1" className="text-blue-600 font-medium text-lg block mb-3">
      Break into the booming SCF market with confidence:
    </span>,
    <span key="strategic" className="block mb-3">
      <span className="text-gray-600 font-bold text-lg">Strategic Positioning:</span> Leverage{' '}
      <span className="bg-blue-100 px-1 rounded">data-driven insights</span>,{' '}
      <span className="bg-blue-100 px-1 rounded">industry best practices</span>, and{' '}
      <span className="bg-blue-100 px-1 rounded">market analytics</span> to position your offering effectively.
    </span>,
    <span key="market" className="block">
      <span className="text-gray-600 font-bold text-lg">Market Entry Plan:</span> Define your{' '}
      <span className="bg-blue-100 px-1 rounded">target audience</span>,{' '}
      <span className="bg-blue-100 px-1 rounded">value proposition</span>,{' '}
      <span className="bg-blue-100 px-1 rounded">competitive advantages</span>, and{' '}
      <span className="bg-blue-100 px-1 rounded">market differentiation strategy</span> for maximum impact.
    </span>
  ]
},
{
  title: "Supply Chain Finance Solution Audit",
  icon: <Search className="w-12 h-12 text-green-500" />,
  backgroundColor: "bg-green-50",
  borderColor: "border-green-200",
  iconBackground: "bg-green-100",
  content: [
    <span key="intro-2" className="text-green-600 font-medium text-lg block mb-3">
      Ensure your SCF platform delivers peak performance:
    </span>,
    <span key="analysis" className="block mb-3">
      <span className="text-gray-600 font-bold text-lg">Comprehensive Analysis:</span> Evaluate{' '}
      <span className="bg-blue-100 px-1 rounded">platform capabilities</span>,{' '}
      <span className="bg-blue-100 px-1 rounded">operational efficiency</span>, and{' '}
      <span className="bg-blue-100 px-1 rounded">system performance</span> to identify opportunities.
    </span>,
    <span key="enhancement" className="block">
      <span className="text-gray-600 font-bold text-lg">Enhancement Strategy:</span> Receive{' '}
      <span className="bg-blue-100 px-1 rounded">actionable recommendations</span> for{' '}
      <span className="bg-blue-100 px-1 rounded">performance optimization</span>,{' '}
      <span className="bg-blue-100 px-1 rounded">scalability improvements</span>, and{' '}
      <span className="bg-blue-100 px-1 rounded">supplier relationship management</span>.
    </span>
  ]
},
{
  title: "SCF Platform & Partner Selection",
  icon: <Handshake className="w-12 h-12 text-purple-500" />,
  backgroundColor: "bg-purple-50",
  borderColor: "border-purple-200",
  iconBackground: "bg-purple-100",
  content: [
    <span key="intro-3" className="text-purple-600 font-medium text-lg block mb-3">
      Make informed decisions for your SCF ecosystem:
    </span>,
    <span key="evaluation" className="block mb-3">
      <span className="text-gray-600 font-bold text-lg">Evaluation Framework:</span> Access our{' '}
      <span className="bg-blue-100 px-1 rounded">objective assessment criteria</span>,{' '}
      <span className="bg-blue-100 px-1 rounded">technology evaluation</span>, and{' '}
      <span className="bg-blue-100 px-1 rounded">partner vetting process</span>.
    </span>,
    <span key="integration" className="block">
      <span className="text-gray-600 font-bold text-lg">Integration Planning:</span> Ensure{' '}
      <span className="bg-blue-100 px-1 rounded">seamless implementation</span>,{' '}
      <span className="bg-blue-100 px-1 rounded">business alignment</span>, and{' '}
      <span className="bg-blue-100 px-1 rounded">sustainable growth</span> through strategic partnerships.
    </span>
  ]
},
{
  title: "SCF Accounting Treatment",
  icon: <DollarSign className="w-12 h-12 text-red-500" />,
  backgroundColor: "bg-red-50",
  borderColor: "border-red-200",
  iconBackground: "bg-red-100",
  content: [
    <span key="intro-4" className="text-red-600 font-medium text-lg block mb-3">
      Master the financial complexities of SCF with expert guidance:
    </span>,
    <span key="compliance" className="block mb-3">
      <span className="text-gray-600 font-bold text-lg">Compliance & Reporting:</span> Navigate{' '}
      <span className="bg-blue-100 px-1 rounded">regulatory requirements</span>,{' '}
      <span className="bg-blue-100 px-1 rounded">accounting standards</span>, and{' '}
      <span className="bg-blue-100 px-1 rounded">reporting practices</span>.
    </span>,
    <span key="risk" className="block">
      <span className="text-gray-600 font-bold text-lg">Risk Management:</span> Implement{' '}
      <span className="bg-blue-100 px-1 rounded">financial controls</span>,{' '}
      <span className="bg-blue-100 px-1 rounded">transparency measures</span>, and{' '}
      <span className="bg-blue-100 px-1 rounded">risk mitigation strategies</span> for your SCF operations.
    </span>
  ]
}]
    return (
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
            <div className="text-center mb-16">
                <h2 className="subheading">Expert Supply Chain Finance Consulting for Optimal SCF Strategies!</h2>
                <p className="paragraph">
                    Unlock the Full Potential of Your Supply Chain Finance (SCF) Programs with Expert Advisory Services.<br />
                    At SCF Strategies, our supply chain finance consulting services go beyond standard advisory.<br />
                    We provide <strong>insightful and innovative solutions</strong> that address the unique challenges of your SCF programs.<br />
                    By focusing on strategic optimization and practical implementation, we transform your supply chain finance into a powerful driver of growth, <strong>improving cash flow</strong>, and <strong>enhancing working capital efficiency</strong>.
                </p>
            </div>

            <div className="rounded-lg py-8 px-2 mb-16">
                <h3 className="subheading">Our Consulting Services</h3>

                {/* Accordion */}
                <div className="max-w-6xl mx-auto p-6 bg-gray-100 rounded-xl">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Supply Chain Finance Solutions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {accordionData.map((card, index) => (
          <div 
            key={index}
            className={`rounded-xl shadow-lg overflow-hidden border ${card.borderColor} ${card.backgroundColor} transition-all duration-300 hover:shadow-xl`}
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-full ${card.iconBackground} mr-4`}>
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{card.title}</h3>
              </div>
              <div className="mt-4 space-y-4">
                {card.content.map((content, idx) => (
                  <div key={idx} className="text-gray-700">
                    {content}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
                {/* <div className="space-y-6">
                    {accordionData.map((item, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <button
                                className="flex justify-between items-center w-full p-6 text-left transition-colors duration-200"
                                onClick={() => toggleAccordion(index)}
                            >
                                <div className="flex items-center">
                                    <div className="mr-4">{item.icon}</div>
                                    <span className="text-lg md:text-xl font-semibold text-gray-800">{item.title}</span>
                                </div>
                                {activeAccordion === index ?
                                    <ChevronUp className="w-6 h-6 text-gray-500" /> :
                                    <ChevronDown className="w-6 h-6 text-gray-500" />
                                }
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
                                            {item.content.map((paragraph, pIndex) => (
                                                <motion.p
                                                    key={pIndex}
                                                    initial={{ y: 20, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    transition={{ delay: pIndex * 0.1, duration: 0.3 }}
                                                    className="text-base md:text-lg text-gray-700 mb-4 last:mb-0"
                                                >
                                                    {paragraph}
                                                </motion.p>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div> */}
            </div>

            <div className="mb-16">
                <h3 className="subheading">
                    Transformative SCF for Sustainable Success
                </h3>

                <div className="bg-indigo-200 rounded-lg px-4 py-8">
                    <p className="text-lg md:text-2xl font-semibold text-gray-700 text-center">
                        Our consulting services provide a roadmap to tangible results.
                    </p>
                    <p className="text-base md:text-lg text-gray-700 text-center mb-8">
                        By optimizing your SCF programs, we help you
                    </p>

                    <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
                        <div className="flex items-center bg-white px-6 py-4 rounded-lg shadow-sm w-full md:w-[350px]">
                            <ArrowUpCircle className="w-12 h-12 text-blue-600 mr-4" />
                            <h4 className="text-base md:text-lg font-semibold text-gray-900">Enhance Cash Flow</h4>
                        </div>

                        <div className="flex items-center bg-white px-6 py-4 rounded-lg shadow-sm w-full md:w-[350px]">
                            <Wallet className="w-12 h-12 text-blue-600 mr-4" />
                            <h4 className="text-base md:text-lg font-semibold text-gray-900">Improve Working Capital</h4>
                        </div>

                        <div className="flex items-center bg-white px-6 py-4 rounded-lg shadow-sm w-full md:w-[350px]">
                            <HandshakeIcon className="w-12 h-12 text-blue-600 mr-4" />
                            <h4 className="text-base md:text-lg font-semibold text-gray-900">Strengthen Relationships</h4>
                        </div>
                    </div>

                    <p className="text-base md:text-lg text-gray-700 text-center">
                        Our data-driven strategies and expert insights enable you to make informed decisions,
                        fostering long-term success and competitive advantage in the supply chain finance marketplace.
                    </p>
                </div>
            </div>
            <div className="text-center bg-blue-600 text-white rounded-lg  mb-8 p-12 ">
                <h4 className="text-3xl font-bold mb-4">Explore Our Supply Chain Finance Consulting Services</h4>
                <p className="paragraph-white ">Take the first step toward elevating your supply chain finance strategy. Our team of experts is here to guide you through every stage of your SCF journey, from strategic planning to execution. Explore our consulting services to discover how we can help you achieve exceptional results and unlock new opportunities for your business.</p>
                <Link href='/contact-us' className="bg-white text-blue-600 hover:bg-blue-100 font-bold py-3 px-8 rounded-full transition-colors duration-200 text-lg">
                    Get Started Today
                </Link>
            </div>
        </div>
    );
};

export default ConsultingServicesContent;