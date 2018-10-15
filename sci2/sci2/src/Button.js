import React, { Component } from 'react';

class Button extends Component{
    constructor(props){
     super(props) 
     this.state = { counter: 1 }; 
    }
    
    
    handleClick = () => {
    	this.setState({
      counter: this.state.counter  + 1
      });
    	
    };
  
  render(){
    return(
      <button className='navButton' onClick={this.props.onClick} >
      	{this.state.counter}
      </button>
    );
  }

}


export default Button;