import React from 'react';

type Props = {};

const TestimonialCard = (props: Props) => {
  return (
    <div className="space-y-3">
      <h4 className="font-medium">What clients say</h4>
      <p className="text-xl opacity-60">
        <i>
          Working with Jacob was transformative. His creativity and attention to detail brought our vision to life. He
          delivered an exceptional design and offered valuable suggestions. Highly recommend!
        </i>
      </p>
    </div>
  );
};

export default TestimonialCard;
