import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom';
import './App.css';
import Transition from './components/Transition';
import Home from './pages/Home';
import Contact from '../src/pages/Contact'
import About from './pages/About';
import Work from './pages/Work';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <Header/>
      <RoutesWithFooter/>
    </Router>
  );
}
function RoutesWithFooter() {
  const location = useLocation();
  const [isPageReady, setPageReady] = useState(true);
  const [oldLocation, setOldLocation] = useState(location); 

  const handleAnimationMiddle = () => {
    setPageReady(true); 
  };


  const handleAnimationEnd = () => {
    setPageReady(true);
  };

  useEffect(() => {
    if (location.pathname !== oldLocation.pathname) {
        setPageReady(false); 
        setOldLocation(location);
    }
  }, [location, oldLocation]);

  return (
    <>
      <Transition 
        location={location} 
        onAnimationMiddle={handleAnimationMiddle} 
        onAnimationEnd={handleAnimationEnd} 
      />
      {isPageReady && (
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/mywork" exact element={<Work/>} />
          <Route path="/contact" exact element={<Contact/>} />
          <Route path="/about" exact element={<About/>} />
        </Routes>
      )}
      {location.pathname !== "/contact" && <Footer/>}
    </>
  );
}


export default App;
