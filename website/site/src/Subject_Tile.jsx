import { useState } from 'react'
import  Standard_Tile from "./standard_tile.jsx"
import {Link} from 'react-router-dom';

export default function Kinematyka({link,icon,name,description}){
    return(
        <>


        <Link to= {link}>

        <Standard_Tile  icon = {icon} name = {name} description = {description}/>
        </Link>
        </>
    )
}
