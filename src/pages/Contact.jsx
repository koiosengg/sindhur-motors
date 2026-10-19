import React from "react";
import Navbar from "../components/Navbar";
import ContactBanner from "../components/ContactBanner";
import Footer from "../components/Footer";
import { ContactPageStructuredData } from "../structured-data/index.jsx";

export default function Contact() {
  return (
    <div>
      <ContactPageStructuredData />
      <Navbar />
      <ContactBanner />
      <Footer />
    </div>
  );
}

