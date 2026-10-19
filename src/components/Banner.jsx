import React from "react";
import IntroVideo from "../assets/Intro/Intro.mp4";

export default function Banner({ video = IntroVideo, poster, className = "", children }) {
  return (
    <section className={`banner ${className}`}>
      {video && (
        <video
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
      <div className="banner-content">
        {children}
      </div>
    </section>
  );
}

