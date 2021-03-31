import './App.css';



import ZooBox from './hocs/withZooBoxCompose';

// import ZooBox from './components/ZooBox';


// cia rasau del to, kad butu patogiau kaitalioti
// const zooList = [{id:45, name:'zebro'},{id:78, name:'tiger'}];

// const zooList = [];

const zooList = null;


// const ZooBox2 = withZooBoxEmpty(ZooBox);
// const ZooBox3 = withZooBoxError(ZooBox2);

// const ZooBoxFinal = withZooBoxError(withZooBoxEmpty(ZooBox));



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