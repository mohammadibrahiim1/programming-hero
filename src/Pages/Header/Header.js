import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      {/* <a href="https://imgbb.com/"><img src="https://i.ibb.co/GMGbyfS/ph-header-img.png" alt="ph-header-img" border="0"></a><br /><a target='_blank' href='https://geojsonlint.com/'>python validate json</a><br /> */}
      {/* <a href="https://ibb.co/94NLDys"><img src="https://i.ibb.co/ZgVPjcW/ph-bg-img.jpg" alt="ph-bg-img" border="0"></a><br /><a target='_blank' href='https://geojsonlint.com/'>python validate json</a><br /> */}

      <div className="header-section h-screen bg-[url(https://i.ibb.co/ZgVPjcW/ph-bg-img.jpg)] bg-cover bg-no-repeat pt-16">
      <div className="grid grid-cols-2 w-11/12 mx-auto">
      <div className="w-2/3 mx-auto  self-center mt-10 ">
          <div className="sub-heading">all you need is internet and laptop</div>
          <div>
            <h1 className="text-white pt-6 font-serif text-6xl font-bold heading">
              Online university of in-demand professions
            </h1>
          </div>
          <div>
            <p className="text-white text-lg leading-6 pt-6 mt-6 ">
              Master the in-demand Internet profession with a guaranteed income
              and start a new life!
            </p>
          </div>
          <div>
            <Link to="/">
              {" "}
              <button className="btn mt-8">register for free</button>{" "}
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
