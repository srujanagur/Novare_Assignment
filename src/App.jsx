import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import VideoContent from "./components/VideoContent/VideoContent";
import MenuBar from "./components/MenuBar/MenuBar";

import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <MenuBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/videocontent/:vid" element={<VideoContent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
