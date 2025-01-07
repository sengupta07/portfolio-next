import React from 'react';
import Card from './Card';
import Image from 'next/image';
import assets from '../assets';
import { FaCalendar } from 'react-icons/fa';
import Button from './Button';

type ArticleProps = {
  tags: string[];
  title: string;
  description: string;
  image?: string;
  date: string;
  variant: 'full' | 'minimal';
};

const ArticleCard: React.FC<ArticleProps> = ({ tags, title, description, image, date, variant }) => {
  return (
    <Card className={`relative p-8 flex flex-col gap-5 group `}>
      {variant === 'full' && image && (
        <div className="rounded-xl overflow-hidden">
          <Image
            alt={`${title} Image`}
            src={image}
            width={624}
            height={372}
            className="group-hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </div>
      )}
      <div className="flex max-md:flex-col max-md:gap-4 justify-between md:items-center">
        <div className="flex gap-2">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="py-2 px-4 inline-flex backdrop-filter backdrop-blur-md rounded-lg bg-white transition-colors duration-300 ease-in-out bg-opacity-10 text-white text-sm items-center"
            >
              {tag.toUpperCase()}
            </div>
          ))}
        </div>
        {variant === 'full' && (
          <div className="flex gap-2 items-center">
            <FaCalendar />
            <p>{new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          </div>
        )}
      </div>
      <h4 className=" text-white">{title}</h4>
      <p className="text-white opacity-70 flex-1">{description}</p>
      {variant === 'full' && (
        <span>
          <Button showArrow variant="link">
            Read more
          </Button>
        </span>
      )}
    </Card>
  );
};

export default ArticleCard;
