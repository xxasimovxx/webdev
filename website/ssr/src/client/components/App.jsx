import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import Kinemtyka from './Kinematyka';

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/kinematyka" element={ <Kinemtyka/> } />
        <Route path = "/" element = {<Home/>}/>
      </Routes>
    </main>
  );
};
export default App;