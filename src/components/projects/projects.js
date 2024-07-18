import React, {useEffect, useState} from "react";
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

    function initProjectsAnimation(targetSection, sectionTitleRef){
        const timeline = gsap.timeline({
            defaults: { ease: Linear.easeNone } 
        });
        
        const sidePadding = document.body.clientWidth - targetSection.current.querySelector(".inner-container").clientWidth;
        const elementWidth = sidePadding + targetSection.current.querySelector(".project-wrapper").clientWidth;
        targetSection.current.style.width = `${elementWidth}px`;
    
        const width = window.innerWidth - elementWidth;
        const duration = `${(elementWidth / window.innerHeight) * 100}%`;
        timeline
            .to(targetSection.current, { x: width })
            .to(sectionTitleRef.current, { x: -width }, "<div");

        const ScrollTriggerInstance = ScrollTrigger.create({
            trigger: targetSection.current,
            start: "top top",
            end: duration,
            scrub: 0,
            pin: true,
            animation: timeline,
            pinSpacing: "margin",
            onToggle: (self) => setwillChange(self.isActive),
        });

    return [timeline, ScrollTriggerInstance];
    }

    useEffect(() =>{
        const [revealTimelineInstance, initRevealTriggerInstance] = initRevealAnimation(targetSection);

        return initRevealTriggerInstance.kill;
    }, [targetSection]);

    useEffect(() =>{
        const [projectsTimeline, projectsScrollTriggerInstance] = initProjectsAnimation(targetSection, sectionTitleRef);

        return projectsScrollTriggerInstance.kill;
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
        </div>
    }

    function renderProjectTiles(){
        return ProjectsList.map((project) => (
            <ProjectTile
                name={project.name}
                image={project.image}
                key={project.name}
                description={project.description}
                gradient={project.gradient}
                url={project.url}
                tech={project.tech}
                animationEnabled={true}
            ></ProjectTile>
        ))
    }

    return <section
    ref={targetSection}
    className="w-full relative select-none section-container flex-col flex py-16 justify-center"
    id={"projects"}
    >
        {renderProjectTitle()}
        <div className="tall:mt-12 mt-6 grid grid-flow-col auto-cols-max md:gap-10 gap-6 project-wrapper w-fit seq snap-x scroll-pl-6 snap-mandatory">
            {renderProjectTiles()}
        </div>
    </section>
}

export default Projects;