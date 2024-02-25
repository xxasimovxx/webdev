import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Selection_Fizyka from "./Selection_Fizyka";
import Show_Subject from "./Show_Subject";

const App = () => {
  return (
    <main>
      <div className="bar"></div>
      <Routes>
        <Route path="/fizyka" element={<Selection_Fizyka />} />
        <Route
          path="/fizyka/kinematyka"
          element={<Show_Subject name="kinematyka" />}
        />
        <Route path="/dist/index.html" element={<Home />} />
      </Routes>
      <div className="bar"></div>
    </main>
  );
};
export default App;
