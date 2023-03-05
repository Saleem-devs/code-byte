import React from "react";
import HeroImg from "../assets/images/Capture.JPG";

function Hero() {
  return (
    <>
      <main className=" bg-darkerBgColor py-16">
        <div className="container flex flex-col gap-16 lg:w-2/3">
          <div className="flex flex-col items-center justify-center gap-5">
            <h1 className="text-white text-4xl font-extrabold text-center md:text-4xl lg:text-5xl md:leading-9 lg:leading-10">
              Code, Create, Build - <br /> Anywhere, on any device
            </h1>
            <p className="text-primaryText text-center text-lg">
              CodeByte lets you{" "}
              <span className="text-textBlue">
                unleash your creativity and turn your front-end coding ideas
                into reality,
              </span>{" "}
              wherever you are and on any device. Code, create, and build with
              our easy-to-use editor and see your ideas come to life.
            </p>
            <div className="buttons font-bold w-full flex flex-col items-center justify-center gap-3 md:flex-row">
              <button className="text-white bg-textBlue py-3 px-5 rounded-md w-full md:w-auto">
                Learn more
              </button>
              <button className="text-white py-3 px-5 rounded-md bg-primaryText w-full md:w-auto">
                Get started
              </button>
            </div>
          </div>

          <div>
            <img src={HeroImg} alt="codebyte img" className="w-full" />
          </div>
        </div>
      </main>
    </>
  );
}

export default Hero;
