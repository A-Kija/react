import React, { useState, useEffect } from 'react';


const CityBox = ({cityList, listColor}) => {

useEffect(() => {

}, []);

return (
    <div className="big box">
        <ul>
            {cityList.map(citizen => <li key={citizen.id}>
                    <span className="post-id">{citizen.id}.</span> 
                    <span style={{color: listColor}}  className="post-title">{citizen.name}</span>
                </li>
            )}
        </ul>
    </div>
)

}

export default CityBox;