import { useEffect, useRef, useState, forwardRef } from "react"

const RefBox = forwardRef((props, inputRef) => {

const [stateCount, setStateCount] = useState(0);

const refCount = useRef(0);
// const inputRef = useRef();

const click1 = () => {
    const count = stateCount + 1;
    setStateCount(count);
    console.log("STATE UPDATE", count);
}

const click2 = () => {
    refCount.current++;
    console.log("REF UPDATE", refCount.current);
    inputRef.current.value = refCount.current;
}

useEffect(()=>{
    console.log("COMPONENT MOUNTED", inputRef)
    inputRef.current.focus();
    inputRef.current.value = "LALALALALALALA";
},[]);

console.log("COMPONENT RERENDER", inputRef)
return (
    <div className="box">
        <small>STATE: {stateCount}</small>
        <small>REF: {refCount.current}</small>
        <button className="myButton" onClick={click1}>ADD STATE</button>
        <button className="myButton" onClick={click2}>ADD REF</button>
        <input type="text" ref={inputRef} />
    </div>
)

});


export default RefBox;