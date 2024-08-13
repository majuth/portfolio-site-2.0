import React, {useEffect, useState} from "react";
import { gsap, Linear, ScrollTrigger } from "gsap/all";

function Experience() {
    function renderSectionTitle(){
        return <div className="flex flex-col">
            <p className="section-title-sm seq">WORK</p>
            <h1 className="section-heading seq mt-2">Experience</h1>
            <h2 className="text-2xl md:max-w-2xl w-full seq mt-2">
                A quick recap of where I have worked
            </h2>
        </div>
    }

    return <section className="section-container w-full relative select-none min-h-screen section-container py-8 flex flex-col justify-center"
        id="experience"
    >
        {renderSectionTitle()}
        <div className="gap-4 mt-20">
            {/* {renderSVG()} */}
        </div>
    </section>
}

export default Experience;