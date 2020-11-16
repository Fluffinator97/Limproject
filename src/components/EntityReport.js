import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { useParams, useHistory } from "react-router";
import logo from "../assets/images/Logo.png";

import DoubleCircleDiagram from "./Diagrams/DoubleCircleDiagram";
import BurnDownChart from "./Diagrams/BurnDownDiagram";
import "bootstrap/dist/css/bootstrap.min.css";

function EntityReport() {
  const { name } = useParams();
  console.log(name);
  const capsName = name.toUpperCase();
  let history = useHistory();

  return (
    <div  className="backgroundGradient" style={{height: "10%"}}>
      <iframe
        id="entity"
        title="entity"
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
            <h1 className="entityTitle">Entity Report</h1>
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
            <h1 className="entityTypeTitle">{capsName}</h1>
            <p className="entityExplaination">Job Size 40</p>
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
          style={{ marginBottom: "1rem" }}
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
            <Card>
              <Card.Header>
                <h1 className="entityTypeTitle"> Est. Completion</h1>
              </Card.Header>
              <Card.Body>
                <p className="entityExplaination">
                  Nunc lobortis dui sed justo mattis auctor. Praesent erat
                  magna, finibus eu leo a, volutpat viverra risus. Aenean
                  pellentesque interdum erat ut lacinia.
                </p>
                <DoubleCircleDiagram />
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
          style={{ marginBottom: "1rem" }}
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
            <Card>
              <Card.Header>
                <h1 className="entityTypeTitle">Time </h1>
              </Card.Header>
              <Card.Body>
                <p className="entityExplaination">
                  Nunc lobortis dui sed justo mattis auctor. Praesent erat
                  magna, finibus eu leo a, volutpat viverra risus. Aenean
                  pellentesque interdum erat ut lacinia.
                </p>
                <BurnDownChart />
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
          style={{ marginBottom: "1rem" }}
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
            <Card style={{marginBottom: 100}}>
              <Card.Header>
                <h1 className="entityTypeTitle">Features</h1>
              </Card.Header>
              <Card.Body>
                <p className="entityExplaination">
                  Nunc lobortis dui sed justo mattis auctor. Praesent erat
                  magna, finibus eu leo a, volutpat viverra risus. Aenean
                  pellentesque interdum erat ut lacinia.
                </p>
                <h1 className="profileTitle">Involved Features</h1>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>
                    <a href="/entityReport/feature">
                      <p className="qualityPStyle">Feature 1 58%</p>
                    </a>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <a href="/entityReport/feature">
                      <p className="qualityPStyle">Feature 2 64%</p>
                    </a>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <a href="/entityReport/feature">
                      <p className="qualityPStyle">Feature 3 82%</p>
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

export default EntityReport;
