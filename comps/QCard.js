import { Image, Text, View, StyleSheet, TextInput } from "react-native";
import { images } from "../data/images";
import { useSelector } from "react-redux";
import { selectCount } from "../redux/counterSlice";
import Botun from "./Botun";
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

//
function QCard({ sculpture, query, handleChange, handleSubmit }) {
  const count = useSelector(selectCount);

  //
  return (
    <>
      <View style={styles.card}>
        <Text style={styles.question}>{sculpture.question}</Text>
        <View style={styles.imgcontainer}>
          <Image style={styles.img} source={images.sculptures[count]} />
        </View>
        {sculpture.id > 0 ? (
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
    </>
  );
}

export default QCard;
