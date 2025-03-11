import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { Bot, SendHorizonal } from 'lucide-react';

const ChatbotButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const controls = useAnimation();
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [screenSize, setScreenSize] = useState('desktop');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // Function to get button position based on screen size
  const getButtonPosition = (width, isBottom) => {
    // Base positions for different screen sizes
    const positions = {
      '1440': { base: 32, bottom: 98 },
      '1024': { base: 28, bottom: 64 },
      '768': { base: 24, bottom: 99 },
      '425': { base: 74, bottom: 80 },
      '375': { base: 20, bottom: 142 }
    };

    let position;
    if (width > 1024) {
      position = positions['1440'];
    } else if (width > 768) {
      position = positions['1024'];
    } else if (width > 425) {
      position = positions['768'];
    } else if (width > 375) {
      position = positions['425'];
    } else {
      position = positions['375'];
    }

    return isBottom ? position.bottom : position.base;
  };

  // Memoize updateButtonPosition with useCallback
  const updateButtonPosition = useCallback((width, isBottom) => {
    const bottomPosition = getButtonPosition(width, isBottom);

    controls.start({
      bottom: `${bottomPosition}px`,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    });
  }, [controls]); // Include controls in dependency array

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let newSize;

      if (width > 1024) newSize = '1440';
      else if (width > 768) newSize = '1024';
      else if (width > 425) newSize = '768';
      else if (width > 375) newSize = '425';
      else newSize = '375';

      if (newSize !== screenSize) {
        setScreenSize(newSize);
        updateButtonPosition(width, isAtBottom);
      }
    };

    window.addEventListener('resize', handleResize);
    // Initial check
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [screenSize, isAtBottom, updateButtonPosition]); // Added updateButtonPosition to dependencies

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      // Check if we're at the bottom (with a small threshold)
      const isBottom = scrollTop + windowHeight >= documentHeight - 10;

      if (isBottom !== isAtBottom) {
        setIsAtBottom(isBottom);
        updateButtonPosition(window.innerWidth, isBottom);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isAtBottom, updateButtonPosition]); // Added updateButtonPosition to dependencies

  // Get initial position based on screen width
  const getInitialPosition = () => {
    const width = window.innerWidth;
    return getButtonPosition(width, false);
  };

  return (
    <>
      {/* Floating Robot Button */}
      <motion.button
        className="fixed right-6 z-50 bg-blue-500 rounded-full shadow-lg text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 p-4"
        animate={controls}
        initial={{ bottom: `${getInitialPosition()}px` }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleChat}
      >
        <Bot size={24} />
      </motion.button>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleChat}
          />
        )}
      </AnimatePresence>

      {/* Chatbot Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed z-50 w-full h-full md:h-auto md:max-h-[600px] md:w-[440px] md:bottom-24 md:right-6"
          >
            <div className="bg-white h-full md:h-auto md:rounded-lg shadow-xl overflow-hidden">
              {/* Header */}
              <div className="bg-blue-500 p-3 md:p-4 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <Bot className="text-white" size={24} />
                  <h2 className="text-lg md:text-xl font-semibold text-white">FinFlow</h2>
                </div>
                <button
                  onClick={toggleChat}
                  className="text-white hover:bg-blue-600 rounded-full p-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Chatbot Content */}
              <ChatbotContent isOpen={isOpen} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const ChatbotContent = ({ isOpen }) => {
  const [messages, setMessages] = useState([
    { type: 'bot', content: 'Hello! How can I assist you with your financial queries today?' },
    { type: 'bot', content: 'Please select a topic you\'d like to learn more about:', isMenu: true }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesContainerRef = useRef(null);
  const lastMessageRef = useRef(null);

  // Handle scroll wheel inside chat content
  const handleScroll = (e) => {
    if (messagesContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = messagesContainerRef.current;
      const isScrollable = scrollHeight > clientHeight;
      const isAtTop = scrollTop === 0;
      const isAtBottom = scrollTop + clientHeight === scrollHeight;

      // Only prevent default if we're not at the boundaries or if the content is scrollable
      if (isScrollable && !((isAtTop && e.deltaY < 0) || (isAtBottom && e.deltaY > 0))) {
        e.stopPropagation();
      }
    }
  };

  // Scroll to bottom when new messages are added
  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end'
      });
    }
  }, [messages]);

  // Reset scroll position when chat opens
  useEffect(() => {
    if (isOpen && messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = 0;
    }
  }, [isOpen]);

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages(prev => [...prev, { type: 'user', content: input }]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = simulateAIResponse(input);
      setMessages(prev => [...prev, { type: 'bot', content: botResponse }]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const menuOptions = [
    "Working Capital Analytics and Benchmarking",
    "Supplier Onboarding and Relationship Management",
    "Platform Selection and Technology Solutions",
    "Program Design and Implementation",
    "Training and Sales Enablement",
    "Financial Institution Services",
    "Go-to-Market Strategy",
    "Partner Evaluation",
    "Industry-Specific Solutions"
  ];

  const handleMenuClick = (option) => {
    setMessages(prev => [...prev, {
      type: 'user',
      content: option,
      highlight: true
    }]);
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = simulateAIResponse(option);
      setMessages(prev => [...prev, {
        type: 'bot',
        content: botResponse,
        highlight: true
      }]);
      setIsTyping(false);
    }, 800);
  };

  const renderContent = (message) => {
    if (message.isMenu) {
      return (
        <div className="space-y-2">
          <p className="mb-2">{message.content}</p>
          <div className="space-y-2">
            {menuOptions.map((option, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleMenuClick(option)}
                className="w-full text-left p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors duration-200 text-blue-800 text-sm font-medium"
              >
                {`${index + 1}. ${option}`}
              </motion.button>
            ))}
          </div>
        </div>
      );
    }
    return message.content;
  };

  return (
    <div className="flex flex-col  h-[calc(90dvh)] md:h-[500px] bg-primary">
      {/* Messages Area */}
      <div
        ref={messagesContainerRef}
        className="flex-grow overflow-y-auto p-3 md:p-4 space-y-3 md:space-y-4"
        style={{
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch',
        }}
        onWheel={handleScroll}
      >
        {messages.map((message, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-center'}`}
            ref={index === messages.length - 1 ? lastMessageRef : null}
          >
            <div
              className={`max-w-[100%] p-4 rounded-lg shadow-sm ${message.type === 'user'
                ? 'bg-blue-500 text-white rounded-br-none'
                : 'bg-white text-gray-800 rounded-bl-none'
                } ${message.highlight
                  ? 'ring-2 ring-blue-300 ring-opacity-50'
                  : ''
                }`}
            >
              {renderContent(message)}
            </div>
          </motion.div>
        ))}
        {isTyping && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center"
            ref={lastMessageRef}
          >
            <div className="bg-white text-gray-800 p-4 rounded-lg rounded-bl-none shadow-sm">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Input Area */}
      <div className="border-t bg-white p-3 md:p-4">
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your message..."
            className="w-full p-2 md:p-3 text-base md:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-gray-600"
          />
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleSend}
            className="bg-blue-500 text-white p-3  md:px-6 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium text-lg flex items-center  shadow-lg"
          >
            <span className="hidden md:block">Send</span>
            <SendHorizonal size={28} className="block md:hidden" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

