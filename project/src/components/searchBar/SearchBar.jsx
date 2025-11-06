import './styleSearchBar.css';


function Search({type = 'text', placeholder = '', disabled = false, className = 'chore-input', stateValue, handleChange }) 
{  
  return (
    <>
      <input type={type} placeholder={placeholder} value={stateValue} onChange={handleChange} className={className} disabled={disabled}/>
    </>

  );
}

export default Search;
