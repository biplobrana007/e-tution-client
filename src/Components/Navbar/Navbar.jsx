import React from "react";
import MyLink from "./MyLink";
import Logo from "../Logo/Logo";
import { Link } from "react-router";


const Navbar = () => {
    const links = <>
    <MyLink title="Home" to="/"></MyLink>
    <MyLink title="Tuitions" to="/tuitions"></MyLink>
    <MyLink title="Tutors" to="/tutors"></MyLink>
    <MyLink title="About" to="/about"></MyLink>
    <MyLink title="Contact" to="/contact"></MyLink>
    </>
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu gap-1 menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
            <Logo></Logo>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu gap-2 menu-horizontal px-1">
        {links}
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/login" className="btn">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
