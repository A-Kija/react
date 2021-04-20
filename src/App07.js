import './App.css';
// import CarBox from './components/CarBox';

import { useCallback, useRef, useState} from 'react';
import {normalStyle} from './shared/styles';
import BoxCall from './components/BoxCall';
import { Plane, MemoPlane } from './components/Plane';


function App() { // <---- pagrindinis komponentas


    // function derSumator() {
    //     return (a, b) => a + b
    // }

    // const der1 = derSumator();
    // const der2 = derSumator();

    // console.log(der1(2,6))
    // console.log(der2(2,6))

    // console.log(der1 === der2);
    // console.log(der2 === der2);



    const [stateCount, setStateCount] = useState(0);
    const offTime = useRef("16:15");

    const reRender = () => {
        const count = stateCount + 1;
        setStateCount(count);
        console.log("STATE UPDATE", count);
    }
    
    console.log('make new doClick');
    const doClick = useCallback(() => {
        console.log("Ja Ja, Clicked")
    }, [])

    const dc = useRef(doClick);

    console.log('is the same', doClick === dc.current);

    const inputRef = useRef();

    const changer = () => {
        offTime.current = inputRef.current.value;
    }

    return (
        <div className="App">
        <header className="App-header">
            {/* <BoxCall boxStyle={normalStyle} do={doClick} />
            <BoxCall boxStyle={normalStyle} do={doClick} /> */}

            <MemoPlane number="NBB-123" time="15:25"/>
            <MemoPlane number="NAS-789" time={offTime.current}/>


            <input ref={inputRef} />
            <button className="myButton" onClick={changer}>Change</button>

            <button className="myButton" onClick={reRender}>Re Render</button>

        </header>
        </div>
    );
}

export default App;