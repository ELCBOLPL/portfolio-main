
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
// import { MapContainer,TileLayer} from 'react-leaflet';
// import L from 'leaflet';
import Home from "./components/Home/Home";
// import Navbar from "./components/Navbar/Navbar";
// import "leaflet-control-geocoder/dist/Control.Geocoder.css";
// import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import Projects from "./components/Projects/Projects";
import GlobalStyles from "./components/styles/Global";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/styles/Theme";
import { BrowserRouter as Router } from "react-router-dom";
import ParallaxComponent from "./components/Parallax/Parallax";
import Hero from "./components/Hero/Hero";
// import CountdownTimer from './components/Clock/CountdownTimer';
import './App.css';
import SliderV1 from "./components/SliderV1";
import  {HeadingHora} from "./globalStyles";
import styled from "styled-components";
import Countdown from "./components/countdown";
import {
	ButtonContainer,
	HeroButton,
	ButtonWrapper,
} from './components/Hero/HeroStyles';
const CardContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1f2229;
  overflow: hidden;
`;

const Separator = styled.span`
  margin-left: 10px;
  margin-right: 10px;
`;

function App() {
  return (
      <Router>
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyles />
            {/* <Navbar /> */}
            <Home />
            
      
       
       
    
       
      
            <section className ="  ">
            {/* <div class="container relative lg:min-h-[100vh] flex flex-col lg:flex-row lg:items-center mx-auto max-w-screen-xl z-10 -mb-16"> */}
            <div>
            
            <HeadingHora>𝐼𝓉𝒾𝓃𝑒𝓇𝒶𝓇𝒾o 𝐵o𝒹𝒶  
            <HeadingHora>5:00PM - 5:45 PM Ceremonía  
            <HeadingHora>6:00PM- 7:00 Hora de Cócteles
            <HeadingHora>700PM -  7:15 P.M Los Invitados van a Cenar
            <HeadingHora>7:15PM - 7:25 P.M Intro a la Fiesta Nupcial 
            <HeadingHora>7:25PM - 7:30 P.M Primer Baile          
            <HeadingHora>7:30PM - 7:50 P.M Brindis de Bienvenida    
            <HeadingHora>8:15PM - 9:00 P.M Primer plato y Brindis     
            <HeadingHora>7:50PM - 8:15 P.M Se sirve la entrada  
            <HeadingHora>9:00PM - 9:45 P.M Baile de Padre e Hija   
            <HeadingHora>9:45PM - 10:00 P.M Pastel + Agradecimientos
            <HeadingHora>10:00PM - 12:00  !Inicia el Baile!
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
            
              </HeadingHora>

           
            
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
            {/* <SectionHeading><SectionTitle>No olvides enviar mensaje </SectionTitle></SectionHeading> */}
					<ButtonContainer >
						<ButtonWrapper>
							<HeroButton 
            href="https://www.amazon.com.mx/wedding/registry/2QG3EIVYQLLTT?ref=wr_search_page_result_1"
            target="https://www.amazon.com.mx/wedding/registry/2QG3EIVYQLLTT?ref=wr_search_page_result_1"
            smooth={true}
            duration={0}
            delay={0}
            spy={true}
            spyThrottle={0}
            exact="true"
            offset={-50}
          >
            <span>Mesa de Regalos</span>
							</HeroButton>
						</ButtonWrapper>
					</ButtonContainer>
      
         {/* <ContactForm />  */}
      {/* </div> */}
            <About />
            <ParallaxComponent />
            {/* <Technologies /> */}
            <Hero/>
            <SliderV1/>
            <Countdown/>

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
