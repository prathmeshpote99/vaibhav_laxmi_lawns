import React from "react";
import { Link } from "react-router-dom";
import './Style.css';

const SideFloatingBar = () => {
  return (
    <div class="float-sm">
      <div class="fl-fl float-fb">
        <i class="fa-brands fa-facebook"></i>
        <Link to="" target="_blank">
          {" "}
          Facebook
        </Link>
      </div>
      <div class="fl-fl float-ig">
        <i class="fa-brands fa-instagram"></i>
        <Link to="" target="_blank">
          {" "}
          Instagram
        </Link>
      </div>
      <div class="fl-fl float-wp">
        <i class="fa-brands fa-whatsapp"></i>
        <Link to="" target="_blank">
          {" "}
          WhatsApp
        </Link>
      </div>
      {/* <div class="fl-fl float-gp">
        <i class="fa-brands fa-google-plus"></i>
        <Link to="" target="_blank">
          {" "}
          Google+
        </Link>
      </div>
      <div class="fl-fl float-rs">
        <i class="fa fa-rss"></i>
        <Link to="" target="_blank">
          Follow via RSS
        </Link>
      </div>
      <div class="fl-fl float-pn">
        <i class="fa-brands fa-pinterest"></i>
        <Link to="" target="_blank">
          {" "}
          Pinterest
        </Link>
      </div> */}
    </div>
  );
};

export default SideFloatingBar;
