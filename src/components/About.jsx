import "./About.css";
import React from "react";

export default function About() {
  return (
    <div className="page-shell">
      <div className="about-shell">
        <h2 className="about-title">About Me</h2>

        <div className="about-body" style={{ display: "flex", justifyContent: "center" }}>

          <div className="info-col">
            <div className="about-card">
              <h3>Who I Am</h3>
              <div className="card-line" />
             <p>A frontend developer who loves turning Figma designs into clean, responsive React apps. I hold an MCA and have spent the last year building real products across three internships, working with the full MERN stack. I care about code that's clean, UI that feels right, and shipping things I'm genuinely proud of. If you're looking for someone who brings both technical skill and design sensibility to the table — that's me.</p>
            </div>

            <div className="about-card">
              <h3>Interests</h3>
              <div className="card-line" />
              <p>Genuinely curious about the intersection of design and engineering — how good components make a whole product feel more human. I enjoy exploring the React ecosystem, experimenting with UI animations, and occasionally diving into machine learning just to remind myself the web isn't the only interesting problem space. I learn best by building — side projects, random ideas, new tools — if there's something to figure out, I'm in.</p>
            </div>

            <div className="about-card">
              <h3>Skills &amp; Tools</h3>
              <div className="card-line" />
              <ul>
               <li>HTML5, CSS3, JavaScript (ES6+)</li>
<li>React.js, Node.js, Express.js</li>
<li>MongoDB, Mongoose ODM</li>
<li>REST APIs, JWT Authentication</li>
<li>Figma, Adobe XD</li>
<li>Git & GitHub</li>
<li>Postman, VS Code</li>
<li>Python, Machine Learning (basics)</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
