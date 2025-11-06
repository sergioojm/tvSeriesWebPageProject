import { useState } from 'react'
import Search from './components/searchBar/SearchBar'
import Serie from './components/Serie/Serie'

function App() {
  return (
    <>
      <Search placeholder="Buscar serie..." />
      <Serie/>
       <Serie/>
    </>
   
  )
}

export default App
