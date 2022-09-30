import { useSelector, useDispatch } from "react-redux";
import QCard from "./QCard";
import RCard from "./RCard";
//
//
import { View, ScrollView, Text } from "react-native";
import { selectCheck } from "../redux/pointSlice";
import { selectCount } from "../redux/counterSlice";
import { selectSculptures } from "../redux/dataSlice";

//local state
function AGame() {
  const count = useSelector(selectCount);
  const sculptures = useSelector(selectSculptures);
  const sculpture = sculptures[`${count}`];
  const ime = sculpture.name;
  const check = useSelector(selectCheck);
  console.log("MU", check);
  //
  return (
    <ScrollView>
      <>
        <QCard />
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
