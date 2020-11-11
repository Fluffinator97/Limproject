// import React from "react";
// import Container from "react-bootstrap/Container";
// import { useParams } from "react-router-dom"
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Carousel from 'react-bootstrap/Carousel'

// import "bootstrap/dist/css/bootstrap.min.css";

// import BurnDownDiagram from './Diagrams/BurnDownDiagram'
// import GraphData from "../context/data/FlatMockData";

// function KpiView() {

//   const location = window.location
//   const href = window.location.href 
//   const path = window.location.pathname 
  
//   console.log(location)
//   console.log(href)
//   console.log(path)

//   const { name } = useParams()
//   const { id } = useParams()

//   const nodes = GraphData.nodes;
//   return (
//     <Container >
//       <Row>
//         <Col lg={{ span: 12 }} md={{  }} sm={{  }} className={"contentCenter"}>
//           <h1>Rapport: Epic 1</h1>
//         </Col>
//       </Row>
//       <Row lg={3}>
//         <Col lg={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 12}}>
//           <div className={"orange"}>
//           <p>{nodes[0].text}</p>
//           <p>{nodes[0].id}</p>
//           </div>
//         </Col>
//       </Row>
//       <Row lg={3}>
//       <Col
//           lg={{ span: 12 }}
//           sm={{ span: 12 }}
//           xs={{ span: 12 }}
//           className={"contentCenter"}
//         >
//           <BurnDownDiagram />
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default KpiView;
