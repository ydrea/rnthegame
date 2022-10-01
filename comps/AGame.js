import { useState, useEffect } from "react";
import { addToPoints, useSelector, useDispatch } from "react-redux";
import QCard from "./QCard";
import RCard from "./RCard";
//
import { View, ScrollView, Text } from "react-native";
import { selectCount } from "../redux/counterSlice";
import {
  selectPoints,
  selectSculptures,
  selectCheck,
} from "../redux/dataSlice";

function AGame() {
  const dispatch = useDispatch();
  //selectax
  const count = useSelector(selectCount);
  const sculptures = useSelector(selectSculptures);
  const sculpture = sculptures[`${count}`];
  const ime = sculpture.name;
  console.log("ime:", ime);
  const points = useSelector(selectPoints);
  console.log("points:", points.length);
  const check = useSelector(selectCheck);
  console.log("check", check);
  //local
  const [query, querySet] = useState("");
  const [search, searchSet] = useState("");
  //control query
  const cleanUp = () => {
    querySet(query.trim());
    console.log("query:", query);
  };
  //play block
  const handleSubmit = () => {
    cleanUp();
    searchSet(query);
    if (search === ime) {
      //
      dispatch(
        addToPoints({
          id: count,
          check: !check,
          points: search,
        })
      );
      console.log("nijee");
    }
  };
  //
  //a bit of...
  useEffect(() => {
    // ...cleanup for the next one
    querySet("");
  }, [count]);
  //

  //
  return (
    <ScrollView>
      <>
        <QCard handleSubmit={handleSubmit} query={query} querySet={querySet} />
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
