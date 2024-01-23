import { useState } from 'react'
import './App.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAtom } from '@fortawesome/free-solid-svg-icons'

function App() {

  return (
    <>

       <div className="outer">

          <div className="subject"><FontAwesomeIcon icon={faAtom} size = "6x"/>

            <div className="subject-description">

              <h1>Fizyka</h1>
              <h3>Zadania maturalne  2010 - 2023</h3>
            </div>
          </div>
        </div> 
    </>
  )
}

export default App
