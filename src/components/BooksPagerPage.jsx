import withActivePage from "../hocs/withActivePage";
import withDotsPage from "../hocs/withDotsPage";
import withEmptyPage from "../hocs/withEmptyPage";

const BooksPagerPage = ({handlePageSelect, page}) => {

    return (
        <span onClick={()=>handlePageSelect(page + 1)}><a href="#">{page + 1}</a></span>
    )

}
export default withDotsPage(withActivePage(withEmptyPage(BooksPagerPage)));

// export default BooksPagerPage;