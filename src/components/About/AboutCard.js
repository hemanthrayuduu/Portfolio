import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Hemanth Rayudu </span>
            from <span className="purple"> Hyderabad, India.</span>
            <br />
            I am currently pursuing my Master's in Information Systems at Northeastern University in Boston.
            <br />
            I have three years of experience as a Machine Learning Engineer, working on building intelligent systems and solutions.
            <br />
            <br />
            Apart from coding and machine learning, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Marathon Running
            </li>
            <li className="about-activity">
              <ImPointRight /> Biking
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Documentaries
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build Intelligent Systems that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Hemanth Rayudu</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
