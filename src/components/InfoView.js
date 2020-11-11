import React from "react";

import "../App.css";
// import DoubleCircleDiagram from "./Diagrams/DoubleCircleDiagram";

function InfoView(props) {
  const windowHeight = window.innerHeight - 56;

  return (
    <div className={"infoContainer"} style={{ height: windowHeight }}>
      <div className={"infoBox"}>
        <h1 className="kpiTitle">{props.clickedNodeInfo}</h1>
        <p className={"infoboxP"}>ID: {props.nodeID}</p>
        <p className={"infoboxP"}>Name: {props.nodeName}</p>
        <a href={'/Progress of Delivery/' + props.nodeID} className="kpiLinkStyling"><p className={"infoboxP"}>Progress of Delivery: {props.pOD}</p></a>
        <a href={'/Planned vs actual/' + props.nodeID} className="kpiLinkStyling"><p className={"infoboxP"}>Planned vs actual: {props.pVA}</p></a>
        <a href={'/Predictability measure/' + props.nodeID} className="kpiLinkStyling"><p className={"infoboxP"}>Predictability measure: {props.pM}</p></a>
        <a href={'/Job Size/' + props.nodeID} className="kpiLinkStyling"><p className={"infoboxP"}>Job Size: {props.jS}</p></a>
        <a href={'/Lead time cycle time/' + props.nodeID} className="kpiLinkStyling"><p className={"infoboxP"}>Lead time/cycle time: {props.lT}</p></a>
        <a href={'/Planned Delivery Date/' + props.nodeID} className="kpiLinkStyling"><p className={"infoboxP"}>Planned Delivery Date: {props.pDD}</p></a>
        <a href={'/Est time of completion vs planned/' + props.nodeID} className="kpiLinkStyling"><p className={"infoboxP"}>
          Forecast - Est time of completion vs planned: {props.eTOC}
        </p></a>
        <a href={'/Tasks delivered hours spent/' + props.nodeID} className="kpiLinkStyling"><p className={"infoboxP"}>Tasks delivered/hours spent: {props.tD}</p></a>
        <a href={'/Program velocity/' + props.nodeID} className="kpiLinkStyling"><p className={"infoboxP"}>Program velocity: {props.pV}</p></a>
        <a href={'/Number of Imped/' + props.nodeID} className="kpiLinkStyling"><p className={"infoboxP"}>Number of Imped: {props.nOI}</p></a>
        <a href={'/Nr of performed tests/' + props.nodeID} className="kpiLinkStyling"><p className={"infoboxP"}>Nr of performed tests: {props.nOPT}</p></a>
        <a href={'/Nr of bugs/' + props.nodeID} className="kpiLinkStyling"><p className={"infoboxP"}>Nr of bugs: {props.nOB}</p></a>
        <a href={'/Number of persons/' + props.nodeID} className="kpiLinkStyling"><p className={"infoboxP"}>Number of persons: {props.nOP}</p></a>
        <div className={"diagramBox"}>
          {/* <DoubleCircleDiagram /> */}
        </div>
      </div>
    </div>
  );
}
export default InfoView;
