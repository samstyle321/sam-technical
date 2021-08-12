import React from "react";
import web from "../src/images/about3.svg";
import Common from "./Common";
const About = () => {
  return (
    <>
      <Common
        name="Welcome to About page"
        imgsrc={web}
        visit="/contact"
        btnname="Contact Now"
      />
    </>
  );
};

export default About;
