import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PetHome from "./Components/Pages/Home";
import { PageNotFound } from "./Components/Common/PageNotFound";
import Career from "./Components/Pages/Career";
import PostyourAd from "./Components/Pages/PostyourAd";
import Adupdate from "./Components/Pages/Adupdate";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<PetHome />} />
          <Route path="/postad" element={<PostyourAd />} />
          <Route path="/" element={<Adupdate />} />
          <Route path="/career" element={<Career />} />
          <Route path="/page-not-found" element={<PageNotFound />} />
          <Route path="*" element={<Navigate to="/page-not-found" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
