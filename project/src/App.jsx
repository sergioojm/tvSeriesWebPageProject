import { useState } from 'react'
import Search from './components/searchBar/SearchBar'
import Serie from './components/Serie/Serie'
import SearchBtn from './components/searchBtn/SearchBtn';
import Divider from './components/Divider/Divider';

function App() {

  const [input, setInput] = useState('');
  const [series, setSeries] = useState([]);
  const [favouriteSeries, setFavouriteSeries] = useState(JSON.parse(localStorage.getItem('series')) || []);
 

  const handleChangeFunction = (e) => {
      setInput(e.target.value);
  };

   const handleSearch = async () => {
    if (!input.trim()) 
    {
      setSeries([]);
      return;
    }

    try {
      const response = await fetch(`https://api.tvmaze.com/search/shows?q=${input}`);
      const data = await response.json();
      
      setSeries(data);
    } catch (error) {
      console.error("Error al buscar series:", error);
    }
  };

  const addFavourite = (serie) => {

    if (favouriteSeries.some((fav) => fav.show.id === serie.show.id)) {
      return;
    }

    const newFavouriteSeries = [...favouriteSeries, serie];
    setFavouriteSeries(newFavouriteSeries);
    localStorage.setItem('series', JSON.stringify(newFavouriteSeries));
  };

  const removeFavourite = (serie) => {
    const newFavouriteSeries = favouriteSeries.filter((fav) => fav.show.id !== serie.show.id);
    setFavouriteSeries(newFavouriteSeries);
    localStorage.setItem('series', JSON.stringify(newFavouriteSeries));
  }

  const isEmpty = series.length === 0 && favouriteSeries.length === 0;

  return (
    <>
      <div className={`app ${isEmpty ? 'empty' : 'active'}`}>
        <div className="navbar search-bar">
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
              addFavourite={() => addFavourite(item)}
              btnText={"Añadir a Favoritos"}
            />
          ))}
        </div>

        {favouriteSeries.length > 0 && (
          <Divider text={"Mis Series Favoritas"} />
        )}

        <div className="fav-series-list">
          {
            favouriteSeries.map((item) => (
              <Serie
                key={item.show.id}
                title={item.show.name}
                description={item.show.summary?.replace(/<[^>]*>/g, "") || ""}
                genre={item.show.genres.join(", ")}
                photoUrl={item.show.image?.medium}
                addFavourite={() => removeFavourite(item)}
                btnText={"Eliminar de Favoritos"}
              />
            ))
          }
        </div>
      </div>
    
    </>
  );
}

export default App
