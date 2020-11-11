import React, { useRef, useEffect } from "react";
import { ForceGraph3D } from "react-force-graph";
import SpriteText from 'three-spritetext';



import FlatMockData from '../context/data/FlatMockData'

import MockData from '../context/data/MockData'

import ProperMockData from '../context/data/properMockData'


// var NodeClickedID = 0;

function ThreeDGraph() {
  // Setting Sizes from the Graph
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight - 200;
  // Setting The dist for the links
  const distRef = useRef(null);

  useEffect(() => {
    distRef.current.d3Force("link").distance(70);
  });

  // Setting States
  // const [openInfoBox, setOpenInfoBox] = useState(false);
  // const [openCheatBox, setOpenCheatBox] = useState(false);
//   const [activeNodeState, setactiveNodeState] = useState()

  // Creating OnClick event for opening InfoBox
  // const handleNodeClick = (FlatMockData) => {
  //   NodeClickedID = FlatMockData.id;
  //   if (openCheatBox === false) {
  //     setOpenInfoBox(true);
  //     setOpenCheatBox(true);
  //   } else {
  //     setOpenCheatBox(false);
  //   }
  // };

  // const handleClose = () => {
  //   if (openInfoBox === true) {
  //     setOpenInfoBox(false);
  //   } else {
  //     setOpenInfoBox(true);
  //   }
  // };

  // const nodeColor = GraphData.nodes[1].group;

   console.log(ProperMockData);

  return (
    <div className="first" style={{ height: windowHeight }}>
      {/* Toggle for showing
      <button className="closeButton" onClick={handleClose}>
        ?
      </button> */}
      {/* {openInfoBox ? (
        <InfoView
          clickedNodeInfo={nodes[NodeClickedID].name}
          nodeID={nodes[NodeClickedID].id}
          nodeName={nodes[NodeClickedID].name}
          pOD={nodes[NodeClickedID].pOD}
          pVA={nodes[NodeClickedID].pVA}
          pM={nodes[NodeClickedID].pM}
          jS={nodes[NodeClickedID].jS}
          lT={nodes[NodeClickedID].lT}
          pDD={nodes[NodeClickedID].pDD}
          eTOC={nodes[NodeClickedID].eTOC}
          tD={nodes[NodeClickedID].tD}
          pV={nodes[NodeClickedID].pV}
          nOI={nodes[NodeClickedID].nOI}
          nOPT={nodes[NodeClickedID].nOPT}
          nOB={nodes[NodeClickedID].nOB}
          nOP={nodes[NodeClickedID].nOP}
          linkpOD={nodes[NodeClickedID].linkpOD}
        />
        // <div>
        //   <ul>{activeNodes}</ul>
        // </div>
      ) : null} */}
      {/* Rendering the Graph */}
      <ForceGraph3D
        graphData={ProperMockData}
        ref={distRef}
        // nodeColor={node => node.group ? 'red' : 'lightgrey' }
        // nodeAutoColorBy="group"
        width={windowWidth}
        height={windowHeight}
        nodeColor={node => 'white'}
        nodeLabel="name"
        nodeVal="jS"
        nodeOpacity={90}
        linkColor={link => "white"}
        linkWidth={1}
        cooldownTicks={100}
        // onNodeClick={handleNodeClick}
        backgroundColor="black"
        onEngineStop={() => distRef.current.zoomToFit(10)}
        enableNodeDrag={false}
      />
    </div>
  );
}

export default ThreeDGraph;
