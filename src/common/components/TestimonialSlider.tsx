'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import TestimonialCard from './TestimonialCard';
import { Autoplay } from 'swiper/modules';
import { testimonials } from '@/app/data/testimonials.data';

const TestimonialSlider = () => {
  return (
    <div className="space-y-5">
      <h5 className="px-6 pt-6 font-medium">What clients say</h5>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay]}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="p-6">
            <TestimonialCard
              quote={testimonial.quote}
              name={testimonial.name}
              designation={testimonial.designation}
              company={testimonial.company}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
