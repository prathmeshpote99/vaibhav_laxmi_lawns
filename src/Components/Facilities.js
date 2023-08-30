import React from "react";
import "./Faci.css";
import line from "../divider_line.png";
import ParkingArea from "../ParkingArea.jpg";
import LawnArea from "../LawnArea.jpg";
import BanquetHall from "../BanquetHall1.jpg";
import AllModerns from "../AllModerns.jpg";
import Stage from "../Stage.jpg";
import Room from "../Room.jpg";

const Facilities = () => {
  return (
    <>
      <div>
        <h1 className="heading">Facilities</h1>
        <div className="dividerline">
          <img style={{ width: "30vw" }} src={line} alt="divider" />
        </div>
        <div>
          <div class="container facilities_container">
            <div class="box">
              <div class="imgBx">
                <img className="facilities_images" alt="" src={ParkingArea} />
              </div>
              <div class="content">
                <div>
                  <h2>Parking Area</h2>
                </div>
              </div>
            </div>
            <div class="box">
              <div class="imgBx">
                <img className="facilities_images" alt="" src={LawnArea} />
              </div>
              <div class="content">
                <div>
                  <h2>Lawn Area</h2>
                </div>
              </div>
            </div>
            <div class="box">
              <div class="imgBx">
                <img className="facilities_images" alt="" src={BanquetHall} />
              </div>
              <div class="content">
                <div>
                  <h2>Banquet Hall</h2>
                </div>
              </div>
            </div>
            <div class="box">
              <div class="imgBx">
                <img className="facilities_images" alt="" src={AllModerns} />
              </div>
              <div class="content">
                <div>
                  <h2>All Modern</h2>
                </div>
              </div>
            </div>
            <div class="box">
              <div class="imgBx">
                <img className="facilities_images" alt="" src={Room} />
              </div>
              <div class="content">
                <div>
                  <h2>Rooms</h2>
                </div>
              </div>
            </div>
            <div class="box">
              <div class="imgBx">
                <img className="facilities_images" alt="" src={Stage} />
              </div>
              <div class="content">
                <div>
                  <h2>Stage</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Facilities;
