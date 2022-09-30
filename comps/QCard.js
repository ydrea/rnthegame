import { useEffect, useState } from "react";
//
import { Image, Text, View, StyleSheet, TextInput } from "react-native";
import { images } from "../data/images";
import { useSelector } from "react-redux";
import { selectCount } from "../redux/counterSlice";
import Botun from "./Botun";
//
import { selectSculptures } from "../redux/dataSlice";
import { addToPoints } from "../redux/pointSlice";
//
function QCard() {
  //selectax
  const count = useSelector(selectCount);
  const sculptures = useSelector(selectSculptures);
  const sculpture = sculptures[`${count}`];
  const ime = sculpture.name;
  //
  const [query, querySet] = useState("");
  //control query
  const handleChange = (e) => {
    querySet(e.target.value);
    console.log(query);
  };
  //submit query to search
  // const handleSubmit = () => {
  //
  //   searchSet(query);
  //   console.log(search);
  //flip the switches

  // if (search == ime) {
  //   checkSet(true);
  //   //award points
  //   dispatch(addToPoints());
  // }
  // querySet("");
  // };

  //a bit of...
  // useEffect(() => {
  //   handleSubmit();

  //...cleanup for the next one
  // checkSet(false);
  // }, [count, search, query]);
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
                onChange={handleChange}
              />
            </View>
            <Botun
              text="submit"
              // onPress={() => handleSubmit()}
            ></Botun>
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
