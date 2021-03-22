import { Component } from 'react';

import Li from './Li';
import ListButton from './ListButton';
import {letters} from '../shared/ul';
import { v4 as uuidv4 } from 'uuid';



class UlBox extends Component {

    constructor(){
      super();
      this.state = {
        color: 'white',
        list: letters
      }
      console.log('CONSTRUCT <--- ClasicBox')
    }

     doSort = (method) => {
      console.log(method)

      const list = this.state.list;
      if ('sort' === method) {
        this.setState({
          list: list.sort((a,b)=>a.d > b.d ? 1 : -1)
      })
      
      }
      if ('unsort' === method) {
        this.setState({
          list: list.sort(()=> Math.random() > .5 ? 1 : -1)
      })
  }

    }
  
    render() {
      return(
        <>
        <ul className="box" style={{borderColor:this.state.color}}>
            {
                this.state.list.map((digit) => <Li key={uuidv4()} li={digit.d}></Li>) // <--- cia reikia key propso
            }
        </ul>
        <div className="button-holder">
          <ListButton sort={this.doSort} action={'sort'} name={'SORT'}/>
          <ListButton sort={this.doSort} action={'unsort'} name={'unSORT'}/>
        </div>
        </>
      )
    }
  }

  export default UlBox;