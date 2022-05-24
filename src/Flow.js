import ReactFlow, { useNodesState, useEdgesState, MiniMap, Controls } from "react-flow-renderer";
import { useState } from "react";

//Images
import LinkVariant from './assets/link-variant.svg';
import DataBase from './assets/database.svg';

// const initialNodes = [
//   {
//     id: '1',
//     type: 'input',
//     data: { label: 'Input Node' },
//     position: { x: 250, y: 25 },
//   },

//   {
//     id: '2',
//     // you can also pass a React component as a label
//     data: { label: <div>Default Node</div> },
//     position: { x: 100, y: 125 },
//   },
//   {
//     id: '3',
//     type: 'output',
//     data: { label: 'Output Node' },
//     position: { x: 250, y: 250 },
//   },
// ];

// const initialEdges = [
//   { id: 'e1-2', source: '1', target: '2' },
//   { id: 'e2-3', source: '2', target: '3', animated: true },
// ];

const initialNodes = [
  {
    id: "1",
    position: { x: 50, y: 0 },
    data: {
      label: (
        <div style={{ position: "relative" }}>
          <div className="node-container circle light-blue">
            <img src={LinkVariant} width="15px" height={'15px'} />
          </div>
          <div className="node-description">
            <p>
              Visitor opens a specific page
            </p>
          </div>
        </div>
      )
    },
    draggable: true,
    sourcePosition: 'right',
    targetPosition: 'left'
  },
  {
    id: "2",
    position: { x: 250, y: 0 },
    data: {
      label: (
        <div style={{ position: "relative" }}>
          <div className="node-container dark-blue">
            <img src={DataBase} width="15px" height="15px" />
          </div>
          <div className="node-description">
            <p>
              Decision (Card Messages)
            </p>
          </div>
        </div>

      )
    },
    draggable: true,
    sourcePosition: 'right',
    targetPosition: 'left'
  },
  {
    id: "3",
    position: { x: 250, y: 150 },
    data: {
      label: (
        <div style={{ position: "relative" }}>
          <div className="node-container circle light-blue">
            <img src={LinkVariant} width="15px" height={'15px'} />
          </div>
          <div className="node-description">
            <p>
              Visitor opens a specific page
            </p>
          </div>
        </div>
      )
    },
    draggable: true,
    sourcePosition: 'right',
    targetPosition: 'left'
  },
  {
    id: "4",
    position: { x: 450, y: 150 },
    data: {
      label: (
        <div style={{ position: "relative" }}>
          <div className="node-container dark-blue">
            <img src={DataBase} width="15px" height="15px" />
          </div>
          <div className="node-description">
            <p>
              Decision (Card Messages)
            </p>
          </div>
        </div>

      )
    },
    draggable: true,
    sourcePosition: 'right',
    targetPosition: 'left'
  },
  {
    id: "5",
    position: { x: 650, y: 150 },
    data: {
      label: (
        <div style={{ position: "relative" }}>
          <div className="node-container circle light-blue">
            <img src={LinkVariant} width="15px" height={'15px'} />
          </div>
          <div className="node-description">
            <p>
              Visitor opens a specific page
            </p>
          </div>
        </div>
      )
    },
    draggable: true,
    sourcePosition: 'right',
    targetPosition: 'left'
  },
  {
    id: "6",
    position: { x: 850, y: 150 },
    data: {
      label: (
        <div style={{ position: "relative" }}>
          <div className="node-container dark-blue">
            <img src={DataBase} width="15px" height="15px" />
          </div>
          <div className="node-description">
            <p>
              Decision (Card Messages)
            </p>
          </div>
        </div>

      )
    },
    draggable: true,
    sourcePosition: 'right',
    targetPosition: 'left'
  },
  // {
  //   id: "3",
  //   position: { x: 250, y: 200 },
  //   data: {
  //     label: (
  //       <div className="node-container">
  //         <p>Three</p>
  //       </div>
  //     )
  //   },
  //   draggable: true,
  // },
  // {
  //   id: "4",
  //   position: { x: 300, y: 250 },
  //   data: {
  //     label: (
  //       <div className="node-container">
  //         <p>One</p>
  //       </div>
  //     )
  //   },
  //   draggable: true,
  // },
  // {
  //   id: "5",
  //   position: { x: 350, y: 300 },
  //   data: {
  //     label: (
  //       <div className="node-container">
  //         <p>One</p>
  //       </div>
  //     )
  //   },
  //   draggable: true,
  // },
  // {
  //   id: "6",
  //   position: { x: 400, y: 350 },
  //   data: {
  //     label: (
  //       <div className="node-container">
  //         <p>One</p>
  //       </div>
  //     )
  //   },
  //   draggable: true,
  // },
];

const initialEdges = [
  { id: "1-2", source: "1", target: "2" },
  { id: "1-6", source: "3", target: "4" },
  { id: "1-5", source: "4", target: "5" },
  { id: "1-3", source: "5", target: "6" },
  // { id: "2-3", source: "2", target: "3" },
  // { id: "2-4", source: "2", target: "4" },
  // { id: "3-4", source: "3", target: "4" },
  // { id: "3-5", source: "3", target: "5" },
  // { id: "3-1", source: "3", target: "1" },
  // { id: "4-1", source: "4", target: "1" },
  // { id: "5-4", source: "5", target: "4" },
];
export default function App({ }) {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);


  const onConnect = ({ ...args }) => {
    console.log("Connect Change");
    console.log(args);
  };
  return (
    <>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <MiniMap />
        <Controls />
      </ReactFlow>
      {/* Hey */}
    </>
  );
}
