import React from "react";
import TestimonialsSection from "./TestimonialSection";
import { TestimonialsResponse } from "@/lib/types";

const getTestominoials = async () => {
  const url =
    "https://58cb77d6-1dde-4a6a-8e73-422011e4df4a.mock.pstmn.io/recommendations";
  const headers = {
    accept: "application/json",
    "Content-Type": "application/json",
  };

  try {
    const delay = (ms: any) =>
      new Promise((resolve) => setTimeout(resolve, ms));
    await delay(3000);

    const response = await fetch(url, {
      method: "GET",
      headers,
    });

    if (!response.ok) {
      throw new Error("Failed to fetch Testimonials");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch Testimonials");
  }
};

const Testimonial = async () => {
  const testimonials:TestimonialsResponse = await getTestominoials();

  return <TestimonialsSection testimonials={testimonials["testimonials"]} />;
};

export default Testimonial;
