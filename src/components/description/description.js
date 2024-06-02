import { gsap, Linear, ScrollTrigger } from "gsap/all";
import React from "react";

function Description() {
    const targetSection = React.useRef(null);
    const descrpRef = React.useRef(null);

    function renderDescription() {
        return <h1 ref={descrpRef} className="font-medium text-3xl sm:text-4xl md:text-6xl">
            <span>
            I am a recent grad from Toronto Metropolitan University's Computer Science Co-op program.{" "}
            </span>
            <span>
             I am currently interested in learning about the many specifications in the tech industry!
            </span>
        </h1>
    }

    return <section className="tall:pt-20 tall:pb-16 pt-40 pb-24 w-full relative select-none section-container" ref={targetSection}> 
        {renderDescription()}
    </section>;
}

export default Description;