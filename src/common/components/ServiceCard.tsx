import React from 'react';
import Button from './Button';
import Card from './Card';
import { IconType } from 'react-icons';

type Props = {
  serviceName: string;
  icon: IconType;
  iconClassname?: string;
  description: string;
};

const ServiceCard = ({ serviceName, icon: Icon, description, iconClassname }: Props) => {
  return (
    <Card className="flex flex-col items-start gap-8 relative !p-8">
      <div className="p-4 rounded-full inline-block bg-white bg-opacity-10 backdrop-filter backdrop-blur-md border border-white border-opacity-10 outline outline-1 outline-offset-4 outline-gray-800 ">
        <Icon className={iconClassname} size={50} />
      </div>
      <h4 className="font-medium">{serviceName}</h4>
      <p className="opacity-70 flex-1">{description}</p>
      <Button showArrow variant={'link'}>
        Learn more
      </Button>
    </Card>
  );
};

export default ServiceCard;
