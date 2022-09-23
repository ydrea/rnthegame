import React from "react";
//
import Header from "../comps/Header";
import Main from "../comps/Main";
import Footer from "../comps/Footer";

//
function Home({ navigation }) {
  // console.log(navigation);
  return (
    <>
      <Header navigation={navigation} />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
