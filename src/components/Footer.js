import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-darkerBgColor py-14">
        <div className="container">
          <div className="flex flex-col items-center gap-5 md:flex-row md:justify-between">
            <div className="text-white font-bold text-2xl">
              CODE<span className="text-textBlue">BYTE</span>{" "}
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
