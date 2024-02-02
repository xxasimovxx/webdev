import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import Asd from "./asd"

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/Asd" element={ <Asd/> } />
        <Route path = "/" element = {<Home/>}/>
      </Routes>
    </main>
  );
};
export default App;