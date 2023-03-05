import React from "react";
import Logo from "../assets/images/LOGO.png";

function Footer() {
  return (
    <>
      <footer className="bg-darkerBgColor py-14">
        <div className="container">
          <div className="flex flex-col items-center gap-5 md:flex-row md:justify-between">
            <div className="w-36 md:w-40">
              <img src={Logo} alt="Logo" className="w-full" />
            </div>
            <p className="text-white text-lg">
              &copy; 2023 CodeByte. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
