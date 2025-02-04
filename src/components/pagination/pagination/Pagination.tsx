import {useSearchParams} from "react-router";
import '../pagiaion-css/pagination.css';


const Pagination = () => {
    const [searchParams, setSearchParams] = useSearchParams({page: '1'});
    let currentPage = Number(searchParams.get('page') || '1');
    return (
        <div className='pagination'>
            <button className='button-pag' onClick={() => {
                if (currentPage > 1) {
                    setSearchParams({page: (--currentPage).toString()})
                }
            }}>Previous page
            </button>
            <button className='button-pag' onClick={() => {
                setSearchParams({page: (++currentPage).toString()})
            }}>Next page
            </button>
        </div>
    );
};

export default Pagination;