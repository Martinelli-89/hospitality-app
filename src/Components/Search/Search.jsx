import search from "../../Data/Images/search.svg";
import "./Search.scss";

const Search = ({updateFilter, filter}) => {

    return (

        <div className="search">
            <img className="search__icon" src={search} alt="search icon"></img>
            <input className="search__input" value={filter} onChange={updateFilter}></input>
        </div>

    )

}

export default Search;