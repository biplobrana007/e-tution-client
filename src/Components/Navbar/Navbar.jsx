import React from "react";
import MyLink from "./MyLink";
import Logo from "../Logo/Logo";
import { Link } from "react-router";
import Container from "../Contaniner/Container";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut, setUser } = useAuth();
  console.log(user);
  const links = (
    <>
      <MyLink title="Home" to="/"></MyLink>
      <MyLink title="Tuitions" to="/tuitions"></MyLink>
      <MyLink title="Tutors" to="/tutors"></MyLink>
      <MyLink title="About"></MyLink>
      <MyLink title="Contact"></MyLink>
    </>
  );

  const handleSignout = () => {
    logOut()
      .then(() => {
        setUser(null);
        navigation("/");
        toast.success("Logout Succesfully---");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-base-100 shadow-sm py-2">
      <Container>
        <div className="navbar p-0 ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
            <Link to="/">
              <Logo className="text-3xl font-semibold ml-3"></Logo>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu gap-2 menu-horizontal px-1">{links}</ul>
          </div>
          <div className="navbar-end">
            {user ? (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Profile"
                      src={user && user.photoURL}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <ul
                  tabIndex="0"
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  <li><Link to="/dashboard">Dashboard</Link></li>
                  <li><Link>Profile</Link></li>
                </ul>
              </div>
            ) : (
              <Link
                to="/login"
                className=" text-primary border px-5 py-2 rounded font-semibold"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
