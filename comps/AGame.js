import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import QCard from "./QCard";
import RCard from "./RCard";
//
import { selectSculptures } from "../redux/dataSlice";
import { selectCount } from "../redux/counterSlice";
import { addToPoints } from "../redux/pointSlice";

//
import { View, ScrollView, Text } from "react-native";
//local state
function AGame() {
  const [query, querySet] = useState("");
  const [search, searchSet] = useState("");
  const [check, checkSet] = useState(false);
  const dispatch = useDispatch();

  //control query
  const handleChange = (e) => {
    querySet(e.target.value);
  };
  //selectas
  const count = useSelector(selectCount);
  const sculptures = useSelector(selectSculptures);
  const sculpture = sculptures[`${count}`];
  const ime = sculpture.name;

  //submit query to search
  const handleSubmit = () => {
    console.log(query);
    searchSet(query);
    console.log(search);
    //flip the switches

    // if (search == ime) {
    //   checkSet(true);
    //   //award points
    //   dispatch(addToPoints());
    // }
    // querySet("");
  };

  //a bit of...
  useEffect(() => {
    handleSubmit();

    //...cleanup for the next one
    // checkSet(false);
  }, [count, search, query]);
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
            <View></View>
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
