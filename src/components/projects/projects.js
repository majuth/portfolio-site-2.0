import React, {useRef, useState} from "react";

function Project() {
    const sectionTitleRef = React.useRef(null);
    const targetSection = React.useRef(null);

    const [willChange, setwillChange] = useState(false);

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

    return <section
    ref={targetSection}
    className="w-full relative select-none section-container flex-col flex py-8 justify-center"
    >
        {renderProjectTitle()}
    </section>
}

export default Project;