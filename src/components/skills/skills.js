import { gsap, Linear, ScrollTrigger } from "gsap/all";
import patternL from "./pattern-l.svg"
import patternR from "./pattern-r.svg"

function Skills() {
    
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
    
    return <section className="relative"
    id="skills"
    >
        {renderBackgoundPatterns()}
        
    </section>
}

export default Skills;