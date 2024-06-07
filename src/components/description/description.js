import { gsap, Linear, ScrollTrigger } from "gsap/all";
import React, { useEffect, useState } from "react";

function Description() {
    const descrpRef = React.useRef(null);
    const targetSection = React.useRef(null);
    
    const [change, setChange] = useState(false);

    function initDescrpAnimation(descrpRef, targetSection) {
        const timeline = gsap.timeline({
            defaults: {ease: Linear.easeNone, duration: 0.1}
        });

        timeline
            .fromTo(
                descrpRef.current.querySelector(".descrp-1"),
                { opacity: 0.2 },
                { opacity: 1 }
            )
            .to(descrpRef.current.querySelector(".descrp-1"), {
                opacity: 0.2,
                delay: 0.5,
            })
            .fromTo(
                descrpRef.current.querySelector(".descrp-2"),
                { opacity: 0.2 },
                { opacity: 1 },
                "<"
            )
            .to(descrpRef.current.querySelector(".descrp-2"), {
                opacity: 0.2,
                delay: 1,
            });

        const ScrollTriggerInstance = ScrollTrigger.create({
            trigger: targetSection.current,
            start: "center 80%",
            end: "center top",
            scrub: 0,
            animation: timeline,
            onToggle: (self) => setChange(self.isActive)
        });

        return ScrollTriggerInstance;
    }

    useEffect(() =>{
        const descrpScrollTriggerInstance = initDescrpAnimation(
            descrpRef,
            targetSection
        );

        return descrpScrollTriggerInstance.kill;
    }, [descrpRef, targetSection]);

    function renderDescription() {
        return <h1 ref={descrpRef} className="font-medium text-3xl sm:text-4xl md:text-6xl">
            <span 
                className={`descrp-1 leading-tight`}
            >
            I am a recent grad from Toronto Metropolitan University's Computer Science Co-op program.{" "}
            </span>
            <span
                className={`descrp-2 leading-tight`}
            >
             I am currently interested in learning about the many specifications in the tech industry!
            </span>
        </h1>
    }

    return <section className="tall:pt-20 tall:pb-16 pt-40 pb-24 w-full relative select-none section-container" ref={targetSection}> 
        {renderDescription()}
    </section>;
}

export default Description;