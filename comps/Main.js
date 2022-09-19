import React from "react";
import AGame from "./AGame";
import BGame from "./BGame";
//
function Main({ drop }) {
  console.log(drop);
  return <main className="main">{drop === "map" ? <BGame /> : <AGame />}</main>;
}

export default Main;
