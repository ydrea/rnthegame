import React, { useState } from "react";
import { useSelector } from "react-redux";
import QCard from "./QCard";
import RCard from "./RCard";
//
import { selectSculptures } from "../redux/dataSlice";
import { selectCount } from "../redux/counterSlice";
//
import { View, ScrollView, Text } from "react-native";
//local state
function AGame() {
  const [query, querySet] = useState("");
  const [search, searchSet] = useState();
  const handleChange = (e) => {
    querySet(e.target.value);
  };
  //
  const handleSubmit = () => {
    searchSet(query);
    querySet("");
  };

  //selectas
  const count = useSelector(selectCount);
  console.log(count);
  const sculptures = useSelector(selectSculptures);
  const sculpture = sculptures[`${count}`];
  console.log(sculpture);
  // //
  return (
    <ScrollView>
      <QCard
        sculpture={sculpture}
        query={query}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {search === sculpture.name ? (
        <RCard sculpture={sculpture} />
      ) : (
        <View>
          <Text>{count}</Text>
        </View>
      )}
    </ScrollView>
  );
}

export default AGame;
