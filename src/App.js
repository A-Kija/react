import './App.css';

import ClasicBox from './components/ClasicBox';
import VolumeSlider from './components/VolumeSlider';
import BoxUniversalum from './components/BoxUniversalum';
import {normalStyle, fancyStyle} from './shared/styles';
import {getRandomInt} from './functions';
import TwoButtonBox from './components/TwoButtonBox';
import UlBox from './components/UlBox';
import ClasicForm from './components/ClassicForm';
import InsideBigBox from './components/InsideBigBoxAfrica';
import InsideBigBox2 from './components/InsideBigBoxMars';


function App() { // <---- pagrindinis komponentas
  return (
    <div className="App">
      <header className="App-header">
        <UlBox color={'yellow'} boxStyle={normalStyle} />
        <BoxUniversalum color={'green'} number={getRandomInt(10)} boxStyle={fancyStyle} />
        <ClasicBox button1Title={'MAKE RED!'} button2Title={'MAKE GREEN!'} />
        <TwoButtonBox/>
        <ClasicForm/>
        <VolumeSlider/>
        <InsideBigBox/>
        <InsideBigBox2/>
      </header>
    </div>
  );
}

export default App;
