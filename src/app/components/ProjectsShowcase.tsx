'use client';
import ProjectCard from '@/common/components/ProjectCard';
import SectionHeader from '@/common/components/SectionHeader';
import React from 'react';
import { projects } from '../data/projects.data';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '../data/animationVariants.data';

type Props = {};

const ProjectsShowcase = (props: Props) => {
  return (
    <motion.div id="work" className="container space-y-12" variants={containerVariants}>
      <SectionHeader subheading="PORTFOLIO SECTION" mainHeading="Projects Showcase" />
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <ProjectCard
              link={project.link}
              tags={project.tags}
              heading={project.heading}
              projectImageSrc={project.projectImageSrc}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectsShowcase;
