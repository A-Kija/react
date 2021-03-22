import InsideBigBox from "./InsideBigBox";
import { Component } from 'react';

class InsideBigBoxAfrica extends Component {

    constructor(){
      super();
      this.state = {
      }
    }

    render() {
      return(
        <InsideBigBox
            title={'Hello from Africa!'}
            text={'I hear the drums echoing tonight But she hears only whispers of some quiet conversation She\'s coming in, 12: 30 flight'}
        />

      )
    }
  }

  export default InsideBigBoxAfrica;