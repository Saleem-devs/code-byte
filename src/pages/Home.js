import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <header className="">
        <Navbar />
        <Hero />
        <About />
        <Features />
        <Contact />
        <Footer />
      </header>
    </>
  );
}

export default Home;
