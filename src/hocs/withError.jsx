// import ErrorComponent from "../components/ErrorComponent";

// function withZooBoxError(Component) {
//     return function (props) {
//         return !props.zooList
//         ? <div className="box"><h3 style={{color:'red'}}>Error</h3></div>
//         : <Component {...props}/>
//     }
// }

// tas pats kas virsuje

const withError = (checkFun, ErrorComponent) => (Component) => ({errorColor, ...props}) =>
    checkFun(props)
        ? <ErrorComponent errorColor={errorColor}/>
        : <Component {...props}/>

export default withError;

