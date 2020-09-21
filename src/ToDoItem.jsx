import React, { Component } from 'react'

export default class ToDoItem extends Component {
  render() {
    return (
      <>
        <h1>{this.props.todos.task}</h1>
        <input type="checkbox" onClick={()=>this.props.completedHandler(this.props.index)}/>
      </>
    )
  }
}
