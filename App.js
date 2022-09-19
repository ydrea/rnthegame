import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
//
import { Provider as PaperProvider } from "react-native-paper";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/store";
//
import Header from "./comps/Header";
import Main from "./comps/Main";
import Footer from "./comps/Footer";
//
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ReduxProvider store={store}>
        <PaperProvider>
          <Header />
          <View style={styles.body}>
            <Text style={styles.text}>Alo medo!</Text>
            <Main />
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
    color: "white",
    backgroundColor: "#323",
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    backgroundColor: "white",
  },
  text: {
    fontSize: "12px",
  },
});
