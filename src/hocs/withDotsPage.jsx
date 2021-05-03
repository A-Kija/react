import BooksPagerPageDots from "../components/BooksPagerPageDots";

const withDotsPage = (Component) => (props) => {

    const now = props.page + 1;
   
    return (
        (now === (props.activePage + 2) && now !== props.allPages) 
        || (now === (props.activePage - 2) && now !== 1)
        )

    ? <BooksPagerPageDots {...props}/>
    : <Component  {...props}/>
}

export default withDotsPage;