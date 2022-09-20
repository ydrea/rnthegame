import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, selectCount } from "../redux/counterSlice";
import { View, Button, Text, StyleSheet } from "react-native";
//
const styles = StyleSheet.create({
  container: {
    backgroundColor: "orange",
  },
  monitor: {
    backgroundColor: "white",
  },
  nav: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
//
function Counter() {
  return (
    <View style={styles.container}>
      <Monitor />
      <Switch />
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
  const count = useSelector(selectCount);

  return (
    <View>
      <Button onPress={() => dispatch(decrement())} title="prev" />
    </View>
  );
};

export const NButton = () => {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);

  return (
    <View>
      <Button onPress={() => dispatch(increment())} title="next" />
    </View>
  );
};

export const Monitor = () => {
  const count = useSelector(selectCount);

  return (
    <View>
      <Text style={styles.monitor}>broj {count}</Text>
    </View>
  );
};

export default Counter;
