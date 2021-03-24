import React, { useState } from 'react';

const Message = () => {

    const [message, setMessage] = useState('Moon');
    const [count, setCount] = useState(0);

    // const MsgState = useState('');
    // const message = MsgState[0];
    // const SetMessage = MsgState[1];

    return (
        <div className="box">
        <p>Counter: {count}</p>
        <input type="text" value={message} 
        onChange={event => {
            setMessage(event.target.value);
            setCount(count + 1);
            }
        }/>
        <h1>Hello {message}</h1>

        </div>
    )
}

export default Message;