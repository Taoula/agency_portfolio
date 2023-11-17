"use client"

import { useEffect, useRef, useState } from "react";
import debounce from "lodash.debounce"

export default function Home() {

  const [step, setStep] = useState(0);

  const canIncrement = useRef(true);

  const landingRef = useRef(null);
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const resetIncrement = debounce(() => {
      canIncrement.current = true;
    }, 2000);

    const handleScroll = (event) => {
      if (canIncrement.current) {
        setStep(prevStep => prevStep + 1);
        canIncrement.current = false;
        resetIncrement();
      }
    };

    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
      resetIncrement.cancel();
    };
  }, []);

  useEffect(() => {
    //scrollTo new step when it changes.
  }, [step])

  return (
    <>
      <p>{step}</p>
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
