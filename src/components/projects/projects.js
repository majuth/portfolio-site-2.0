import React, {useEffect, useRef, useState} from "react";
import { gsap, Linear, ScrollTrigger } from "gsap/all";
import {PROJECTS as ProjectsList} from "../../data.ts";
import ProjectTile from "../common/project-tile";

function Projects() {
    const sectionTitleRef = React.useRef(null);
    const targetSection = React.useRef(null);

    const [willChange, setwillChange] = useState(false);

    function initRevealAnimation(targetSection){
        const revealTimeline = gsap.timeline({
            defaults: {ease: Linear.easeNone}
        });

        revealTimeline.fromTo(
            targetSection.current.querySelectorAll(".seq"),
            { opacity: 0 },
            { opacity: 1, duration: 0.5, stagger: 0.5 },
            "<"
        );

        const ScrollTriggerInstance = ScrollTrigger.create({
            trigger: targetSection.current,
            start: "top bottom",
            end: "bottom bottom",
            scrub: 0,
            animation: revealTimeline,
        });

        return [revealTimeline, ScrollTriggerInstance];
    }

    useEffect(() =>{
        const [revealTimelineInstance, initRevealTriggerInstance] = initRevealAnimation(targetSection);

        return initRevealTriggerInstance.kill;
    }, [targetSection]);


    function renderProjectTitle(){
        return <div
            className={`flex flex-col inner-container  ${
            willChange ? "will-change-transform" : ""
            }`}
            ref={sectionTitleRef}
        >
            <p className="uppercase tracking-widest text-gray-200 text-sm seq">PROJECTS</p>
            <h1 className="text-5xl text-4xl font-bold text-gradient w-fit seq mt-2">My Works</h1>
            <h2 className="text-2xl md:max-w-3xl w-full seq max-w-sm mt-2">
            I have contributed in over 10+ projects over various fields of development, including personal and school projects.
            </h2>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    }

    return <section
    ref={targetSection}
    className="w-full relative select-none section-container flex-col flex py-8 justify-center"
    id={"projects"}
    >
        {renderProjectTitle()}
        {ProjectsList.map((project) => (
        <ProjectTile
            project={project}
            key={project.name}
            animationEnabled={true}
        ></ProjectTile>
        ))}
        
        
    </section>
}

export default Projects;