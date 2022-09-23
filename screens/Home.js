import React from "react";
//
import Header from "../comps/Header";
import Main from "../comps/Main";
import Footer from "../comps/Footer";
import { View } from "react-native";
//
function Home({ navigation }) {
  console.log(navigation);
  return (
    <View>
      <Header navigation={navigation} />
      <Main />
      <Footer />
    </View>
  );
}

export default Home;
