import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Gallery from "./components/Gallery"; // Always visible
import Members from "./components/Members";
import Contact from "./components/Contact";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Affiliated from "./components/Affiliated";
import NotFound from "./components/NotFound"; // Create this component to handle 404 errors

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} /> {/* Home Page */}
        <Route path="/about" element={<About />} />
        <Route path="/affiliated" element={<Affiliated />} />
        <Route path="/members" element={<Members />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Form />} /> {/* Register Page */}
        <Route path="*" element={<NotFound />} />{" "}
        {/* Catch-all route for 404 errors */}
      </Routes>
      <Gallery /> {/* Always visible */}
      <Footer />
    </Router>
  );
}

export default App;
