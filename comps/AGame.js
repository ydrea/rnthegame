import React, { useCallback, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import QCard from "./QCard";
import RCard from "./RCard";
//
import { selectSculptures } from "../redux/dataSlice";
import { selectCount } from "../redux/counterSlice";
//
function AGame() {
  //local stejt
  const [query, querySet] = useState("");
  const [search, searchSet] = useState();
  const handleChange = (e) => {
    querySet(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    searchSet(query);
    console.log(search);
    querySet("");
    console.log(search);
  };

  //selectas
  const count = useSelector(selectCount);
  console.log(count);
  const sculptures = useSelector(selectSculptures);
  const sculpture = sculptures[`${count}`];
  console.log(sculpture);
  // //
  return (
    <div className="cards">
      <QCard
        sculpture={sculpture}
        query={query}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {search == sculpture.name ? <RCard sculpture={sculpture} /> : null}
    </div>
  );
}

export default AGame;
