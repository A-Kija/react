import {memo} from 'react';

export const Plane = ({number, time}) => {

    console.log("PLANE RENDER")

    return (
        <div className="box">
            <small>Number: {number}</small>
            <small>Time: {time}</small>
        </div>
    )
}

const checkReRender = () => {
    return false;
}

export const MemoPlane = memo(Plane, checkReRender);