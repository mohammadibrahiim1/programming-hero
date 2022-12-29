import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  return <div>
    <div className="navbar bg-[#401A49]">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link>Home</Link></li>
        <li tabIndex={0}>
          <Link className="justify-between">
            Course Details
            {/* <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg> */}
          </Link>
          {/* <ul className="p-2">
            <li><Link>Submenu 1</Link></li>
            <li><Link>Submenu 2</Link></li>
          </ul> */}
        </li>
        <li><Link>About Us</Link></li>
        <li><Link>Log in</Link></li>
      </ul>
    </div>
    <Link className="ph-logo"><img src="https://i.ibb.co/f16cdD9/ph-high-resolution-logo-color-on-transparent-background.png" alt="ph-high-resolution-logo-color-on-transparent-background"/></Link>
  </div>
  <div className="navbar-center  hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link>Home</Link></li>
      <li tabIndex={0}>
        <Link>
          Course Details
          {/* <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg> */}
        </Link>
        {/* <ul className="p-2">
          <li><Link>Submenu 1</Link></li>
          <li><Link>Submenu 2</Link></li>
        </ul> */}
      </li>
      <li><Link>About Us</Link></li>
      <li><Link>Log in</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <Link className="btn">Sign up</Link>
  </div>
</div>
  </div>;
};

export default Navbar;
