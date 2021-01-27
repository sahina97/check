import React, { Component } from 'react'

export class Ref extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:""
        }
    }
    
    render() {

        return (
            <div>
              <input type="text"></input>
            </div>
        )
    }
}

export default Ref
