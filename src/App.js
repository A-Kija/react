import './App.css';
import CarBox from './components/CarBox';

import {normalStyle} from './shared/styles';





function App() { // <---- pagrindinis komponentas
  return (
    <div className="App">
      <header className="App-header">
        <CarBox boxStyle={normalStyle} />
      </header>
    </div>
  );
}

export default App;