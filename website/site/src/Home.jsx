import { useState } from 'react'
// import './App.css'
import  Standard_Tile from "./standard_tile.jsx"
import Subject_Tile from "./Subject_Tile.jsx"

import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAtom } from '@fortawesome/free-solid-svg-icons'

export default function Home() {

  return (
    <>
    <div className="outer-home">

      <Subject_Tile link = "/fizyka" icon = {faAtom} name = "Fizyka" description = "Zadania maturalne 2010 - 2023" ></Subject_Tile>
    </div>

    </>
  )
}

