import React, { useState, useEffect } from "react";
import "./CookieConsent.css";

const STORAGE_KEY = "sindhur_cookie_consent";

export default function CookieConsent({ isIntroActive = false }) {
  const [visible, setVisible] = useState(false);
  const [isHiding, setIsHiding] = useState(false);

  useEffect(() => {
    // Expose open helper globally for easy previewing/testing
    window.openCookieConsent = () => {
      setIsHiding(false);
      setVisible(true);
    };

    const handleReopen = () => {
      setIsHiding(false);
      setVisible(true);
    };

    window.addEventListener("open-cookie-consent", handleReopen);

    const savedConsent = localStorage.getItem(STORAGE_KEY);
    if (!savedConsent && !isIntroActive) {
      const timer = setTimeout(() => {
        setVisible(true);
      }, 700);
      return () => {
        clearTimeout(timer);
        window.removeEventListener("open-cookie-consent", handleReopen);
      };
    }

    return () => {
      window.removeEventListener("open-cookie-consent", handleReopen);
    };
  }, [isIntroActive]);

  const handleChoice = (choice) => {
    localStorage.setItem(STORAGE_KEY, choice);
    window.dispatchEvent(
      new CustomEvent("sindhur_cookie_consent", { detail: choice })
    );

    if (window.dataLayer) {
      window.dataLayer.push({
        event: "cookie_consent_update",
        consent_status: choice,
      });
    }

    setIsHiding(true);
    setTimeout(() => {
      setVisible(false);
      setIsHiding(false);
    }, 320);
  };

  if (!visible) return null;

  return (
    <div
      className={`cookie-popup-container ${isHiding ? "cookie-hiding" : ""}`}
      role="region"
      aria-label="Cookie consent banner"
    >
      <div className="cookie-glow-blob" aria-hidden="true" />

      <div className="cookie-header">
        <div className="cookie-title-wrapper">
          <svg
            className="cookie-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
            <path d="M8.5 8.5v.01" />
            <path d="M16 15.5v.01" />
            <path d="M12 12v.01" />
            <path d="M11 17v.01" />
            <path d="M7 13v.01" />
          </svg>
          <h2 className="cookie-title">Cookie Preferences</h2>
        </div>
        <button
          className="cookie-close-btn"
          onClick={() => handleChoice("essential")}
          aria-label="Close cookie banner"
          title="Dismiss"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      <p className="cookie-body">
        We use cookies and browser storage to remember your preferences, track
        visitor activity, and optimize your experience.
        <a href="/privacy" className="cookie-policy-link">
          Privacy Policy
        </a>
      </p>

      <div className="cookie-actions">
        <button
          className="cookie-btn cookie-btn-decline"
          onClick={() => handleChoice("essential")}
        >
          Essential Only
        </button>
        <button
          className="cookie-btn cookie-btn-accept"
          onClick={() => handleChoice("accepted")}
        >
          Accept All
        </button>
      </div>
    </div>
  );
}
