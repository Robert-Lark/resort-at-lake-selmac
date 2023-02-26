import { Routes, Route } from "react-router-dom";
import Home from "./Home"
import Gallery from "./Gallery";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/fun-around-the-resort" element={<FunAroundTheResort />} /> */}
        <Route path="/gallery" element={<Gallery />} />
        {/* <Route path="/history-of-the-lake" element={<HistoryOfTheLake />} /> */}
        {/* <Route path="/rates" element={<Rates />} /> */}
      </Routes>
    </div>
  );
}

export default App;
