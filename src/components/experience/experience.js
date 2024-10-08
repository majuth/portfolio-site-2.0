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

        //console.log(addNodeRefsToItems(timeline));
        const timelineSvg = addNodeRefsToItems(timeline).reduce(
          //fix svg rendering
          (svg, node) => {
            const { next, shouldDrawLine } = node;
            let lineY = y;
            let dotY = y + separation / 2;

            if (!next) {
              lineY = y - separation / 2;
            }

            if (!shouldDrawLine) {
              dotY = y;
            }

            if (shouldDrawLine) {
              svg = shouldDrawLine
                ? `${drawLine(lineY, index)}${svg}`
                : svg;
              y = y + separation;
              index++;
            }

            svg = svg.concat(drawDot(node, dotY));

            return svg;
          }, timelineStyle
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

    function drawDot(timelineNode, y){
      const dotString = getDotString(leftBranchX, y);
      const textString = addText(timelineNode, y);
  
      return `${textString}${dotString}`;
    }

    function addText(timelineNode, y){
      const { title, subtitle, size, image } = timelineNode;
      const offset = 10;
      const foreignObjectX = dotSize / 2 + 10 + offset;
      const foreignObjectY = y - dotSize / 2;
      // const foreignObjectWidth = svgWidth - (dotSize / 2 + 10 + offset);
      const foreignObjectWidth = "100%"
      const titleSizeClass = "text-6xl";

      const logoString = image
      ? `<img src='${process.env.PUBLIC_URL + image}' class='h-12 mb-2' loading='lazy' alt='${image}' />`
      : "";
      const subtitleString = subtitle
      ? `<p class='text-xl mt-2 text-gray-200 font-medium tracking-wide'>${subtitle}</p>`
      : "";

      return `<foreignObject x=${foreignObjectX} y=${foreignObjectY} width=${foreignObjectWidth} 
        height=${separation}>${logoString}<p class='${titleSizeClass}'>${title}</p>${subtitleString}</foreignObject>`;
  
    }

    function drawLine(y, i){
      const lineY = Math.abs(y + separation);

      const lineX = leftBranchX;
      
      let str = `<line class='str' x1=${lineX} y1=${y} x2=${lineX} y2=${lineY} stroke=${svgColor} /><line class='str line-${i}' x1=${lineX} y1=${y} x2=${lineX} y2=${lineY} stroke=${animColor} />`;

      return str;
    }

    function addLineSvgAnimation(timeline, duration, index){
      const startTime = `start+=${duration * index}`;

      timeline.fromTo(
        svgContainer.current.querySelectorAll(`.line-${index + 1}`),
        {scaleY: 0},
        {scaleY: 1, duration },
        startTime
      );
  
      return timeline;
    }

    function animateTimeline(timeline, duration){
      let index = 0;

      addNodeRefsToItems(TIMELINE).forEach((item) => {
        if (item.shouldDrawLine) {
          addLineSvgAnimation(timeline, duration, index);
          index++;
        }
      });
    }

    function initScrollTrigger() {
      const timeline = gsap
      .timeline({ defaults: { ease: Linear.easeNone, duration: 0.44 } })
      .addLabel("start");

      let duration = 3;
      let trigger = svgContainer.current;
      let start = "top center";
      let end = `+=${svgLength}`;
      let additionalConfig = {};

      ScrollTrigger.create({
        ...additionalConfig,
        trigger,
        start,
        end,
        scrub: 0,
        animation: timeline,
      });
      return { timeline, duration };
    }

    useEffect(() =>{
      setTimelineSvg(svgContainer, timelineSvg)

      const { timeline, duration } = initScrollTrigger();

      animateTimeline(timeline, duration);
    }, [timelineSvg, svgContainer]);

    function setTimelineSvg(){
      const containerWidth = svgContainer.current.clientWidth;
      setSvgWidth(containerWidth);

      const resultSvgString = generateTimelineSvg(TIMELINE);
      timelineSvg.current.innerHTML = resultSvgString;
    }

    function renderSVG(){
        return <svg
        width={"100%"}
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
          <div className="line-svg" ref={svgContainer}>
            {renderSVG()}
          </div>
        </div>
    </section>
}

export default Experience;