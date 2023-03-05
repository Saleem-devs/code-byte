import React from "react";

function About() {
  return (
    <>
      <section id="about" className="bg-bgColor text-center py-28">
        <div className="container md:w-2/3">
          <h1 className="text-4xl text-white font-extrabold mb-10">
            About CodeWrite
          </h1>
          <p className="text-lg text-primaryText mb-6">
            CodeWrite is a powerful platform designed for front-end developers
            to bring their ideas to life. With its easy-to-use interface and
            editor, CodeWrite empowers users to create and collaborate on web
            development projects from anywhere, on any device.
          </p>
          <p className="text-lg text-primaryText mb-6">
            Whether you're a seasoned developer or just getting started,
            CodeWrite provides a streamlined and intuitive experience that makes
            coding fun and accessible. With features such as auto-complete and
            code highlighting, you can focus on bringing your ideas to life
            without worrying about the small details.
          </p>
          <p className="text-lg text-primaryText mb-6">
            CodeWrite provides a streamlined user interface that allows you to
            effortlessly create and save your frontend projects. With the
            ability to edit, delete, and share your projects, you can quickly
            iterate on your designs and showcase your work to others.
          </p>

          <div>
            <button className="bg-textBlue py-2 px-4 rounded-md text-white text-lg w-full md:w-auto">
              Get started
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
