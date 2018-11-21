import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./containners/Navigation";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <div className="container content-container">
          asdasda
        </div>
      </React.Fragment>
    );
  }
}

export default App;
