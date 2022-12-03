import search from "../../Data/Images/search.svg";
import "./Search.scss";

const Search = () => {

    return (

        <div className="search">
            <img className="search__icon" src={search} alt="search icon"></img>
            <input className="search__input"></input>
        </div>

    )

}

export default Search;