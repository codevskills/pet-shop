import "./App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PetHome from "./Components/Pages/Home";
import { PageNotFound } from "./Components/Common/PageNotFound";
import About from "./Components/Pages/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PetHome />} />
          <Route path="/about" element={<About />} />
          <Route path="/page-not-found" element={<PageNotFound />} />
          <Route path="*" element={<Navigate to="/page-not-found" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
