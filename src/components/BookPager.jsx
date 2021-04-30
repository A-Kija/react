import BooksPagerPage from "./BooksPagerPage";

const BooksPager = ({itemsPerPage, allItemsCount, handlePageSelect, activePage, allPages}) => {

    const pages = Array(Math.ceil(allItemsCount/itemsPerPage)).fill(null);

    return (
        <div className="pager">

            {
                pages.map((_, page) => (
                    <BooksPagerPage key={page + 1} handlePageSelect={handlePageSelect} page={page} allPages={pages} allPages={pages.length} activePage={activePage}/>
                ))
            }


        </div>
    )
}

export default BooksPager;