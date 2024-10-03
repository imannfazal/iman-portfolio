import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./fonts/Krub-Regular.ttf";
import "./fonts/ClassicalDiary-Regular Demo.ttf"
import Home from "./components/Pages/Home";
import Daily from "./components/Pages/Daily";
import Rush from "./components/Pages/Rush";
import SRE from "./components/Pages/SRE";
import Bank from "./components/Pages/Bank";
import Dex from "./components/Pages/Dex";

function App() {
  return (
    <div class='bg-gradient-to-r from-[#7F7070] to-[#380733] w-full h-full'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Fortune-Daily" element={<Daily />} />
          <Route path="/Fortune-Rush" element={<Rush />} />
          <Route path="/DPS" element={<SRE />} />
          <Route path="/indexxBank" element={<Bank />} />
          <Route path="/Decentralized-Exchange" element={<Dex />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
