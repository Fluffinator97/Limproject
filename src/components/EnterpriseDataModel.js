import React, { useRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { ForceGraph2D } from "react-force-graph";
import logo from '../assets/images/Logo.png'

import Enterprise from '../context/data/EnterpriseDataModel'

function OverallView() {
  const path = window.location.pathname;
  const windowWidth = window.innerWidth;
  const fullWindowHeight = window.innerHeight
  const windowHeight = window.innerHeight - 100;

  const fgRef = useRef();

  return (
    <div style={{ height: fullWindowHeight, width: windowWidth, overflow: "hidden" }}>
      <Container fluid>
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
            <a href={"/profile"}>
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
            <a href={"/overall/metrics"}>
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
        >
          <Col></Col>
          <Col
            lg={{ span: 12 }}
            md={{ span: 12 }}
            sm={{ span: 12 }}
            xs={{ span: 12 }}
            style={{ textAlign: "center" }}
          >
            <ForceGraph2D
            ref={fgRef}
              graphData={Enterprise}
              nodeColor={node => "lightgrey"}
              width={windowWidth}
              height={windowHeight}
              nodeLabel="name "
              nodeVal="jS"
              nodeOpacity="10"
              linkColor={link => "black"}
              linkWidth={0.5}
              cooldownTicks={100}
              nodeCanvasObjectMode={() => 'after'}
              nodeCanvasObject={(node, ctx, globalScale) => {
                const label = node.name;
                ctx.font = `12px Sans-Serif`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillStyle = 'Black'; //node.color;
                ctx.fillText(label, node.x, node.y);
              }}
              onEngineStop={() => fgRef.current.zoomToFit( 400, 40)}
              dagLevelDistance="300"
            />
            <div className="splashScreenFooter">
            <img src={logo} className="App-logo img-box" alt="logo" />
              <p>Natural Business Evolution</p>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default OverallView;
