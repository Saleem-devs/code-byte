import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faFileCode } from "@fortawesome/free-solid-svg-icons";

function FeatureCard(props) {
  const { icon, title, description } = props;
  return (
    <div className="bg-bgColor mt-8 relative rounded-md shadow-lg p-6 text-center md:text-left md:w-1/3">
      <div className="bg-textBlue w-16 h-16 rounded-full flex items-center justify-center absolute -top-8 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-6">
        {icon}
      </div>
      <h3 className="text-lg text-white font-bold mt-8 mb-2">{title}</h3>
      <p className="text-primaryText">{description}</p>
    </div>
  );
}

function Features() {
  return (
    <>
      <article id="features" className="bg-darkerBgColor py-14">
        <div className="container">
          <h1 className="text-white text-4xl font-extrabold text-center mb-14">
            Features
          </h1>
          <div className="flex flex-col  gap-6 md:flex-row">
            <FeatureCard
              icon={
                <FontAwesomeIcon
                  icon={faCode}
                  className="text-white text-4xl"
                />
              }
              title="Write HTML, CSS, JavaScript codes"
              description="CodeByte provides a code editor that supports HTML, CSS, and JavaScript. You can easily write and test your code all in one place."
            />
            <FeatureCard
              icon={
                <FontAwesomeIcon
                  icon={faLaptopCode}
                  className="text-white text-4xl"
                />
              }
              title="Code highlighting and auto-complete"
              description="CodeByte helps you write code faster with highlighting and auto-complete features. You can focus on your code, and let CodeByte take care of the rest."
            />
            <FeatureCard
              icon={
                <FontAwesomeIcon
                  icon={faFileCode}
                  className="text-white text-4xl"
                />
              }
              title="Save and Manage Projects"
              description="With CodeByte, you can create and save multiple web projects to your personal dashboard. You can easily edit and delete projects as needed, and even share them with others."
            />
          </div>
        </div>
      </article>
    </>
  );
}

export default Features;
