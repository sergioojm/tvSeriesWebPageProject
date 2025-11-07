import React, { useEffect } from 'react'
import './styleModal.css'

export default function Modal({ open, loading, show, onClose }) {

    // muy top, cedido de copilot
  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal">
        <button className="modal-close" onClick={onClose}>×</button>

        {loading ? (
          <div className="modal-loading">Cargando...</div>
        ) : show ? (
          <div className="modal-body">
            <h2>{show.name}</h2>
            <p className="modal-genres">{(show.genres || []).join(', ')}</p>
            {show.image?.medium && <img src={show.image.medium} alt={show.name} />}
            <div className="modal-summary" dangerouslySetInnerHTML={{ __html: show.summary || '' }} />
            <p>Estreno: {show.premiered || '—'}</p>
            {show.rating?.average && <p>Rating: {show.rating.average}</p>}
            {show.officialSite && <a href={show.officialSite} target="_blank" rel="noreferrer">Sitio oficial</a>}
          </div>
        ) : (
          <div className="modal-error">No se pudo cargar la información.</div>
        )}
      </div>
    </div>
  )
}