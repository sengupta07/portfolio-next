import ProjectCard from '@/common/components/ProjectCard';
import SectionHeader from '@/common/components/SectionHeader';
import React from 'react';
import { projects } from '../data/projects.data';

type Props = {};

const ProjectsShowcase = (props: Props) => {
  return (
    <div className="container space-y-12">
      <SectionHeader subheading="PORTFOLIO SECTION" mainHeading="Projects Showcase" />
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            tag={project.tag}
            heading={project.heading}
            projectImageSrc={project.projectImageSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsShowcase;
