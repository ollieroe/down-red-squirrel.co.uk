import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/navBar";
import Footer from "./pages/footer";
import About from "./pages/about";
import Contact from "./pages/contact";
import Gallery from "./pages/gallery";
import GetInvolved from "./pages/getInvolved";
import Sightings from "./pages/sightings";
import Home from "./pages/home";
import ScrollToTop from "./Components/scrollToTop";
import SquirrellInformation from "./pages/squirrellInformation";
import NewsLetter from "./pages/newsLetter";

function App() {
  return (
    <div>
      <ScrollToTop />
      <NavBar />
      <div className="app">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/Gallery" element={<Gallery />} />
          <Route exact path="/GetInvolved" element={<GetInvolved />} />
          <Route exact path="/Sightings" element={<Sightings />} />
          <Route
            exact
            path="/SquirrellInformation"
            element={<SquirrellInformation />}
          />
          <Route exact path="/NewsLetter" element={<NewsLetter />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
