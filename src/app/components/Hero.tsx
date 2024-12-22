import AutoplayCarousel from '@/common/components/AutoplayCarousel';
import Button from '@/common/components/Button';
import TestimonialCard from '@/common/components/TestimonialCard';
import React from 'react';

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="container grid grid-cols-12 gap-5">
      <div className="px-14 py-12 col-span-12 grid grid-cols-2 bg-foreground rounded-elements">
        {/* Text Section */}
        <div className="space-y-12">
          <h1 className="font-medium">
            Hi,<br></br>I'm Suman Sengupta
          </h1>
          <Button variant={'primary'} size={'lg'}>
            Get in touch
          </Button>
        </div>

        {/* Sliders Section */}
        <div className="relative flex items-center justify-between overflow-hidden h-[300px]">
          <div className="w-1/2 h-full overflow-hidden">
            <AutoplayCarousel scrollDirection="ttb" />
          </div>
          <div className="w-1/2 h-full overflow-hidden">
            <AutoplayCarousel scrollDirection="btt" />
          </div>
        </div>
      </div>
      <div className="col-span-4 bg-foreground rounded-elements p-6">
        <TestimonialCard />
      </div>
    </div>
  );
};

export default Hero;
