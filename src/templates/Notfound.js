import React from "react";
import Header from "../partials/Header/Header";
import Footer from "../partials/Footer";

class NotFound extends React.Component {
  render() {
    return (
      <div className="notfound">
        <Header></Header>
        <div className="content-area">
          <h1>Not Found</h1>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}
export default NotFound;