// FAQ Database and simulateAIResponse function
const faqDatabase = [
  {
    question: "hi",
    answer: "Hello! Welcome to SCF Strategies. How can I assist you today with your Supply Chain Finance needs?"
  },
  {
    question: "hello",
    answer: "Hi there! Welcome to SCF Strategies. How may I help you with your Supply Chain Finance requirements?"
  },
  {
    question: "hey",
    answer: "Hey! Thanks for reaching out to SCF Strategies. How can I assist you with Supply Chain Finance today?"
  },
  {
    question: "What is Supply Chain Finance (SCF)?",
    answer: "Supply Chain Finance (SCF) is a set of financial solutions designed to improve cash flow efficiency by allowing businesses to extend payment terms while enabling suppliers to receive early payments, usually facilitated by a third-party financier."
  },
  {
    question: "How can SCF Strategies help my business?",
    answer: "We help businesses design, implement, and manage successful SCF programs. Our services include working capital analysis, supplier onboarding, go-to-market strategies, platform selection, and more."
  },
  {
    question: "What industries does SCF Strategies serve?",
    answer: "We serve a wide range of industries including manufacturing, retail, financial institutions, fintechs, and corporates. SCF Strategies provides solutions tailored to the unique needs of each industry."
  },
  {
    question: "What services does SCF Strategies offer?",
    answer: "Our services include: - Working Capital Analytics - Program Design - Supplier Onboarding - Sales & Operations Enablement - Platform & Partner Selection - Accounting Treatment Guidance"
  },
  {
    question: "How can SCF help my business's working capital?",
    answer: "SCF can help improve your working capital by optimizing payment terms, unlocking cash tied up in the supply chain, and ensuring suppliers are paid early, resulting in greater financial efficiency for both buyers and suppliers."
  },
  {
    question: "What is Working Capital Analytics?",
    answer: "Working Capital Analytics involves analyzing supplier data, payment terms, and other financial factors to identify opportunities for improving working capital and generating revenue. SCF Strategies offers a unique Working Capital Benchmark Analytics Application."
  },
  {
    question: "How do you help with supplier onboarding?",
    answer: "We offer comprehensive supplier onboarding services through telephone, email, and mail outreach. We manage the process from outreach to onboarding, ensuring a smooth experience for both suppliers and buyers."
  },
  {
    question: "What is reverse factoring in SCF?",
    answer: "Reverse factoring allows suppliers to receive early payments at favorable rates based on the buyer's credit risk, improving the supplier's cash flow while allowing the buyer to extend payment terms."
  },
  {
    question: "What does SCF Strategies' Go-to-Market Strategy include?",
    answer: "Our Go-to-Market Strategy includes market assessment, sales planning, and developing a client-focused approach to help businesses successfully enter the SCF market or enhance their existing offerings."
  },
  {
    question: "Can SCF Strategies help with platform selection?",
    answer: "Yes, we assist in selecting the right platform and technology partners for your SCF program. Our rigorous evaluation criteria ensure you choose the most suitable solution for your needs."
  },
  {
    question: "How do you assist with accounting treatment in SCF?",
    answer: "We help navigate complex accounting issues related to SCF programs, such as reclassifying commercial accounts payable into financial debt, while ensuring compliance with best practices and industry standards."
  },
  {
    question: "How do I know if SCF is right for my business?",
    answer: "SCF is beneficial for businesses looking to optimize cash flow and improve relationships with suppliers. We provide a detailed assessment to determine if SCF aligns with your business goals."
  },
  {
    question: "How can SCF Strategies help with sales enablement?",
    answer: "We provide training and enablement for sales and operations teams, ensuring they are equipped to compete effectively and implement SCF programs successfully."
  },
  {
    question: "What are the key benefits of SCF?",
    answer: "The key benefits of SCF include improved cash flow, reduced working capital requirements, stronger supplier relationships, and reduced financial risk."
  },
  {
    question: "Can SCF Strategies help financial institutions?",
    answer: "Yes, we work with banks and financial institutions to enhance their SCF offerings by providing market assessment, technology platform selection, and sales and operations enablement."
  },
  {
    question: "How can SCF Strategies help fintech companies?",
    answer: "We assist fintech companies with market analysis, technology audits, platform selection, and support for implementing and managing SCF programs."
  },
  {
    question: "What is involved in an SCF solution audit?",
    answer: "Our solution audit involves a detailed review of your current SCF platform's functionality, features, strengths, and limitations, along with actionable recommendations for improvement."
  },
  {
    question: "How long does it take to implement an SCF program?",
    answer: "The timeline for implementation varies depending on the complexity of the program, but typically, a full SCF program can take 3 to 6 months to fully implement."
  },
  {
    question: "How does SCF improve supplier relationships?",
    answer: "SCF improves supplier relationships by providing early payments at lower financing costs, ensuring they receive timely cash flow, which builds trust and reliability."
  },
  {
    question: "Can SCF Strategies help design custom SCF programs?",
    answer: "Yes, we design custom SCF programs tailored to your business goals and supplier profiles, ensuring optimal results for both buyers and suppliers."
  },
  {
    question: "How do you evaluate partners for SCF programs?",
    answer: "We use objective selection criteria, detailed scoring methodologies, and rigorous evaluation processes to help you choose the best partners for your SCF program, whether it's for technology or financing."
  },
  {
    question: "Do you provide training for SCF programs?",
    answer: "Yes, we offer customized training programs for sales, operations, and procurement teams to ensure successful implementation and management of SCF programs."
  },
  {
    question: "What is SCF Strategies' approach to program design?",
    answer: "We take a phased approach to program design, targeting suppliers with the highest propensity to join SCF programs and ensuring alignment with client objectives for optimal results."
  },
  {
    question: "What is your Working Capital Benchmark Analytics Application?",
    answer: "Our Working Capital Benchmark Analytics Application identifies opportunities to optimize working capital by assessing supplier data, payment terms, and working capital objectives."
  },
  {
    question: "How do I get in touch with SCF Strategies?",
    answer: "You can contact us via email at nsimek@scfstrategies.com or call us at +1 203 470 9377. We are here to assist with all your SCF needs."
  }
];

