import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/store";
//
import Header from "./comps/Header";
import Main from "./comps/Main";
import Footer from "./comps/Footer";
import { useState } from "react";
import Play from "./comps/Play";
//
export default function App() {
  const [drop, dropSet] = useState("map");
  return (
    //
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ReduxProvider store={store}>
        <Header />
        <Main drop={drop} />
        <Footer />
        {/* <Play /> */}
      </ReduxProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "#e2ba42",
    backgroundColor: "#31328f",
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    color: "#e2ba42",
  },
  text: {
    fontSize: 20,
  },
});
//
