import React, { useRef, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { ForceGraph2D } from "react-force-graph";

import Enterprise from "../context/data/EnterpriseDataModel";

function OverallView() {
  const windowWidth = window.innerWidth;
  const fullWindowHeight = window.innerHeight;
  const windowHeight = window.innerHeight - 100;

  const distRef = useRef(null);

  useEffect(() => {
    distRef.current.d3Force("link").distance(100);
  });

  return (
    <div
      style={{
        height: fullWindowHeight,
        width: windowWidth,
        overflow: "hidden",
      }}
    >
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
            <a href={"/overall/Metrics"}>
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
          ></Col>
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
              ref={distRef}
              graphData={Enterprise}
              nodeColor={(node) => "lightgrey"}
              width={windowWidth}
              height={windowHeight}
              nodeLabel="name "
              nodeVal={10}
              nodeOpacity="10"
              linkColor={(link) => "black"}
              linkWidth={0.5}
              cooldownTicks={100}
              nodeCanvasObjectMode={() => "after"}
              nodeCanvasObject={(node, ctx, globalScale) => {
                const label = node.name;
                ctx.font = `5px Sans-Serif`;
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillStyle = "Black"; //node.color;
                ctx.fillText(label, node.x, node.y);
              }}
              onEngineStop={() => distRef.current.zoomToFit(400, 40)}
              dagMode="null"
              dagLevelDistance={100}
            />
          </Col>
          <Col></Col>
        </Row>
      </Container>
      <div style={{ justifyContent: "center" }}>
      <svg width="50" height="50" className="logoSVG">
          <g>
            <title>background</title>
            <rect fill="#000" height="50" width="50" y="-1" x="-1" />
            <g
              display="none"
              overflow="visible"
              y="0"
              x="0"
              height="100%"
              width="100%"
            >
              <rect
                fill="url(#gridpattern)"
                strokeWidth="0"
                y="0"
                x="0"
                height="100%"
                width="100%"
              />
            </g>
          </g>
          <g>
            <title>Layer 1</title>
            <g stroke="null" id="svg_10">
              <ellipse
                stroke="#b7aa7c"
                ry="3.20022"
                rx="3.20022"
                id="svg_1"
                cy="12.52605"
                cx="5.60831"
                fill="#fff"
              />
              <ellipse
                stroke="#b7aa7c"
                ry="4.51795"
                rx="4.51795"
                id="svg_2"
                cy="13.84378"
                cx="36.6505"
                fillOpacity="null"
                fill="#fff"
              />
              <ellipse
                stroke="#b7aa7c"
                ry="4.14146"
                rx="4.14146"
                id="svg_3"
                cy="42.11848"
                cx="17.65619"
                fillOpacity="null"
                strokeOpacity="null"
                fill="#fff"
              />
              <ellipse
                stroke="#b7aa7c"
                ry="5.5"
                rx="5.5"
                id="svg_4"
                cy="21"
                cx="21"
                fillOpacity="null"
                strokeOpacity="null"
                fill="#fff"
              />
              <line
                stroke="#b7aa7c"
                strokeLinecap="null"
                strokeLinejoin="null"
                id="svg_5"
                y2="19"
                x2="16"
                y1="14"
                x1="8"
                fillOpacity="null"
                strokeOpacity="null"
                fill="none"
              />
              <line
                stroke="#b7aa7c"
                strokeLinecap="null"
                strokeLinejoin="null"
                id="svg_7"
                y2="21"
                x2="26"
                y1="17"
                x1="33"
                fillOpacity="null"
                strokeOpacity="null"
                fill="none"
              />
              <line
                stroke="#b7aa7c"
                strokeLinecap="null"
                strokeLinejoin="null"
                id="svg_8"
                y2="26.14626"
                x2="19.78218"
                y1="37.91971"
                x1="18.10378"
                fillOpacity="null"
                strokeOpacity="null"
                fill="none"
              />
              <ellipse
                stroke="#ff3200"
                ry="2"
                rx="2"
                id="svg_9"
                cy="26"
                cx="26"
                fillOpacity="null"
                fill="#fff"
              >
                <animateTransform
                  attributeName="transform"
                  dur="5s"
                  type="rotate"
                  from="0 21 21"
                  to="360 21 21"
                  repeatCount="indefinite"
                />
              </ellipse>
            </g>
          </g>
        </svg>
        <p className="overallViewProductNameBlack">
          Natural Business Evolution
        </p>
        <p className="overallViewProductNameMPBlack">Measurable Progress</p>
      </div>
    </div>
  );
}

export default OverallView;
