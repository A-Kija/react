import InsideBigBox from "./InsideBigBox";
import { Component } from 'react';

class InsideBigBoxMars extends Component {

    constructor(){
      super();
      this.state = {
      }
    }

    render() {
      return(
        <InsideBigBox
            title={'Hello from Mars!'}
            text={'For the six participants in a NASA-funded behavioral research study that simulates a trip to Mars, the hope is that the sacrifices they endure benefit the greater good.'}
        />
      )
    }
  }

  export default InsideBigBoxMars;