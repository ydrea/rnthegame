import React, { useState } from "react";
import { useSelector } from "react-redux";
import QCard from "./QCard";
import RCard from "./RCard";
//
import { selectSculptures } from "../redux/dataSlice";
import { selectCount } from "../redux/counterSlice";
//
import { View } from "react-native";
//
function AGame() {
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
    <View>
      <QCard
        sculpture={sculpture}
        query={query}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {search === sculpture.name ? <RCard sculpture={sculpture} /> : null}
    </View>
  );
}

export default AGame;
