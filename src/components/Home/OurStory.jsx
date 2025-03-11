import Image from 'next/image';
import { motion } from 'framer-motion';
import CustomeButton from '../ui/CustomeButton';

const OurStory = () => {
  const milestones = [
    {
      year: "2015",
      title: "Foundation",
      content: "Founded with a vision to revolutionize <strong>Supply Chain Finance</strong> by integrating both <strong>funding</strong> and <strong>technology solutions</strong>.",
      image: "/images/blog/5.png",
      sizes: {
        mobile: { width: 640, height: 480 },
        tablet: { width: 800, height: 600 },
        desktop: { width: 1024, height: 768 }
      }
    },
    {
      year: "2015-2020",
      title: "$150B+ Impact",
      content: "Achieved over <strong>$150 billion</strong> in trading volume and <strong>$2 billion</strong> in outstanding results through our <strong>integrated approach</strong>.",
      image: "/images/blog/3.png",
      sizes: {
        mobile: { width: 640, height: 480 },
        tablet: { width: 800, height: 600 },
        desktop: { width: 1024, height: 768 }
      }
    },
    {
      year: "Today",
      title: "Global Leader",
      content: "Recognized as an <strong>industry leader</strong> with <strong>100+ SCF programs</strong> implemented globally, serving <strong>corporates</strong>, <strong>financial institutions</strong>, and <strong>Fintechs</strong>.",
      image: "/images/blog/4.png",
      sizes: {
        mobile: { width: 640, height: 480 },
        tablet: { width: 800, height: 600 },
        desktop: { width: 1024, height: 768 }
      }
    }
  ];

  // Responsive image component with loading animation
  const ResponsiveImage = ({ src, alt, sizes, priority = false, className = "" }) => {
    return (
      <div className="relative w-full h-0 pb-[75%]"> {/* 4:3 aspect ratio */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={src}
            alt={alt}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={`object-cover ${className}`}
            fill
            priority={priority}
            quality={90}
          />
        </motion.div>
      </div>
    );
  };

  return (
    <section className=" bg-primary mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4 sm:mb-6 md:mb-8"
        >
          <h2 className="subheading">Our Journey of Innovation</h2>
         
        </motion.div>

        {/* Main Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center mb-4 sm:mb-8 lg:mb-10"
        >
          
          
          <div className="">
            <h3 className="subheading">Pioneering Integrated Solutions</h3>
            <p className="paragraph">
  Founded in <strong>2015</strong>, SCF Strategies emerged from the recognition that traditional <strong>Supply Chain Finance</strong> providers typically offer either <strong>funding</strong> or <strong>technology</strong>, but rarely both in an integrated manner. <br /> With combined <strong>60 years of experience</strong>, we&apos;ve revolutionized the industry by combining <strong>best practice processes</strong> with <strong>cutting-edge technology</strong> and <strong>robust funding capacity</strong>.
</p>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className=" p-4 sm:p-6 rounded-lg sm:rounded-xl bg-title shadow-md sm:shadow-lg "
              >
                <h4 className="text-2xl sm:text-4xl font-bold text-blue-100 mb-1 sm:mb-2">$150B+</h4>
                <p className="text-gray-100 text-sm sm:text-base">Trading Volume</p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-title p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-md sm:shadow-lg"
              >
                <h4 className="text-2xl sm:text-4xl font-bold text-blue-100 mb-1 sm:mb-2">100+</h4>
                <p className="text-gray-100 text-sm sm:text-base">Global Programs</p>
              </motion.div>
            </div>
          </div>
          <div className="w-full  sm:rounded-2xl overflow-hidden ">
            <ResponsiveImage
              src="/images/team-image2.png"
              alt="SCF Strategies Headquarters"
              sizes={{
                mobile: { width: 640, height: 480 },
                tablet: { width: 800, height: 600 },
                desktop: { width: 1024, height: 768 }
              }}
              priority
              className="   transition-transform duration-500"
            />
          </div>
        </motion.div>

        {/* Timeline Section */}
        <div className="space-y-8 sm:space-y-12">
          {milestones.map((milestone, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col md:flex-row gap-6 sm:gap-8 items-center 
                         ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="w-full md:w-1/2 rounded-lg sm:rounded-xl overflow-hidden shadow-md sm:shadow-lg">
                <ResponsiveImage
                  src={milestone.image}
                  alt={milestone.title}
                  sizes={milestone.sizes}
                  className="rounded-lg sm:rounded-xl hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-3 sm:space-y-4">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="inline-block px-3 sm:px-4 py-1 sm:py-2 bg-blue-100 rounded-full text-blue-600 font-semibold text-sm sm:text-base"
                >
                  {milestone.year}
                </motion.div>
                <h3 className="subheading">{milestone.title}</h3>
                <p
            className="paragraph"
            dangerouslySetInnerHTML={{ __html: milestone.content }}
          ></p>              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div 
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="mt-8 sm:mt-12 lg:mt-16 bg-blue-50 rounded-xl overflow-hidden relative sm:rounded-2xl p-6 sm:p-8 z-10 text-center"
  style={{ backgroundImage: "url('images/boxbg1.jpg')" }}
>
  {/* Adjust z-index to be lower than the content */}
  <div className="inset-0 absolute backdrop-blur-sm rounded-xl z-0"></div>

  {/* Content with higher z-index */}
  <h3 className="text-xl sm:text-4xl font-bold text-white mb-3 sm:mb-4 relative z-10">
  Leading the Way in SCF Consulting
  </h3>
  <p className="paragraph-white relative z-10">
  
  At <span>SCF Strategies</span>, we are proud to be recognized as an industry leader in <span>Supply Chain Finance</span>. <br />
  Our unique, results-driven approach has empowered top companies worldwide, unlocking <span>billions in working capital</span> and driving unparalleled <span>cash flow improvements</span>.
</p>


  
  {/* Button with higher z-index */}
  <div className="relative z-10">
    <CustomeButton title={"Discover the Difference We Make ✨"} link={"/about-us"}/>
  </div>
</motion.div>

      </div>

      {/* Loading animation styles */}
      <style jsx global>{`
        @keyframes imageLoad {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .image-loading {
          animation: imageLoad 0.5s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default OurStory;