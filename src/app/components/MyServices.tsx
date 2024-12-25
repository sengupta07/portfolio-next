import React from 'react';
import SectionHeader from '@/common/components/SectionHeader';
import { services } from '@/app/data/services.data';
import ServiceCard from '@/common/components/ServiceCard';

type Props = {};

const MyServices = (props: Props) => {
  return (
    <div className="space-y-12 container">
      <SectionHeader subheading="SERVICES SECTION" mainHeading="Check my services" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            serviceName={service.serviceName}
            icon={service.icon}
            iconClassname={service.iconClassname}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default MyServices;
