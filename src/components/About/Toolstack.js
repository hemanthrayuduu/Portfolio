import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiMacos,
  SiGooglecolab,
  SiKaggle,
  SiGithub,
  SiLinux,
} from "react-icons/si";
import { FaRobot, FaDatabase, FaChartBar, FaBrain, FaLaptopCode } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Development Environment */}
      <Col xs={4} md={2} className="tech-icons" data-tech="VS Code">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tech="macOS">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tech="Linux">
        <SiLinux />
      </Col>
      
      {/* AI/ML Development Tools */}
  
      <Col xs={4} md={2} className="tech-icons" data-tech="Google Colab">
        <SiGooglecolab />
      </Col>
      
      {/* AI Application Building */}
      
      <Col xs={4} md={2} className="tech-icons" data-tech="Postman">
        <SiPostman />
      </Col>
      
      {/* ML Experiments & Data */}
    
      <Col xs={4} md={2} className="tech-icons" data-tech="Kaggle">
        <SiKaggle />
      </Col>
      
      {/* Collaboration & Version Control */}
      <Col xs={4} md={2} className="tech-icons" data-tech="GitHub">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tech="Slack">
        <SiSlack />
      </Col>
    </Row>
  );
}

export default Toolstack;
