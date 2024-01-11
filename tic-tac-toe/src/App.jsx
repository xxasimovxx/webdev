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
    },[])

  }}

function changeTile(isO, id){

  setTiles(currentTiles =>{
    return currentTiles.map(tile => {
      if ((tile.id == id) && (!tile.isClicked)){
        if(isO){

          setisO(!isO)

          return {id:id, content: "circle", isClicked: true}
        }else{
          
          setisO(!isO)
          return {id:id, content: "cross", isClicked: true}
        }
        
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
              <div key={tile.id} className="tile"><button type="button" className={tile.content} onClick={() => changeTile(isO, tile.id)} ></button></div>
            )
          })}

      </div>
    </>
  )
}



