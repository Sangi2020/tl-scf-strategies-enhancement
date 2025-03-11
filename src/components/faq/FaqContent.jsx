'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';
import FAQItem from '../../components/faq/FAQItem';
import AuroraBackgroundDemo from '@/components/auroraBackground/AuroraDemo';
import useFaqStore from '@/store/useFaqStore';

const FaqContent = () => {
  const { faqs, loading, error, fetchFaqs } = useFaqStore();

  useEffect(() => {
    fetchFaqs();
  }, [fetchFaqs]);

  return (
    <div className="text-gray-800 bg-primary">
      <AuroraBackgroundDemo title="FAQs" description="Any questions? We have answers." link="Learn More" />

      <div className="max-w-7xl mx-auto px-4 py-12">
        {loading ? (
          <p className="text-center text-gray-700">Loading FAQs...</p>
        ) : error ? (
          <p className="text-center text-red-500">Error: {error}</p>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-lg p-1 bg-white"
          >
            {faqs.length > 0 ? (
              faqs.map((item, index) => (
                <FAQItem key={index} question={item.question} answer={item.answer} />
              ))
            ) : (
              <p className="text-center text-gray-500">No FAQs available.</p>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default FaqContent;
