import React from "react";
import { Image, Text, View } from "react-native";
import { Card, TextInput, Button } from "react-native-paper";
//
function QCard({ sculpture, query, handleChange, handleSubmit }) {
  return (
    <>
      {/* <View> */}
      <Card>
        <Text>{sculpture.question}</Text>
        <View>
          <Image source={require(`../assets/sculptures/${sculpture.img}`)} />
        </View>{" "}
        {sculpture.id > 0 ? (
          <View>
            <form className="form" onSubmit={handleSubmit}>
              <TextInput
                className="input"
                placeholder="Enter response"
                type="text"
                value={query}
                onChange={handleChange}
              />
              <Button title="enter" type="submit" />
            </form>
          </View>
        ) : (
          <View>
            <Text>Start playing by clicking "Next" below </Text>
          </View>
        )}
      </Card>
      {/* </View> */}
    </>
  );
}

export default QCard;
