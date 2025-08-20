import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Photos from "./pages/Photos";
import Music from "./pages/Music";
import Albums from "./pages/Albums";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <main className="main-content">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/photos/:albumId" element={<Photos />} />
          <Route path="/music" element={<Music />} />
          <Route path="/albums" element={<Albums />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
