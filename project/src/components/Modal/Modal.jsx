import React, { useEffect } from 'react';
import './styleModal.css';

export default function Modal({ open, loading, show, onClose }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>x</button>

        {loading ? (
          <div className="modal-loading">Cargando...</div>
        ) : show ? (
          <div className="modal-body">
            <div className="modal-info">
              <div>
                <h1>{show.name}</h1>
                <p className="modal-genres">{(show.genres || []).join(', ')}</p>
                <div className="modal-summary">
                {show.summary?.replace(/<[^>]*>/g, "")|| "No hay descripción disponible."}
                </div>
              </div>

              <div className="modal-extra">
                <p>Estreno: {show.premiered || '—'}</p>
                <p>Rating: {show.rating?.average ? `${show.rating.average} / 10` : 'Sin puntuación'}</p>
              </div>
            </div>

            {show.image?.medium && (<img src={show.image.medium} alt={show.name} />)}
          </div>
        ) : (
          <div className="modal-error">No se pudo cargar la información.</div>
        )}
      </div>
    </div>
  );
}
