import React, { Component } from 'react';


// const Increment = props => {
//     return(
//         <button className="inc" onClick={props.incre}>
//             Increment
//             </button>
//     );
// }

class Increment extends Component {
    constructor(props){
        super(props);
    }

    click = () => {
        this.props.incre();
    }

    render() {
     return   <button className="inc" onClick={this.click}>
          +
        </button>
    }
}

export default Increment;