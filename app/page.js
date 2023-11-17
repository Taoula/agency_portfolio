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
        if (event.deltaY > 0) {
          setStep(prevStep => prevStep + 1);
        } else if (event.deltaY < 0) {
          setStep(prevStep => Math.max(prevStep - 1, 0));
        }
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
      <p className="text-6xl font-bold ml-5 mt-5">{step}</p>
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
