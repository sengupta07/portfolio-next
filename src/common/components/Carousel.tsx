'use client';

import React from 'react';

interface CarouselContents {
  imageList?: string[];
  children?: React.ReactNode;
  scrollDirection?: 'rtl' | 'ltr';
}

const Carousel: React.FC<CarouselContents> = ({ imageList, children, scrollDirection = 'rtl' }: CarouselContents) => {
  return (
    <>
      <div className="w-full inline-flex flex-nowrap overflow-hidden py-2">
        <ul
          className={`flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none ${
            scrollDirection === 'rtl' ? 'animate-infinite-scroll-rtl' : 'animate-infinite-scroll-ltr'
          }`}
        >
          {imageList?.map((src, index) => (
            <li key={index}>
              <img src={src} alt={`Slide ${index}`} className="w-64 h-40 object-cover" />
            </li>
          ))}
          {children}
        </ul>
        <ul
          className={`flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none ${
            scrollDirection === 'rtl' ? 'animate-infinite-scroll-rtl' : 'animate-infinite-scroll-ltr'
          }`}
          aria-hidden="true"
        >
          {imageList?.map((src, index) => (
            <li key={index}>
              <img src={src} alt={`Slide ${index}`} className="w-64 h-40 object-cover" />
            </li>
          ))}
          {children}
        </ul>
      </div>
    </>
  );
};

export default Carousel;
