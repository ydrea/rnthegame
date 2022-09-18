import React from "react";
import AGame from "./AGame";
import BGame from "./BGame";
// import { Badge, Button, Input } from "reactstrap";
//
function Main({ drop }) {
  console.log(drop);
  return <main className="main">{drop === "map" ? <BGame /> : <AGame />}</main>;
}

export default Main;
