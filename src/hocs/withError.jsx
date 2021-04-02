import ErrorComponent from "../components/ErrorComponent";

// function withZooBoxError(Component) {
//     return function (props) {
//         return !props.zooList
//         ? <div className="box"><h3 style={{color:'red'}}>Error</h3></div>
//         : <Component {...props}/>
//     }
// }

// tas pats kas virsuje

const withError = (Component) => ({errorColor, ...props}) =>
    !props.zooList
        ? <ErrorComponent errorColor={errorColor}/>
        : <Component {...props}/>

export default withError;

