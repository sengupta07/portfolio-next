'use client';
import assets from '@/common/assets';
import AutoplayCarousel from '@/common/components/AutoplayCarousel';
import Button from '@/common/components/Button';
import Card from '@/common/components/Card';
import Socials from '@/common/components/Socials';
import TechnologyCards from '@/common/components/TechnologyCards';
import TestimonialCard from '@/common/components/TestimonialCard';
import TestimonialSlider from '@/common/components/TestimonialSlider';
import React from 'react';
import Lottie from 'lottie-react';
import ComputerAnimation from '@/common/icons/hero3.json';
import HeroTextCarousal from './HeroTextCarousal';

const Hero = () => {
  const startDate = new Date('2021-01-01');
  const currentDate = new Date();
  const yearsOfExperience = Math.floor((currentDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24 * 365));

  return (
    <div className="container grid grid-cols-3 gap-5">
      <div className="px-14 col-span-3 grid grid-cols-[2fr_3fr] bg-foreground rounded-elements">
        <div className="flex flex-col gap-12 py-12">
          <div className="flex-1 space-y-4">
            <span className="text-sm">H E L L O ,</span>
            <h2 className="font-medium">I'm Suman Sengupta</h2>
          </div>
          <span>
            <Button variant={'primary'} size={'lg'}>
              Get in touch
            </Button>
          </span>
        </div>

        {/* <Lottie
            animationData={ComputerAnimation}
            loop={true}
            // height={100}
            // width={100}
            autoplay={true}
            className="h-96 w-96 blur-xl"
          /> */}
        <HeroTextCarousal />
      </div>
      <Card className="!p-0">
        <TestimonialSlider />
      </Card>
      <Card className="relative !p-0 overflow-hidden">
        <div
          className="absolute z-2 w-full h-full"
          style={{
            backgroundImage: `linear-gradient(to top, black, transparent)`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'fill',
          }}
        >
          <div
            className="h-full w-full opacity-10"
            style={{
              backgroundImage: `radial-gradient(90% 90% at 50% 50%, rgb(0 0 0 / 60%) 33%, rgb(0 0 0) 85%), url(${assets.squarePattern})`,
            }}
          ></div>
        </div>
        <h5 className="font-medium opacity-25 px-6 pt-6">Core tools I use</h5>
        <TechnologyCards />
      </Card>
      <div className="flex flex-col gap-6">
        <Socials />
        <Card className="col-span-4 flex-1 flex flex-col justify-center gap-3">
          <h1 className="font-medium">{yearsOfExperience}+ </h1>
          <p className="font-medium text-base px-6 border-l-2 border-primaryTheme">
            YEARS OF DESIGN AND <br />
            DEVELOPMENT EXPERIENCE
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Hero;
