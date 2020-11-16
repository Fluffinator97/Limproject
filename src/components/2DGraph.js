import React from "react";
import { ForceGraph2D } from "react-force-graph";

import GraphData from "../context/data/LogoData";



function TwoDGraph() {
  // Setting Sizes from the Graph
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight - 50;
  // Setting The dist for the links
  var delay = 4000

  setTimeout(function(){
    window.location = "overall/Metrics";
   },delay);


  return (
    <div className="first" style={{ height: windowHeight }}>
      {/* Rendering the Graph */}
      <div className="splashScreenHeader">
        <p className="splashScreenSize, splashScreenP">This is</p>
        <h2 className="splashScreenSize, splashScreenH2">Measurable Progress</h2>
      </div>
      <ForceGraph2D
        graphData={GraphData}
        nodeColor={node => 'lightgrey'}
        // nodeAutoColorBy="group"
        width={windowWidth}
        height={windowHeight}
        nodeLabel="name "
        nodeVal={"size"}
        nodeOpacity="10"
        linkColor={link => "black"}
        linkWidth={1}
      />
      <div className="splashScreenTitleBox"><h1 className="splashScreenTitle">How are we doing?</h1></div>
      <div className="splashScreenFooter">
      {/* <img src={logo} className="App-logo img-box" alt="logo" /> */}
        <p>Natural Business Evolution</p>
      </div>
    </div>
  );
}

export default TwoDGraph;
