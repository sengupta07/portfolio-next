import { ReactNode, useRef } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from 'framer-motion';
import { wrap } from '@motionone/utils';

interface ParallaxTextProps {
  children: ReactNode;
  baseVelocity: number;
}

const ParallaxText: React.FC<ParallaxTextProps> = ({ children, baseVelocity }) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);
  const directionFactor = useRef<number>(1);

  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden whitespace-nowrap flex">
      <motion.div className="flex font-bold uppercase text-4xl sm:text-7xl tracking-tight stroke-text" style={{ x }}>
        <span className="mr-6">{children}</span>
        <span className="mr-6">{children}</span>
        <span className="mr-6">{children}</span>
        <span className="mr-6">{children}</span>
      </motion.div>
    </div>
  );
};

const HeroTextCarousal: React.FC = () => {
  return (
    <div className="relative flex flex-col justify-center overflow-hidden opacity-50">
      <section className="relative py-4">
        <ParallaxText baseVelocity={-5}>
          <span
            className="stroke-text mr-6"
            style={
              {
                '--stroke-color': '#61DAFB', // React blue
              } as React.CSSProperties
            }
          >
            React
          </span>
          <span
            className="stroke-text mr-6"
            style={
              {
                '--stroke-color': '#FFFFFF', // Next.js black
              } as React.CSSProperties
            }
          >
            Next.js
          </span>
          <span
            className="stroke-text mr-6"
            style={
              {
                '--stroke-color': '#3178C6', // TypeScript blue
              } as React.CSSProperties
            }
          >
            TypeScript
          </span>
          <span
            className="stroke-text mr-6"
            style={
              {
                '--stroke-color': '#A259FF', // TypeScript blue
              } as React.CSSProperties
            }
          >
            Figma
          </span>
        </ParallaxText>
        <ParallaxText baseVelocity={3}>
          <span
            className="stroke-text mr-6"
            style={
              {
                '--stroke-color': '#1DBF73', // React blue
              } as React.CSSProperties
            }
          >
            Fiverr
          </span>
          <span
            className="stroke-text mr-6"
            style={
              {
                '--stroke-color': '#F39C12', // Next.js black
              } as React.CSSProperties
            }
          >
            Geotech
          </span>
          <span
            className="stroke-text mr-6"
            style={
              {
                '--stroke-color': '#E74C3C', // TypeScript blue
              } as React.CSSProperties
            }
          >
            Brainseed Networks
          </span>
        </ParallaxText>
        <ParallaxText baseVelocity={-3}>
          <span
            className="stroke-text mr-6"
            style={
              {
                '--stroke-color': '#1DBF73', // React blue
              } as React.CSSProperties
            }
          >
            Custom Tools
          </span>
          <span
            className="stroke-text mr-6"
            style={
              {
                '--stroke-color': '#F39C12', // Next.js black
              } as React.CSSProperties
            }
          >
            Open Source
          </span>
          <span
            className="stroke-text mr-6"
            style={
              {
                '--stroke-color': '#E74C3C', // TypeScript blue
              } as React.CSSProperties
            }
          >
            Collaborations
          </span>
        </ParallaxText>
        <ParallaxText baseVelocity={3}>
          <span className="!text-[#61DAFB]">Innovations</span> <span className="!text-[#FFFFFF]">Scalability</span>{' '}
          <span className="!text-[#3178C6]">Cloud Systems</span>
        </ParallaxText>
      </section>
      <div
        className="max-md:hidden absolute pointer-events-none w-full h-full inset-0 top-auto z-0"
        style={{
          backgroundImage: `radial-gradient(50% 110% at 50% 0, transparent 0%, transparent 50%, #1E1E1F 100%)`,
        }}
      ></div>
    </div>
  );
};

export default HeroTextCarousal;
