import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
//
import { Provider as PaperProvider } from "react-native-paper";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/store";
//
import Header from "./comps/Header";
import Main from "./comps/Main";
import Footer from "./comps/Footer";
import { useState } from "react";
//
export default function App() {
  const [drop, dropSet] = useState("monument");
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ReduxProvider store={store}>
        <PaperProvider>
          <Header />
          <View style={styles.body}>
            <Main drop={drop} />
          </View>
          <Footer />
        </PaperProvider>
      </ReduxProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "#fff",
    backgroundColor: "#323",
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 20,
  },
});
