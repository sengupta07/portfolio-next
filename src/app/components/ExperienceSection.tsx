import Card from '@/common/components/Card';
import SectionHeader from '@/common/components/SectionHeader';
import React from 'react';
import { experiences } from '../data/experiences.data';
import ExperienceCard from '@/common/components/ExperienceCard';

const ExperienceSection = () => {
  return (
    <div className="container space-y-12">
      <SectionHeader subheading="EXPERIENCE SECTION" mainHeading="My Experience" />
      <Card className="space-y-6">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </Card>
    </div>
  );
};

export default ExperienceSection;
