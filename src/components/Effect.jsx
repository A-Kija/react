import React, { useState, useEffect } from 'react';

const Effect = () => {

    const [count, setCount] = useState(0); // keiciasi nuo mygtuko

    const [date, setDate] = useState(new Date()); // keiciasi nuo Tik Tako

    // console.log('Hello Component')


    const ticTac = () => {
        console.log('TIC-TAC')
        setDate(new Date());
        // this.setState({clock: new Date()});
      }

    useEffect(() => {
        console.log('Hello Effect!')
    });


    useEffect(() => {
        console.log('Hello TIC TIC')
    }, [date]);


    useEffect(() => {
        console.log('Hello COUNT')
    }, [count]);


    // componentDidMount veikimo imitacija
    useEffect(() => {
        console.log('MOUNT')
        const timerID = setInterval(()=>ticTac(), 5000);
    }, []);




    return (
        <div className="box">
            <div>Counter: {count}</div>
            <div>{date.toLocaleTimeString()}</div>
            <button className="myButton" onClick={() => setCount(counter => counter + 1)}>
                PRESS + 1
            </button>
        </div>
    )
}

export default Effect;