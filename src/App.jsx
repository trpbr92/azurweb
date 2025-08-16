import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Photos from "./pages/Photos";
import Music from "./pages/Music";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <main className="main-content">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/music" element={<Music />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
