'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (

    <div className="border-b-2 border-gray-300 py-6 w-full max-w-4xl mx-auto">
      <button
        className="flex w-full items-center text-left"

        onClick={() => setIsOpen(!isOpen)}
      >
        <HelpCircle size={24} className="text-blue-500 mr-3 flex-shrink-0" />
        <span className="text-xl font-medium text-gray-800 flex-grow">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <ChevronUp size={24} className="text-blue-500 flex-shrink-0" />
          ) : (
            <ChevronDown size={24} className="text-blue-500 flex-shrink-0" />
          )}
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mt-6 flex items-start pl-9">
              <MessageCircle size={24} className="text-green-500 mr-3 flex-shrink-0 mt-1" />
              <p className="text-gray-600 text-lg">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQItem;