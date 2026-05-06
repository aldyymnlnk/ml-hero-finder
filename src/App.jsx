import Navbar from "./components/Navlink";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Heroes from "./pages/Heroes";
import HeroDetail from "./pages/HeroDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar muncul di semua halaman */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Heroes />} />
        <Route path="/heroes/:id" element={<HeroDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;