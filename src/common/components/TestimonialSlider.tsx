'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import TestimonialCard from './TestimonialCard';
import { Autoplay } from 'swiper/modules';

// Testimonial data
const testimonials = [
  {
    quote:
      'Working with Jacob was transformative. His creativity and attention to detail brought our vision to life. He delivered an exceptional design and offered valuable suggestions. Highly recommend!',
    name: 'Jacob Jones',
    designation: 'Co-founder & CEO',
    company: 'porta.co',
  },
  {
    quote:
      "Emma's professionalism and expertise exceeded our expectations. Her ability to capture our brand's essence in the design was remarkable. We'll definitely work with her again!",
    name: 'Emma Stone',
    designation: 'Marketing Director',
    company: 'creative.inc',
  },
  {
    quote:
      "John's innovative solutions and clear communication made our project a success. He went above and beyond to ensure our satisfaction. Absolutely stellar work!",
    name: 'John Doe',
    designation: 'Product Manager',
    company: 'startup.xyz',
  },
];

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
