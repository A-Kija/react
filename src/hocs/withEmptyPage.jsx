const withEmptyPage = (Component) => (props) => {

    const now = props.page + 1;
    
    return now === (props.activePage + 2) 
    || now === (props.activePage - 2)
    || now === (props.activePage + 1) 
    || now === (props.activePage - 1)
    || now === props.activePage
    || now === 1
    || now === props.allPages

    ? <Component  {...props}/>
    : null
}

export default withEmptyPage;