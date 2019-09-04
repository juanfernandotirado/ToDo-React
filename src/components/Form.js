import React, {Component} from 'react';

class Form extends Component{

    state = {
        task: ''
    }

    onChange = (e)=>{

        this.setState({
            [e.target.name] : e.target.value
        })
        

    }

    onSubmit = (e)=>{
        e.preventDefault();
        console.log(this.state)
        this.props.addTask(this.state.task)
    }

    render(){
        return(
            <div className="form">
                <h1>This is a Form</h1>
                <form onSubmit={this.onSubmit}>
                    <label htmlFor="task">Task</label>
                    <input type="text" onChange={this.onChange} value={this.state.task} name="task"/>
                    <button type="submit"  className="btn green">Submit</button>
                </form>
            </div>
        )
    }
}

export default Form;