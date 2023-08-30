import React from "react";
import "./Style.css";
import image1 from "../lawn-for-wedding-and-marriage-functions.jpg";
import image2 from "../venue-for-corporate-events.jpg";
import image3 from "../venues-for-entertainment-events.jpg";
import image4 from "../gettogether.jpg";
import line from "../divider_line.png";

const AvailableFor = () => {
  return (
    <div className="container-fluid availablefor_div">
      <h1 className="availablefor_heading">Lawn Available For</h1>
      <div className="dividerline">
        <img style={{ width: "30vw" }} src={line} alt="divider" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-3 availablefor_inner_div">
            <h6 className="inner_headings">Marriage/Wedding Functions</h6>
            <img className="available_for_img" src={image1} alt="" />
          </div>
          <div className="col-md-3 availablefor_inner_div">
            <h6 className="inner_headings">Corporate Events</h6>
            <img className="available_for_img" src={image2} alt="" />
          </div>
          <div className="col-md-3 availablefor_inner_div">
            <h6 className="inner_headings">Entertainment Events</h6>
            <img className="available_for_img" src={image3} alt="" />
          </div>
          <div className="col-md-3 availablefor_inner_div">
            <h6 className="inner_headings">Parties and Get-together</h6>
            <img className="available_for_img" src={image4} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableFor;
