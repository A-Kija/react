// import EmptyComponent from "../components/EmptyComponent";

const withEmpty = (checkFun, EmptyComponent) => (Component) => ({emptyColor, ...props}) =>
    checkFun(props)
        ? <EmptyComponent color={emptyColor}/>
        : <Component {...props}/>

export default withEmpty;