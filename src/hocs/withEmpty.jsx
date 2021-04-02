import EmptyComponent from "../components/EmptyComponent";

const withEmpty = (Component) => ({emptyColor, ...props}) =>
    !props.zooList.length
        ? <EmptyComponent color={emptyColor}/>
        : <Component {...props}/>

export default withEmpty;