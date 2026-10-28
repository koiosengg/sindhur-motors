import React, { useEffect, useState } from "react";

const TEXT_PART1 = "The future";
const TEXT_PART2 = "has a new name";
const FULL_TEXT = `${TEXT_PART1} ${TEXT_PART2}`;

export default function Frame2Tagline({ onNext, duration = 3200 }) {
  const [isLeaving, setIsLeaving] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

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
      }, 45);

      return () => clearInterval(interval);
    }, 200);

    return () => clearTimeout(startDelay);
  }, []);

  useEffect(() => {
    if (charCount >= FULL_TEXT.length) {
      const cursorTimer = setTimeout(() => {
        setShowCursor(false);
      }, 500);
      return () => clearTimeout(cursorTimer);
    }
  }, [charCount]);

  const part1Length = TEXT_PART1.length;
  const isTypingPart1 = charCount <= part1Length;
  const hasStartedPart2 = charCount > part1Length;

  const displayedPart1 = TEXT_PART1.slice(0, Math.min(charCount, part1Length));
  const displayedPart2 =
    charCount > part1Length + 1
      ? TEXT_PART2.slice(0, charCount - (part1Length + 1))
      : "";

  const cursorElement = (
    <span className="typewriter-cursor" aria-hidden="true" />
  );

  return (
    <div
      className={`frame-tagline-container ${
        isLeaving ? "tagline-leaving" : ""
      }`}
    >
      {/* Centered blue blur glow element */}
      <div className="tagline-glow-blob" />

      {/* Tagline Text with typewriter effect from center */}
      <h1 className="tagline-text" aria-label={FULL_TEXT}>
        <span className="tagline-highlight">
          {displayedPart1}
          {showCursor && isTypingPart1 ? cursorElement : null}
        </span>
        {hasStartedPart2 ? " " : null}
        {hasStartedPart2 ? (
          <span className="tagline-rest">
            {displayedPart2}
            {showCursor && !isTypingPart1 ? cursorElement : null}
          </span>
        ) : null}
      </h1>
    </div>
  );
}
