import Image from 'next/image';

const FreeTrialSection = () => {
  return (
//     <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-teal-400 to-green-500  rounded-lg">
//       <div className="w-full md:w-1/2">
//         {/* Using the Next.js Image component for optimization */}
//         <Image
//      // Replace with your image path
//           alt="Woman with laptop"
//           width={700}
//           height={700}
//           className="rounded-lg  object-cover"
//         />


//       </div>
//       <div className="w-full md:w-1/2 text-white text-center md:text-left mt-8 md:mt-0 transform skew-y-6 bg-gradient-to-r from-teal-400 to-green-500 p-8">
//   <div className="transform -skew-y-6">
//     <h2 className="text-3xl font-bold mb-4">Start your free trial</h2>
//     <p className="mb-6">
//       Test out the Big Data Analytics features for 14 days, no credit card required.
//     </p>
    
//     <form className="flex flex-col md:flex-row items-center justify-center md:justify-start">
//       <input
//         type="email"
//         placeholder="Enter your business email here"
//         className="p-3 w-full md:w-auto text-gray-700 rounded-lg mb-4 md:mb-0 md:mr-4"
//       />
//       <button
//         type="submit"
//         className="bg-white text-green-500 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition-all"
//       >
//         Sign Up Free
//       </button>
//     </form>
//   </div>
// </div>

//     </div>
<div className="flex w-full h-fit mt-20">
  {/* Left Image Section */}
  <div className="w-1/2">
    <Image
           src="/images/LandingPage/newsletter.jpg"  // Replace this with your image URL
      alt="Woman with laptop"
      className="object-cover h-full w-full"
    />
  </div>

  {/* Right Green Parallelogram Section */}
  <div className="relative w-1/2 flex items-center justify-center bg-gradient-to-r   from-teal-400 to-green-500 text-white">
    {/* Skewing the outer container */}
    {/* <div className="absolute inset-0 transform -skew-x-12 bg-gradient-to-r from-teal-400 to-green-500"></div> */}
    {/* Content inside the parallelogram */}
    <div className="absolute inset-0  z-10  from-teal-400 to-green-500 p-8">
      <h2 className="text-4xl font-bold mb-6">Start your free trial</h2>
      <p className="mb-6">
        Test out the Big Data Analytics features for 14 days, no credit card required.
      </p>

      {/* Form */}
      <form className="flex flex-col md:flex-row items-center">
        <input
          type="email"
          placeholder="Enter your business email here"
          className="p-3 text-gray-700 rounded-lg mb-4 md:mb-0 md:mr-4"
        />
        <button
          type="submit"
          className="bg-white text-green-500 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition-all"
        >
          Sign Up Free
        </button>
      </form>
    </div>
  </div>
</div>

  );
};

export default FreeTrialSection;
