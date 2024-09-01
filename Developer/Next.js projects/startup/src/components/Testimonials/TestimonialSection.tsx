"use client";
import React from "react";
import TestimonialCard from "./TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { TestimonialsResponse,Testimonial } from "@/lib/types";


const TestimonialsSection: React.FC<TestimonialsResponse> = ({
  testimonials,
}) => {
  if (testimonials.length === 0) {
    return null;
  }
  return (
    <div className="py-8 ">
      <div className="hidden lg:flex flex-col p-6 w-full border-bgIntroBorder border rounded-[8px]">
        {testimonials.map((testimonial: Testimonial, index: number) => (
          <TestimonialCard
            key={index}
            name={testimonial.author.name}
            profileDesc={testimonial.author.title}
            imageUrl={testimonial.author.image_url}
            testimonialDescShort={testimonial.content}
            testimonialDescription={testimonial.content}
            date={testimonial.author.date}
            connection_level ={testimonial.author.connection_level}
          />
        ))}
      </div>
      <div className="lg:hidden">
        <Swiper
          className=""
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
          }}
          modules={[A11y, Autoplay, Navigation, Pagination]}
          spaceBetween={220}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard
                name={testimonial.author.name}
                profileDesc={testimonial.author.title}
                imageUrl={testimonial.author.image_url}
                testimonialDescShort={testimonial.content}
                testimonialDescription={testimonial.content}
                date={testimonial.author.date}
                connection_level={testimonial.author.connection_level}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialsSection;
