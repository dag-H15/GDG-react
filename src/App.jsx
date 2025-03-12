import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import UserProfile from "./pages/UserProfile";
import NotFound from "./pages/NotFound";
import "./index.css";

const NavigateButton = () => {
  const navigate = useNavigate();
  return <button className="navigate-button" onClick={() => navigate("/")}>Go Home</button>;
};

const App = () => {
  return (
    <Router>
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/:username" element={<UserProfile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <NavigateButton />
    </Router>
  );
};

export default App;
