import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, selectCount } from "../redux/counterSlice";
import { selectPoint } from "../redux/pointSlice";
import { View, Text, StyleSheet } from "react-native";
import Botun from "./Botun";
import { Svic } from "./Svic";
//
const styles = StyleSheet.create({
  container: {
    // borderTopWidth: 1,
    borderTopColor: "#e2ba42",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-around",
  },
  bottom: { flexDirection: "row" },
  monitor: {
    color: "#e2ba42",
    padding: 6,
    fontSize: 30,
  },
  nav: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  botun: { marginHorizontal: 16 },
});
//
function Counter() {
  return (
    <View>
      <View style={styles.container}>
        <Switch />
      </View>
      <View style={styles.bottom}>
        <Svic />
        <Monitor />
      </View>
    </View>
  );
}

function Nav() {
  return (
    <View style={styles.nav}>
      <PButton />
      <NButton />
    </View>
  );
}
//
export const Switch = () => {
  const count = useSelector(selectCount);

  if (count === 0) {
    return <NButton />;
  } else if (count < 8) {
    return <Nav />;
  } else {
    return <PButton />;
  }
};

export const PButton = () => {
  const dispatch = useDispatch();
  // const count = useSelector(selectCount);

  return (
    <View style={styles.botun}>
      <Botun text="&lArr; prev" onPress={() => dispatch(decrement())}></Botun>
    </View>
  );
};

export const NButton = () => {
  const dispatch = useDispatch();
  // const count = useSelector(selectCount);

  return (
    <View style={styles.botun}>
      <Botun text="next &rArr;" onPress={() => dispatch(increment())}></Botun>
    </View>
  );
};

export const Monitor = () => {
  const count = useSelector(selectCount);
  const point = useSelector(selectPoint);
  return (
    <View style={styles.bottom}>
      {/* <Botun style={styles.monitor} text={point}></Botun> */}
      <Text
        style={{
          fontSize: 22,
          color: "#e2ba42",
          marginLeft: 33,
          backgroundColor: "#33128f",
        }}
      >
        {point}/{count}
      </Text>
      {/* <Botun style={styles.monitor} text={count}></Botun> */}
    </View>
  );
};

export default Counter;
