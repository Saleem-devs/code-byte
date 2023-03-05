import React from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <>
      <nav className="bg-darkerBgColor py-4">
        <div className="container">
          <div className="flex items-center justify-between">
            {/* Logo  */}

            <div className="text-white font-bold text-2xl">
              CODE<span className="text-textBlue">BYTE</span>{" "}
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
