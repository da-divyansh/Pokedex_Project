import useDebounce from '../../hooks/useDebounce';
import './Search.css' ;

function Search({updateSearchTerm}) {
    const debounceCallback = useDebounce((e)=> updateSearchTerm(e.target.value));
    return(
        <div className="search-wrapper">
            <input 
                id="pokeman-name-search"
                type="text"
                placeholder="Enter pokeman name"
                onChange={debounceCallback}
            />   
        </div>
    )
}

export default Search;