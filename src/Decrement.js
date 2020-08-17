import React, { Component } from 'react';


// const Increment = props => {
//     return(
//         <button className="inc" onClick={props.incre}>
//             Increment
//             </button>
//     );
// }

class Decrement extends Component {
    constructor(props){
        super(props);
    }

    click = () => {
        this.props.decre();
    }

    render() {
     return   <button className="dec" onClick={this.click}>
          -
        </button>
    }
}

export default Decrement;