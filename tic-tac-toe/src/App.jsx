import { useEffect, useState } from 'react'
import './App.css'


export default function App() {
  const [tiles, setTiles] = useState([]);
  const [isO, setisO] = useState(true);

function makeTiles(){
      
  for(let i = 1; i <=9; i++){
    // console.log(i)
    useEffect(()=>{

    setTiles(currentTiles =>{
      return[
        ...currentTiles, 
        {id: i, content: "blank", isClicked: false}
      ]
    })

    console.log("once")

    },[])

  }}

function changeTile(isO, id){

  setTiles(currentTiles =>{
    return currentTiles.map(tile => {
      if (tile.id == id && !tile.isClicked){
        tile.isClicked = true;
        if(isO){
          tile.content = "circle"
        }else{
          tile.content = "cross"
        }
        
        setisO(!isO)
      }
      return tile
    })
  })

}

  makeTiles();

  return (
    <>
      <div className="container">

          {tiles.map(tile =>{
            return(
              <div key={tile.id} className="tile"><button className={tile.content} onClick={changeTile(isO, tile.id)} ></button></div>
            )
          })}

      </div>
    </>
  )
}



