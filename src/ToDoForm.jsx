import React, { Component } from 'react'

export default class ToDoForm extends Component {
    state={
        task:''
    }
    onChangeHandler=(e)=>{
        this.setState({task:e.target.value})
    }

    addHandler=()=>{ 
        this.props.addToDo(this.state.task)
        this.setState({task:''})
    }
  render() {
    return (
      <>
        <input value={this.state.task} onChange={this.onChangeHandler} type="text"/>
        <button onClick={this.addHandler}>Add</button>
      </>
    )
  }
}
