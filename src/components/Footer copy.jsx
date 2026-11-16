import React from "react";
import NavLogo1 from "../assets/Footer/logo2.webp";
import NavLogo2 from "../assets/Navbar/logo2.webp";
import SindhurSvg from "../assets/Footer/sindhur.svg";

export default function Footer({ className = "" }) {
  return (
    <footer className={`footer ${className}`}>
      <div className="footer-top">
        <div className="footer-nav-row">
          <a href="/" className="footer-brand">
            <img
              src={NavLogo2}
              alt="Sindhur Motos Icon"
              className="footer-logo2"
            />
            <img src={NavLogo1} alt="Sindhur Motos" className="footer-logo1" />
          </a>
          <nav className="footer-nav-links">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/privacy">Privacy</a>
            <a href="/privacy">Terms</a>
            <button
              type="button"
              className="footer-cookie-btn"
              onClick={() => {
                if (window.openCookieConsent) {
                  window.openCookieConsent();
                } else {
                  window.dispatchEvent(new Event("open-cookie-consent"));
                }
              }}
            >
              Cookies
            </button>
          </nav>
        </div>

        <div className="footer-meta-row">
          <span>© 2026 All rights reserved</span>
          <span>
            Crafted by{" "}
            <a
              href="https://www.koiostudio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="koio-link"
            >
              Koiostudio
            </a>
          </span>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-blur-left" />
        <img src={SindhurSvg} alt="SINDHUR" className="footer-bottom-svg" />
        <div className="footer-blur-right" />
      </div>
    </footer>
  );
}
