import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, selectCount } from "../redux/counterSlice";
import { View, Button, Text, StyleSheet } from "react-native";

function Counter() {
  return (
    <View>
      <Monitor />
      <Switch />
    </View>
  );
}

function Nav() {
  return (
    <View>
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
      <Text style={styles.body}>broj {count}</Text>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "white",
    backgroundColor: "#323",
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    backgroundColor: "white",
  },
  text: {
    fontSize: 20,
  },
});
