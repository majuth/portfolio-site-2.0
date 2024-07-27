import { gsap, Linear, ScrollTrigger } from "gsap/all";
import React, { useEffect, useState } from "react";

function Quote() {
    const quoteRef = React.useRef(null);
    const targetSection = React.useRef(null);
    
    const [change, setChange] = useState(false);

    function initQuoteAnimation(quoteRef, targetSection) {
        const timeline = gsap.timeline({
            defaults: {ease: Linear.easeNone, duration: 2}
        });

        timeline
            .fromTo(quoteRef.current, {opacity: 0}, { opacity: 1, duration: 2 })
            .to(
                quoteRef.current.querySelector(".text-strong"),
                {backgroundPositionX: "100%", duration: 1,}
            )

            return ScrollTrigger.create({
            trigger: targetSection.current,
            start: "center bottom",
            end: "center center",
            scrub: 0,
            animation: timeline,
            onToggle: (self) => setChange(self.isActive)
        });
    }

    useEffect(() =>{
        const quoteScrollTriggerInstance = initQuoteAnimation(
            quoteRef,
            targetSection
        );

        return quoteScrollTriggerInstance.kill;
    }, [quoteRef, targetSection]);

    function renderQuote() {
        return <div className="tall:py-60 py-72 section-container">
        <h1
          ref={quoteRef}
          className={"font-medium text-4xl md:text-5xl text-center"}
        >
          I have a <span className="text-strong font-bold">vast</span> amount of skills and experience.
        </h1>
      </div>
    }

    return <section className="w-full relative select-none" ref={targetSection}>
        {renderQuote()}
    </section>
}

export default Quote;