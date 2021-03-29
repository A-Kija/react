import React, { useState, useEffect } from 'react';
import API from '../shared/jsonplaceholder';


const Users = () => {
const [usersListState, setUserListState] = useState([]);

const [userNameState, setUserNameState] = useState('Enter new User Name');

const [errorState, setErrorState] = useState('');


const enterName = event => {
    setUserNameState(event.target.value)
}

const submitName = () => {
    API.post(`users`, {name:userNameState})
        .then( response => {
            console.log(response);
        })
}


useEffect(() => {

    console.log("Kreipimasis i serveri")

    API.get(`users5`)
        .then(response => {
            console.log(response.data)
            setUserListState(response.data);
            setErrorState('');
        })
        .catch(error => {
            setErrorState('Error while getting user list');
            setUserListState([]);
            console.log(error.response.status)
        })

    



}, []);


return (
    <div className="big box">
        <h3 style={{color:'red'}}>{errorState}</h3>
        <ul>
            {usersListState.map(user => <li key={user.id}>
                    <span className="user-id">{user.id}.</span> 
                    <span className="user-name">{user.name}</span>
                </li>
            )}
        </ul>
        <div>
                <input type="text" onChange={enterName} value={userNameState}/>
                <button className="myButton" onClick={submitName}>Add new user</button>
        </div>

    </div>
)


}

export default Users;