import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Switch, Route, useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/images/Logo.png";
import ProperMockData from "../context/data/properMockData";

import ThreeDGraph from "./3DGraph";
import OverallViewList from "./OverallViewList";
import OverallViewMetrics from "./OverallViewMetrics";

function OverallView(props) {
  const borderHeight = window.innerHeight - 200;

  const path = window.location.pathname;

  const { name } = useParams();

  const [metricState, setMetricState] = useState(false);
  const [spaceState, setSpaceState] = useState(false);
  const [listState, setListState] = useState(false);

  const [padder, setPadder] = useState(0);

  const goodNodes = ProperMockData.nodes.filter(node => {
    return node.group > 50;
  });

  const badNodes = ProperMockData.nodes.filter(node => {
    return node.group > 40 && node.group <= 50;
  });

  const reallyBadNodes = ProperMockData.nodes.filter(node => {
    return node.group <= 40;
  });

  console.log(goodNodes);
  console.log(badNodes);
  console.log(reallyBadNodes);

  const allNodes = ProperMockData.nodes.length;

  const numberOfGoodNodes = (goodNodes.length / allNodes) * 100;
  const numberOfBadNodes = (badNodes.length / allNodes) * 100;
  const numberOfReallyBadNodes = (reallyBadNodes.length / allNodes) * 100;

  console.log('Number of ' + numberOfGoodNodes);
  console.log('Number of ' + numberOfBadNodes);
  console.log('Number of ' + numberOfReallyBadNodes);

  const percentOfGoodNodes = numberOfGoodNodes.toFixed(2)
  const percentOfBadNodes = numberOfBadNodes.toFixed(2)
  const percentOfReallyBadNodes = numberOfReallyBadNodes.toFixed(2)

  console.log(percentOfGoodNodes);
  console.log(percentOfBadNodes);
  console.log(percentOfReallyBadNodes);

  if (path === "/overall/Metrics" && metricState === false) {
    setMetricState(true);
    setSpaceState(false);
    setListState(false);
    setPadder(400);
  } else if (path === "/overall/Space" && spaceState === false) {
    setMetricState(false);
    setSpaceState(true);
    setListState(false);
    setPadder(0);
  } else if (path === "/overall/List" && listState === false) {
    setMetricState(false);
    setSpaceState(false);
    setListState(true);
    setPadder(0);
  }

  console.log("Metrics: " + metricState);
  console.log("Space: " + spaceState);
  console.log("List: " + listState);

  console.log(path);

  return (
    <div className="backgroundGradient">
      <iframe
        id="overall"
        title="overall"
        style={{ width: "100%", height: "100%" }}
      ></iframe>
      <Container>
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
            <p className="overallViewTitle">Overall {name}</p>
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
              <p className=" overallViewStats ">Good {percentOfGoodNodes}%</p>
              <p className=" overallViewStats yellowText ">
                Risk {percentOfBadNodes}%
              </p>
              <p className=" overallViewStats redText ">
                Alert {percentOfReallyBadNodes}%
              </p>
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
            style={{
              textAlign: "center",
              height: borderHeight,
              marginBottom: padder
            }}
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
          {metricState ? (
            <a href={"/overall/Metrics"}>
              <button className="overallViewSelectionButtons metrics btn btn-light">
                Metric
              </button>
            </a>
          ) : (
            <a href={"/overall/Metrics"}>
              <button className="overallViewSelectionButtons metrics btn btn-outline-light">
                Metrics
              </button>
            </a>
          )}
        </div>
        <div>
          {spaceState ? (
            <a href={"/overall/Space"}>
              <button className="overallViewSelectionButtons space btn btn-light">
                Space
              </button>
            </a>
          ) : (
            <a href={"/overall/Space"}>
              <button className="overallViewSelectionButtons space btn btn-outline-light">
                Space
              </button>
            </a>
          )}
        </div>
        <div>
          {listState ? (
            <a href={"/overall/List"}>
              <button className="overallViewSelectionButtons list btn btn-light">
                List
              </button>
            </a>
          ) : (
            <a href={"/overall/List"}>
              <button className="overallViewSelectionButtons list btn btn-outline-light">
                List
              </button>
            </a>
          )}
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
