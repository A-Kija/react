import { Component } from 'react';

import Li from './Li';
import {digits, letters} from '../shared/ul';
import { v4 as uuidv4 } from 'uuid';



class UlBox extends Component {

    constructor(){
      super();
      this.state = {
        color: 'white'
      }
      console.log('CONSTRUCT <--- ClasicBox')
    }
  
    render() {
      return(
        <ul className="box" style={{borderColor:this.state.color}}>
            {
                letters.map((digit) => <Li key={uuidv4()} li={digit.d}></Li>) // <--- cia reikia key propso
            }
        </ul>
      )
    }
  }

  export default UlBox;