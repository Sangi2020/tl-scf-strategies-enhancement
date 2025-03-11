"use client"
import React from "react";
import IndustriesSection from "@/components/Home/IdrustieSection";
import RecentStories from "@/components/Home/StorySection";
import WhyChoose from "@/components/Home/WhyChoose";
import WhatWeDo from "@/components/Home/WhatWeDo";
import TestimonialCarousel from "@/components/Home/Testimonials";
import OurStory from "@/components/Home/OurStory";
import DiscoverSection from "@/components/Home/DiscoverSection";

import HeroSec from "./HeroSec";
import WaveSeparator from "../ui/WaveSeparator";

export default function HomeContent() {
  return (
    <>
      <HeroSec/>
 

      <WhatWeDo />
      <WaveSeparator />


      <DiscoverSection />
<WaveSeparator />

      <IndustriesSection />
      <WaveSeparator />
      <RecentStories />
      <WaveSeparator />
      <WhyChoose />
      <WaveSeparator />
      <OurStory />
      <WaveSeparator />
      <TestimonialCarousel />
    </>
  );
}