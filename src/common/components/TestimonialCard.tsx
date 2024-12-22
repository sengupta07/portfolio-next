import Image from 'next/image';
import React from 'react';
import assets from '../assets';

type TestimonialProps = {
  quote: string;
  name: string;
  designation: string;
  company: string;
};

const TestimonialCard = ({ quote, name, designation, company }: TestimonialProps) => {
  return (
    <div className="space-y-3">
      <p className="text-xl opacity-60">
        <i>{quote}</i>
      </p>
      <div className="text-base font-medium border-t border-white border-opacity-10 pt-6 flex justify-between items-end">
        <div>
          <p>{name}</p>
          <p className="font-light opacity-60">
            {designation} at {company}
          </p>
        </div>
        <div>
          <Image alt="Quotes" src={assets.quotes} width={84} height={58} />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
