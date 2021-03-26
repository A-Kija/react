import React, { useState, useEffect, useRef } from 'react';

const Effect = ({vardas2, vardas1}) => {

    const [count, setCount] = useState(0); // keiciasi nuo mygtuko

    const [date, setDate] = useState(new Date()); // keiciasi nuo Tik Tako

    const [color, setColor] = useState('red');

    const alreadyMounted = useRef(false);
    const runOnce = useRef(0);// nera mount ir nera count
    const runColor = useRef(0);

    const ticTac = () => {
        setDate(new Date());
    }

    // pasileidzia visada
    useEffect(() => {
        console.log('Always!')
        
    });

    // priristas prie date steito ir pasileidzia nuo laikrodzio
    useEffect(() => {
        console.log('TIC TIC')
        if (runColor.current) {
            runColor.current = 0;
            setColor('red');
        }
        else {
            runColor.current = 1;
            setColor('blue');
        }
    }, [date]);

    // priristas prie count steito ir pasileidzia nuo mygtuko
    useEffect(() => {
        console.log('COUNT')
    }, [count]);

    // priristas prie count ir date steitu
    useEffect(() => {
        console.log('COUNT + TIC TAC')
    }, [date, count]);


    // priristas prie count steito ir pasileidzia TIK! nuo mygtuko/ 100% update
    useEffect(() => {
        if (alreadyMounted.current) {// antras ir toliau
            console.log('ONLY COUNT')
        }
        else {// pirmas kartas
            alreadyMounted.current = true;
        }
    }, [count]);


    // priristas prie count steito ir pasileidzia TIK! nuo mygtuko ir TIK! 1 karta
    useEffect(() => {
        if (runOnce.current === 0) {// mounting
            runOnce.current = 1;
        }
        else if(runOnce.current === 1) {// pirmas kartas ir vienintelis
            console.log('ONLY COUNT RUN 1')
            runOnce.current = 2;
        }
    }, [count]);


    // componentDidMount veikimo imitacija
    useEffect(() => {
        console.log('MOUNT')
        const timerID = setInterval(()=>ticTac(), 50000);
        
        return () => clearInterval(timerID);//<---- componentWillUnmount veikimo imitacija

    }, []);

    return (
        <div className="box">
            <div>{vardas1} {vardas2}</div>
            <div style={{color:color}}>Counter: {count}</div>
            <div>{date.toLocaleTimeString()}</div>
            <button className="myButton" onClick={() => setCount(counter => counter + 1)}>
                PRESS + 1
            </button>
        </div>
    )
}

export default Effect;