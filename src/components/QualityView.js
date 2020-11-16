import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ListGroup from "react-bootstrap/ListGroup";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { useParams, useHistory } from "react-router";

import logo from "../assets/images/Logo.png";

// import DoubleCircleDiagram from "./Diagrams/DoubleCircleDiagram";



import "bootstrap/dist/css/bootstrap.min.css";

function QualityView() {
  let history = useHistory();
  console.log(history);

  const { name } = useParams()
  console.log(name)

  return (
    <div className="backgroundImage">
      <iframe
        id="overall"
        title="overall"
        style={{ width: "100%", height: "100%" }}
      ></iframe>
      <Container fluid className="">
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
            <h1 style={{textAlign: "center"}}>{name}</h1>
            <p className="qualityPStyle" style={{textAlign: "center"}}>Overall Performance 89%</p>
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
          >
            <Accordion style={{ marginBottom: 100 }}>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  Portfolios
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body style={{ display: "inline-flex" }}>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item style={{width: window.innerWidth / 2.5}}>
                        <a href="qualityview/defect">
                          <p className="qualityPStyle">Portfolio 1</p>
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <a href="qualityview/defect">
                          <p className="qualityPStyle">Portfolio 2</p>
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <a href="qualityview/defect">
                          <p className="qualityPStyle">Portfolio 3</p>
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <a href="qualityview/defect">
                          <p className="qualityPStyle">Portfolio 4</p>
                        </a>
                      </ListGroup.Item>
                    </ListGroup>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        <a href="qualityview/defect">
                          <p className="qualityPStyle">Epics Delivered 5</p>
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <a href="qualityview/defect">
                          <p className="qualityPStyle">Epics Delivered 2</p>
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <a href="qualityview/defect">
                          <p className="qualityPStyle">Epics Delivered 8</p>
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <a href="qualityview/defect">
                          <p className="qualityPStyle">Epics Delivered 4</p>
                        </a>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                  Programs
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body style={{ display: "inline-flex" }}>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item style={{width: window.innerWidth / 3}}>
                        <a href="qualityview/defect">
                          <p className="qualityPStyle">Program 1</p>
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <a href="qualityview/defect">
                          <p className="qualityPStyle">Program 2</p>
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <a href="qualityview/defect">
                          <p className="qualityPStyle">Program 3</p>
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <a href="qualityview/defect">
                          <p className="qualityPStyle">Program 4</p>
                        </a>
                      </ListGroup.Item>
                    </ListGroup>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item style={{width: window.innerWidth / 2}}>
                        <a href="qualityview/defect">
                          <p className="qualityPStyle">Feature enablement 50</p>
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <a href="qualityview/defect">
                          <p className="qualityPStyle">Feature enablement 20</p>
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <a href="qualityview/defect">
                          <p className="qualityPStyle">Feature enablement 80</p>
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <a href="qualityview/defect">
                          <p className="qualityPStyle">Feature enablement 40</p>
                        </a>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                  Teams
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body style={{ display: "inline-flex" }}>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item style={{width: window.innerWidth / 3}}>
                        <a href="qualityview/defect">
                          <p className="qualityPStyle">Team 1</p>
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <a href="qualityview/defect">
                          <p className="qualityPStyle">Team 2</p>
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <a href="qualityview/defect">
                          <p className="qualityPStyle">Team 3</p>
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <a href="qualityview/defect">
                          <p className="qualityPStyle">Team 4</p>
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <a href="qualityview/defect">
                          <p className="qualityPStyle">Team 5</p>
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <a href="qualityview/defect">
                          <p className="qualityPStyle">Team 6</p>
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <a href="qualityview/defect">
                          <p className="qualityPStyle">Team 7</p>
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <a href="qualityview/defect">
                          <p className="qualityPStyle">Team 8</p>
                        </a>
                      </ListGroup.Item>
                    </ListGroup>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item style={{width: window.innerWidth / 2}}>
                        <a href="qualityview/defect">
                          <p className="qualityPStyle">
                            Delivered Stories {Math.floor(Math.random() * 300)}
                          </p>
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <a href="qualityview/defect">
                          <p className="qualityPStyle">
                            Delivered Stories {Math.floor(Math.random() * 300)}
                          </p>
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <a href="qualityview/defect">
                          <p className="qualityPStyle">
                            Delivered Stories {Math.floor(Math.random() * 300)}
                          </p>
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <a href="qualityview/defect">
                          <p className="qualityPStyle">
                            Delivered Stories {Math.floor(Math.random() * 300)}
                          </p>
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <a href="qualityview/defect">
                          <p className="qualityPStyle">
                            Delivered Stories {Math.floor(Math.random() * 300)}
                          </p>
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <a href="qualityview/defect">
                          <p className="qualityPStyle">
                            Delivered Stories {Math.floor(Math.random() * 300)}
                          </p>
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <a href="qualityview/defect">
                          <p className="qualityPStyle">
                            Delivered Stories {Math.floor(Math.random() * 300)}
                          </p>
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <a href="qualityview/defect">
                          <p className="qualityPStyle">
                            Delivered Stories {Math.floor(Math.random() * 300)}
                          </p>
                        </a>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
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
