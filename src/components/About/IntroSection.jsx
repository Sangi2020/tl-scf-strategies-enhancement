import Image from 'next/image'
import React from 'react'

export const IntroSection = () => {
  return (
<div className="mt-4 text-black  relative overflow-hidden ">
      <div className="max-w-7xl p-4 mx-auto relative">
        <h2 className="subheading w-fit">
          Unlocking the Full Potential of Supply Chain Finance
          <hr className="" />
        </h2>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Image - Left Side */}
          <div className="w-full md:w-1/2 h-[500px] relative">
            <Image 
              src="/images/team-image.jpeg"
              alt="SCF Strategies Team" 
              fill
              className="rounded-lg shadow-xl object-cover"
              priority
            />
          </div>
          
          {/* Text Content - Right Side */}
          <div className="w-full md:w-1/2 space-y-6">
          <p className="text-gray-600 leading-relaxed paragraph">
  At <strong>SCF Strategies</strong>, we&apos;re dedicated to transforming your <strong>Supply Chain Finance (SCF)</strong> programs into powerful engines of growth. Our mission is to bridge the gap between <strong>innovative technology</strong> and <strong>practical implementation</strong>, unlocking new opportunities and maximizing efficiency for your business. With our extensive experience and comprehensive solutions, we help you achieve remarkable success and stay ahead of the competition.
</p>

            
            <div className="space-y-4">
              <h3 className="subheading w-fit">Core Values <hr className="" /></h3>
              <p className="text-gray-600 leading-relaxed paragraph">
  We believe in building <strong>strong</strong>, <strong>transparent</strong> relationships with our clients. Our commitment to <strong>integrity</strong> and <strong>partnership</strong> ensures that we work collaboratively to achieve your <strong>goals</strong> and drive <strong>sustainable success</strong>.
</p>

            </div>
            
            {/* <p className="text-gray-600  leading-relaxed text-lg">
              Our proven approach and methodology have successfully unlocked billions in working capital and free cash flow for leading companies worldwide. With over 100 SCF programs implemented globally, we&apos;ve learned from the challenges to ensure you don&apos;t have to.
            </p> */}
          </div>
        </div>
      </div>
    </div>
  )
}
