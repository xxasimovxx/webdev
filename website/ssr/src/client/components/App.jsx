import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import Kinemtyka from './Kinematyka';
import Selection_Fizyka from './Selection_Fizyka';

const App = () => {
  return (
    <main>
      <Routes>
        <Route path= "/fizyka" element= {<Selection_Fizyka/>} />
        <Route path = "fizyka/kinematyka" element = {<Home/>}/>
        <Route path = "/" element = {<Home/>}/>
      </Routes>
    </main>
  );
};
export default App;