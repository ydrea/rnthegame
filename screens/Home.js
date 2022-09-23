import React from "react";

import Header from "../comps/Header";
import Main from "../comps/Main";
import Footer from "../comps/Footer";
import { View } from "react-native";
//
function Home() {
  return (
    <View>
      <Header />
      <Main />
      <Footer />
    </View>
  );
}

export default Home;
