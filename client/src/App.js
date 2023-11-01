import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PetHome from "./Components/Pages/Home";
import { PageNotFound } from "./Components/Common/PageNotFound";
import Career from "./Components/Pages/Career";
import Sell from "./Components/Pages/Sell/Sell";

import Test from "./Components/Pages/Sell/Sell"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PetHome />} />
          <Route path="/career" element={<Career />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/page-not-found" element={<PageNotFound />} />
          <Route path="*" element={<Navigate to="/page-not-found" />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;