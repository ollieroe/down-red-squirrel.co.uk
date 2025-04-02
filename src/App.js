import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './Components/navBar';
import Footer from './pages/footer';
import About from './pages/about';
import Contact from './pages/contact';
import Gallery from './pages/gallery';
import GetInvolved from './pages/getInvolved';
import Sightings from './pages/sightings';
import Home from './pages/home';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Contact" element={<Contact />}/>
          <Route exact path="/Gallery" element={<Gallery />}/>
          <Route exact path="/GetInvolved" element={<GetInvolved />}/>
          <Route exact path="/Sightings" element={<Sightings />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
