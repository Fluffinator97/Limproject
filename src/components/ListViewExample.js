import React, { useState } from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import MockData from '../context/data/LogoData'

function ListViewExample() {
  const Primary = "primary";
  const Danger = "danger";
 const [hide, setHide] = useState("hide")

  const toggleSidenav = () => {
    if (hide === "hide") {
        setHide("show")
    } else {
        setHide("hide")
    }
}

  return (
    <Container>
    <Row>
    <Col>
    <ListGroup variant="dark">
      <ListGroupItem  variant="dark">
        Objective 1
      </ListGroupItem>
      <ListGroupItem  variant="dark" onClick={toggleSidenav}  style={{color: "red"}}>Objective 2
        <ListGroup  className={hide}>
          <ListGroupItem  variant="dark">
            Epic 1
          </ListGroupItem>
          <ListGroupItem  variant="dark" onClick={toggleSidenav}  style={{color: "red"}}>
            Epic 2
            <ListGroup  className={hide}>
              <ListGroupItem  variant="dark">
                Feature 1
              </ListGroupItem>
              <ListGroupItem  variant="dark" onClick={toggleSidenav}  style={{color: "red"}}>
                Feature 2
                <ListGroup  className={hide}>
                  <ListGroupItem  variant="dark">
                    Story 1
                  </ListGroupItem>
                  <ListGroupItem  variant="dark" onClick={toggleSidenav}  style={{color: "red"}}>
                    Story 2
                    <ListGroup  className="hidden">
                      <ListGroupItem  variant="dark">Task 1</ListGroupItem>
                      <ListGroupItem  variant="dark" onClick={toggleSidenav}  style={{color: "red"}}>Task 2</ListGroupItem>
                      <ListGroupItem  variant="dark">Task 3</ListGroupItem>
                    </ListGroup>
                  </ListGroupItem>
                  <ListGroupItem  variant="dark">
                    Story 3
                  </ListGroupItem>
                </ListGroup>
              </ListGroupItem>
              <ListGroupItem  variant="dark">
                Feature 3
              </ListGroupItem>
            </ListGroup>
          </ListGroupItem>
          <ListGroupItem  variant="dark">
            Epic 3
          </ListGroupItem>
        </ListGroup>
      </ListGroupItem>
      <ListGroupItem  variant="dark">
        Objective 3
      </ListGroupItem>
    </ListGroup>
    </Col>
    </Row>
    </Container>
  );
}

export default ListViewExample;
