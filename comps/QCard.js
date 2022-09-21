import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import { Button, Card, TextInput } from "react-native-paper";
import { images } from "../data/images";
import { useSelector } from "react-redux";
import { selectCount } from "../redux/counterSlice";
import Botun from "./Botun";
//
const styles = StyleSheet.create({
  input: {
    width: 200,
    height: 34,
    backgroundColor: "#fff",
    fontSize: 15,
  },
  img: {
    // paddingHorizontal: 30,
    width: 200,
    height: 150,
  },
  question: {
    paddingHorizontal: 10,
    color: "#e2ba42",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "baseline",
    paddingVertical: 12,
  },
  submit: { width: 100 },
});

//
function QCard({ sculpture, query, handleChange, handleSubmit }) {
  // const path = `../assets/sculptures/${sculpture.img}`;
  // console.log(path);
  const count = useSelector(selectCount);

  //
  return (
    <>
      <View style={styles.card}>
        <Text style={styles.question}>{sculpture.question}</Text>
        <Image style={styles.img} source={images.sculptures[count]} />
        {sculpture.id > 0 ? (
          <View style={styles.inputContainer}>
            <View>
              <TextInput
                style={styles.input}
                placeholder="Enter response"
                type="text"
                value={query}
                onChange={handleChange}
              />
            </View>
            <Botun text="submit" onPress={() => handleSubmit()}></Botun>
          </View>
        ) : (
          <View>
            <Text style={styles.question}>
              Start playing by clicking "Next" below{" "}
            </Text>
          </View>
        )}
      </View>
      {/* </View> */}
    </>
  );
}

export default QCard;
