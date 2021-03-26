import React, { useState } from 'react';

const Message = () => {

    const [message, setMessage] = useState({text: 'Moon', id: 'Dingau'});
    const [count, setCount] = useState(['A']);

    // const MsgState = useState('');
    // const message = MsgState[0];
    // const SetMessage = MsgState[1];

    return (
        <div className="box">
        <p>Counter: {count.length}</p>
        <input type="text" value={message.text} 
        onChange={event => {
            //setMessage({text:event.target.value}); //BLOGAI!
            // setCount(count + 1);// Nevisiskai teisinga

            // setCount(countIsNow => countIsNow + 1);
            

            console.log(count)

            setMessage(stateNow => {
                return {...stateNow, text: event.target.value} 
            });

            // setMessage(stateNow => {
            //     return Object.assign({}, stateNow, {text: event.target.value}); 
            // });

            setCount(stateNow => {
                return [...stateNow, 'A'] 
            });


            // setCount( (countIsNow) => { 
            //     const rez = countIsNow + 1;
            //     return rez;
            // });

            }
        }/>
        <h6>Hello {message.text} {message.id}</h6>
        </div>
    )
}

export default Message;