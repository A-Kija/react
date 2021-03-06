import { Component } from 'react';

import BoxDigit from './BoxDigit';
import ColorButton from './ColorButton';
import ColorHolder from './ColorHolder';
import {normalStyle} from '../shared/styles';

class ClasicBox extends Component {

    constructor(){
      super();
      this.state = {
        clock: new Date(),
        color: 'white'
      }
      console.log('CONSTRUCT <--- ClasicBox')
    }
  
    componentDidMount() {
      console.log('MOUNT')
      this.timerID = setInterval(()=>this.ticTac(), 100000);
    }
  
    componentWillUnmount() {
      console.log('UNMOUNT')
      clearInterval(this.timerID);
    }
  
    ticTac() {
      console.log('TIC-TAC')
      this.setState({clock: new Date()});
    }
  
    doClick3 = (color) => { // <--- keičia steitą
        this.setState({color: color});
    }
  
  
    render() {
      console.log('RENDER <--- ClasicBox')
      return(
        <div className="box" style={{borderColor:this.state.color}}>
          <BoxDigit boxStyle={normalStyle} number={this.state.clock.toLocaleTimeString()}/>
          <button className="myButton" onClick={() => this.doClick3('red')}>{this.props.button1Title}</button>
         <ColorButton actionMethod={this.doClick3} title={this.props.button2Title}></ColorButton>
        <ColorHolder showColor={this.state.clock.getSeconds()%2}/>
        </div>
      )
    }
  }

  export default ClasicBox;