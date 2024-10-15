import { gsap, Linear, ScrollTrigger } from "gsap/all";
import React, { useEffect, useState } from "react";
import headShot from "../../img/headshot.jpg";

function Description() {
    const descrpRef = React.useRef(null);
    const targetSection = React.useRef(null);
    const headShotRef = React.useRef(null);
    
    const [change, setChange] = useState(false);

    const isSmallScreen = document.body.clientWidth < 767;

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

    function initHeadshotAnimation(headShotRef, targetSection){
        const ScrollTriggerInstance = ScrollTrigger.create({
            trigger: descrpRef.current,
            start: "10% center",
            end: "80% center",
            pin: headShotRef.current,
            anticipatePin: 0
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

    useEffect(() =>{
        if(!isSmallScreen){
        const headShotScrollTriggerInstance = initHeadshotAnimation(
            headShotRef,
            targetSection
        );

        return headShotScrollTriggerInstance.kill;
        }
    }, [headShotRef, targetSection]);

    function renderDescription() {
        return <h1 ref={descrpRef} className="font-medium text-3xl sm:text-4xl md:text-6xl sm: text-center md:text-left">
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

    function renderHeadshot(){
        return <img src={headShot} className="headshot rounded-full md:w-3/4 w-full scale-125 sm:scale-100 flex" ref={headShotRef} style={{
                maxHeight: "200px", 
                maxWidth: "200px",
                display: isSmallScreen? "block" : "",
                marginRight: isSmallScreen? "auto" : "",
                marginLeft: isSmallScreen? "auto" : "",
                width: isSmallScreen? "50" : "",
                marginBottom: isSmallScreen? "5rem" : "",
                }} alt={"Majuth Kira Headshot"} width={100} height={100} />
    }

    return <section className="tall:pt-20 tall:pb-16 pt-40 pb-24 w-full relative select-none section-container inline-grid grid-cols-5" ref={targetSection} id="education"> 
        <section className="col-span-5 md:col-span-1">{renderHeadshot()}</section>
        <section className="col-span-5 md:col-span-4">{renderDescription()}</section>
    </section>;
}

export default Description;