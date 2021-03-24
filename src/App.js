import './App.css';
import Message from './components/Message';



function App() { // <---- pagrindinis komponentas
  return (
    <div className="App">
      <header className="App-header">
        <Message/>
      </header>
    </div>
  );
}

export default App;