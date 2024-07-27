import { gsap, Linear, ScrollTrigger } from "gsap/all";
import React, { useEffect, useState } from "react";

function Question() {
    const questionRef = React.useRef(null);
    const targetSection = React.useRef(null);
    
    const [change, setChange] = useState(false);

    function initQuestionAnimation(questionRef, targetSection) {
        const timeline = gsap.timeline({
            defaults: {ease: Linear.easeNone}
        });

        timeline
            .fromTo(questionRef.current, {opacity: 0}, { opacity: 1, duration: 2 })
            .to(
                questionRef.current.querySelector(".text-strong"),
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
        const questionScrollTriggerInstance = initQuestionAnimation(
            questionRef,
            targetSection
        );

        return questionScrollTriggerInstance.kill;
    }, [questionRef, targetSection]);

    function initSlidingTextAnimation(targetSection) {
        const timeline = gsap.timeline({
            defaults: {ease: Linear.easeNone}
        });

        timeline
            .fromTo(
                targetSection.current.querySelector(".ui-left"),
                {xPercent: 0}, {xPercent: -150}, 0
            )
            .fromTo(
                targetSection.current.querySelector(".ui-right"),
                {xPercent: -150}, {xPercent: 0}, 0
            )
            

            return ScrollTrigger.create({
            trigger: targetSection.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0,
            animation: timeline
        });
    }

    useEffect(() =>{
        const slidingTextScrollTriggerInstance = initSlidingTextAnimation(
            targetSection
        );

        return slidingTextScrollTriggerInstance.kill;
    }, [targetSection]);

    function renderSlidingText(text, layoutClasses) {
        return <p className={`${layoutClasses} opacity-20 text-5xl md:text-7xl font-bold whitespace-nowrap`}>
        {Array(5)
          .fill(text)
          .reduce((str, el) => str.concat(el), "")}
      </p>
    }

    function renderQuestion() {
        return <h1
          ref={questionRef}
          className={"mt-6 md:mt-8 font-medium text-4xl md:text-5xl text-center"}
        >
          Interested in <span className="text-strong font-bold">Connecting</span>?
        </h1>
    }

    return <section className="w-full relative select-none tall:py-36 py-48 section-container flex flex-col" ref={targetSection}>
        {renderSlidingText(
            " Linkedin  Github  Instagram ",
            "ui-left"
        )}
        
        {renderQuestion()}

        {renderSlidingText(
            " Facebook  Twitter  Email",
            "mt-6 md:mt-8 ui-right"
        )}
    </section>
}

export default Question;