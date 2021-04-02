
const withListColor = (doFun) => (Component) => (props) =>

<Component listColor={doFun(props)} {...props}/>

export default withListColor;