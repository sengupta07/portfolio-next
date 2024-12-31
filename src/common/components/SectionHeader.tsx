import React from 'react';

type Props = {
  subheading: string;
  mainHeading: string;
};

const SectionHeader = ({ mainHeading, subheading }: Props) => {
  return (
    <div className="text-center space-y-2">
      <p className="font-medium opacity-40">{subheading}</p>
      <h3 className="font-medium gradient-text-base p-1">{mainHeading}</h3>
    </div>
  );
};

export default SectionHeader;
