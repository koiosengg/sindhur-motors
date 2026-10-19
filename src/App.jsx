import React, { useState } from "react";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Privacy from "./pages/Privacy.jsx";
import { useRoute } from "./lib/router.js";
import IntroAnimation from "./components/IntroAnimation/IntroAnimation.jsx";

export default function App() {
  const route = useRoute();
  const [showIntro, setShowIntro] = useState(true);

  const page =
    route === "/about" ? (
      <About />
    ) : route === "/contact" ? (
      <Contact />
    ) : route === "/privacy" || route === "/terms" ? (
      <Privacy />
    ) : (
      <Home onReplayIntro={() => setShowIntro(true)} />
    );

  return (
    <>
      {showIntro && <IntroAnimation onFinish={() => setShowIntro(false)} />}

      <main>{page}</main>
    </>
  );
}
