import React from "react";

import properMockData from "../../context/data/properMockData";

function OverallViewList() {
  const boxHeight = window.innerHeight - 315;

  const badNodes = properMockData.nodes
    .filter((node) => {
      return node.group > 40 && node.group <= 50;
    })
    .map((node) => (
      <li className="redText qualityPStyle" key={node.id}>
        <a
          href={"/entityReport/" + node.name}
          className="redText qualityPStyle"
        >
          {node.name}
        </a>
      </li>
    ));

  const reallyBadNodes = properMockData.nodes
    .filter((node) => {
      return node.group <= 40;
    })
    .map((node) => (
      <li className="yellowText qualityPStyle" key={node.id}>
        <a
          href={"/entityReport/" + node.name}
          className="yellowText qualityPStyle"
        >
          {node.name}
        </a>
      </li>
    ));

  const goodNodes = properMockData.nodes
    .filter((node) => {
      return node.group > 50;
    })
    .map((node) => (
      <li className="qualityPStyle" key={node.id}>
        <a href={"/entityReport/" + node.name} className="qualityPStyle">
          {node.name}
        </a>
      </li>
    ));

  return (
    <div style={{ height: boxHeight, overflowY: "scroll" }}>
      <ol>
        {badNodes}
        {reallyBadNodes}
        {goodNodes}
      </ol>
    </div>
  );
}

export default OverallViewList;
