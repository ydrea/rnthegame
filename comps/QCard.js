import React from "react";
import { Image, Text, View, Button, StyleSheet } from "react-native";
import { Card, TextInput } from "react-native-paper";
//
const styles = StyleSheet.create({
  input: {
    width: 200,
    padding: 8,
    margin: 10,
    backgroundColor: "#fff",
    fontSize: 20,
  },
  question: { backgroundColor: "darkorange", paddingHorizontal: 20 },
  inputContainer: { backgroundColor: "orange", flex: 1 },
  card: { backgroundColor: "yellow" },

  submit: { width: 80 },
});

//
function QCard({ sculpture, query, handleChange, handleSubmit }) {
  return (
    <>
      <View style={styles.card}>
        <Text style={styles.question}>{sculpture.question}</Text>
        <View>
          <Image source={require(`../assets/sculptures/${sculpture.img}`)} />
        </View>{" "}
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
            <View style={styles.submit}>
              <Button title="enter" onPress={() => handleSubmit} />
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
