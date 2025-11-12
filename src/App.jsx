import React from "react";
import { useEffect } from "react";
import "./App.css";
import TeamSection from "./components/TeamSection";
import Lenis from "@studio-freight/lenis";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8, // scroll delay duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth easing
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      <TeamSection></TeamSection>
    </>
  );
}

export default App;
