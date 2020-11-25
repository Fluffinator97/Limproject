import React from "react";

import properMockData from "../../context/data/properMockData";

function OverallViewList() {
  const boxHeight = window.innerHeight - 315;

  const badNodes = properMockData.nodes
    .filter((node) => {
      return node.group > 40 && node.group <= 50;
    })
    .map((node) => (
      <li className="redText overallListObjects" key={node.id}>
        <a
          href={"/entityReport/" + node.name}
          className="redText"
        >
          <h4>{node.name}</h4>
        </a>
      </li>
    ));

  const reallyBadNodes = properMockData.nodes
    .filter((node) => {
      return node.group <= 40;
    })
    .map((node) => (
      <li className="yellowText overallListObjects" key={node.id}>
        <a
          href={"/entityReport/" + node.name}
          className="yellowText"
        >
          <h4>{node.name}</h4>
        </a>
      </li>
    ));

  const goodNodes = properMockData.nodes
    .filter((node) => {
      return node.group > 50;
    }).filter((node) => {
      return !node.name.includes("ST ") && !node.name.includes("Volvo") ;
    })
    .map((node) => (
      <li className="overallListObjects" key={node.id}>
        <a href={"/entityReport/" + node.name}>
        <h4>{node.name}</h4>
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
