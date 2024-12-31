import Card from '@/common/components/Card';
import SectionHeader from '@/common/components/SectionHeader';
import React from 'react';
import ContactCard from './ContactCard';

type Props = {};

const GetInTouch = (props: Props) => {
  return (
    <div className="container space-y-12">
      <SectionHeader mainHeading="Let's work together" subheading="GET IN TOUCH" />
      <Card className="bg-foreground !p-0.5">
        <div className="rounded-t-elements bg-background">
          <ContactCard />
        </div>
        <div className="bg-foreground rounded-b-elements py-3">
          <p className="text-white text-center opacity-20">PROMISE YOU THAT I’LL REPLY BACK WITHIN 24 HOURS.</p>
        </div>
      </Card>
    </div>
  );
};

export default GetInTouch;
