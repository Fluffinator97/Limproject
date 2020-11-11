import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "bootstrap/dist/css/bootstrap.min.css";

import FlatMockData from "../context/data/FlatMockData";
import MockListDataFilter from "../context/data/MockListDataFilter";

function ListView() {
  return (
    <Container>
      <Row>
        <Col style={{ height: "100px" }}></Col>
      </Row>
      <Row>
        <Col>
          <Table action striped bordered variant="flush" variant="dark">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>KPI 1</th>
                <th>KPI 2</th>
                <th>KPI 3</th>
              </tr>
            </thead>
            <tbody>
              <tr className={"red"}>
                <td>1</td>
                <td>ST 1</td>
                <td>KPI 1</td>
                <td>KPI 2</td>
                <td>KPI 3</td>
              </tr>
              <tr>
                <td colSpan="5">
                  <Table variant="flush" variant="dark">
                    <thead></thead>
                    <tbody>
                      <tr>
                        <td>2</td>
                        <td>Objective 1</td>
                        <td>KPI 1</td>
                        <td>KPI 2</td>
                        <td>KPI 3</td>
                      </tr>
                      <tr style={{ color: "red" }}>
                        <td>123</td>
                        <td>Objective 2</td>
                        <td>KPI 1</td>
                        <td>KPI 2</td>
                        <td>KPI 3</td>
                      </tr>
                      <tr>
                        <td colSpan="5">
                          <Table variant="flush" variant="dark">
                            <thead></thead>
                            <tbody>
                              <tr>
                                <td>124</td>
                                <td>Epic 1</td>
                                <td>KPI 1</td>
                                <td>KPI 2</td>
                                <td>KPI 3</td>
                              </tr>
                              <tr style={{ color: "red" }}>
                                <td>164</td>
                                <td>Epic 2</td>
                                <td>KPI 1</td>
                                <td>KPI 2</td>
                                <td>KPI 3</td>
                              </tr>
                              <tr>
                                <td colSpan="5">
                                  <Table variant="flush" variant="dark">
                                    <thead></thead>
                                    <tbody>
                                      <tr>
                                        <td>165</td>
                                        <td>Feature 1</td>
                                        <td>KPI 1</td>
                                        <td>KPI 2</td>
                                        <td>KPI 3</td>
                                      </tr>
                                      <tr style={{ color: "red" }}>
                                        <td>178</td>
                                        <td>Feature 2</td>
                                        <td>KPI 1</td>
                                        <td>KPI 2</td>
                                        <td>KPI 3</td>
                                      </tr>

                                      <tr>
                                        <td>204</td>
                                        <td>Epic 3</td>
                                        <td>KPI 1</td>
                                        <td>KPI 2</td>
                                        <td>KPI 3</td>
                                      </tr>
                                    </tbody>
                                  </Table>
                                </td>
                              </tr>
                              <tr>
                                <td>204</td>
                                <td>Epic 3</td>
                                <td>KPI 1</td>
                                <td>KPI 2</td>
                                <td>KPI 3</td>
                              </tr>
                            </tbody>
                          </Table>
                        </td>
                      </tr>
                      <tr>
                        <td>244</td>
                        <td>Objective 3</td>
                        <td>KPI 1</td>
                        <td>KPI 2</td>
                        <td>KPI 3</td>
                      </tr>
                    </tbody>
                  </Table>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row>
        <Col>
          {/* <Table hover >
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table> */}
        </Col>
      </Row>
    </Container>
  );
}

export default ListView;
