import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import QCard from "./QCard";
import RCard from "./RCard";
//
import { selectSculptures } from "../redux/dataSlice";
import { selectCount } from "../redux/counterSlice";
import { incrementPoint } from "../redux/pointSlice";

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
    searchSet(query);
    //flip the switches
    checkSet(true);
    querySet("");
    //award points
    dispatch(incrementPoint());
  };
  //a bit of...
  useEffect(() => {
    //...cleanup for the next one
    checkSet(false);
  }, [count]);
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
