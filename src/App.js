import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
// import { MapContainer,TileLayer} from 'react-leaflet';
// import L from 'leaflet';
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
// import "leaflet-control-geocoder/dist/Control.Geocoder.css";
// import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import Projects from "./components/Projects/Projects";
import GlobalStyles from "./components/styles/Global";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/styles/Theme";
import { BrowserRouter as Router } from "react-router-dom";
import ParallaxComponent from "./components/Parallax/Parallax";
import Technologies from "./components/Technologies/Technologies";
import Hero from "./components/Hero/Hero";
// import CountdownTimer from './components/Clock/CountdownTimer';
import './App.css';
import SliderV1 from "./components/SliderV1";
import ContactForm from "./components/Contact/ContactForm";
import { FaMusic } from "react-icons/fa";
import Image1 from "../src/assets/miboda33.png";


import Confetti from "./components/hooks/Confetti";
import styledComponents from 'styled-components';
import { Background } from "./components/Modal/ModalStyles";
import { MdOpacity } from "react-icons/md";
import GlobalStyle, { Heading ,HeadingWedding,HeadingHora} from "./globalStyles";

function App() {
  return (
      <Router>
        <ThemeProvider theme={theme}>
          <>
          
            <GlobalStyles />
            <Navbar />
            
            <Confetti/>
           
            <Home />
            <section className ="  flex flex-col justify-center relative lg:min-h-[100vh] bg-gray-100 dark:bg-gray-900 pt-8 px-8 lg:overflow-hidden bg-hero-pattern bg-repeat-x bg-cover scales bg-blend-multiply dark:bg-blend-color-burn">
            {/* <div class="container relative lg:min-h-[100vh] flex flex-col lg:flex-row lg:items-center mx-auto max-w-screen-xl z-10 -mb-16"> */}
            <div>
            <Heading>IVAN Y CAROLAIN</Heading>
            <HeadingWedding>Itinerario de boda
            <HeadingHora>5:00 - 5:45 P.M Ceremonia
            <HeadingHora>6:00 - 7:00 P.M Hora de Cocteles
            <HeadingHora>700 -  7:15 P.M Los Invitados van a Cenar
            <HeadingHora>7:15 - 7:25 P.M Intro a la Fiesta Nupcial 
            <HeadingHora>7:25 - 7:30 P.M Primer Baile          
            <HeadingHora>7:30 - 7:50 P.M Brindis de Bienvenida    
            <HeadingHora>8:15 - 9:00 P.M Primer plato y Brindis     
            <HeadingHora>7:50 - 8:15 P.M Se sirve la entrada  
            <HeadingHora>9:00 - 9:45 P.M Baile de Padre e Hija   
            <HeadingHora>9:45 - 10:00 P.M Pastel + Agradecimientos
            <HeadingHora>10:00 - 12:00  !Inicia el Baile!
            </HeadingHora>
            </HeadingHora>
            </HeadingHora>
            </HeadingHora>
            </HeadingHora>
            </HeadingHora> 
            </HeadingHora>
            </HeadingHora>
            </HeadingHora>
            </HeadingHora>
            </HeadingHora>
              </HeadingWedding>

           
            
            </div>
            
             
            
            
            

            {/* <img  src={Image1}  background-color  = "rgba(52, 52, 52, 0.8)"/> */}
            
            
            </section>
            {/* <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LeafletGeocoder/>
    </MapContainer> */}
            <Projects />
            {/* <div className="h-screen"> */}
      
        {/* <ContactForm /> */}
      {/* </div> */}
            <About />
            <ParallaxComponent />
            {/* <Technologies /> */}
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
