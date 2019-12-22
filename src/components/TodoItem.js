import React, { Component } from "react";



export class TodoItem extends Component {
    state = {  }
    render() { 
        return ( <div>
    <p>{this.props.todo.title}</p> 
        </div> );
    }
}
 
export default TodoItem;