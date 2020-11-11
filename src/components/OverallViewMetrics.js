import React from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/css/bootstrap.min.css";
import BurnDownChart from "./Diagrams/BurnDownDiagram";
import DoubleCircleDiagram from "./Diagrams/DoubleCircleDiagram";

function OverallViewMetrics() {
  const borderWidth = window.innerWidth;
  const borderHeight = window.innerHeight;

  return (
    <div className="textAndGraphBindingBox">
      <Accordion >
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            <a href="/QualityView">Quality 85%</a>
          </Accordion.Toggle>

          <Accordion.Collapse eventKey="0">
            <div>
              <a href={"/QualityView"}>
                <p>* Defects/Bugs 123</p>
              </a>
              <a href={"/QualityView"}>
                <p>* Average lead-time of defects 32</p>
              </a>
              <a href={"/QualityView"}>
                <p>* Effects/criticality 12</p>
              </a>
              <a href={"/QualityView"}>
                <p>* Performed tests 324</p>
              </a>
              <a href={"/QualityView"}>
                <p>* Defects/discovery phase 267</p>
              </a>
              <a href={"/QualityView"}>
                <p>* Automated operations 65</p>
              </a>
            </div>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            TTM 92%
          </Accordion.Toggle>

          <Accordion.Collapse eventKey="1">
            <div>
              <p>* Defects/Bugs 123</p>
              <p>* Average lead-time of defects 32</p>
              <p>* Effects/criticality 12</p>
              <p>* Performed tests 324</p>
              <p>* Defects/discovery phase 267</p>
              <p>* Automated operations 65</p>
            </div>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="2">
            Production 88%
          </Accordion.Toggle>

          <Accordion.Collapse eventKey="2">
            <div>
              <p>* Defects/Bugs 123</p>
              <p>* Average lead-time of defects 32</p>
              <p>* Effects/criticality 12</p>
              <p>* Performed tests 324</p>
              <p>* Defects/discovery phase 267</p>
              <p>* Automated operations 65</p>
            </div>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="3">
            Efficiency 78%
          </Accordion.Toggle>

          <Accordion.Collapse eventKey="3">
            <div>
              <p>* Defects/Bugs 123</p>
              <p>* Average lead-time of defects 32</p>
              <p>* Effects/criticality 12</p>
              <p>* Performed tests 324</p>
              <p>* Defects/discovery phase 267</p>
              <p>* Automated operations 65</p>
            </div>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="4">
            CSI 68%
          </Accordion.Toggle>

          <Accordion.Collapse eventKey="4">
            <div>
              <p>* Defects/Bugs 123</p>
              <p>* Average lead-time of defects 32</p>
              <p>* Effects/criticality 12</p>
              <p>* Performed tests 324</p>
              <p>* Defects/discovery phase 267</p>
              <p>* Automated operations 65</p>
            </div>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="5">
            ESI 91%
          </Accordion.Toggle>

          <Accordion.Collapse eventKey="5">
            <div>
              <p>* Defects/Bugs 123</p>
              <p>* Average lead-time of defects 32</p>
              <p>* Effects/criticality 12</p>
              <p>* Performed tests 324</p>
              <p>* Defects/discovery phase 267</p>
              <p>* Automated operations 65</p>
            </div>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="6">
            C1 85%
          </Accordion.Toggle>

          <Accordion.Collapse eventKey="6">
            <div>
              <p>* Defects/Bugs 123</p>
              <p>* Average lead-time of defects 32</p>
              <p>* Effects/criticality 12</p>
              <p>* Performed tests 324</p>
              <p>* Defects/discovery phase 267</p>
              <p>* Automated operations 65</p>
            </div>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}

export default OverallViewMetrics;
