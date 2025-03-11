'use client';
import React from 'react';
import Image from 'next/image';

const OurStory = () => {
  return (
    <div className="mt-8  text-black py-8 relative overflow-hidden ">
  <div className="max-w-7xl p-4 mx-auto relative">
    <h2 className="subheading w-fit">Our Story <hr className="" /></h2>

    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
      {/* Text Content - Left Side */}
      <div className="w-full md:w-1/2 space-y-6">
      <p className="paragraph">
  Founded in <strong>2015</strong>, <strong>SCF Strategies</strong> was created to bridge the gap between traditional Supply Chain Finance providers, who typically offer either <strong>funding</strong> or <strong>technology</strong>, but rarely both in an integrated manner. We take a fully integrated approach, seamlessly combining these critical components to provide optimal solutions for our clients. <br />
  Backed by over <strong>60 years of collective experience</strong>, our team has designed, implemented, and managed hundreds of Supplier Finance programs globally, driving over <strong>$150 billion</strong> in trading volume and unlocking more than <strong>$2 billion</strong> in working capital for businesses worldwide, empowering them to thrive.
</p>


        <p className="paragraph">
          True value comes from integrating best practice processes with <strong>technology</strong> and <strong>funding capacity</strong>. <br /> We know that no amount of funding or sophisticated technology can compensate for poor practices, missed steps, or overlooked success factors. Today, <strong>SCF Strategies</strong> is recognized as an <strong>industry leader</strong> in SCF consulting.
        </p>
      </div>

      {/* Image - Right Side */}
      <div className="w-full md:w-1/2 h-[400px] relative">
        <Image
          src="/images/ourstory.png"
          alt="SCF Strategies Team"
          fill
          className="rounded-lg shadow-xl object-cover"
          priority
        />
      </div>
    </div>

    <p className="paragraph">
      Corporates, financial institutions, and Fintechs rely on our <strong>advisory</strong> and <strong>enablement services</strong>, built on actual in-depth program-level expertise. <br /> With over <strong>100 SCF programs</strong> implemented globally, we&apos;ve learned from the challenges and mistakes to ensure you don&apos;t have to.
    </p>

    <p className="paragraph">
      Our proven approach and methodology have successfully assessed markets and implemented programs, unlocking <strong>billions in working capital</strong> and <strong>free cash flow</strong> for leading companies worldwide.
    </p>
  </div>
</div>

  );
};

export default OurStory;