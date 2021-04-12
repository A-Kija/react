import './App.css';
import CarBox from './components/CarBox';
import ButtonCollor from './contexts/ButtonColor';
import { useContext} from 'react';
import {normalStyle} from './shared/styles';





function App() { // <---- pagrindinis komponentas
  const bttColor = useContext(ButtonCollor);
  return (
    <div className="App">
      <header className="App-header">
        <ButtonCollor.Provider value={bttColor}>
        <CarBox boxStyle={normalStyle} />
        </ButtonCollor.Provider>
      </header>
    </div>
  );
}

export default App;