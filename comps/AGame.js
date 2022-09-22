import { useState } from "react";
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
  const [search, searchSet] = useState("");
  const [check, checkSet] = useState(false);
  //control query
  const handleChange = (e) => {
    querySet(e.target.value);
  };
  //selectas
  const count = useSelector(selectCount);
  console.log(count);
  const sculptures = useSelector(selectSculptures);
  const sculpture = sculptures[`${count}`];
  // console.log(sculpture.name);
  const ime = sculpture.name;
  console.log(ime);

  const checkIt = (ime, search, check) => {
    if (search == ime) {
      checkSet(!check);
      console.log("hm?", check);
      console.log(search);
      console.log(ime);
    }
  };
  //submit query to search
  const handleSubmit = () => {
    searchSet(query);
    console.log(search);
    checkIt();
    querySet("");
  };

  //
  return (
    <ScrollView>
      <>
        <QCard
          sculpture={sculpture}
          query={query}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <View>
          {!check ? (
            <Text>{count}</Text>
          ) : (
            <View>
              <RCard sculpture={sculpture} />
            </View>
          )}
        </View>
      </>
    </ScrollView>
  );
}

export default AGame;
