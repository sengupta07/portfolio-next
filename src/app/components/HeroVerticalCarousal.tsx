'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { FaFigma, FaReact } from 'react-icons/fa';
import { SiAdobeillustrator, SiBitbucket, SiGit, SiJira, SiNextdotjs, SiTypescript } from 'react-icons/si';
import { BiLogoSpringBoot } from 'react-icons/bi';
import Carousel from '@/common/components/Carousel';

const icons = [
  { component: <FaReact size={50} />, name: 'React' },
  { component: <SiNextdotjs size={50} />, name: 'Next.js' },
  { component: <SiTypescript size={50} />, name: 'TypeScript' },
  { component: <FaFigma size={50} />, name: 'Figma' },
  { component: <BiLogoSpringBoot size={50} />, name: 'Spring Boot' },
  { component: <SiAdobeillustrator size={50} />, name: 'Adobe Illustrator' },
  { component: <SiGit size={50} />, name: 'Git' },
  { component: <SiJira size={50} />, name: 'Jira' },
  { component: <SiBitbucket size={50} />, name: 'Bitbucket' },
];

export default function HeroVerticalCarousal() {
  return (
    <div className="py-6 space-y-2 rotate-90">
      <Carousel scrollDirection="rtl">
        {icons.map((icon, i) => (
          <li
            key={i}
            className="flex justify-center w-64 h-72 -rotate-90 bg-topForeground rounded-2xl shadow-[0_4px_6px_rgba(0,0,0,0.1)]"
          >
            <div className="place-self-center">{icon.component}</div>
          </li>
        ))}
      </Carousel>

      <Carousel scrollDirection="ltr">
        {icons.map((icon, i) => (
          <li
            key={i}
            className="flex justify-center w-64 h-72 -rotate-90 bg-topForeground rounded-2xl shadow-[0_4px_6px_rgba(0,0,0,0.1)]"
          >
            <div className="place-self-center">{icon.component}</div>
          </li>
        ))}
      </Carousel>
    </div>
  );
}
