import React, { useRef, useState, useEffect } from "react";
import IntroVideo from "../assets/Intro/Intro.mp4";

export default function Banner({ video = IntroVideo, poster, className = "", children }) {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  // Autoplay always starts muted — unmute when user taps toggle
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = muted;
    }
  }, [muted]);

  const toggleMute = () => setMuted((prev) => !prev);

  return (
    <section className={`banner ${className}`}>
      {video && (
        <video
          ref={videoRef}
          key={video}
          className="banner-video"
          src={video}
          poster={poster}
          autoPlay
          loop
          muted
          playsInline
        />
      )}

      {/* Volume toggle button */}
      <button
        className={`banner-sound-btn ${muted ? "sound-muted" : "sound-on"}`}
        onClick={toggleMute}
        aria-label={muted ? "Unmute video" : "Mute video"}
        title={muted ? "Unmute" : "Mute"}
      >
        {muted ? (
          /* Muted icon */
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M11 5L6 9H2V15H6L11 19V5Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            <line x1="23" y1="9" x2="17" y2="15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            <line x1="17" y1="9" x2="23" y2="15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
        ) : (
          /* Sound on icon */
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M11 5L6 9H2V15H6L11 19V5Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15.54 8.46C16.48 9.4 17 10.67 17 12C17 13.33 16.48 14.6 15.54 15.54" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            <path d="M19.07 4.93C20.94 6.8 22 9.34 22 12C22 14.66 20.94 17.2 19.07 19.07" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
        )}
      </button>

      <div className="banner-content">
        {children}
      </div>
    </section>
  );
}