const simulateAIResponse = (message) => {
  const lowercaseMessage = message.toLowerCase();

  // First try to find an exact or close match from the FAQ database
  const faqMatch = faqDatabase.find(faq =>
    lowercaseMessage.includes(faq.question.toLowerCase()) ||
    lowercaseMessage.split(' ').some(word =>
      faq.question.toLowerCase().includes(word) && word.length > 3
    )
  );

  if (faqMatch) return faqMatch.answer;

  // Comprehensive keyword-based responses
  if (lowercaseMessage.includes("working capital") || lowercaseMessage.includes("analytics")) {
    return "Our Working Capital Analytics involves analyzing supplier data, payment terms, and other financial factors. We offer a unique Working Capital Benchmark Analytics Application that identifies opportunities to optimize working capital. Would you like to learn more about our analytics capabilities?";
  }
  else if (lowercaseMessage.includes("supplier") || lowercaseMessage.includes("onboarding")) {
    return "We offer comprehensive supplier onboarding services through telephone, email, and mail outreach. SCF improves supplier relationships by providing early payments at lower financing costs. Would you like to learn more about our supplier engagement process?";
  }
  else if (lowercaseMessage.includes("platform") || lowercaseMessage.includes("technology") || lowercaseMessage.includes("solution audit")) {
    return "We assist in selecting the right platform and technology partners for your SCF program. Our solution audit provides a detailed review of platform functionality, features, and limitations. Would you like to discuss platform selection or arrange a solution audit?";
  }
  else if (lowercaseMessage.includes("training") || lowercaseMessage.includes("enablement") || lowercaseMessage.includes("sales")) {
    return "We provide customized training programs for sales, operations, and procurement teams. Our sales enablement ensures teams are equipped to compete effectively and implement SCF programs successfully. Would you like details about our training programs?";
  }
  else if (lowercaseMessage.includes("accounting") || lowercaseMessage.includes("financial") || lowercaseMessage.includes("banks")) {
    return "We help navigate complex accounting issues related to SCF programs and work with banks and financial institutions to enhance their SCF offerings through market assessment and technology platform selection. Would you like to discuss specific financial considerations?";
  }
  else if (lowercaseMessage.includes("implement") || lowercaseMessage.includes("program") || lowercaseMessage.includes("design")) {
    return "We design custom SCF programs tailored to your business goals. Implementation typically takes 3-6 months, and we take a phased approach targeting suppliers with the highest propensity to join. Would you like to discuss program design and implementation?";
  }
  else if (lowercaseMessage.includes("benefit") || lowercaseMessage.includes("advantages") || lowercaseMessage.includes("help")) {
    return "Key benefits of SCF include improved cash flow, reduced working capital requirements, stronger supplier relationships, and reduced financial risk. We can help determine if SCF aligns with your business goals through a detailed assessment. Would you like to discuss specific benefits?";
  }
  else if (lowercaseMessage.includes("reverse factoring")) {
    return "Reverse factoring allows suppliers to receive early payments at favorable rates based on the buyer's credit risk, improving the supplier's cash flow while allowing the buyer to extend payment terms. Would you like to learn more about reverse factoring?";
  }
  else if (lowercaseMessage.includes("go-to-market") || lowercaseMessage.includes("strategy")) {
    return "Our Go-to-Market Strategy includes market assessment, sales planning, and developing a client-focused approach to help businesses successfully enter the SCF market or enhance existing offerings. Would you like to discuss strategic planning?";
  }
  else if (lowercaseMessage.includes("fintech") || lowercaseMessage.includes("technology company")) {
    return "We assist fintech companies with market analysis, technology audits, platform selection, and support for implementing and managing SCF programs. Would you like to learn about our fintech-specific solutions?";
  }
  else if (lowercaseMessage.includes("partner") || lowercaseMessage.includes("evaluation")) {
    return "We use objective selection criteria, detailed scoring methodologies, and rigorous evaluation processes to help you choose the best partners for your SCF program, whether it's for technology or financing. Would you like to learn about our partner evaluation process?";
  }
  else if (lowercaseMessage.includes("industry") || lowercaseMessage.includes("sector")) {
    return "We serve a wide range of industries including manufacturing, retail, financial institutions, fintechs, and corporates. Each industry has unique needs, and we provide tailored solutions. Which industry would you like to learn more about?";
  }
  else {
    return (<>
      I understand you&apos;re interested in Supply Chain Finance. To better assist you, could you please specify if you&apos;d like to learn about:<br />
      <br />
      • Working Capital Analytics and Benchmarking<br />
      • Supplier Onboarding and Relationship Management<br />
      • Platform Selection and Technology Solutions<br />
      • Program Design and Implementation<br />
      • Training and Sales Enablement<br />
      • Financial Institution Services<br />
      • Go-to-Market Strategy<br />
      • Partner Evaluation<br />
      • Industry-Specific Solutions<br />
      <br />
      Alternatively, you can contact us directly at nsimek@scfstrategies.com

 or call +1 203 470 9377 for immediate assistance.`
    </>
    );
  }

};


export default ChatbotButton;