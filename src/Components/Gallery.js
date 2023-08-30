import React from "react";
import "./Style.css";
import line from "../divider_line.png";


const Gallery = () => {
  return (
    <>
      <h1 className="availablefor_heading">Gallery</h1>
      <div className="dividerline">
        <img style={{ width: "30vw" }} src={line} alt="divider" />
      </div>
      <div class="container gallery-wrap">
        <div class="item item-1"></div>
        <div class="item item-2"></div>
        <div class="item item-3"></div>
        <div class="item item-4"></div>
        <div class="item item-5"></div>
        <div class="item item-6"></div>
      </div>
    </>
  );
};

export default Gallery;
