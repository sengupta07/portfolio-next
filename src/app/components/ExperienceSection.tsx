'use client';
import Card from '@/common/components/Card';
import SectionHeader from '@/common/components/SectionHeader';
import React from 'react';
import { experiences } from '../data/experiences.data';
import ExperienceCard from '@/common/components/ExperienceCard';
import { containerVariants, itemVariants } from '../data/animationVariants.data';
import { motion } from 'framer-motion';

const ExperienceSection = () => {
  return (
    <div id="about" className="container space-y-12">
      <SectionHeader subheading="EXPERIENCE SECTION" mainHeading="My Experience" />
      <motion.div variants={containerVariants}>
        <Card className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <ExperienceCard {...exp} />
            </motion.div>
          ))}
        </Card>
      </motion.div>
    </div>
  );
};

export default ExperienceSection;
