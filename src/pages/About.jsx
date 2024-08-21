import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import Carousel from "react-bootstrap/Carousel";
import about1 from "../imges/pro3.jpg";
import about2 from "../imges/pro4.jpg";
import about3 from "../imges/pro5.jpg";

const About = () => {
  return (
    <div className="about-component ">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center my-2 ">
            <h1 className="text-white">
              our online electronics <br /> product shop
            </h1>
            <hr className="mx-auto w-25" />
          </div>
        </div>

        <div className="row py-2">
          <div className="col-lg-3 col-md-3 about-first-row">
            <ul className=" d-flex flex-column justify-content-between mt-3 ">
              <div className="d-flex  align-items-center gap-2">
                <FaArrowAltCircleRight className="about-icons" />{" "}
                <li>Lorem ipsum dolor </li>
              </div>
              <div className="d-flex align-items-start align-items-center gap-2">
                <FaArrowAltCircleRight className="about-icons" />{" "}
                <li>Lorem ipsum </li>
              </div>
              <div className="d-flex align-items-start align-items-center gap-2">
                <FaArrowAltCircleRight className="about-icons" />{" "}
                <li>Lorem ipsum dolor sit </li>
              </div>
              <div className="d-flex align-items-start align-items-center gap-2">
                <FaArrowAltCircleRight className="about-icons" />{" "}
                <li>Lorem ipsum dolor</li>
              </div>
              <div className="d-flex align-items-start align-items-center gap-2">
                <FaArrowAltCircleRight className="about-icons" />{" "}
                <li>Lorem ipsum</li>
              </div>
              <div className="d-flex align-items-start align-items-center gap-2">
                <FaArrowAltCircleRight className="about-icons" />{" "}
                <li>Lorem ipsum dolo.</li>
              </div>
              <div className="d-flex align-items-start align-items-center gap-2">
                <FaArrowAltCircleRight className="about-icons" />{" "}
                <li>Lorem ipsum dolor.</li>
              </div>
              <div className="d-flex align-items-start align-items-center gap-2">
                <FaArrowAltCircleRight className="about-icons" />{" "}
                <li>Lorem ipsum.</li>
              </div>
              <div className="d-flex align-items-start align-items-center gap-2">
                <FaArrowAltCircleRight className="about-icons" />{" "}
                <li>Lorem ipsum dolor.</li>
              </div>
              <div className="d-flex align-items-start align-items-center gap-2">
                <FaArrowAltCircleRight className="about-icons" />{" "}
                <li>Lorem ipsum dol.</li>
              </div>
              <div className="d-flex align-items-start align-items-center gap-2">
                <FaArrowAltCircleRight className="about-icons" />{" "}
                <li>Lorem ipsum dol.</li>
              </div>
              <div className="d-flex align-items-start align-items-center gap-2">
                <FaArrowAltCircleRight className="about-icons" />{" "}
                <li>Lorem ipsum dol.</li>
              </div>
              <div className="d-flex align-items-start align-items-center gap-2">
                <FaArrowAltCircleRight className="about-icons" />{" "}
                <li>Lorem ipsum dol.</li>
              </div>

              <div className="d-flex align-items-start align-items-center gap-2">
                <FaArrowAltCircleRight className="about-icons" />{" "}
                <li>Lorem ipsum dol.</li>
              </div>
            </ul>
          </div>

          <div className="col-lg-1 col-md-1"></div>
          <div className="col-lg-8 col-md-8 g-0 about-second-row bg-dark">
            {/* ////////////////////carousel start////////////////////////// */}
            <Carousel data-bs-theme="dark">
              <Carousel.Item>
                <img className="d-block w-100" src={about1} alt="First slide" />

                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={about2}
                  alt="Second slide"
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={about3} alt="Third slide" />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
      <div class="custom-shape-divider-bottom-1723548526">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default About;
