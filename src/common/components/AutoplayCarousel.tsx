'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';
import { Autoplay, FreeMode } from 'swiper/modules';
import { carouselImageDetails } from '@/app/data/imagecarousel.data';

interface AutoplayCarouselProps {
  scrollDirection?: 'ttb' | 'btt';
}

export default function AutoplayCarousel({ scrollDirection = 'ttb' }: AutoplayCarouselProps) {
  return (
    <>
      <Swiper
        modules={[FreeMode, Autoplay]}
        spaceBetween={30}
        slidesPerView="auto"
        loop={true}
        speed={6500}
        freeMode={true}
        direction={'vertical'}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        {carouselImageDetails.map((detail, index) => (
          <SwiperSlide key={index}>
            <img src={detail.imgUrl} alt={detail.title} className="h-4/5 w-4/5 rounded-lg object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
