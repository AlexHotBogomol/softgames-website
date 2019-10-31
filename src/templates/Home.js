import React from "react";
import Header from "../partials/Header/Header";
import { Provider } from "../context/Context";
import Footer from "../partials/Footer";

const Home = props => {
  console.log(props);
  return (
    <Provider router={props}>
      <Header currentUrl={props.match.url} />
      Home
      <Footer/>
    </Provider>
  );
};

export default Home;
