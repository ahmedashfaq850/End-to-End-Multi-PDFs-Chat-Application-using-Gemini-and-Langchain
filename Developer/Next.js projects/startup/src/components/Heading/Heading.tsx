import React from "react";

interface Heading {
    heading :string;
    headingStyle?:string
}
const Heading: React.FC<Heading> = ({ heading,headingStyle } ) => {
  return <h3 className={`font-bold ${headingStyle} mb-5`}>{heading}</h3>;
};

export default Heading;
