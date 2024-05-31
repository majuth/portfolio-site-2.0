import React from "react";
import { TYPEDTITLE, SOCIAL_LINKS } from "../../data.ts";
import Typed from "typed.js";
import BackgroundImage from "./backgroundImage.js";

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

    function renderSocialLinks(){
        return (
            Object.keys(SOCIAL_LINKS).map((el, SOCIAL_LINK) => (
                <a
                    href={SOCIAL_LINKS[el]}
                    key={el}
                    className="link hover:opacity-80 duration-300 md:mr-4 mr-2"
                    rel="noreferrer"
                    target="_blank"
                >
                    <img src={`/img/socials/${el}.svg`} alt={el} width={40} height={40} />
                </a>
            ))
        );
    }

    function renderBackgound(){
        return(
            <div className="absolute hero-bg right-0 md:bottom-0 bottom-8 -z-10 md:w-3/4 w-full scale-125 sm:scale-100 flex items-end" style={{maxHeight: "650px"}}>
                <BackgroundImage />
            </div>
        );
    }

    return <section id="home" className="w-full flex md:items-center py-8 section-container min-h-screen relative mb-24">
    <div className="font-medium flex flex-col pt-32 md:pt-0 select-none">
        <div className="md:mb-4 mb-2">
            <h2 className="text-4xl seq"> Hello 👋🏻 </h2>
            <h1 className="text-3xl seq"> I am Majuth Kira </h1>
        </div>
        <p className="mb-4 text-xl sm:text-2xl md:text-4xl seq">
            <span ref={typedTitle} />
        </p>
        <div className="flex seq">{renderSocialLinks()}</div>
    </div>
    {renderBackgound()}
    </section> 

}

export default Title;