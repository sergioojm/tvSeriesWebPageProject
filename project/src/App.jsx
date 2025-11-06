import { useState } from 'react'
import Search from './components/searchBar/SearchBar'
import Serie from './components/Serie/Serie'
import SearchBtn from './components/searchBtn/SearchBtn';


function App() {

  const [input, setInput] = useState('');
  const [series, setSeries] = useState([]);


  const handleChangeFunction = (e) => {
      setInput(e.target.value);
  };

   const handleSearch = async () => {
    if (!input.trim()) return; 

    try {
      const response = await fetch(`https://api.tvmaze.com/search/shows?q=${input}`);
      const data = await response.json();
      console.log(data);
      setSeries(data);
    } catch (error) {
      console.error("Error al buscar series:", error);
    }
  };

  return (
    <>
      <div className="search-bar">
        <Search
          placeholder="Buscar serie..."
          stateValue={input}
          handleChange={handleChangeFunction}
        />
        <SearchBtn search={handleSearch} />
      </div>

      <div className="series-list">
        {series.map((item) => (
          <Serie
            key={item.show.id}
            title={item.show.name}
            description={item.show.summary?.replace(/<[^>]*>/g, "") || ""}
            genre={item.show.genres.join(", ")}
            photoUrl={item.show.image?.medium}
          />
        ))}
      </div>
    </>
  );
}

export default App
