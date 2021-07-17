import React from "react";
import "./App.css";
import Start from "./Start";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "포뇨",
    };
  }

  render() {
    return (
      <div className="App">
        <Start name={this.state.name} />
      </div>
    );
  }
}

export default App;
