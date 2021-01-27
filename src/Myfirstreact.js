import React ,{Component}from"react";

class School extends Component{
    constructor(){
        super();
        this.state={
        student_id:100
        }
    }
    onchange=()=>{
        this.setState({
            student_id:this.state.student_id+1
        },()=>{console.log(this.state.student_id,"inside")})
    console.log(this.state.student_id,"outside")
   }  

render(){
    return(
        <div>
        <button onClick={this.onchange}> button clicked</button>
        </div>
    );
}
}
export default School;
