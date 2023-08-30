import React from "react";
import hall_img2 from "../hall2_welcome.JPG";
import "./Style.css";
import line from "../divider_line.png";
import { Link } from "react-router-dom";

const WelcomeTo = () => {
  return (
    <>
      <div style={{ marginBottom: "5%" }}>
        <h1 className="heading">Welcome To Vaibhav Laxmi Lawns</h1>
        <div className="dividerline">
          <img style={{ width: "30vw" }} src={line} alt="divider" />
        </div>
        <div className="container-fluid">
          <div className="row">
            <img className="col-md-6" src={hall_img2} alt="2" />
            <p className="col-md-6 welcome_para">
              <p className="welcome_para">
                <b>Vaibhav Lakshmi Lawns and Banquet Hall, Nashik</b>, is one of
                the most attractive wedding venues in the city and offers
                excellent services for weddings and other auspicious events. It
                is very close to the famous Godavari River and 5 km from Nashik
                Road Railway Station and 10 km from Nashik Central Bus Stand. So
                it is very quick to reach there.
              </p>
              <p className="welcome_para">
                This banquet hall has various party spaces from which you can
                choose the event venue as per your convenience.
              </p>
              <p className="welcome_para">
                The venue has a team of decorators who take care of every detail
                to ensure integrity. From the luxurious seating arrangement to
                the grand stage, the team has beautified the venue/lawn. The
                staff at Vaibhav Lakshmi Lawn and Banquet Hall decorates the
                space according to the theme and character of the hall as per
                your wishes.{" "}
              </p>
              <br />
              <p className="welcome_para">
                So what are you waiting for? <Link className="welcome_para" to="/contact">Book Vaibhav Lakshmi Lawns and
                Banquet Hall today.</Link>
              </p>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomeTo;
