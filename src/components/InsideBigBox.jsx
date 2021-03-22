import BigBox from "./BigBox";
import { Component } from 'react';

class InsideBigBox extends Component {

    constructor(props){
      super();
      this.state = {
      }
    }

    render() {
      return(
        <BigBox>
            <div className="box-title">
                {this.props.title}
            </div>
            <div className="box-text">
                {this.props.text}
            </div>
        </BigBox>
      )
    }
  }

  export default InsideBigBox;