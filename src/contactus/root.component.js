import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import axios from 'axios';

class Contactus extends React.Component{
  
  state={
    name:'',
    email:'',
    content:'',
    error:''
  }

  handlenamechange =(e)=>{
    this.setState({
      name:e.target.value
    })
  } 

  handleemailchange =(e)=>{
    this.setState({
      email:e.target.value
    })
  } 

  handlecontentchange =(e)=>{
    this.setState({
      content:e.target.value
    })
  } 

  handlesubmit =(e)=>{
    let err='';
    e.preventDefault();
    axios.post('http://localhost:1113/contact',{
      name: this.state.name,
      "email": this.state.email,
      "content": this.state.content,
    }).then((response) =>{
      console.log(response);
      this.setState({
        error:response
      })
    })
  }

  render(){
    return(
      <div className='container'>
        <div className="row">
          <div className="card-panel center">
            <i className="medium material-icons">email</i>
            <h5 className='center black-text'>Contact us</h5> 
          </div>
        </div>



        <div className="row">
          <div className="card-panel center">
            <form onSubmit={this.handlesubmit}>
              <div className="input-field">
                <input type="text" name="name" id="name" onChange={this.handlenamechange}/>
                <label htmlFor="name">Name</label>
              </div>

              <div className="input-field">
                <div className="left-align">
                  <input id="email" type="email" className="validate" required="" aria-required="true" onChange={this.handleemailchange}/>
                    <label htmlFor="email">Email</label>
                </div>
              </div>

              <div className="input-field">
                <textarea  name="content" id="content" className="materialize-textarea" onChange={this.handlecontentchange}/>
                <label htmlFor="content">Message</label>
              </div>

              <div className="left-align">  {/* This div wrapper is necessary for the left alignment */}
                <input type="button" onClick={this.handlesubmit}value="Send" className="btn"/>
              </div>

            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Contactus;