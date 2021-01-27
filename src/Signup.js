import React, { Component } from 'react'
import {Button,Row,Col, Form} from 'react-bootstrap';
import './Signupstyle.css'


 class Signup extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
              email:'',
             password:''
        }
    }
    onChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    onSubmit=()=>{
        alert("your data store")
        console.log(this.state)
    }
    
    
    render() {
        const{username,email,password}=this.state;
        return (
            <div>
                <div className="container">
                    
                    <Row>
                        <Col >
                        
                            <Row className="bigtext">Build For Developers </Row>
                            <Row className="smalltext">Github is a development platform inspired by the way you work.
                            From open source to bussiness,you can host and review code.</Row>
                        </Col>
                        <Col >
                        <h1>SIGNUP PAGE</h1>
                        <div><input type="text" name="username" value={username} onChange={this.onChange} placeholder="pick a user name"></input></div>
                            <div><input type="email"name="email" value={email}onChange={this.onChange} placeholder="your email address"></input></div>
                            <div><input type="password"name="password"value={password}onChange={this.onChange} placeholder="enter a password"></input></div>
                            <div><button type="button"onClick={this.onSubmit}>sign up </button></div>
                            
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default Signup
