import React from "react";
import { Link } from "react-router-dom";
import "./GalleryPage.css";
import img1 from "../BanquetHall1.jpg";
import img2 from "../a.jpg";
import img3 from "../AllModerns.jpg";
import img4 from "../IMG-20230327-WA0007.jpg";
import img5 from "../IMG-20230327-WA0016.jpg";
import img6 from "../IMG-20230327-WA0006.jpg";
import img7 from "../IMG-20230327-WA0030.jpg";
import img8 from "../IMG-20230327-WA0049.jpg";
import img9 from "../IMG-20230327-WA0066.jpg";
import img10 from "../IMG-20230327-WA0063.jpg";
import img11 from "../IMG-20230327-WA0051.jpg";
import img12 from "../IMG-20230327-WA0031.jpg";
import img13 from "../LawnArea.jpg";
import img14 from "../IMG-20230327-WA0053.jpg";

const GalleryPage = () => {
  return (
    <>
      <div class="external">
        <div class="horizontal-scroll-wrapper">
          <div class="img-wrapper slower">
            <Link
              to="https://altphotos.com/photo/stylish-parisian-cafe-terrace-279/"
              target="_blank"
              rel="noopener"
            >
              <img className="gallery_image" src={img1} alt="" />
            </Link>
          </div>

          <div class="img-wrapper faster">
            <Link to="/">
              <img className="gallery_image" src={img2} alt="" />
            </Link>
          </div>

          <div class="img-wrapper slower vertical">
            <Link
              to="https://altphotos.com/photo/clocks-shop-exposition-window-reflecting-the-streets-277/"
              target="_blank"
              rel="noopener"
            >
              <img className="gallery_image" src={img3} alt="" />
            </Link>
          </div>

          <div class="img-wrapper slower slower-down">
            <Link
              to="https://altphotos.com/photo/swans-and-ducks-swimming-in-a-river-264/"
              target="_blank"
              rel="noopener"
            >
              <img className="gallery_image" src={img4} alt="" />
            </Link>
          </div>

          <div class="img-wrapper">
            <Link
              to="https://altphotos.com/photo/sidewalk-terrace-of-a-blue-facade-cafe-312/"
              target="_blank"
              rel="noopener"
            >
              <img className="gallery_image" src={img5} alt="" />
            </Link>
          </div>

          <div class="img-wrapper slower">
            <Link
              to="https://altphotos.com/photo/paris-waterfront-at-sunset-1555/"
              target="_blank"
              rel="noopener"
            >
              <img className="gallery_image" src={img6} alt="" />
            </Link>
          </div>

          <div class="img-wrapper faster1">
            <Link
              to="https://altphotos.com/photo/old-man-leaning-over-the-barrier-looking-at-the-river-265/"
              target="_blank"
              rel="noopener"
            >
              <img className="gallery_image" src={img7} alt="" />
            </Link>
          </div>

          <div class="img-wrapper slower slower2">
            <Link
              to="https://altphotos.com/photo/cafe-terrace-with-a-row-of-retro-tables-261/"
              target="_blank"
              rel="noopener"
            >
              <img className="gallery_image" src={img8} alt="" />
            </Link>
          </div>

          <div class="img-wrapper">
            <Link
              to="https://altphotos.com/photo/street-scene-with-pedestrians-and-dogs-318/"
              target="_blank"
              rel="noopener"
            >
              <img className="gallery_image" src={img9} alt="" />
            </Link>
          </div>

          <div class="img-wrapper slower">
            <Link
              to="https://altphotos.com/photo/tourist-barge-on-the-river-seine-near-notre-dame-266/"
              target="_blank"
              rel="noopener"
            >
              <img className="gallery_image" src={img10} alt="" />
            </Link>
          </div>

          <div class="img-wrapper slower last">
            <Link
              to="https://altphotos.com/photo/skulls-decoration-in-a-shop-window-331/"
              target="_blank"
              rel="noopener"
            >
              <img className="gallery_image" src={img11} alt="" />
            </Link>
          </div>

          <div class="img-wrapper faster">
            <Link to="/">
              <img className="gallery_image" src={img12} alt="" />
            </Link>
          </div>

          <div class="img-wrapper">
            <Link
              to="https://altphotos.com/photo/sidewalk-terrace-of-a-blue-facade-cafe-312/"
              target="_blank"
              rel="noopener"
            >
              <img className="gallery_image" src={img13} alt="" />
            </Link>
          </div>

          <div class="img-wrapper slower vertical">
            <Link
              to="https://altphotos.com/photo/clocks-shop-exposition-window-reflecting-the-streets-277/"
              target="_blank"
              rel="noopener"
            >
              <img className="gallery_image" src={img14} alt="" />
            </Link>
          </div>
        </div>
        {/* <p class="scroll-info">
          <span class="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 100 100"
            >
              <path d="M50,67.1c-0.6,0-1.2-0.2-1.8-0.7c-3.8-3.8-7.7-7.7-11.5-11.5c-2.3-2.3,1.2-5.8,3.5-3.5c2.5,2.5,4.9,4.9,7.4,7.4      c0-13.7,0-27.4,0-41.2c0-0.6,0.2-1.2,0.5-1.5c0,0,0,0,0,0c0.4-0.6,1.1-1,2-0.9c13.7,0.3,26.4,7.2,33.5,19.1      C96.5,55.9,84.7,85,60.2,91.6C35.5,98.2,11.6,79.1,11.1,54c-0.1-3.2,4.9-3.2,5,0c0.3,13.8,8.4,26.4,21.3,31.5      c12.5,5,27.1,1.9,36.6-7.5c9.5-9.5,12.5-24.1,7.5-36.6c-4.8-12.1-16.3-20.1-29-21.2c0,12.8,0,25.5,0,38.3      c2.5-2.5,4.9-4.9,7.4-7.4c2.3-2.3,5.8,1.3,3.5,3.5c-3.9,3.9-7.8,7.8-11.8,11.8C51.2,66.9,50.6,67.1,50,67.1z" />
            </svg>
          </span>{" "}
          Try scrolling down
        </p> */}
      </div>
    </>
  );
};

export default GalleryPage;
