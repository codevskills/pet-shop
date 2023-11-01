import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PetHome from "./Components/Pages/Home";
import { PageNotFound } from "./Components/Common/PageNotFound";
import Career from "./Components/Pages/Career";
import Sell from "./Components/Pages/Sell/Sell";

import Test from "./Components/Pages/Sell/Sell"
import MyAdd from "./Components/Pages/My Add/My Add";
import UpdateAdd from "./Components/Pages/My Add/Update Add";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<PetHome />} />
          <Route path="/postad" element={<PostyourAd />} />
          <Route path="/" element={<Adupdate />} />
          <Route path="/career" element={<Career />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/add" element={<MyAdd />} />
          <Route path="/add/update/:id" element={<UpdateAdd />} />
          <Route path="/page-not-found" element={<PageNotFound />} />
          {/* <Route path="*" element={<Navigate to="/page-not-found" />} /> */}
          <Route path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
