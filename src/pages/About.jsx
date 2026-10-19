import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import { AboutPageStructuredData } from "../structured-data/index.jsx";
import aboutVideo from "../assets/About/About.mp4";
import aboutPoster from "../assets/About/Banner.webp";

export default function About() {
  return (
    <div>
      <AboutPageStructuredData />
      <Navbar />
      <Banner className="banner-about" video={aboutVideo} poster={aboutPoster} />
      <Footer />
    </div>
  );
}

