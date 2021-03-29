import React, { useState, useEffect } from 'react';
import API from '../shared/jsonplaceholder';


const Users = () => {
const [usersListState, setUserListState] = useState([]);

useEffect(() => {

    console.log("Kreipimasis i serveri")

    API.get(`users`)
        .then(response => {
            console.log(response.data)
        })

    



}, []);


return (
    <div className="big box">


    </div>
)


}

export default Users;