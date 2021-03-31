// function withZooBoxError(Component) {
//     return function (props) {
//         return !props.zooList
//         ? <div className="box"><h3 style={{color:'red'}}>Error</h3></div>
//         : <Component {...props}/>
//     }
// }

// tas pats kas virsuje


const withZooBoxError = (Component) => (props) =>
    !props.zooList
        ? <div className="box"><h3 style={{color:'red'}}>Error</h3></div>
        : <Component {...props}/>

export default withZooBoxError;

