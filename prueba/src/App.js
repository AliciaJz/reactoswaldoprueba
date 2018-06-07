import React, { Component } from "react";
import "./App.css";

import HomePage from "./components/home/HomePage";
import UserProfile from "./components/userprofile/UserProfile";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomePage />
        <UserProfile />
      </div>
    );
  }
}

export default App;
