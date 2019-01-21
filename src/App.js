import React, { Component } from "react";
import NavBarMenuAndLogo from "./components/NavBarMenuAndLogo";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <NavBarMenuAndLogo />
        </header>
      </div>
    );
  }
}

export default App;
