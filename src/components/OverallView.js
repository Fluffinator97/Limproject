import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Switch, Route, useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import logo from '../assets/images/Logo.png'

import ThreeDGraph from "./3DGraph";
import OverallViewList from "./OverallViewList";
import OverallViewMetrics from "./OverallViewMetrics";

function OverallView() {
  const borderWidth = window.innerWidth;
  const borderHeight = window.innerHeight;

  const path = window.location.pathname;

  console.log(path);

  return (
    <div className="backgroundGradient" style={{height: "10%"}}>
      <iframe
        id="overall"
        title="overall"
        style={{ width: "100%", height: "100%" }}
      ></iframe>
      <Container >
        <Row style={{ height: 30 }}></Row>
        <Row
          xl={{ cols: 12 }}
          lg={{ cols: 12 }}
          md={{ cols: 12 }}
          sm={{ cols: 12 }}
          xs={{ cols: 12 }}
        >
          <Col
            lg={{ span: 2 }}
            md={{ span: 2 }}
            sm={{ span: 2 }}
            xs={{ span: 2 }}
          >
            <a href={"/EnterpriseDataModel"}>
              <FontAwesomeIcon icon={faAngleLeft} size="3x" />
            </a>
          </Col>
          <Col
            lg={{ span: 8 }}
            md={{ span: 8 }}
            sm={{ span: 8 }}
            xs={{ span: 8 }}
            style={{ textAlign: "center" }}
          >
            <p className="overallViewTitle">Overall View</p>
          </Col>
          <Col
            lg={{ span: 2 }}
            md={{ span: 2 }}
            sm={{ span: 2 }}
            xs={{ span: 2 }}
          >
            <a href={"/profile"}>
              <FontAwesomeIcon icon={faAngleRight} size="3x" />
            </a>
          </Col>
        </Row>
        <Row
          xl={{ cols: 12 }}
          lg={{ cols: 12 }}
          md={{ cols: 12 }}
          sm={{ cols: 12 }}
          xs={{ cols: 12 }}
        >
          <Col></Col>
          <Col
            lg={{ span: 8 }}
            md={{ span: 8 }}
            sm={{ span: 8 }}
            xs={{ span: 8 }}
            style={{ textAlign: "center" }}
          >
            <div className="">
              <p className=" overallViewStats ">Measurable Progress</p>
              <p className=" overallViewStats ">Good 87.5%</p>
              <p className=" overallViewStats yellowText ">Risk 10%</p>
              <p className=" overallViewStats redText ">Alert 2.5%</p>
            </div>
          </Col>
          <Col></Col>
        </Row>
        <Row
          xl={{ cols: 12 }}
          lg={{ cols: 12 }}
          md={{ cols: 12 }}
          sm={{ cols: 12 }}
          xs={{ cols: 12 }}
          style={{ marginTop: 16 }}
        >
          <Col></Col>
          <Col
            lg={{ span: 12 }}
            md={{ span: 12 }}
            sm={{ span: 12 }}
            xs={{ span: 12 }}
            style={{ textAlign: "center", paddingBottom: 250 }}
          >
            <Switch>
              <Route path="/overall/metrics" component={OverallViewMetrics} />
              <Route path="/overall/space" component={ThreeDGraph} />
              <Route path="/overall/list" component={OverallViewList} />
            </Switch>
          </Col>
          <Col></Col>
        </Row>
      </Container>
      <div className="overallViewSelectionButtonFlex">
        <div>
          <a href={"/overall/metrics"}>
            <button className="overallViewSelectionButtons metrics btn btn-outline-secondary">
              Metrics
            </button>
          </a>
        </div>
        <div>
          <a href={"/overall/space"}>
            <button className="overallViewSelectionButtons space btn btn-outline-secondary">
              Space
            </button>
          </a>
        </div>
        <div>
          <a href={"/overall/list"}>
            <button className="overallViewSelectionButtons list btn btn-outline-secondary">
              List
            </button>
          </a>
        </div>
      </div>
      <div style={{ justifyContent: "center" }}>
      <img src={logo} className="App-logo img-box" alt="logo" />
        <p className="overallViewProductName">Natural Business Evolution</p>
      </div>
    </div>
  );
}

export default OverallView;
