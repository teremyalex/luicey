import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Products from "./pages/products";
import Recycle from "./pages/recycle";
import About from "./pages/about";
import Contact from "./pages/contact";

function App() {
    return (
        <Router basename="/luicey">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/recycle" element={<Recycle />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default App
