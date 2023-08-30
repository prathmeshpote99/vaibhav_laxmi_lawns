import React from "react";
import "./Testie.css";
import line from "../divider_line.png";

const ContactPersons = () => {
  return (
    <div class="container-lg">
      <h1 className="availablefor_heading">Contact Persons</h1>
      <div className="dividerline">
        <img style={{ width: "30vw" }} src={line} alt="divider" />
      </div>
      <div class="row">
        <div class="col-sm-12">
          <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="row">
                  <div class="col-sm-6">
                    <div class="testimonial">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam eu sem tempor, varius quam at, luctus dui. Mauris
                        magna metus, dapibus nec turpis vel, semper malesuada
                        ante.
                      </p>
                    </div>
                    <div class="media">
                      <img
                        src="/examples/images/clients/1.jpg"
                        class="mr-3"
                        alt=""
                      />
                      <div class="media-body">
                        <div class="overview">
                          <div class="name">
                            <b>Paula Wilson</b>
                          </div>
                          <div class="details">Media Analyst / SkyNet</div>
                          <div class="star-rating">
                            <ul class="list-inline">
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star-o"></i>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="testimonial">
                      <p>
                        Vestibulum quis quam ut magna consequat faucibu. Eget mi
                        suscipit tincidunt. Utmtc tempus dictum. Pellentesque
                        virra. Quis quam ut magna consequat faucibus quam.
                      </p>
                    </div>
                    <div class="media">
                      <img
                        src="/examples/images/clients/2.jpg"
                        class="mr-3"
                        alt=""
                      />
                      <div class="media-body">
                        <div class="overview">
                          <div class="name">
                            <b>Antonio Moreno</b>
                          </div>
                          <div class="details">Web Developer / SoftBee</div>
                          <div class="star-rating">
                            <ul class="list-inline">
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star-o"></i>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPersons;
