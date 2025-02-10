'use client';
import { motion } from 'framer-motion';
import assets from '@/common/assets';
import Button from '@/common/components/Button';
import Card from '@/common/components/Card';
import Socials from '@/common/components/Socials';
import TechnologyCards from '@/common/components/TechnologyCards';
import TestimonialSlider from '@/common/components/TestimonialSlider';
import React from 'react';
import HeroTextCarousal from './HeroTextCarousal';
import { containerVariants, itemVariants } from '../data/animationVariants.data';

const Hero = () => {
  const startDate = new Date('2024-01-01');
  const currentDate = new Date();
  const yearsOfExperience = Math.floor((currentDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24 * 365));

  return (
    <motion.div
      id="home"
      className="container grid md:grid-cols-3 gap-5"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div
        className="md:px-14 md:col-span-3 grid grid-cols-1 md:grid-cols-[2fr_3fr] bg-foreground border border-white border-opacity-10 rounded-elements"
        variants={itemVariants}
      >
        <div className="max-md:px-6 flex flex-col gap-12 py-12 max-md:text-center">
          <div className="flex-1 space-y-4 ">
            <span className="text-sm">H E L L O ,</span>
            <h2 className="font-medium max-md:text-5xl">I'm Suman Sengupta</h2>
          </div>
          <span>
            <Button variant={'primary'} size={'lg'}>
              Get in touch
            </Button>
          </span>
        </div>
        <HeroTextCarousal />
      </motion.div>

      <motion.div variants={itemVariants} className="overflow-hidden">
        <Card className="!p-0 overflow-hidden">
          <TestimonialSlider />
        </Card>
      </motion.div>

      <motion.div variants={itemVariants} className="overflow-hidden">
        <Card className="relative !p-0 overflow-hidden h-full">
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
      </motion.div>

      <motion.div className="flex flex-col gap-6" variants={itemVariants}>
        <Socials />
        <Card className="col-span-4 flex-1 flex flex-col justify-center gap-3">
          <h1 className="font-medium">{yearsOfExperience}+ </h1>
          <p className="font-medium text-base px-6 border-l-2 border-primaryTheme">
            YEARS OF DESIGN AND <br />
            DEVELOPMENT EXPERIENCE
          </p>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
