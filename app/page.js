"use client"

import { useEffect, useRef, useState } from "react";
import FramerShell from "./FramerShell";
export default function Home() {

  const [step, setStep] = useState(0);

  const scrollHandled = useRef(false);
  const scrollTimeout = useRef(null);

  const landingRef = useRef(null);
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  const pageRefs = [landingRef, aboutRef, portfolioRef, contactRef]

  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault(); // Prevent actual scrolling
      if (!scrollHandled.current) {
        if (event.deltaY > 0) {
          setStep(prevStep => Math.min(prevStep + 1, pageRefs.length - 1));
        } else if (event.deltaY < 0) {
          setStep(prevStep => Math.max(prevStep - 1, 0));
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

    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  useEffect(() => {
    // Get top position relative to the document
    const left = pageRefs[step].current.offsetLeft;
    window.scrollTo({ left, behavior: 'smooth' });
  }, [step]);

  return (
    <>
      <div className="relative">
        <p className="text-6xl font-bold fixed">{step}</p>
        <div className="flex">
          <div ref={landingRef}>
            <div className="h-screen w-screen bg-blue-100 flex flex-col justify-center items-center">
              <FramerShell direction="down">
                <p className="text-5xl font-bold text-green-950">Down</p>
              </FramerShell>
            </div>
          </div>
          <div ref={aboutRef}>
            <div className="h-screen w-screen bg-purple-100 flex flex-col justify-center items-center">
              <FramerShell direction="up">
                <p className="text-5xl font-bold text-green-950">Up</p>
              </FramerShell>
            </div>
          </div>
          <div ref={portfolioRef}>
            <div className="h-screen w-screen bg-orange-100 flex flex-col justify-center items-center">
              <FramerShell direction="left">
                <p className="text-5xl font-bold text-green-950">Left</p>
              </FramerShell>
            </div>
          </div>
          <div ref={contactRef}>
            <div className="h-screen w-screen bg-red-100 flex flex-col justify-center items-center">
              <FramerShell direction="right">
                <p className="text-5xl font-bold text-green-950">Right</p>
              </FramerShell>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
