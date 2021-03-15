import { Component } from 'react';

import MagicButton from './MagicButton';

class TwoButtonBox extends Component {

    constructor(){
      super();
      this.state = {
        color1: 'red',
        color2: 'orange'
      }
      console.log('CONSTRUCT <--- TwoButtonBox')
    }
  

  
    changeColor1 = () => { // <--- keičia steitą
        if ('red' === this.state.color1) {
            this.setState({color1: 'orange'});
        }
        else {
            this.setState({color1: 'red'});
        }
    }

    changeColor2 = () => { // <--- keičia steitą
        if ('red' === this.state.color2) {
            this.setState({color2: 'orange'});
        }
        else {
            this.setState({color2: 'red'});
        }
    }


  
  
    render() {
      return(
        <div className="box" style={{borderColor:this.state.color}}>
        <MagicButton action={this.changeColor1} color={this.state.color2} bname={'ONE'}></MagicButton>
        <MagicButton action={this.changeColor2} color={this.state.color1} bname={'TEN'}></MagicButton>
        </div>
      )
    }
  }

  export default TwoButtonBox;