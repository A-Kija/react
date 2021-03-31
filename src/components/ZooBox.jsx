import React, { useState, useEffect } from 'react';



const ZooBox = ({zooList}) => {

useEffect(() => {

}, []);

if(!zooList) {
    return (
        <div className="box">
            <h3 style={{color:'red'}}>Error</h3>
        </div>
    )
}
else if(!zooList.length) {
    return (
        <div className="box">
            <h3 style={{color:'blue'}}>No animals in this ZOO</h3>
        </div>
    )
}
else {

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


}

export default ZooBox;