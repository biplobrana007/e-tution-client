import React from "react";
import Logo from "../Logo/Logo";
import { Link } from "react-router";
import { FaFacebook, FaGithub, FaXTwitter } from "react-icons/fa6";
import Container from "../Contaniner/Container";

const Footer = () => {
  return (
    <div className="bg-[#156d03]">
      <Container>
        <footer className="footer footer-horizontal footer-center  text-primary-content p-10">
          <aside>
            <Logo className="text-3xl font-semibold"></Logo>
            <p className="font-bold">
              eTuitionBD Ltd.
              <br />
              Providing reliable services since 2015
            </p>
            <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
          </aside>
          <nav>
            <div className="grid grid-flow-col gap-4 text-2xl">
              <Link>
                <FaFacebook></FaFacebook>
              </Link>
              <Link>
                <FaXTwitter></FaXTwitter>
              </Link>
              <Link>
                <FaGithub></FaGithub>
              </Link>
            </div>
          </nav>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
