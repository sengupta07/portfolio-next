'use client';
import Card from '@/common/components/Card';
import SectionHeader from '@/common/components/SectionHeader';
import React from 'react';
import ContactCard from './ContactCard';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '../data/animationVariants.data';

type Props = {};

const GetInTouch = (props: Props) => {
  return (
    <motion.div
      id="contact"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="container space-y-12"
    >
      <SectionHeader mainHeading="Let's work together" subheading="GET IN TOUCH" />
      <motion.div variants={itemVariants}>
        <Card className="bg-foreground !p-0.5">
          <div className="rounded-t-elements bg-background">
            <ContactCard />
          </div>
          <div className="bg-foreground rounded-b-elements py-3 max-md:px-3">
            <p className="text-white text-center opacity-20">PROMISE YOU THAT I’LL REPLY BACK WITHIN 24 HOURS.</p>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default GetInTouch;
