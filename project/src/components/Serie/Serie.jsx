import './styleSerie.css';
import { useState } from 'react';
import reactsvg from '../../assets/react.svg';

function Serie()
{


    return (
        
        <div className='serie-card'>
            <div className="serie-photo">
                <img src={reactsvg} alt="Fernando Alonso" />
                <button className='add-fav'>Favoritos</button>
            </div>

            <p className="serie-title">TITULO DE EXAMPLE</p>
            <p className="serie-desc">un poquito de texto un poquito de texto un poquito de texto un poquito de texto un poquito de texto</p>

            <div className="serie-footer">
                <span className="serie-tag">Drama</span>
                <button className="see-more">Ver más</button>
            </div>
        </div>
    
    )

}



export default Serie