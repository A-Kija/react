const BooksPagerPageActive = ({handlePageSelect, page}) => {


    return (
        <span onClick={()=>handlePageSelect(page + 1)}>{page + 1}</span>
    )

}
export default BooksPagerPageActive;