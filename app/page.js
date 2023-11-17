"use client";

import { useEffect, useRef, useState } from "react";
import Tracker from "./components/Tracker";
export default function Home() {
  const [step, setStep] = useState(0);

  const scrollHandled = useRef(false);
  const scrollTimeout = useRef(null);

  const landingRef = useRef(null);
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  const pageRefs = [landingRef, aboutRef, portfolioRef, contactRef];

  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault(); // Prevent actual scrolling
      if (!scrollHandled.current) {
        if (event.deltaY > 0) {
          setStep((prevStep) => Math.min(prevStep + 1, pageRefs.length - 1));
        } else if (event.deltaY < 0) {
          setStep((prevStep) => Math.max(prevStep - 1, 0));
        }
        scrollHandled.current = true;

        // Clear existing timeout
        if (scrollTimeout.current) {
          clearTimeout(scrollTimeout.current);
        }

        // Reset scrollHandled after a delay
        scrollTimeout.current = setTimeout(() => {
          scrollHandled.current = false;
        }, 1000); // 500ms delay to reset
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  useEffect(() => {
    // Get top position relative to the document
    const left = pageRefs[step].current.offsetLeft;
    window.scrollTo({ left, behavior: "smooth" });
  }, [step]);

  return (
    <>
      <div className="relative">
        <div className="fixed left-1/2 bottom-16 transform -translate-x-1/2">
          <Tracker steps={pageRefs} currentStep={step} setStep={setStep} />
        </div>
        <p className="text-6xl font-bold fixed">{step}</p>
        <div className="flex">
          <div ref={landingRef}>
            <div className="h-screen w-screen bg-white"></div>
          </div>
          <div ref={aboutRef}>
            <div className="h-screen w-screen bg-red-600/20"></div>
          </div>
          <div ref={portfolioRef}>
            <div className="h-screen w-screen bg-yello-600/20"></div>
          </div>
          <div ref={contactRef}>
            <div className="h-screen w-screen bg-red-100"></div>
          </div>
        </div>
      </div>
    </>
  );
}
