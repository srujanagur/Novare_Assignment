import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import VideoContent from "./components/VideoContent/VideoContent";


function App() {

  return (
    <div >
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/videocontent" element={<VideoContent />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}
export default App;