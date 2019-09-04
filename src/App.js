import React, {Component} from 'react';

import Form from './components/Form'
import Tasks from './components/Tasks'

import task from './list'


class App extends Component{
  state = {
    task: task
  }

  addTask = (task)=>{
    console.log(task);
    const newTask = {
      task:task,
      id: this.state.task.length
    }
    this.setState({
      task: [...this.state.task,newTask]
    })
  }

  delete= (id)=>{
    const newList= this.state.task.filter(item => item.id !== id);

    this.setState({
      task: newList
    })
  }

  render(){
    return (
      <div className="container">
        <Form addTask={this.addTask}/>
        <Tasks task={this.state.task} delete={this.delete}/>
      </div>
    )
  }
}

export default App;
