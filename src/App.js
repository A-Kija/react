import './App.css';
import {Component} from 'react';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function BoxOne() {// <---- irg komponentas
  return (
    <div className="box">1</div>
  );
}

const BoxTwo = () => {// <---- irg komponentas
  return (
    <div className="box">2</div>
  );
}

const BoxThree = () => {// <---- irg komponentas
  return (
    <div className="box">3</div>
  );
}

const BoxRandom = () => {// <---- irg komponentas
  return (
    <div className="box">
      <span style={fancyStyle}>
        {getRandomInt(10)}
      </span>
    </div>
  );
}

const fancyStyle = {
  fontSize: '300%',
  color: 'yellow'
}

const normalStyle = {
  fontSize: '100%',
  color: 'white'
}


const BoxDigit = props => {// <---- irg komponentas
  return (
    <span style={props.boxStyle}>
      {props.number}
    </span>
  );
}


const BoxUniversalum = props => {// <---- irg komponentas
  return (
    <div className="box" style={{borderColor:props.color}}>
      <BoxDigit number={props.number} boxStyle={props.boxStyle} />
    </div>
  );
}

class ClasicBox extends Component {

  constructor(){
    super();
    this.state = {
      clock: new Date(),
      color: 'green'
    }
    console.log('CONSTRUCT')
  }

  componentDidMount() {
    console.log('MOUNT')
    this.timerID = setInterval(()=>this.ticTac(), 1000);
  }

  componentWillUnmount() {
    console.log('UNMOUNT')
    clearInterval(this.timerID);
  }

  ticTac() {
    console.log('TIC-TAC')
    this.setState({clock: new Date()});
  }

  render() {
    console.log('RENDER')
    return(
      <div className="box">
        <BoxDigit boxStyle={normalStyle} number={this.state.clock.toLocaleTimeString()}/>
      </div>
    )
  }
}


function App() { // <---- komponentas
  return (
    <div className="App">
      <header className="App-header">
        <BoxUniversalum color={'black'} number={1} boxStyle={normalStyle} />
        <BoxUniversalum color={'black'} number={2} boxStyle={normalStyle} />
        <BoxUniversalum color={'yellow'} number={3} boxStyle={normalStyle} />
        <BoxUniversalum color={'green'} number={getRandomInt(10)} boxStyle={fancyStyle} />
        <ClasicBox color={'yellow'} />
      </header>
    </div>
  );
}

export default App;
