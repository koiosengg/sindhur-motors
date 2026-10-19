import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import VehicleSlider from "../components/VehicleSlider";
import Footer from "../components/Footer";
import { HomePageStructuredData } from "../structured-data/index.jsx";
import homeVideo from "../assets/Home/Banner/Home.mp4";
import homePoster from "../assets/Home/Banner/Banner.webp";

export default function Home({ onReplayIntro }) {
  return (
    <div>
      <HomePageStructuredData />
      <Navbar />
      <Banner className="banner-home" video={homeVideo} poster={homePoster} />
      <VehicleSlider />
      <Footer />
    </div>
  );
}

