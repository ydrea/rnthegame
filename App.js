import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/store";

import { enableMapSet } from "immer";
//
import Header from "./comps/Header";
import Main from "./comps/Main";
import Footer from "./comps/Footer";
import React from "react";
//
export default function App() {
  enableMapSet();
  return (
    //
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ReduxProvider store={store}>
        <Header />
        <Main />
        <Footer />
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
