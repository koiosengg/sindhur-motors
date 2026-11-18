import React, { useEffect, useState } from "react";

const TEXT_PART1 = "The future";
const TEXT_PART2 = "has a new name";
const FULL_TEXT = `${TEXT_PART1} ${TEXT_PART2}`;

export default function Frame2Tagline({ onNext, duration = 3200 }) {
  const [isLeaving, setIsLeaving] = useState(false);
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    // Start exit transition 600ms before next frame
    const leaveTimer = setTimeout(() => {
      setIsLeaving(true);
    }, Math.max(duration - 600, 1000));

    const nextTimer = setTimeout(() => {
      onNext?.();
    }, duration);

    return () => {
      clearTimeout(leaveTimer);
      clearTimeout(nextTimer);
    };
  }, [onNext, duration]);

  useEffect(() => {
    // Small delay before typewriter starts
    const startDelay = setTimeout(() => {
      const interval = setInterval(() => {
        setCharCount((prev) => {
          if (prev >= FULL_TEXT.length) {
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, 95);

      return () => clearInterval(interval);
    }, 200);

    return () => clearTimeout(startDelay);
  }, []);

  const part1Length = TEXT_PART1.length;
  const hasStartedPart2 = charCount > part1Length;

  const displayedPart1 = TEXT_PART1.slice(0, Math.min(charCount, part1Length));
  const displayedPart2 =
    charCount > part1Length + 1
      ? TEXT_PART2.slice(0, charCount - (part1Length + 1))
      : "";

  return (
    <div
      className={`frame-tagline-container ${
        isLeaving ? "tagline-leaving" : ""
      }`}
    >
      {/* Centered blue blur glow element */}
      <div className="tagline-glow-blob" />

      {/* Tagline Text with typewriter effect without cursor */}
      <h1 className="tagline-text" aria-label={FULL_TEXT}>
        <span className="tagline-highlight">{displayedPart1}</span>
        {hasStartedPart2 ? " " : null}
        {hasStartedPart2 && displayedPart2 ? (
          <span className="tagline-rest">{displayedPart2}</span>
        ) : null}
      </h1>
    </div>
  );
}
