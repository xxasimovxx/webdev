import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  const tiles = [];
  const [isO, setisO] = useState(true);

  return (
    <>
      <div className="container">

        <div className="tile"></div>
        <div className="tile"></div>
        <div className="tile"></div>
        <div className="tile"></div>
        <div className="tile"></div>
        <div className="tile"></div>
        <div className="tile"></div>
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


