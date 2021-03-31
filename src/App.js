import './App.css';

import ZooBox from './components/ZooBox';

// cia rasau del to, kad butu patogiau kaitalioti
const zooList = [{id:45, name:'zebro'},{id:78, name:'tiger'}];

// const zooList = [];

// const zooList = null;




function App() { // <---- pagrindinis komponentas
  return (
    <div className="App">
      <header className="App-header">
        <ZooBox zooList={zooList}/>
      </header>
    </div>
  );
}

export default App;