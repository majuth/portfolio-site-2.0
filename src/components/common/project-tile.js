import React , {useEffect} from "react";
import VanillaTilt from "vanilla-tilt";

function ProjectTile(props) {
    const projectCard = React.useRef(null);

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
                    src={process.env.PUBLIC_URL + `/images/projects/tech/${currentTech}.svg`}
                    alt={currentTech}
                    height={45}
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
    
    function renderProjectImage (image, name) {
        return <span className="projectSpan">
        <img
          src={process.env.PUBLIC_URL + image}
          alt={name}
          layout="fill"
          className={`ProjectImg z-0`}
        />
        </span>
    };

    return(
        <a
            href={props.url}
            target="_blank"
            rel="noreferrer"
            className="link overflow-hidden rounded-3xl snap-start"
            style={{
                maxWidth: props.animationEnabled
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
                background: `linear-gradient(90deg, ${props.gradient[0]} 0%, ${props.gradient[1]} 100%)`,
                }}
            >
                <img
                src= {process.env.PUBLIC_URL +"/images/project-bg.svg"}
                alt="Project"
                layout="fill"
                className="absolute w-full h-full top-0 left-0 opacity-20"
                />
                {renderProjectImage(props.image, props.name)}
                {renderTopBottomGradient(props.gradient[0])}
                {renderProjectName(props.name)}
                {renderTechIcons(props.tech)}
                {renderDescription(props.description)}
            </div>
        </a>
    );
}

export default ProjectTile;