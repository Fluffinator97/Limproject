import React, { useRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { ForceGraph2D } from "react-force-graph";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import logo from "../assets/images/Logo.png";
import GraphData from "../context/data/MockDataFilter";

function TwoDGraph() {
  const windowWidth = window.innerWidth;

  console.log(GraphData);

  const fgRef = useRef();

  return (
    <div className="backgroundGradient" style={{ height: "10%" }}>
      <iframe
        id="overall"
        title="overall"
        style={{ width: "100%", height: "100%" }}
      ></iframe>
      <Container fluid>
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
            {" "}
            <a href={"/overall/Metrics"}>
              <FontAwesomeIcon
                icon={faAngleLeft}
                size="3x"
                style={{ padding: 0, margin: 0 }}
              />
            </a>
          </Col>
          <Col
            lg={{ span: 8 }}
            md={{ span: 8 }}
            sm={{ span: 8 }}
            xs={{ span: 8 }}
            style={{ textAlign: "center" }}
          >
            <h1 className="entityTitle">Your Profile</h1>
            <p>Measurable Progress</p>
          </Col>
          <Col
            lg={{ span: 2 }}
            md={{ span: 2 }}
            sm={{ span: 2 }}
            xs={{ span: 2 }}
          >
            <a href={"/EnterpriseDataModel"}>
              <FontAwesomeIcon
                icon={faAngleRight}
                size="3x"
                style={{ padding: 0, margin: 0 }}
              />
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
            <h1 style={{ textAlign: "center" }}>Epic 1</h1>
            <h2 className="redText" style={{ textAlign: "center" }}>
              Alert 58%
            </h2>
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
            lg={{ span: 12 }}
            md={{ span: 12 }}
            sm={{ span: 12 }}
            xs={{ span: 12 }}
            style={{ padding: 0, margin: 0 }}
          >
            <ForceGraph2D
              ref={fgRef}
              graphData={GraphData}
              nodeColor={node => (node.color ? "red" : "white")}
              width={windowWidth}
              height={150}
              nodeLabel="name"
              nodeVal={2}
              nodeOpacity={10}
              linkColor={link => "white"}
              linkWidth={1}
              backgroundColor="black"
              cooldownTicks={100}
              nodeCanvasObjectMode={() => "after"}
              nodeCanvasObject={(node, ctx, globalScale) => {
                const label = node.name;
                const fontSize = 12 / globalScale;
                ctx.font = `${fontSize}px Sans-Serif`;
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillStyle = "white"; //node.color;
                ctx.fillText(label, node.x, node.y + 8);
              }}
              onEngineStop={() => fgRef.current.zoomToFit(400, 40)}
              dagMode="rl"
              dagLevelDistance={30}
            />
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
            lg={{ span: 10 }}
            md={{ span: 10 }}
            sm={{ span: 10 }}
            xs={{ span: 10 }}
          >
            <Card style={{marginBottom: "1rem"}}>
              <Card.Header>
                <h1 className="profileTitle">Effects</h1>
              </Card.Header>
              <Card.Body>
                <p>
                  Now that we know who you are, I know who I am. I'm not a
                  mistake! It all makes sense! In a comic, you know how you can
                  tell who the arch-villain's going to be? He's the exact
                  opposite of the hero. And most times they're friends, like you
                  and me! I should've known way back when... You know why,
                  David? Because of the kids. They called me Mr Glass.
                </p>
              </Card.Body>
            </Card>
            <Card style={{marginBottom: "1rem"}}>
              <Card.Header>
                <h1 className="profileTitle">Objective impact</h1>
              </Card.Header>
              <Card.Body>
                <p>
                  Your bones don't break, mine do. That's clear. Your cells
                  react to bacteria and viruses differently than mine. You don't
                  get sick, I do. That's also clear. But for some reason, you
                  and I react the exact same way to water. We swallow it too
                  fast, we choke. We get some in our lungs, we drown. However
                  unreal it may seem, we are connected, you and I. We're on the
                  same curve, just on opposite ends.
                </p>
              </Card.Body>
            </Card>
            <Card style={{marginBottom: "1rem"}}>
              <Card.Header>
                <h1 className="profileTitle">Epic impact</h1>
              </Card.Header>
              <Card.Body>
                <p>
                  The path of the righteous man is beset on all sides by the
                  iniquities of the selfish and the tyranny of evil men. Blessed
                  is he who, in the name of charity and good will, shepherds the
                  weak through the valley of darkness, for he is truly his
                  brother's keeper and the finder of lost children. And I will
                  strike down upon thee with great vengeance and furious anger
                  those who would attempt to poison and destroy My brothers. And
                  you will know My name is the Lord when I lay My vengeance upon
                  thee.
                </p>
              </Card.Body>
            </Card>
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
            lg={{ span: 10 }}
            md={{ span: 10 }}
            sm={{ span: 10 }}
            xs={{ span: 10 }}
          >
            <Card style={{ marginBottom: 100 }}>
              <Card.Header>
                <h1 className="profileTitle">Involved Features</h1>
              </Card.Header>
              <Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>
                    <a href="/entityReport">
                      <p>Feature 1 58%</p>
                    </a>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <a href="/entityReport">
                      <p>Feature 2 64%</p>
                    </a>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <a href="/entityReport">
                      <p>Feature 3 82%</p>
                    </a>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
          <Col
            lg={{ span: 1 }}
            md={{ span: 1 }}
            sm={{ span: 1 }}
            xs={{ span: 1 }}
          ></Col>
        </Row>
      </Container>
      <div style={{ justifyContent: "center" }}>
        <img src={logo} className="App-logo img-box" alt="logo" />
        <p className="overallViewProductName">Natural Business Evolution</p>
      </div>
    </div>
  );
}

export default TwoDGraph;
