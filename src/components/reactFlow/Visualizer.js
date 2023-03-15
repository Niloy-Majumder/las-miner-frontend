import React, { useState, useEffect } from "react";
import { useCallback } from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  ReactFlowProvider,
  useReactFlow,
} from "reactflow";

import "reactflow/dist/style.css";
import { server } from "../../constants";
import initialEdges from "./edges";
import initialNodes from "./nodes";

const edgeOptions = {
  animated: true,
  style: {
    stroke: "red",
  },
};

const connectionLineStyle = { stroke: "red" };

let nodeId = 1;

function Visualizer() {
  const [json, setJson] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        let request;
        let data = await fetch("http://localhost:8000/api/connected-peers");
        // JSON.parse()
        setJson((request = Object.keys(data).length));
        return request;
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  console.log(json);

  const reactFlowInstance = useReactFlow();

  let count = 0;
  const randomNumber = 2;

  console.log(count);
  console.log(randomNumber);

  while (count <= randomNumber) {
    // tryFunction();

    const id = `${++nodeId}`;

    const newNode = {
      id,
      position: {
        x: Math.random() * 700,
        y: Math.random() * 1000 - 100,
      },
      data: {
        label: `${id}`,
      },
      style: {
        height: "60px",
        width: "60px",
        borderRadius: "50%",
      },
    };

    const edgeid = `e1-${id}`;

    const newEdge = {
      edgeid,
      source: "1",
      target: id,
    };
    reactFlowInstance.addNodes(newNode);
    reactFlowInstance.addEdges(newEdge);

    count++;
  }

  return (
    <div
      style={{ backgroundColor: "black", height: "100vh", zIndex: "1" }}
      className="home-wrapper"
    >
      Visualizer
      <ReactFlow
        defaultNodes={initialNodes}
        defaultEdges={initialEdges}
        defaultEdgeOptions={edgeOptions}
        fitView
        style={{
          backgroundColor: "#111111",
        }}
        connectionLineStyle={connectionLineStyle}
      />
    </div>
  );
}

export default Visualizer;
