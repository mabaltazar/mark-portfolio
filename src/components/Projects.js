import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const projectsRef = useRef();

  useEffect(() => {
    const el = projectsRef.current;
    gsap.fromTo(
      el.querySelectorAll(".project-card"),
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section id="projects" ref={projectsRef} className="py-20 px-6 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Project 1 */}
        <div className="project-card bg-slate-800 p-6 rounded-xl shadow-md hover:shadow-xl transition">
          {/* Card content */}
          <h3 className="text-xl font-semibold text-emerald-400 mb-2">🧹 SQL Data Cleaning</h3>
          <p className="text-slate-300">
            Cleaned messy retail datasets using CTEs, window functions, and CASE logic to prepare for dashboarding.
          </p>
        </div>
        {/* Repeat for other cards */}
        {/* Project 2 */}
        <div className="project-card bg-slate-800 p-6 rounded-xl shadow-md hover:shadow-xl transition">
          {/* Card content */}
          <h3 className="text-xl font-semibold text-emerald-400 mb-2">📊 Social Trends Dashboard</h3>
          <p className="text-slate-300">
            Built an interactive Tableau dashboard exploring Gen Z behavior on TikTok using public survey data.
          </p>
        </div>
        {/* Repeat for other cards */}
        {/* Project 3 */}
        <div className="project-card bg-slate-800 p-6 rounded-xl shadow-md hover:shadow-xl transition">
          {/* Card content */}
          <h3 className="text-xl font-semibold text-emerald-400 mb-2">📘 GitHub Write-up: Power BI</h3>
          <p className="text-slate-300">
            Wrote a blog-style README explaining a Power BI report—from raw Excel to DAX measures and visuals.
          </p>
        </div>        
      </div>
    </section>
  );
}

export default Projects;
