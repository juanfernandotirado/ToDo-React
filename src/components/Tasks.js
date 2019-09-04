import React, {Component} from 'react';

class Tasks extends Component{
    state={

    }

    render(){
        console.log(this.props.task)
        return(
            <div className="center">
                {this.props.task.map(item =>{
                    let task= item.task;
                    let id = item.id +1 ;
                    return(
                        <div  key ={item.id} className="card center">
                            <h3>Task {id}</h3>
                            <p>{task}</p>
                            <br/>
                            <button  className="btn blue" onClick={this.props.delete.bind(this,item.id)}>X</button>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Tasks;