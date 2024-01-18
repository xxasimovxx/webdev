import { useEffect, useState } from 'react'
import './App.css'

export default function App() {
  const [tiles, setTiles] = useState([]);
  const [isO, setisO] = useState(true);
  const [line, setLine] = useState("");

  const winningCombinations=[
    {combination: [1,2,3], line: "row1-win"},
    {combination: [4,5,6], line: "row2-win"},
    {combination: [7,8,9], line: "row3-win"},
    {combination: [1,4,7], line: "column1-win"},
    {combination: [2,5,8], line: "column2-win"},
    {combination: [3,6,9], line: "column3-win"},
    {combination: [1,5,9], line: "diagonal2"},
    {combination: [3,5,7], line: "diagonal1"},]

  function makeTiles(){
        
    for(let i = 1; i <=9; i++){

      setTiles(currentTiles =>{
        return[

          ...currentTiles, 
          {id: i, content: "blank", isClicked: false}
        ]
      })
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

  function checkWinner(winningCombinations, tiles){

    for(const {combination, line} of winningCombinations){

      const tileValue1 = tiles[combination[0]-1].content
      const tileValue2 = tiles[combination[1]-1].content
      const tileValue3 = tiles[combination[2]-1].content
    

      if(tileValue1 != "blank" && tileValue2 == tileValue1 && tileValue3 == tileValue1){
        
        console.log("win");
        setLine(line)

      }
    
  }    
  }

  useEffect(()=>{

    makeTiles()
  },[])

  useEffect(()=>{
    try{

      checkWinner(winningCombinations, tiles)
    } catch{}
  },[tiles])

 useEffect(() => {
  if(line != ""){
    const timer = setTimeout(() => {

      setTiles([])
      setLine([])
      setisO(true)
      makeTiles()
    }, 1000);

    return () => clearTimeout(timer);
  }
}, [line]);


  return (
    <>
      <div className="container">

          {tiles.map(tile =>{
            return(
              <div key={tile.id} className="tile"><button type="button" className={tile.content} onClick={() => {changeTile(isO,tile.id)}}></button></div>
            )
          })}
      </div>
          <div className={line}></div>
    </>
  )
}



