import React from 'react';
import Card from './Card';
import Button from './Button';
import ArrowRight from '../icons/ArrowRight';
import Image from 'next/image';

type Props = {
  tag: string;
  heading: string;
  projectImageSrc: string;
};

const ProjectCard = ({ tag, heading, projectImageSrc }: Props) => {
  return (
    <Card className="flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <div className="space-y-4">
          <div className="inline-flex items-center bg-tag bg-opacity-10 text-green-300 border border-green-900 px-3 rounded-full text-sm py-1 announcement-badge">
            {tag}
          </div>
          <h6 className="font-semibold">{heading}</h6>
        </div>
        <Button asChild>
          <ArrowRight />
        </Button>
      </div>
      <div className="relative w-full h-[200px] sm:h-[300px] md:h-[390px] mb-4">
        <Image alt={heading} src={projectImageSrc} layout="fill" objectFit="cover" className="rounded-lg" />
      </div>
    </Card>
  );
};

export default ProjectCard;
