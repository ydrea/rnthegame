import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, selectCount } from "../redux/counterSlice";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
//
const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderTopColor: "#e2ba42",
  },
  monitor: {
    color: "#e2ba42",
  },
  nav: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  bot: {
    backfaceVisibility: "hidden",
  },
  un: {
    borderColor: "#e2ba42",
    borderWidth: 2,
    borderRadius: 9,
  },
  lab: {
    color: "#e2ba42",
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
    <View style={styles.bot}>
      <View style={styles.un}>
        <Button mode="outlined" onPress={() => dispatch(decrement())}>
          <Text style={styles.lab}>&lArr; prev</Text>
        </Button>
      </View>
    </View>
  );
};

export const NButton = () => {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);

  return (
    <View style={styles.bot}>
      <View style={styles.un}>
        <Button mode="outlined" onPress={() => dispatch(increment())}>
          <Text style={styles.lab}>next &rArr;</Text>
        </Button>
      </View>
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
