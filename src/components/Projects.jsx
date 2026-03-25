import img1 from "../assets/project exp1.jpg";
import img2 from "../assets/project exp2 2.jpg";
import img3 from "../assets/project exp3.jpg";
import img4 from "../assets/project exp4.jpg";
import img5 from "../assets/project exp5.jpg";
import img6 from "../assets/project exp6.jpg";
import "./Projects.css";
import { useState, useEffect } from "react";

const PROJECTS = [
  {
    title: "Martial Arts Webpage",
    img: img1,
    details: [
      "A responsive Martial Arts Website using HTML, CSS & JavaScript — showcasing disciplines, schedules, instructor profiles, and a training gallery.",
      "Custom AI Chatbot for real-time engagement: answers FAQs, assists with class bookings, and guides visitors through site content.",
      "Modern CSS gradients, animations & responsive layouts; JavaScript powers navigation, modal pop-ups, and the chatbot interface.",
    ],
  },
  {
    title: "Land Price Prediction (ML)",
    img: img2,
    details: [
      "Responsive prediction system with a dynamic HTML/CSS/JS form frontend for entering property details.",
      "ML backend trained on CSV datasets analyses land-value factors and returns accurate price predictions.",
      "Runs on a local PyCharm server; instant output after form submission.",
    ],
  },
  {
    title: "Thermodynamic Optimisation Platform",
    img: img3,
    details: [
      "Comprehensive brine-to-fluid heat-exchanger analyser with a React.js + HTML/CSS frontend for live thermal visualisations.",
      "Python + Django backend; MySQL for data storage, logging, and REST API endpoints consumed by the frontend.",
    ],
  },
  { title: "Zomoto", img: img4, details: ["This project Iam using Html,css,and design using figma to develop the website","A food delivery platform with real-time order tracking and restaurant listings.", "Features include real-time order status updates, restaurant search, and seamless payment integration."] },
  { title: "Personal Portfolio", img: img5, details: ["A personal portfolio website showcasing my skills and projects.", "Built with React and CSS.","more dynamic content and interactive elements "] },
  { title: "Task Management App", img: img6, details: ["This is a simple task management application. Im used skills are HTML, CSS, JavaScript, Reactjs, Nodejs, Express, MongoDB,","A task management application with a clean and intuitive interface.", "Features include task creation, editing, and deletion."] },
];

export default function Projects() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const fn = e => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, []);

  const proj = active !== null ? PROJECTS[active] : null;

  return (
    <div className="page-shell">
      <div className="projects-shell">
        <h2 className="projects-title">Projects</h2>

        <div className="proj-grid">
          {PROJECTS.map((p, i) => (
            <div
              key={i}
              className="proj-card"
              onClick={() => setActive(i)}
              role="button" tabIndex={0}
              onKeyDown={e => e.key === "Enter" && setActive(i)}
              aria-label={`Open ${p.title}`}
            >
              <h3>{p.title}</h3>
              <span className="proj-hint">Tap to explore →</span>
            </div>
          ))}
        </div>
      </div>

      {proj && (
        <div className="modal-backdrop" onClick={() => setActive(null)}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActive(null)} aria-label="Close">✕</button>
            <h3>{proj.title}</h3>
            <img src={proj.img} alt={proj.title} className="modal-img" />
            <div className="modal-details">
              {proj.details.map((d, i) => (
                <p key={i} className="detail-item">{d}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
