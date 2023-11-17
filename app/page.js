"use client"

import { useRef, useState } from "react";

export default function Home() {

  const [step, setStep] = useState(0);

  const landingRef = useRef(null);
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <div ref={landingRef}>

      </div>
      <div ref={aboutRef}>

      </div>
      <div ref={portfolioRef}>

      </div>
      <div ref={contactRef}>

      </div>
    </>
  )
}
