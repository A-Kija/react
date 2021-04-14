import './App.css';
import CarBox from './components/CarBox';
import ButtonCollor from './contexts/ButtonColor';
import { useContext, createRef} from 'react';
import {normalStyle} from './shared/styles';
import RefBox from './components/RefBox';





function App() { // <---- pagrindinis komponentas
  const bttColor = useContext(ButtonCollor);
  const ref = createRef();
  return (
    <div className="App">
      <header className="App-header">
        <ButtonCollor.Provider value={bttColor}>
        <CarBox boxStyle={normalStyle} />
        </ButtonCollor.Provider>
        <RefBox ref={ref}/>
      </header>
    </div>
  );
}

export default App;