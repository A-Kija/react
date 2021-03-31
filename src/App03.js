import './App.css';
import Effect from './components/Effect';

import Users from './components/Users';
import Posts from './components/Posts';




function App() { // <---- pagrindinis komponentas
  return (
    <div className="App">
      <header className="App-header">
        <Effect vardas1={'Jonas'} vardas2={'Greta'}/>
        <Users/>
        <Posts/>
      </header>
    </div>
  );
}

export default App;