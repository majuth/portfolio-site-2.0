import React , {useContext, useEffect, useRef, useState} from "react";
import VanillaTilt from "vanilla-tilt";
import { Project as ProjectContext } from "../../data.ts"

function ProjectTile(project, animationEnabled) {
    const projectCard = React.useRef(null);

    console.log(project)

    useEffect(() => {
        VanillaTilt.init(projectCard.current, {
            max: 5,
            speed: 400,
            glare: true,
            "max-glare": 0.2,
            gyroscope: false,
        });

    }, [projectCard]);

    function renderTechIcons(techStack){
        return <div
          className={`
          techIcons w-1/2 h-full absolute left-24 top-0 sm:flex items-center hidden
        `}
        >
            <div className="flex flex-col pb-8">
                {techStack.map((currentTech, i) => (
                <div className={`${i % 2 === 0 && "ml-16"} mb-4`} key={currentTech}>
                    <img
                    src={`/projects/tech/${currentTech}.svg`}
                    alt={currentTech}
                    height={45}
                    objectFit="contain"
                    width={45}
                    />
                </div>
                ))}
            </div>
        </div>
    };

    function renderDescription(description) {
        return <h2
          className="text-lg z-10 tracking-wide font-medium"
          style={{ transform: "translateZ(0.8rem)" }}
        >
          {description}
        </h2>
    };

    function renderProjectName(name) {
        return <h1
          className="text-2xl sm:text-3xl z-10 pl-2"
          style={{ transform: "translateZ(3rem)" }}
        >
          {name}
        </h1>
    };

    function renderTopBottomGradient(topGradient) {
        return <>
          <div
            className="absolute top-0 left-0 w-full h-20"
            style={{
              background: `linear-gradient(180deg, ${topGradient} 0%, rgba(0,0,0,0) 100%)`,
            }}
          ></div>
          <div
            className="absolute bottom-0 left-0 w-full h-32"
            style={{
              background: `linear-gradient(0deg, ${topGradient} 10%, rgba(0,0,0,0) 100%)`,
            }}
          ></div>
        </>
    };
    
    function renderProjectImage (image, blurImage, name) {
        return <img
          placeholder="blur"
          blurDataURL={blurImage}
          src={image}
          alt={name}
          layout="fill"
          className={`ProjectImg z-0`}
        />
    };

    return(
        <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="link overflow-hidden rounded-3xl snap-start"
            style={{
                maxWidth: animationEnabled
                ? "calc(100vw - 2rem)"
                : "calc(100vw - 4rem)",
                flex: "1 0 auto",
                WebkitMaskImage: "-webkit-radial-gradient(white, black)",
            }}
        >
            <div
                ref={projectCard}
                className={`ProjectTile
                rounded-3xl relative p-6 flex-col flex justify-between max-w-full
                `}
                style={{
                background: `linear-gradient(90deg, ${project.gradient != undefined ? project.gradient[0]:null} 0%, ${project.gradient != undefined ? project.gradient[1]: null} 100%)`,
                }}
            >
                <img
                src= {process.env.PUBLIC_URL +"/images/project-bg.svg"}
                alt="Project"
                layout="fill"
                className="absolute w-full h-full top-0 left-0 opacity-20"
                />
                {renderProjectImage(project.image, project.blurImage, project.name)}
                {renderTopBottomGradient(project.gradient != undefined ? project.gradient[0]: null)}
                {renderProjectName(project.name)}
                {renderTechIcons(project.tech != undefined? project.tech : [])}
                {renderDescription(project.description)}
            </div>
        </a>
    );
}

export default ProjectTile;