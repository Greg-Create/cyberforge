import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import Body from "./Body";
import About from "./About";
import Custom from "./Custom";
import PreBuild from "./PreBuild";
import ScrollAnimation from "react-animate-on-scroll";
import TradeIn from "./TradeIn";
import "animate.css/animate.min.css";
import Repair from "./Repair";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useEffect, useMemo } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import CustomPage from "./CustomPage";
import Contactus from "./Contactus";

function App() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });
  const center = useMemo(() => ({ lat: 43.80062, lng: -79.45936 }), []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/contact" element={<Contactus />}/>
        <Route path="/custom" element ={<CustomPage />} />
        <Route
          path="/"
          element={
            <>
              <Body />
              <Custom />
              <ScrollAnimation animateIn="animate__fadeInUp" duration={0.5}>
                <h1 style={{ fontWeight: 300 }}>
                  Stay <span className="highlight">Updated</span> throughout the{" "}
                  <span className="highlight">Entire</span> Build Process
                </h1>
              </ScrollAnimation>
              <PreBuild />
              <Repair />
              <TradeIn />
              <About />
              <ScrollAnimation animateIn="animate__fadeInUp bottomContainer" duration={0.5}>
                <h1 style={{ fontWeight: 300 }}>
                  Pickup only in{" "}
                  <span className="highlight">Vaughan,Ontario</span>
                </h1>
                <h1 style={{ fontWeight: 300 }}><span className="highlight">194 Brickstone Circle</span>, Thronhill, ON</h1>
                <h1 style={{ fontWeight: 400, fontSize:"1.5rem" }}><span className="">cyberforgecomps@gmail.com</span></h1>
              </ScrollAnimation>
              <ScrollAnimation animateIn="animate__fadeInUp" duration={0.5}>
                {!isLoaded ? (
                  <h1>Loading...</h1>
                ) : (
                  <GoogleMap
                    style={{ height: "100rem", width: "100%" }}
                    mapContainerClassName="map-container"
                    center={center}
                    zoom={10}
                    onLoad={(map) => {
                      new window.google.maps.Marker({
                        position: { lat: 43.80062, lng: -79.45936 },
                        map,
                      });
                    }}
                  />
                )}
              </ScrollAnimation>{" "}
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
