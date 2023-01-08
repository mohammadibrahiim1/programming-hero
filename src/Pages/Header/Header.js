import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="header-section h-screen bg-gradient-to-r from-[#FEEDD9] to-[#F2EAEF] bg-cover bg-no-repeat pt-16">
        <div className="grid grid-cols-2 w-11/12 mx-auto">
          <div className="w-2/3 mx-auto  self-center mt-10 ">
            <div className="sub-heading">
            EXCELLENCE IN EDUCATION
            </div>
            <div>
              <h1 className="text-white pt-6 font-serif text-6xl font-bold heading">
              Start Better Learning Future From Here
              </h1>
            </div>
            <div>
              <p className="text-[#8F8797] text-lg leading-6 pt-6 mt-6 ">
              Learning is a life-long journey that in fact we never find the terminate stop. Stop searching, enjoy the process.
              </p>
            </div>
            <div>
              <Link to="/">
                {" "}
                <button className="btn mt-8">get started today</button>{" "}
              </Link>
            </div>
          </div>
          <div className="w-2/3 mx-auto mt-10 pt-10">
            <img src="https://i.ibb.co/GMGbyfS/ph-header-img.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
