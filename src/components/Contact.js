import React from "react";
import Avatar from "../assets/images/Avatar.810fb15b46556c45c3e3.png";

function Contact() {
  return (
    <>
      <section id="contact" className="bg-textBlue py-14 md:py-16">
        <div className="container md:w-2/3">
          <div className="bg-darkerBgColor py-14 rounded-2xl md:py-16">
            <div className="flex flex-col items-center gap-5 p-6">
              <img src={Avatar} alt="avatar" />
              <div className="text-center">
                <h3 className="text-lg text-white font-bold mb-2">
                  Have suggestions or feedback?
                </h3>
                <p className="text-primaryText text-lg">
                  I'd love to hear from you! I'm always available to listen and
                  help in any way I can.
                </p>
              </div>
              <a
                href="https://twitter.com/abdsalam_saleem"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-textBlue rounded-md text-white font-lg py-2 px-4"
              >
                Send me a message
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
