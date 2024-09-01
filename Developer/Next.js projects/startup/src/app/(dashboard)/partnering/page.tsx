import React from "react";
import TestimonialsSection from "@/components/Testimonials/TestimonialSection";
import InsightsSection from "@/components/InsightSection/InsightsSection";
import InsightDetailsComponent from "@/components/InsightSection/InsightDetailsComponent";
import Testimonial from "@/components/Testimonials/Testimonial";

const TestimonialPage = () => {
  return (
    <div className="mx-4 px-4 sm:px-3 md:px-4 lg:px-4 xl:px-1 min-h-[100vh] w-[360px] md:w-[600px] lg:w-11/12">
      <Testimonial />
      <InsightsSection/>
      <InsightDetailsComponent/>
    </div>
  );
};
export default TestimonialPage;
