import React from "react";
import { TYPEDTITLE } from "../../data.ts";
import Typed from "typed.js";

function Title() {
    const typedTitle = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(typedTitle.current, {
            strings: TYPEDTITLE,
            typeSpeed: 50,
            backSpeed: 50,
            backDelay: 8000,
            loop: true,
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);

    return <section id="home" className="w-full flex md:items-center py-8 section-container min-h-screen relative mb-24">
    <div className="font-medium flex flex-col pt-32 md:pt-0 select-none">
        <div className="md:mb-4 mb-2">
            <h2 className="text-4xl seq"> Hello 👋🏻 </h2>
            <h1 className="text-3xl seq"> I am Majuth Kira </h1>
        </div>
        <p className="mb-4 text-xl sm:text-2xl md:text-4xl seq">
            <span ref={typedTitle} />
        </p>
        <div className="flex seq">socials</div>
    </div>
    </section>; 

}

export default Title;