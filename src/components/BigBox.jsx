import { Component } from 'react';

class BigBox extends Component {

    constructor(props){
      super();
      this.state = {
        color: 'red'
      }
    }

    render() {
      return(
        <div className="box text" style={{borderColor:this.state.color}}>
            {this.props.children}
        </div>
      )
    }
  }

  export default BigBox;