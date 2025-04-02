import React from "react";
import { Col, Row } from "react-bootstrap";
import { VscAzure } from "react-icons/vsc";
import {
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava
} from "react-icons/di";
import {
  SiRedis,
  SiPostgresql,
  SiTableau,
  SiTypescript,
  SiPytorch,
  SiTensorflow,
  SiDocker,
  SiFastapi,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiOpenai,
  SiJupyter,
  SiKeras,
  SiFlask,
  SiGooglecloud,
  SiAmazonaws,
  SiDjango,
  SiLangchain
} from "react-icons/si";
import { FaBrain, FaRobot } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Primary AI/ML Skills */}
      <Col xs={4} md={2} className="tech-icons" data-tech="Python">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tech="PyTorch">
        <SiPytorch />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tech="TensorFlow">
        <SiTensorflow />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tech="OpenAI">
        <SiOpenai />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons" data-tech="Langchain">
        <SiLangchain />
      </Col> */}


      {/* Data Science */}
      <Col xs={4} md={2} className="tech-icons" data-tech="NumPy">
        <SiNumpy />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tech="Pandas">
        <SiPandas />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tech="Scikit-learn">
        <SiScikitlearn />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tech="Jupyter">
        <SiJupyter />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tech="Keras">
        <SiKeras />
      </Col>
      
      {/* Web/API Development */}
      <Col xs={4} md={2} className="tech-icons" data-tech="FastAPI">
        <SiFastapi />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tech="Django">
        <SiDjango />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tech="Node.js">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tech="TypeScript">
        <SiTypescript />
      </Col>
      
      {/* Cloud & DevOps */}
      <Col xs={4} md={2} className="tech-icons" data-tech="AWS">
        <SiAmazonaws />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tech="Azure">
        <VscAzure />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tech="Google Cloud">
        <SiGooglecloud />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tech="Docker">
        <SiDocker />
      </Col>
      
      {/* Databases */}
      <Col xs={4} md={2} className="tech-icons" data-tech="PostgreSQL">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tech="MongoDB">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tech="Redis">
        <SiRedis />
      </Col>
      
      {/* Tools & Other */}
      <Col xs={4} md={2} className="tech-icons" data-tech="Git">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tech="Tableau">
        <SiTableau />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tech="Java">
        <DiJava />
      </Col>
    </Row>
  );
}

export default Techstack;
