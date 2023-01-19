import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Offers from "./pages/Offers/Offers";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Offers />} />
      </Routes>
    </div>
  );
}

export default App;
