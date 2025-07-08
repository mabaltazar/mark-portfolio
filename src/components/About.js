import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const aboutRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      aboutRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section
      id="about"
      ref={aboutRef}
      className="py-20 px-6 max-w-4xl mx-auto text-center text-slate-200"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
      <p className="text-lg md:text-xl leading-relaxed text-slate-400">
        I’m Mark, a data analyst with a passion for clean queries, structured storytelling, and transforming raw data into clear insights.
        <br />
        <br />
        I'm currently exploring front-end development to showcase my data work through beautiful and interactive portfolios. This site? It’s my lab coat and canvas.
      </p>
    </section>
  );
}

export default About;
