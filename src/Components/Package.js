import React from "react";
import { Link } from "react-router-dom";
import "./Package.css";

const Package = () => {
  return (
    <>
      <div class="row package_row_div">
        <div class="col-md-4 col-sm-6">
          <div class="pricing-table-3 basic">
            <div class="pricing-table-header">
              <h4>
                <strong>BASIC</strong>
              </h4>
              <p>Loerm Ipsum Donor Sit Amet</p>
            </div>
            <div class="price">
              <strong>$3</strong> / MONTH
            </div>
            <div class="pricing-body">
              <ul class="pricing-table-ul">
                <li>
                  <i class="fa fa-send"></i> Unlimited Email Addresses
                </li>
                <li>
                  <i class="fa fa-cloud"></i> 50 GB Disk Space
                </li>
                <li>
                  <i class="fa fa-database"></i> Unlimited MySQL Database
                </li>
                <li class="not-avail">
                  <i class="fa fa-clock-o"></i> 24X7 Support
                </li>
                <li class="not-avail">
                  <i class="fa fa-envelope"></i> Email Support
                </li>
              </ul>
              <Link to="/" class="view-more">
                View More
              </Link>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="pricing-table-3 premium">
            <div class="pricing-table-header">
              <h4>
                <strong>PREMIUM</strong>
              </h4>
              <p>Loerm Ipsum Donor Sit Amet</p>
            </div>
            <div class="price">
              <strong>$8</strong> / MONTH
            </div>
            <div class="pricing-body">
              <ul class="pricing-table-ul">
                <li>
                  <i class="fa fa-send"></i> Unlimited Email Addresses
                </li>
                <li>
                  <i class="fa fa-cloud"></i> 80 GB Disk Space
                </li>
                <li>
                  <i class="fa fa-database"></i> Unlimited MySQL Database
                </li>
                <li class="not-avail">
                  <i class="fa fa-clock-o"></i> 24X7 Support
                </li>
                <li class="not-avail">
                  <i class="fa fa-envelope"></i> Email Support
                </li>
              </ul>
              <Link to="/" class="view-more">
                View More
              </Link>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-12">
          <div class="pricing-table-3 business">
            <div class="pricing-table-header">
              <h4>
                <strong>BUSINESS</strong>
              </h4>
              <p>Loerm Ipsum Donor Sit Amet</p>
            </div>
            <div class="price">
              <strong>$12</strong> / MONTH
            </div>
            <div class="pricing-body">
              <ul class="pricing-table-ul">
                <li>
                  <i class="fa fa-send"></i> Unlimited Email Addresses
                </li>
                <li>
                  <i class="fa fa-cloud"></i> 120 GB Disk Space
                </li>
                <li>
                  <i class="fa fa-database"></i> Unlimited MySQL Database
                </li>
                <li class="not-avail">
                  <i class="fa fa-clock-o"></i> 24X7 Support
                </li>
                <li class="not-avail">
                  <i class="fa fa-envelope"></i> Email Support
                </li>
              </ul>
              <Link to="/" class="view-more">
                View More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Package;
