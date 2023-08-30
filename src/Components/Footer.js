import React from "react";
import { Link } from "react-router-dom";
import img1 from "../lawns_logo_2.png";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer class="footer-section">
        <div class="container">
          <div class="footer-cta pt-5 pb-5">
            <div class="row">
              <div class="col-xl-4 col-md-4 mb-30">
                <div class="single-cta">
                  <i class="fas fa-map-marker-alt"></i>
                  <div class="cta-text">
                    <h4>Find us</h4>
                    <span>
                      Prakash Anand Nagar, Shivram Nagar, Adhav Nagar, Nashik
                      Road, Nashik
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-md-4 mb-30">
                <div class="single-cta">
                  <i class="fas fa-phone"></i>
                  <div class="cta-text">
                    <h4>Call us</h4>
                    <span>+91 56231 12458</span>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-md-4 mb-30">
                <div class="single-cta">
                  <i class="far fa-envelope-open"></i>
                  <div class="cta-text">
                    <h4>Mail us</h4>
                    <span>vaibhavlaxmilawns@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-content pt-5 pb-5">
            <div class="row">
              <div class="col-xl-4 col-lg-4 mb-50">
                <div class="footer-widget">
                  <div class="footer-logo">
                    <Link to="/">
                      <img src={img1} class="img-fluid" alt="logo" />
                    </Link>
                  </div>
                  <div class="footer-text">
                    {/* <p>
                      Lorem ipsum dolor sit amet, consec tetur adipisicing elit,
                      sed do eiusmod tempor incididuntut consec tetur
                      adipisicing elit,Lorem ipsum dolor sit amet.
                    </p> */}
                  </div>
                  <div class="footer-social-icon">
                    <span>Follow us</span>
                    <Link to="#">
                      <i class="fab fa-facebook-f facebook-bg"></i>
                    </Link>
                    <Link to="#">
                      <i class="fab fa-whatsapp whatsapp-bg fa-1xl"></i>
                    </Link>
                    <Link to="#">
                      <i class="fab fa-instagram instagram-bg"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div class="footer-widget">
                  <div class="footer-widget-heading">
                    <h3>Useful Links</h3>
                  </div>
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/welcometo">about</Link>
                    </li>
                    <li>
                      <Link to="/">services</Link>
                    </li>
                    <li>
                      <Link to="/gallerypage">Gallery</Link>
                    </li>
                    <li>
                      <Link to="/packages">Packages</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                <div class="footer-widget">
                  <div class="footer-widget-heading">
                    <h3>Subscribe</h3>
                  </div>
                  <div class="footer-text mb-25">
                    <p>
                      Don’t miss to subscribe to our new feeds, kindly fill the
                      form below.
                    </p>
                  </div>
                  <div class="subscribe-form">
                    <form action="#">
                      <input type="text" placeholder="Email Address" />
                      <button>
                        <i class="fab fa-telegram-plane"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="copyright-area">
          <div class="container">
            <div class="row">
              <div class="col-xl-12 text-center text-lg-left">
                <div class="copyright-text">
                  <p>Copyright &copy; 2023, All Right Reserved </p>
                </div>
              </div>
              {/* <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                <div class="footer-menu">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="#">Terms</Link>
                    </li>
                    <li>
                      <Link to="#">Privacy</Link>
                    </li>
                    <li>
                      <Link to="#">Policy</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
