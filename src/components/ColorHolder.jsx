import Green from './Green';
import Brown from './Brown';
const ColorHolder = props => {// <---- irg komponentas

    if (props.showColor === 1) {
        return (
            <Green/>
        );
    } 
    return (
        null
    ); 

    // let color = (props.showColor === 1) ? <Green/> : <Brown/>;

    // return (
    //     <>{color}</>
    // )


    // return (
    //     <>
    //         {
    //             props.showColor && <Green/>
    //         }

    //     </>

    // )






    

  }

  export default ColorHolder;