import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import GlobalStyles from "./components/styles/Global";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/styles/Theme";
import { BrowserRouter as Router } from "react-router-dom";
import ParallaxComponent from "./components/Parallax/Parallax";
import Technologies from "./components/Technologies/Technologies";
import Hero from "./components/Hero/Hero";
import './App.css';
import './index.css';
// import ContactForm from "./components/Contact/ContactForm";
// import getRemainTime from "./components/countdown";
import React from "react";
import Confetti from "./components/hooks/confetti";

// import {SliderData} from "./components/hooks/SliderData";
// import styled from "styled-components";
import SliderV1 from "./components/SliderV1";

function App() {

  return (
      <Router>
        <ThemeProvider theme={theme}>
          <>
         
            <GlobalStyles />
            <Navbar />
            <Confetti/>
            <Home />
            
          
            <Projects />
            
            <About />
            <ParallaxComponent />
            <Technologies />
            <Hero/> 
            
            <SliderV1/>
            <Footer />
          </>
        </ThemeProvider>
      </Router>
  );
}

// let defaultIcon = L.icon({
//   iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
//   iconSize: [25, 41],
// });
// L.Marker.prototype.options.icon = defaultIcon;
export default App;

