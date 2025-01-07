import React from 'react';
import Card from './Card';
import Button from './Button';
import ArrowRight from '../icons/ArrowRight';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  tags: string[];
  heading: string;
  projectImageSrc: string;
  link: string;
};

const ProjectCard = ({ link, tags, heading, projectImageSrc }: Props) => {
  return (
    <Link href={link} target="_blank" className="group">
      <Card className="flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <div
                  key={index}
                  className="inline-flex items-center bg-tag bg-opacity-10 text-green-300 border border-green-900 px-3 rounded-full text-sm py-1"
                >
                  {tag}
                </div>
              ))}
            </div>
            <h6 className="font-semibold">{heading}</h6>
          </div>
          <Button variant={'ctaButton'} asChild className="p-2">
            <ArrowRight className="group-hover:!transform-none" />
          </Button>
        </div>
        <div className="relative w-full h-[200px] sm:h-[300px] md:h-[390px] mb-4">
          <Image alt={heading} src={projectImageSrc} layout="fill" objectFit="cover" className="rounded-lg" />
        </div>
      </Card>
    </Link>
  );
};

export default ProjectCard;
