import { useState } from 'react'
import './App.css'

export default function App() {
  const tiles = [];
  const [isO, setisO] = useState(true);

  return (
    <>
      <div className="container">

        <div className="tile"><div className="circle"></div></div>
        <div className="tile"><div className="blank"></div></div>
        <div className="tile"></div>
        <div className="tile"><div className="blank"></div></div>
        <div className="tile"></div>
        <div className="tile"></div>
        <div className="tile"><div className="blank"></div></div>
        <div className="tile"></div>
        <div className="tile"></div>

      </div>
    </>
  )
}

// function makeTiles(){
//   return(
//     for (let i = 0; i < 3; i++){
      

//     }
//   );
// }


