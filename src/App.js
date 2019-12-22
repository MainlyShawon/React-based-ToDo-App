import React, { Component } from "react";
import Todos from "./components/Todos.js";

import "./App.css";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Complete your homework!",
        completed: false
      },
      {
        id: 2,
        title: "Exercise!",
        completed: false
      },
      {
        id: 3,
        title: "Take cold shower!",
        completed: false
      },
      {
        id: 4,
        title: "Talk to your Mom!",
        completed: false
      }
    ]
  };
  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
