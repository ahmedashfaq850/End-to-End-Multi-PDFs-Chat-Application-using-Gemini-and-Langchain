import React from "react";

type TestimonialDescCardProps = {
  desc: string;
};
const TestimonialDescCard: React.FC<TestimonialDescCardProps> = ({ desc }) => {
  return (
    <div className="border-bgIntroBorder  p-5  text-sm border rounded-[8px]">
      <p>{desc}</p>
    </div>
  );
};

export default TestimonialDescCard;
