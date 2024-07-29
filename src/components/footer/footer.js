import React from "react";
import { SOCIAL_LINKS } from "../../data.ts";
import footerCurve from "./footer-curve.svg"

function Footer() {
    function renderSocialLinks(){
        return (
            Object.keys(SOCIAL_LINKS).map((el, SOCIAL_LINK) => (
                <a
                    href={SOCIAL_LINKS[el]}
                    key={el}
                    className="link hover:opacity-80 duration-300 md:px-2 px-1"
                    rel="noreferrer"
                    target="_blank"
                >
                    <img src={process.env.PUBLIC_URL + `/images/socials/${el}.svg`} alt={el} width={40} height={40} />
                </a>
            ))
        );
    };

    function renderFooterContent(){
        return <>
            <h1 className="font-medium text-3xl md:text-4xl text-center">
            Connect with me on social media.
            </h1>
            <div className="flex mt-8">{renderSocialLinks()}</div>
            <div className="flex mt-8">
            <a
                className="outline-button mr-3"
                href= {process.env.PUBLIC_URL +"/Majuth_Resume.pdf"}
            >
                Resume
            </a>
            <a
                className="white-button ml-3"
                href="mailto:majuthkira@gmail.com"
            >
            Let's Talk
            </a>
            </div>
            <h2 className="text-center text-sm sm:text-base mt-8">
            Designed and Developed with ❤️ by Majuth
            </h2>
        </>
    }

    return  <footer
        className="w-full relative select-none bg-cover flex flex-col items-stretch"
        id="contact"
    >
        <img
        src={footerCurve}
        alt="Footer"
        className="w-full"
        loading="lazy"
        height={290}
        role="presentation"
        width={1440}
        />
        <div className="h-full w-full">
        <div className="section-container flex-col flex h-full justify-end z-10 items-center py-12">
            {renderFooterContent()}
        </div>
        </div>
    </footer>
}

export default Footer;