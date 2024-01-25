import { useState } from 'react'
import './App.css'
import  Standard_Tile from "./components/standard_tile.jsx"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAtom } from '@fortawesome/free-solid-svg-icons'

export default function App() {

  return (
    <>

       <div className="outer">
        {Standard_Tile({"Fizyka", "Z"})}

        </div> 
    </>
  )
}

