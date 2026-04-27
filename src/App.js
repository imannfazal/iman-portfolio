// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import "./App.css";
import "./fonts/Krub-Regular.ttf";
import "./fonts/ClassicalDiary-Regular Demo.ttf"
import Home from "./components/Pages/Home";
import Daily from "./components/Pages/Daily";
import Rush from "./components/Pages/Rush";
import SRE from "./components/Pages/SRE";
import Bank from "./components/Pages/Bank";
import Dex from "./components/Pages/Dex";
import Prediction from "./components/Pages/Prediction";
import Header2 from "./components/Header2";

function App() {
  return (
    <div>
      <Header2 />
      {/* <BrowserRouter> */}
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Fortune-Daily" element={<Daily />} />
          <Route path="/Fortune-Rush" element={<Rush />} />
          <Route path="/DPS" element={<SRE />} />
          <Route path="/indexxBank" element={<Bank />} />
          <Route path="/Decentralized-Exchange" element={<Dex />} />
          <Route path="/prediction" element={<Prediction />} />
        </Routes>
      {/* </BrowserRouter> */}
      </HashRouter>
    </div>
  );
}

export default App;
