import React, { Component } from "react";
import TodoItem from './TodoItem'

class Todos extends Component {
  state = {};
  render() {
    return this.props.todos.map((todo) => (
        <TodoItem todo={todo}/>
    ));
    }
  
}

export default Todos;
