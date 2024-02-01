import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import Asd from "./asd"

const App = () => {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/Asd" element={ <Asd/> } />
      </Routes>
    </main>
  );
};
export default App;