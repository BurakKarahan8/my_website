import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import CV from "./pages/cv";
import Portfolio from "./pages/portfolio";
import Blog from "./pages/blog";
import About from "./pages/about";
import Contact from "./pages/contact";
import "./App.css";
import "./components/navbar.css"



function App() {
  return (
    <div>
      <Router>
        <div className="main">
          <Navbar />
        <div className="pages"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        </div>
      </Router>
    </div>
    
  );
}

export default App;

