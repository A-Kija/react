import React, { useState, useEffect } from 'react';


const CityBox = ({zooList}) => {

useEffect(() => {

}, []);

return (
    <div className="big box">
        <ul>
            {zooList.map(citizen => <li key={citizen.id}>
                    <span className="post-id">{citizen.id}.</span> 
                    <span className="post-title">{citizen.name}</span>
                </li>
            )}
        </ul>
    </div>
)

}

export default CityBox;