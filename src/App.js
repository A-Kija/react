import './App.css';
import Effect from './components/Effect';




function App() { // <---- pagrindinis komponentas
  return (
    <div className="App">
      <header className="App-header">
        <Effect vardas1={'Jonas'} vardas2={'Greta'}/>
      </header>
    </div>
  );
}

export default App;