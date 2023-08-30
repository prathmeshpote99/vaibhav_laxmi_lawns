import React, { useState } from "react";
import "./contact.css";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newData = {
      Name: name,
      Email: email,
      Phone: phone,
      Message: message,
    };
    axios
      .post("http://localhost:5050/vaibhavlaxmilawns/add", newData)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="container-fluid bg-div-contact">
        <div className="container inner-contact-div">
          <div className="row">
            <form onSubmit={handleSubmit} className="col-md-6 contact-div">
              <div style={{ padding: "10% 10%" }}>
                <h5 style={{ color: "#ff2424" }}>Send us a message</h5>
                <div className="row" style={{ marginTop: "12%" }}>
                  <div className="col-md-6 col-sm-6">
                    <label>Name*</label>
                    <input
                      type="text"
                      onChange={(e) => setName(e.target.value)}
                      className="contact-input-box"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <label>Email*</label>
                    <input
                      type="text"
                      onChange={(e) => setEmail(e.target.value)}
                      className="contact-input-box"
                      placeholder="Your Email"
                    />
                  </div>
                </div>

                <div className="row" style={{ marginTop: "12%" }}>
                  <div className="col-md-6 col-sm-6">
                    <label>Phone*</label>
                    <input
                      onChange={(e) => setPhone(e.target.value)}
                      type="number"
                      className="contact-input-box"
                      placeholder="Phone #"
                    />
                  </div>
                  {/* <div className="col-md-6 col-sm-6">
                    <label>Email*</label>
                    <input
                      className="contact-input-box"
                      placeholder="Your Email"
                    />
                  </div> */}
                </div>

                <div className="row" style={{ marginTop: "12%" }}>
                  <div>
                    <div className="col-md-12">
                      <label>Message*</label>
                    </div>
                    <div className="col-md-12">
                      <textarea
                        type="text"
                        onChange={(e) => setMessage(e.target.value)}
                        className="contact-input-box"
                        placeholder="Write your message "
                      ></textarea>
                    </div>
                  </div>
                </div>
                <button type="submit" className="submit-btn-contact">
                  Send Message <i class="fa-sharp fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </form>
            <div className="col-md-6 map-div">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.5865131169176!2d73.83001057468738!3d19.983884122845787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddea98435b3373%3A0x5aaf6b8a8d44648f!2sVaibhav%20Laxmi%20Lawns!5e0!3m2!1sen!2sin!4v1681893263798!5m2!1sen!2sin"
                width="570"
                height="632"
                allowfullscreen=""
                loading="lazy"
                title="map"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
