import React, { Component } from 'react'
import axios from 'axios'

export class Axios extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data:[],
    
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>{
            this.setState({
                data:response.data
            }, ()=>{console.log(this.state.data);})
                
            }
        )
    }

    render() {
        const {data}=this.state
        return (
            <div>
                <h1>WELCOME USER</h1> 
                {data.map((object,key)=> <h1 key={object.id} >title:{object.title}</h1>)}
            </div>
        )
    }
}

export default Axios
