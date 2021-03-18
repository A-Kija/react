import './App.css';

import ClasicBox from './components/ClasicBox';
import BoxUniversalum from './components/BoxUniversalum';
import {normalStyle, fancyStyle} from './shared/styles';
import {getRandomInt} from './functions';
import TwoButtonBox from './components/TwoButtonBox';
import UlBox from './components/UlBox';


function App() { // <---- pagrindinis komponentas
  return (
    <div className="App">
      <header className="App-header">
        <UlBox color={'yellow'} boxStyle={normalStyle} />
        <BoxUniversalum color={'green'} number={getRandomInt(10)} boxStyle={fancyStyle} />
        <ClasicBox button1Title={'MAKE RED!'} button2Title={'MAKE GREEN!'} />
        <TwoButtonBox/>
      </header>
    </div>
  );
}

export default App;
