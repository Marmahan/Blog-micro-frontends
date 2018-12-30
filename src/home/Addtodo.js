import React, {Component} from 'react'


class Addtodo extends Component{
    state={
        content:''
    }
    handlechange = (e) =>{
        this.setState({
           content:e.target.value 
        })
    }
    handlesubmit =(e)=>{
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content: ''
        })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handlesubmit}>
                    <label>Add new To do:</label>
                    <input type="text" onChange={this.handlechange} value={this.state.content}/>
                </form>
            </div>
        )
    }
}

export default Addtodo;