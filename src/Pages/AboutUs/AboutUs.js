import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="">
      <div className="about-container w-8/12 mx-auto">
        <div>
          <h5
            className="text-base text-[#7680E7]">
            Largest community
          </h5>
          <h2 className="text-6xl"> Our <br/> Impact </h2>
        </div>
        <div className="about-card-container">
          <div className="min-h-[272px] max-w-[272px] bg-[#B6ACFF] text-center job-placement-card bg-gradient-to-r from-sky-500 to-indigo-500">
            <h1 className="text-2xl">2000+</h1>
            <p className="text-3xl">Job Placement WorldWide</p>
          </div>
          <div className="connected-companies text-center bg-gradient-to-r from-violet-500 to-fuchsia-500">
            <h1 className="text-2xl">1200+</h1>
            <p className="text-3xl">connected <br/> companies</p>
          </div>
          <div className=" dedicated-job-placement bg-gradient-to-r from-cyan-500 to-blue-500 text-center">
            <h1 className="text-2xl">17+</h1>
            <p className="text-3xl">Dedicated Job Placement Executives</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
