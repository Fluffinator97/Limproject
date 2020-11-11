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

function EntityReport() {
  const location = window.location;
  const href = window.location.href;
  const path = window.location.pathname;

  const { name } = useParams();
  console.log(name);

  const capsName = name.toUpperCase();

  let history = useHistory();

  return (
    <div>
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
            <p className="entityExplaination">
              My money's in that office, right?
            </p>
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
            <div>
              <h1 className="entityTypeTitle">METRIC 1</h1>
              <p className="entityExplaination">
                Nunc lobortis dui sed justo mattis auctor. Praesent erat magna,
                finibus eu leo a, volutpat viverra risus. Aenean pellentesque
                interdum erat ut lacinia.
              </p>
            </div>
            <div style={{ marginBottom: 50 }}>
              <DoubleCircleDiagram />
            </div>
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
