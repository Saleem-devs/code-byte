import React from "react";
import { Link } from "react-scroll";
import Logo from "../assets/images/LOGO.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <>
      <nav className="bg-darkerBgColor py-4">
        <div className="container">
          <div className="flex items-center justify-between">
            {/* Logo  */}

            <div className="w-36 md:w-40">
              <img src={Logo} alt="Logo" className="w-full" />
            </div>

            {/* Nav Links  */}

            <div className="hidden md:block">
              <ul className=" flex items-center gap-5">
                <li>
                  <Link
                    to="about"
                    smooth={true}
                    className="text-primaryText text-lg hover:text-white cursor-pointer"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="features"
                    smooth={true}
                    className="text-primaryText text-lg hover:text-white cursor-pointer"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    to="contact"
                    smooth={true}
                    className="text-primaryText text-lg hover:text-white cursor-pointer"
                  >
                    Get in touch
                  </Link>
                </li>
                <li className="py-2 px-4 bg-textBlue text-lg text-white rounded-md cursor-pointer">
                  Get started
                </li>
              </ul>
            </div>

            {/* Hambugger Icon  */}

            <FontAwesomeIcon
              icon={faBars}
              className="text-textBlue text-2xl cursor-pointer md:hidden"
            />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
