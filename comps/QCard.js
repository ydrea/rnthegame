import React from "react";
import { Image, Text, View, Button, StyleSheet } from "react-native";
import { Card, TextInput } from "react-native-paper";
//
const styles = StyleSheet.create({
  input: {
    width: 200,
    height: 34,
    backgroundColor: "#fff",
    fontSize: 15,
  },
  question: { backgroundColor: "orange", paddingHorizontal: 20 },
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
  return (
    <>
      <View style={styles.card}>
        <Text style={styles.question}>{sculpture.question}</Text>

        <Image
          style={{ width: 200, height: 150 }}
          source={require(`../assets/sculptures/${sculpture.img}`)}
        />
        {console.log("path", `../assets/sculptures/${sculpture.img}`)}
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
              <Button title="enter" onPress={() => handleSubmit()} />
            </View>
            <View style={styles.submit}>
              {/* <Button title="enter" onPress={() => handleSubmit} /> */}
            </View>
          </View>
        ) : (
          <View>
            <Text>Start playing by clicking "Next" below </Text>
          </View>
        )}
      </View>
      {/* </View> */}
    </>
  );
}

export default QCard;
