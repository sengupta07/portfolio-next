import Image from 'next/image';
import Hero from '@/app/components/Hero';
import Clients from '@/app/components/Clients';
import MyServices from './components/MyServices';
import ProjectsShowcase from './components/ProjectsShowcase';
import ExperienceSection from './components/ExperienceSection';

export default function Home() {
  return (
    <main className="space-y-36">
      <Hero />
      {/* <Clients /> */}
      <MyServices />
      <ProjectsShowcase />
      <ExperienceSection />
    </main>
  );
}
