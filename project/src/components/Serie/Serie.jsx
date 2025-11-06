import './styleSerie.css';
import { useState } from 'react';
import reactsvg from '../../assets/react.svg';

function Serie({title, description, genre, photoUrl, addFavourite, btnText})
{
    return (
        
        <div className='serie-card'>
            <div className="serie-photo">
                <img src={photoUrl} alt="Fernando Alonso" />
                <button className='add-fav' onClick={addFavourite}>{btnText}</button>
            </div>

            <p className="serie-title">{title}</p>
            <p className="serie-desc">{description}</p>

            <div className="serie-footer">
                <span className="serie-tag">{genre}</span>
                <button className="see-more">Ver más</button>
            </div>
        </div>
    
    )

}



export default Serie