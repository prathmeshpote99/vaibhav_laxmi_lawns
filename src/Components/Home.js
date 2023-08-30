import React from "react";
import "./Style.css";
import img1 from "../black_white.png";
import WelcomeTo from "./WelcomeTo";
import Facilities from "./Facilities";
import AvailableFor from "./AvailableFor";
import ContactPersons from "./ContactPersons";
import Gallery from "./Gallery";

const Home = () => {
  return (
    <>
      <div style={{background: "linear-gradient(#ff242428, #ff242413)"}} className="wrapper">
        <div className="heart x1"></div>
        <div className="heart x2"></div>
        <div className="heart x3"></div>
        <div className="altheart x6"></div>
        <div className="video_div ">
          <img className="brand_logo2" src={img1} alt="" />
          {/* parallex div */}
          <div className="heart x3"></div>
          <div className="altheart x6"></div>
          <div className="heart x4"></div>
          <div className="heart x5"> </div>
        </div>
        <WelcomeTo />
        <div className="heart x5"> </div>
        <div className="heart x4"></div>
        <div className="altheart x6"></div>
        <Facilities />
        <div className="heart x3"></div>
        <div className="heart x4"></div>
        <div className="heart x5"> </div>
        <div className="altheart x6"></div>
        <AvailableFor />
        <div className="heart x1"></div>
        <div className="altheart x6"></div>
        <Gallery/>
        <div className="heart x2"></div>
        <div className="heart x3"></div>
        <ContactPersons />
        <div className="altheart x6"></div>
        <div className="heart x2"></div>
        <div className="heart x3"></div>
      </div>
    </>
  );
};

export default Home;
