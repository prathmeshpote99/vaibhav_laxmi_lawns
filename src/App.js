import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import AboutPage from "./Components/AboutPage";
import Package from "./Components/Package";
import Contact from "./Components/Contact";
import GalleryPage from "./Components/GalleryPage";
import SideFloatingBar from "./Components/SideFloatingBar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/aboutpage" element={<AboutPage />} />
          <Route exact path="/packages" element={<Package />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/gallerypage" element={<GalleryPage />} />
        </Routes>
      </Suspense>
      <SideFloatingBar />
      <Footer />
    </Router>
  );
};

export default App;
