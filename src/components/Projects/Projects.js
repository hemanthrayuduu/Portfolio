import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import spotify from "../../Assets/Projects/spotify.png";
import sql from "../../Assets/Projects/sql.png";
import face from "../../Assets/Projects/facedetectflow.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spotify}
              isBlog={false}
              title="Spotify Podcast Recommendation System"
              description="Spotify podcast recommendation system built with Python, React, and Claude 3.7. Analyzes user listening habits to provide personalized podcast suggestions through an intuitive, Spotify-inspired interface. Users can input their preferences and receive tailored recommendations with detailed podcast information and explanations of why each podcast matches their profile."
              ghLink="https://github.com/hemanthrayuduu/spotify_podcast"
              demoLink="https://spotify-podcast-recommender.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sql}
              isBlog={false}
              title="SQL-LLM Comparison Tool"
              description="A project comparing different LLM models' SQL generation capabilities. Fine-tuned GPT-3.5 Turbo and GPT-4o Mini models using LoRA technique with Gretel AI's Text-to-SQL dataset. Features interactive metrics visualization, real-time SQL quality evaluation, and side-by-side comparison of base vs. fine-tuned models. Built with React, Python, and integrates with OpenAI's API for comprehensive performance analysis."
              ghLink="https://github.com/hemanthrayuduu/llm-comparison-sql-metrics"
              demoLink="https://llm-comparison-sql-metrics.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={face}
              isBlog={false}
              title="Face Detection with Deep Learning"
              description="Advanced face detection system implemented using deep learning techniques including Convolutional Neural Networks (CNNs) and transfer learning. Capable of accurately detecting and localizing faces in images with varying lighting conditions, orientations, and occlusions. Utilizes computer vision libraries and optimized model architectures to achieve high detection accuracy with reasonable computational requirements."
              ghLink="https://github.com/hemanthrayuduu/Face-Detection-with-Deep-Learning"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/hemanthrayuduu/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/hemanthrayuduu/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/hemanthrayuduu/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/hemanthrayuduu/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
