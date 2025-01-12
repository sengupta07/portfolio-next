'use client';
import React from 'react';
import SectionHeader from '@/common/components/SectionHeader';
import { services } from '@/app/data/services.data';
import ServiceCard from '@/common/components/ServiceCard';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '../data/animationVariants.data';

type Props = {};

const MyServices = (props: Props) => {
  return (
    <motion.div
      className="space-y-12 container"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <SectionHeader subheading="SERVICES SECTION" mainHeading="Check my services" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {services.map((service, index) => (
          <motion.div key={index} variants={itemVariants}>
            <ServiceCard
              key={index}
              serviceName={service.serviceName}
              icon={service.icon}
              iconClassname={service.iconClassname}
              description={service.description}
              redirectURL={service.redirectURL}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default MyServices;
