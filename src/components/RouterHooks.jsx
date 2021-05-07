import {useLocation, useRouteMatch, useHistory} from 'react-router-dom';
import {useState, useEffect} from 'react';

const RouterHooks = () => {

    const {pathname} = useLocation();
    const [pageCount, setPageCount] = useState(0);
    const history = useHistory();

    const m = useRouteMatch('/books/:page');

    const maxPage = 8;
    

    console.log(m);

    useEffect(() => {
        setPageCount(pc => pc + 1);
    }, [pathname])


    if(m) {

        if (m.params.page > maxPage) {
            history.replace(`/books/${maxPage}`);
        }

        return (
            <div>
                <h1>BOOKS PAGE {m.params.page}</h1>
            <div> Browsing in: {pathname} </div>
            <div> Page view count: {pageCount}</div>
 
         </div>
        )
    }


    return (
        <div>
           <div> Browsing in: {pathname} </div>
           <div> Page view count: {pageCount}</div>

        </div>
    )
}


export default RouterHooks;