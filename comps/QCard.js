import { useEffect, useState } from "react";
//
import { Image, Text, View, StyleSheet, TextInput } from "react-native";
import { images } from "../data/images";
import { useSelector, useDispatch } from "react-redux";
import { selectCount } from "../redux/counterSlice";
import Botun from "./Botun";
//
import {
  selectSculptures,
  selectCheck,
  selectPoints,
  addToPoints,
  checkIt,
} from "../redux/dataSlice";
// import { addToPoints, selectPoints } from "../redux/pointSlice";
//
function QCard() {
  const dispatch = useDispatch();
  //selectax
  const count = useSelector(selectCount);
  const sculptures = useSelector(selectSculptures);
  const sculpture = sculptures[`${count}`];
  const ime = sculpture.name;
  console.log("ime:", ime);
  const points = useSelector(selectPoints);
  console.log("points:", points);
  const check = useSelector(selectCheck);
  //
  const [query, querySet] = useState("");
  const [search, searchSet] = useState("");
  //control query
  console.log("query:", query);
  //submit query to search
  const handleSubmit = () => {
    searchSet(query.trim());
    console.log("search-2:", search);
    dispatch(addToPoints(search));
    console.log("points-2:", points);
    dispatch(checkIt());
    console.log("check-2:", check);
    //flip the switches
    if (search == ime) {
      dispatch(checkIt(true));
      console.log("check:", check);
      //award points
    } else {
      console.log("nijee");
    }
  };

  //a bit of...
  useEffect(() => {
    querySet("");
    // ...cleanup for the next one
    dispatch(checkIt(false));
    console.log("check-2:", check);
  }, [count]);
  //

  //
  return (
    <>
      <View style={styles.card}>
        <Text style={styles.question}>{sculpture.question}</Text>
        <View style={styles.imgcontainer}>
          <Image style={styles.img} source={images.sculptures[count]} />
        </View>
        {sculpture.id > 0 && sculpture.id < sculptures.length - 1 ? (
          <View style={styles.inputContainer}>
            <View>
              <TextInput
                style={styles.input}
                placeholder="response"
                type="text"
                value={query}
                onChangeText={(value) => {
                  querySet(value);
                  console.log("query-2", query);
                }}
              />
              <Text style={styles.question}>{query}</Text>
            </View>
            <Botun text="submit" onPress={() => handleSubmit()}></Botun>
          </View>
        ) : (
          <View>
            <Text style={styles.question}>
              Start playing by clicking on one of the buttons below{" "}
            </Text>
          </View>
        )}
      </View>
    </>
  );
}

export default QCard;

//
const styles = StyleSheet.create({
  input: {
    width: 150,
    height: 34,
    backgroundColor: "#fff",
    fontSize: 16,
  },
  imgcontainer: { justifyContent: "center" },
  img: {
    width: 324,
    height: 240,
    padding: 10,
    backgroundColor: "#e2ba42",
    borderColor: "#e2ba42",
    borderStyle: "solid",
    borderWidth: 5,
    marginVertical: 10,
  },
  question: {
    paddingHorizontal: 10,
    color: "#e2ba42",
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "baseline",
    paddingVertical: 6,
    marginVertical: 10,
  },
});
