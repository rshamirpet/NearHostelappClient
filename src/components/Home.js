import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Home.css";
import travel from "../images/travel.jpg";
import Hostel_Siginin from "../images/Hostel_Siginin.jpg";
import pic2 from "../images/pic2.jpg";
import pic3 from "../images/pic3.jpg";
import pic4 from "../images/pic4.jpg";
import pic5 from "../images/pic5.jpg";
import pic6 from "../images/pic6.jpg";
import pic7 from "../images/pic7.jpg";
import pic9 from "../images/pic9.jpg";
import pic10 from "../images/pic10.jpg";
import pic11 from "../images/pic11.jpg";

import Hostel_Homey from "../images/Hostel_Homey.jpg";

const Home = () => {
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      history.push("/search");
    }
  }, []);
  return (
    <>
      <div className="site">
        <section id="navbar">
          <nav className="navbar fixed-top navbar-expand-lg">
            <div className="container">
              <a className="navbar-brand mb-0 h1">
                QuickFind<span id="color">HOSTEL</span>
              </a>
              <button
                className="navbar-toggler collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul className="navbar-nav ml-auto ">
                  <li className="nav-item">
                    <a className="nav-link" href="#home">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#features">
                      Features
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#signin">
                      Sign In
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#gallery">
                      Gallery
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </section>
        {/* 
        <section id="home">
          <div className="container">
            <div className="row">
              <div className="heading">
                <p>
                  <span id="size">A HOME AWAY FROM HOME.</span>
                  <br />
                  <span id="font">Find Your Hostel Easy.</span>
                </p>
                <a href="Hostel_main.html">
                  <button type="button" className="btn btn-primary btn-lg">
                    FindHostel
                  </button>
                </a>
              </div>
              <div className="image">
                <img src={travel} />
              </div>
            </div>
          </div>
        </section>

        <section id="features">
          <div className="container">
            <div className="row">
              <div className="featurebox col-lg-4 col-md-4">
                <i className="icony fas fa-check-circle fa-3x"></i>
                <h3>Easy</h3>
                <p>Simple to use</p>
              </div>

              <div className="featurebox col-lg-4 col-md-4">
                <i className="icony fas fa-search fa-3x"></i>
                <h3> Search Hostel</h3>
                <p>
                  choose your hostel from our listing.
                  <br />
                  which is near to your work place.
                </p>
              </div>

              <div className="featurebox col-lg-4 col-md-4">
                <i className="icony fas fa-heart fa-3x"></i>
                <h3>Search Hostel</h3>
                <p>
                  choose your hostel from our listing.which is near to your work
                  place.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="signin">
          <div className="container">
            <div className="row">
              <div className="image-signin col-lg-6 col-md-7">
                <img src={Hostel_Siginin} />
              </div>

              <div className="content-signin col-lg-6 col-md-5">
                <p>
                  QuickFind
                  <br />
                  <span>Hostel</span>
                </p>
                <p id="tag">( Match Your Comfort )</p>
                <a href="Hostel_SignIn.html">
                  <button type="button" className="btn btn-outline-primary">
                    Sign In
                  </button>
                </a>
                <a href="Hostel_SignUp.html">
                  <button type="button" className="btn btn-outline-primary">
                    Sign Up
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery">
          <div className="imagebox container">
            <h3>Photos Gallery</h3>
            <div className="row">
              <img
                className="image col-lg-4 col-md-4 col-sm-6 col-xs-6"
                src={pic3}
              />
              <img
                className="image col-lg-4 col-md-4 col-sm-6 col-xs-6"
                src={pic2}
              />
              <img
                className="image col-lg-4 col-md-4 col-sm-6 col-xs-6"
                src={pic6}
              />
              <img
                className="image col-lg-4 col-md-4 col-sm-6 col-xs-6"
                src={pic11}
              />
              <img
                className="image col-lg-4 col-md-4 col-sm-6 col-xs-6"
                src={pic7}
              />
              <img
                className="image col-lg-4 col-md-4 col-sm-6 col-xs-6"
                src={pic5}
              />
              <img
                className="image col-lg-8 col-md-8 col-sm-6 col-xs-6"
                src={Hostel_Homey}
              />
              <img
                className="image col-lg-4 col-md-4 col-sm-6 col-xs-6"
                src={pic4}
              />
            </div>
          </div>
        </section>

        <div className="contact">
          <section id="contact">
            <div className="container">
              <h3 id="ContactUs">Contact Us</h3>
              <div className="row">
                <div className="details col-lg-6 col-mg-6 col-sm-12">
                  <div className="row">
                    <div className="icon col-lg-2 col-mg-2">
                      <i className="fas fa-map-marker-alt fa-2x"></i>
                    </div>
                    <div className="address col-lg-5 col-mg-5">
                      <h5>Address</h5>
                      <p>Maisammaguda,Hyderabad,Telangana</p>
                      <p>500043</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="icon col-lg-2 col-mg-2">
                      <i className="fas fa-phone-square fa-2x"></i>
                    </div>
                    <div className="phone col-lg-5 col-mg-5">
                      <h5>Phone</h5>
                      <p>050-12512-12</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="icon col-lg-2 col-mg-2">
                      <i className="fas fa-envelope fa-2x"></i>
                    </div>
                    <div className="email col-lg-5 col-mg-5">
                      <h5>Email</h5>
                      <p>stpetershyderabad@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div className="form col-lg-6 col-mg-6 col-sm-12">
                  <h4> Send Message</h4>
                  <br />

                  <input id="name" type="text" name="name" placeholder="Name" />
                  <br />
                  <br />

                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email"
                  />
                  <br />
                  <br />

                  <textarea placeholder="Type Your Message..."></textarea>
                  <br />
                  <br />
                  <button type="button" className="btn btn-outline-primary">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section id="contact">
          <div className="container">
            <h3>Contact Us</h3>
            <div className="row">
              <div className="details col-lg-6 col-md-6">
                <div className="row">
                  <div className="box">
                    <i className="fas fa-map-marker-alt fa-2x"></i>
                    <h5>Address</h5>
                    <p>Maisammaguda,Hyderabad,Telangana</p>
                    <p>500043</p>
                  </div>

                  <div className="box">
                    <i className="fas fa-phone-square fa-2x"></i>
                    <h5>Phone</h5>
                    <p>050-12512-12</p>
                  </div>

                  <div className="box">
                    <i className="fas fa-envelope fa-2x"></i>
                    <h5>Email</h5>
                    <p>stpetershyderabad@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="form col-lg-6 col-md-6">
                <div className="form-details">
                  <h4> Send Message</h4>
                  <br />

                  <input id="name" type="text" name="name" placeholder="Name" />
                  <br />
                  <br />
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email"
                  />
                  <br />
                  <br />
                  <textarea placeholder="Type Your Message..."></textarea>
                  <br />
                  <br />
                  <button type="button" className="btn btn-outline-primary">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div> */}
        {/* </section> */}
      </div>
    </>
  );
};

export default Home;
