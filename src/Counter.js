import React, { Component } from 'react';
import Increment from './Increment';
import Decrement from './Decrement';
import './counterCSS.css'

class Counter extends Component {
    constructor(props){
        super(props);
        
       this.state = {
           count : 0,
           name: "Rahul"
       }
    }

    incre(){
       

        this.setState({
            count: this.state.count + 1
        })
    }

    decre(){
       

        this.setState({
            count: this.state.count - 1
        })
    }

    

    render(){
        console.log(this.state)
        return(
            <div>
                <div className="countText">{this.state.count+"   "} 
                <Increment incre={() => this.incre()}/>
                <Decrement decre={() => this.decre()}/>    
                </div>          

                {/* <button onClick={() => this.increment()}>Increment</button>
                <button onClick={() => this.decrement()}>Decrement</button> */}
            </div>
        )
    }
}

export default Counter;