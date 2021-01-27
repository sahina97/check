import React, { Component } from 'react'
import { 
    Container,
    Card,
    Button
} from 'react-bootstrap'

export class Login extends Component {
    constructor(){
        super();
        this.state={
            username:"",
            password:""
        }

    }

    myclick= ()=>{
        alert("login the user");
        console.log(this.state,"values")
    }
    onChange=(get)=>{
        this.setState({
          [get.target.name]: get.target.value
        })
    }

    render() {
        const{username,password}=this.state;
        return (
            <div>
                <Container>
                    <Card>
                        <Card.Title>USER LOGIN</Card.Title>
        <input type="text" name="username" placeholder="enter the username" onChange={this.onChange}></input>
        <input type="password" name="password" placeholder="enter the password" onChange={this.onChange} ></input>
                <Button variant="primary" onClick={this.myclick}> login</Button>
                </Card>
                </Container>
                
            </div>
        )
    }
}

export default Login
