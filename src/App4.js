import './App.css';



import {ZooBoxWithCompose, CityBoxWithCompose} from './hocs/withCompose';

import ZooBox from './components/ZooBox';


// cia rasau del to, kad butu patogiau kaitalioti
// const zooList = [{id:45, name:'zebro'},{id:78, name:'tiger'},{id:79, name:'makaka'}];

// const zooList = [{id:45, name:'zebro'},{id:78, name:'tiger'}];

const zooList = [];

// const zooList = null;



const cityList = [{id:145, name:'John'},{id:7855, name:'Ann'},{id:'007', name:'James Bond'}];

// const cityList = [{id:145, name:'John'},{id:7855, name:'Ann'}];

// const cityList = [];

// const cityList = null;


// const ZooBox2 = withZooBoxEmpty(ZooBox);
// const ZooBox3 = withZooBoxError(ZooBox2);

// const ZooBoxFinal = withZooBoxError(withZooBoxEmpty(ZooBox));



function App() { // <---- pagrindinis komponentas
  return (
    <div className="App">
      <header className="App-header">
        <ZooBoxWithCompose zooList={zooList} errorColor={'yellow'} emptyColor={'brown'}/>
        <CityBoxWithCompose cityList={cityList} errorColor={'yellow'} emptyColor={'brown'}/>
      </header>
    </div>
  );
}

export default App;