import React, { useState, useEffect } from 'react';



const ZooBox = ({zooList}) => {

useEffect(() => {

}, []);

return (
    <div className="big box">
        <ul>
            {zooList.map(animal => <li key={animal.id}>
                    <span className="post-id">{animal.id}.</span> 
                    <span className="post-title">{animal.name}</span>
                </li>
            )}
        </ul>
    </div>
)

}




export default ZooBox;