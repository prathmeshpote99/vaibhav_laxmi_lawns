import React from "react";
import { Link } from "react-router-dom";
import "./Style.css";
import img1 from "../lawns_logo_2.png";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light fixed-top">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="underline nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="underline nav-link" to="/aboutpage">
                  About
                </Link>
              </li>
              <li class="nav-item dropdown">
                <Link
                  class="underline nav-link"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services <i class="fa-solid fa-angle-down"></i>
                </Link>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="underline dropdown-item" to="/">
                      Caterings
                    </Link>
                  </li>
                  <li>
                    <Link class="underline dropdown-item" to="/">
                      Lights and Sound
                    </Link>
                  </li>
                  <li>
                    <Link class="underline dropdown-item" to="/">
                      Decoration
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <Link class="navbar-brand" to="/">
              <img className="brand_logo" src={img1} alt="1" />
            </Link>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="underline nav-link" to="/gallerypage">
                  Gallery
                </Link>
              </li>
              <li class="nav-item">
                <Link class="underline nav-link" to="/packages">
                  Packages
                </Link>
              </li>
              <li class="nav-item">
                <Link class="underline nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
