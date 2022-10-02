//
import { Image, Text, View, StyleSheet, TextInput } from "react-native";
import { images } from "../data/images";
import Botun from "./Botun";
//
import { useSelector } from "react-redux";
import { selectCount } from "../redux/counterSlice";
import { selectSculptures, selectCheck } from "../redux/dataSlice";
//
function QCard({ handleSubmit, query, querySet }) {
  //
  const count = useSelector(selectCount);
  const sculptures = useSelector(selectSculptures);
  const sculpture = sculptures[`${count}`];
  const ime = sculpture.name;
  const check = useSelector(selectCheck);
  // console.log("MU", check);
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
            <View style={styles.input}>
              <TextInput
                style={styles.inpuText}
                placeholder="response"
                type="text"
                value={query}
                onChangeText={(value) => {
                  querySet(value);
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
    paddingTop: 5,
    width: 150,
    height: 38,
  },
  inpuText: {
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
    alignItems: "center",
    // paddingVertical: 6,
    // marginVertical: 10,
  },
});
