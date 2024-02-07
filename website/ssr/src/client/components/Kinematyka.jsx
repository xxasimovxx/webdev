import { useState } from 'react'
import  Standard_Tile from "./standard_tile.jsx"
import {Link} from 'react-router-dom';
import { faRoute } from '@fortawesome/free-solid-svg-icons'

export default function Kinematyka(){
    return(
        <>

       <div  className="outer">

        <Link to="/">

        <Standard_Tile  icon = {faRoute} name = {"Kinematyka"} description = {"Zadania maturalne 2010 - 2023"}/>
        </Link>
        </div> 
        </>
    )
}

