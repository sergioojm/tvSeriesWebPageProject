import './styleSearchBtn.css';


export default function SearchBtn({search})
{

    return (
         <button className="search-button" onClick={search}>Search</button>
    )
}