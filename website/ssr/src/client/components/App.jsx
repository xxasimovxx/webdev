import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import Selection_Fizyka from './Selection_Fizyka';

const App = () => {
  return (
    <main>
      <div className="bar"></div>
      <Routes>
        <Route path= "/fizyka" element= {<Selection_Fizyka/>} />
        <Route path = "fizyka/kinematyka" element = {<Home/>}/>
        <Route path = "/" element = {<Home/>}/>
      </Routes>
      <div className="bar"></div>
    </main>
  );
};
export default App;