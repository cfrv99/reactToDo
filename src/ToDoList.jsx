import React, { Component } from 'react'
import ToDoForm from './ToDoForm';
import ToDoItem from './ToDoItem';

export default class ToDoList extends Component {

    state={
        
        todo:[{task:"Reading Book",completed:false}]
    }

    addToDo=(taskText)=>{
        const requestData={
            task:taskText,
            completed:false
        }
        this.setState({todo:[...this.state.todo,requestData]})
    }

    completedHandler=(index)=>{
        this.setState({todo:[...this.state.todo.map((item,key)=>{
            if(key===index){
                return(
                    {...item,completed:true}
                )
            }
            else{
                return item;
            }
        })]})
    }
  render() {
    return (
      <> 
        <ToDoForm addToDo={this.addToDo}/>
        <br/>
        {
            this.state.todo.filter(i=>!i.completed).map((item,index)=>{
                return(

                    <ToDoItem completedHandler={this.completedHandler} key={index} index={index} todos={item}></ToDoItem>
                )
            })
        }
      </>
    )
  }
}
