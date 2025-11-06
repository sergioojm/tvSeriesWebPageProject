import './styleSearchBar.css';
import { useState } from 'react';

function Search({type = 'text', placeholder = '', disabled = false, className = 'chore-input' }) 
{  
  const [inputValue, setInputValue] = useState('');

  
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={inputValue} 
      onChange={handleChange}
      className={className}
      disabled={disabled}
    />
  );
}

export default Search;
