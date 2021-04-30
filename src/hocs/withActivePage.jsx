import BooksPagerPageActive from "../components/BooksPagerPageActive";

const withActivePage = (Component) => (props) => {

    return props.activePage === (props.page + 1) 
    ? <BooksPagerPageActive {...props}/>
    : <Component  {...props}/>
}

export default withActivePage;