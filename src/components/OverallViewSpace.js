import React from "react";

import ThreeDGraph from "./3DGraph";

function OverallViewSpace() {
  const borderWidth = window.innerWidth;
  const borderHeight = window.innerHeight;

  return (
    <div className="overallViewBindingBox">
      <iframe
        id="space"
        title="space"
        style={{ width: borderWidth, height: borderHeight }}
      ></iframe>
      <div className="overallViewHeader">
        <button className="navigationButton btn btn-outline-secondary">
          {"<-"}
        </button>
        <h1 className="overallViewTitle">Overall View</h1>
        <button className="navigationButton btn btn-outline-secondary">
          {"->"}
        </button>
      </div>
      <div className="metricsText">
        <p className=" overallViewStats ">Measurable Progress</p>
        <p className=" overallViewStats ">Good 87.5%</p>
        <p className=" overallViewStats yellowText ">Risk 10%</p>
        <p className=" overallViewStats redText ">Alert 2.5%</p>
      </div>
      <ThreeDGraph />
      <div className="overallViewSelectionButtonFlex">
        <div>
          <a href={"/metrics"}>
            <button className="overallViewSelectionButtons metrics btn btn-outline-secondary">
              Metrics
            </button>
          </a>
        </div>
        <div>
          <a href={"#"}>
            <button className="overallViewSelectionButtons space btn btn-outline-secondary">
              Space
            </button>
          </a>
        </div>
        <div>
          <a href={"/list"}>
            <button className="overallViewSelectionButtons list btn btn-outline-secondary">
              List
            </button>
          </a>
        </div>
      </div>
      <div style={{ justifyContent: "center" }}>
        <p className="overallViewProductName">Natural Business Evolution</p>
      </div>
    </div>
  );
}

export default OverallViewSpace;
