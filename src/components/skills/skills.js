import React, {useEffect, useState} from "react";
import { gsap, Linear, ScrollTrigger } from "gsap/all";
import {SKILLS} from "../../data.ts";
import patternL from "./pattern-l.svg"
import patternR from "./pattern-r.svg"

function Skills() {
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
            trigger: targetSection.current.querySelector(".skills-wrapper"),
            start: "100px bottom",
            end: "center center",
            scrub: 0,
            animation: revealTimeline,
        });

        return [revealTimeline, ScrollTriggerInstance];
    }

    useEffect(() =>{
        const [revealTimelineInstance, initRevealTriggerInstance] = initRevealAnimation(targetSection);

        return initRevealTriggerInstance.kill;
    }, [targetSection]);


    function renderBackgoundPatterns(){
       return <>
            <div className="absolute right-0 -bottom-1/3 w-1/5 max-w-xs md:flex hidden justify-end">
                <img
                src={patternR}
                loading="lazy"
                height={700}
                width={320}
                alt="pattern"
                />
            </div>
            <div className="absolute left-0 -bottom-3.5 w-1/12 max-w-xs md:block hidden">
                <img
                src={patternL}
                loading="lazy"
                height={335}
                width={140}
                alt="pattern"
                />
            </div>
        </>
    }

    function renderSectionTitle(){
        return <div className="flex flex-col">
            <p className="section-title-sm seq">SKILLS</p>
            <h1 className="section-heading seq mt-2">My Skills</h1>
            <h2 className="text-2xl md:max-w-2xl w-full seq mt-2">
                I like to take part in projects that help expand my knowledge base of
                various languages and technologies.{" "}
            </h2>
        </div>
    }

    function renderSkillColumn(title, skills){
        return <>
        <h3 className="section-title-sm mb-4 seq">{title}</h3>
        <div
          className={`flex flex-wrap seq ${
            willChange ? "will-change-opacity" : ""
          }`}
        >
          {skills.map((skill) => (
            <img
              key={skill}
              src={process.env.PUBLIC_URL + `/images/skills/${skill}.svg`}
              alt={skill}
              width={76}
              height={76}
              className="skill"
            />
          ))}
        </div>
      </>
    }
    
    return <section className="relative"
    >
        {renderBackgoundPatterns()}
        <div
            className="w-full relative select-none mb-24 section-container py-12 flex flex-col justify-center"
            id="skills"
            ref={targetSection}
        >
            <div className="flex flex-col skills-wrapper">
             {renderSectionTitle()}
            <div className="mt-10">
                {renderSkillColumn("PROGRAMMING LANGUAGES", SKILLS.programmingLanguages)}
            </div>
            <div className="flex flex-wrap mt-10">
                <div className="mr-6 mb-6">
                {renderSkillColumn(
                    "FRAMEWORKS DATABASES",
                    SKILLS.frameworksDatabases
                )}
                </div>
                <div>{renderSkillColumn("TOOLS", SKILLS.tools)}</div>
            </div>
            </div>
        </div>
    </section>
}

export default Skills;