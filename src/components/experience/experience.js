import React, {useEffect, useState} from "react";
import { gsap, Linear, ScrollTrigger } from "gsap/all";
import {TIMELINE, ItemSize, TimelineNode} from "../../data.ts";

function Experience() {
    const svgColor = "#9CA3AF";
    const animColor = "#FCD34D";
    const separation = 450;
    const strokeWidth = 2;
    const leftBranchX = 13;
    const curveLength = 150;
    const dotSize = 26;

    const [svgWidth, setSvgWidth] = useState(400);

    const svgCheckpointItems = TIMELINE.filter(
        (item) => item.shouldDrawLine === true
      );
    const svgLength = svgCheckpointItems?.length * separation;
    const timelineSvg = React.useRef(null);
    const svgContainer = React.useRef(null);

    function addNodeRefsToItems(timeline){
        return timeline.map((node, idx) => ({
            ...node,
            next: timeline[idx + 1],
            prev: timeline[idx - 1],
          }));
    }

    function generateTimelineSvg(timeline){
        let index = 1;
        let y = dotSize / 2;
        const timelineStyle = `<style>.str, .dot{stroke-width: ${strokeWidth}px}.anim-branch{stroke-dasharray: 186}</style>`;

        timelineSvg = addNodeRefsToItems(timeline).reduce(
            (svg, node) => {
              const { type, next } = node;
              let lineY = y;
              let dotY = y + separation / 2;
            },
            timelineStyle
          );
      
          return timelineSvg;
    }

    function getDotString(x, y){
        return `<rect class='dot' width=${dotSize} height=${dotSize} fill='#111827' x=${
            x - dotSize / 2
          } y=${
            y - dotSize / 2
          } ></rect><circle cx=${x} cy=${y} r='7' stroke=${svgColor} class='dot' ></circle>`;
    }

    function renderSVG(){
        return <svg
        width={svgWidth}
        height={svgLength}
        viewBox={`0 0 ${svgWidth} ${svgLength}`}
        fill="none"
        ref={timelineSvg}
      ></svg>
    }
    
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
            {renderSVG()}
        </div>
    </section>
}

export default Experience;