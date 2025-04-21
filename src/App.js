
import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/navBar';
import Footer from './pages/footer';
import About from './pages/about';
import Contact from './pages/contact';
import Gallery from './pages/gallery';
import GetInvolved from './pages/getInvolved';
import Sightings from './pages/sightings';
import Home from './pages/home';
import Videos from './Components/videos';

function App() {
  return (
    <div >
      <Navbar />
      <div className='app'>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Contact" element={<Contact />}/>
          <Route exact path="/Gallery" element={<Gallery />}/>
          <Route exact path="/GetInvolved" element={<GetInvolved />}/>
          <Route exact path="/Sightings" element={<Sightings />}/>
      </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
