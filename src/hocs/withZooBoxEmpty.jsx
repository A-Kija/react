const withZooBoxEmpty = (Component) => (props) =>
    !props.zooList.length
        ? <div className="box"><h3 style={{color:'blue'}}>No animals in this ZOO</h3></div>
        : <Component {...props}/>

export default withZooBoxEmpty;