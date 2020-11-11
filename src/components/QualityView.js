import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { Switch, Route, useParams, useHistory } from "react-router";
import logo from '../assets/images/Logo.png'

import DoubleCircleDiagram from "./Diagrams/DoubleCircleDiagram";

import "bootstrap/dist/css/bootstrap.min.css";

function QualityView() {
  let history = useHistory();
  console.log(history);

  return (
    <div>
      <iframe
        id="overall"
        title="overall"
        style={{ width: "100%", height: "100%" }}
      ></iframe>
      <Container className="">
        <Row
          xl={{ cols: 12 }}
          lg={{ cols: 12 }}
          md={{ cols: 12 }}
          sm={{ cols: 12 }}
          xs={{ cols: 12 }}
          style={{ paddingTop: 16 }}
        >
          <Col
            lg={{ span: 2 }}
            md={{ span: 2 }}
            sm={{ span: 2 }}
            xs={{ span: 2 }}
          >
            <FontAwesomeIcon
              icon={faTimesCircle}
              size="3x"
              onClick={history.goBack}
              style={{ cursor: "pointer" }}
            />
          </Col>
          <Col
            lg={{ span: 8 }}
            md={{ span: 8 }}
            sm={{ span: 8 }}
            xs={{ span: 8 }}
            style={{ textAlign: "center" }}
          >
            <h1 className="entityTitle">Quality View</h1>
            <p>Measurable Progress</p>
          </Col>
          <Col
            lg={{ span: 2 }}
            md={{ span: 2 }}
            sm={{ span: 2 }}
            xs={{ span: 2 }}
          ></Col>
        </Row>
        <Row
          xl={{ cols: 12 }}
          lg={{ cols: 12 }}
          md={{ cols: 12 }}
          sm={{ cols: 12 }}
          xs={{ cols: 12 }}
        >
          <Col
            lg={{ span: 1 }}
            md={{ span: 1 }}
            sm={{ span: 1 }}
            xs={{ span: 1 }}
          ></Col>
          <Col
            lg={{ span: 10 }}
            md={{ span: 10 }}
            sm={{ span: 10 }}
            xs={{ span: 10 }}
          >
            <p className="qualityPStyle">Overall Performance 89%</p>
          </Col>
          <Col
            lg={{ span: 1 }}
            md={{ span: 1 }}
            sm={{ span: 1 }}
            xs={{ span: 1 }}
          ></Col>
        </Row>
        <Row
          xl={{ cols: 12 }}
          lg={{ cols: 12 }}
          md={{ cols: 12 }}
          sm={{ cols: 12 }}
          xs={{ cols: 12 }}
        >
          <Col
            lg={{ span: 1 }}
            md={{ span: 1 }}
            sm={{ span: 1 }}
            xs={{ span: 1 }}
          ></Col>
          <Col
            lg={{ span: 5 }}
            md={{ span: 5 }}
            sm={{ span: 5 }}
            xs={{ span: 5 }}
          >
            <div style={{  marginTop: 10 }}>
              <p className="qualityPStyle">Portfolio 1</p>
              <p className="qualityPStyle">Portfolio 2</p>
              <p className="qualityPStyle">Portfolio 3</p>
              <p className="qualityPStyle">Portfolio 4</p>
            </div>
          </Col>
          <Col
            lg={{ span: 6 }}
            md={{ span: 6 }}
            sm={{ span: 6 }}
            xs={{ span: 6 }}
          >
            <div style={{  marginTop: 10 }}>
              <p className="qualityPStyle">Epics Delivered 5</p>
              <p className="qualityPStyle">Epics Delivered 2</p>
              <p className="qualityPStyle">Epics Delivered 8</p>
              <p className="qualityPStyle">Epics Delivered 4</p>
            </div>
          </Col>

        </Row>
        <Row
          xl={{ cols: 12 }}
          lg={{ cols: 12 }}
          md={{ cols: 12 }}
          sm={{ cols: 12 }}
          xs={{ cols: 12 }}
        >
          <Col
            lg={{ span: 1 }}
            md={{ span: 1 }}
            sm={{ span: 1 }}
            xs={{ span: 1 }}
          ></Col>
          <Col
            lg={{ span: 5 }}
            md={{ span: 5 }}
            sm={{ span: 5 }}
            xs={{ span: 5 }}
          >
            <div style={{  marginTop: 10 }}>
              <p className="qualityPStyle">Program 1</p>
              <p className="qualityPStyle">Program 2</p>
              <p className="qualityPStyle">Program 3</p>
              <p className="qualityPStyle">Program 4</p>
            </div>
          </Col>
          <Col
            lg={{ span: 6 }}
            md={{ span: 6 }}
            sm={{ span: 6 }}
            xs={{ span: 6 }}
          >
            <div style={{  marginTop: 10 }}>
              <p className="qualityPStyle">Feature enablement 50</p>
              <p className="qualityPStyle">Feature enablement 20</p>
              <p className="qualityPStyle">Feature enablement 80</p>
              <p className="qualityPStyle">Feature enablement 40</p>
            </div>
          </Col>
        </Row>
        <Row
          xl={{ cols: 12 }}
          lg={{ cols: 12 }}
          md={{ cols: 12 }}
          sm={{ cols: 12 }}
          xs={{ cols: 12 }}
        >
          <Col
            lg={{ span: 1 }}
            md={{ span: 1 }}
            sm={{ span: 1 }}
            xs={{ span: 1 }}
          ></Col>
          <Col
            lg={{ span: 5 }}
            md={{ span: 5 }}
            sm={{ span: 5 }}
            xs={{ span: 5 }}
          >
            <div style={{  marginTop: 10 }}>
              <p className="qualityPStyle">Team 1</p>
              <p className="qualityPStyle">Team 2</p>
              <p className="qualityPStyle">Team 3</p>
              <p className="qualityPStyle">Team 4</p>
              <p className="qualityPStyle">Team 5</p>
              <p className="qualityPStyle">Team 6</p>
              <p className="qualityPStyle">Team 7</p>
              <p className="qualityPStyle">Team 8</p>
            </div>
          </Col>
          <Col
            lg={{ span: 6 }}
            md={{ span: 6 }}
            sm={{ span: 6 }}
            xs={{ span: 6 }}
            style={{ marginBottom: 50 }}
          >
            <div style={{  marginTop: 10 }}>
              <p className="qualityPStyle">Delivered Stories {Math.floor(Math.random() * 300)}</p>
              <p className="qualityPStyle">Delivered Stories {Math.floor(Math.random() * 300)}</p>
              <p className="qualityPStyle">Delivered Stories {Math.floor(Math.random() * 300)}</p>
              <p className="qualityPStyle">Delivered Stories {Math.floor(Math.random() * 300)}</p>
              <p className="qualityPStyle">Delivered Stories {Math.floor(Math.random() * 300)}</p>
              <p className="qualityPStyle">Delivered Stories {Math.floor(Math.random() * 300)}</p>
              <p className="qualityPStyle">Delivered Stories {Math.floor(Math.random() * 300)}</p>
              <p className="qualityPStyle">Delivered Stories {Math.floor(Math.random() * 300)}</p>
            </div>
          </Col>
        </Row>
      </Container>
      <div style={{ justifyContent: "center" }}>
      <img src={logo} className="App-logo img-box" alt="logo" />
        <p className="overallViewProductName">Natural Business Evolution</p>
      </div>
    </div>
  );
}

export default QualityView;
