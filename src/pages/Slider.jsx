
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import slider1 from "../imges/pro5.jpg";
import slider2 from "../imges/pro6.jpg";
import slider3 from "../imges/pro7.jpg";
import slider4 from "../imges/pro8.jpg";
import slider5 from "../imges/pro15.jpg";
import slider6 from "../imges/pro10.jpg";
import slider7 from "../imges/pro11.jpg";
import slider8 from "../imges/pro12.jpg";
import slider9 from "../imges/pro13.jpg";

const imageStyle = {
  width: '100%',
  height: '200px', 
  objectFit: 'cover' 
};

const Slider = () => {
  return (
    <div className="bg-dark py-5 slider-component">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center text-white">
            <h2>
              Generating new customers <br /> via online mood
            </h2>
            <hr className="w-25 mx-auto" />
          </div>
        </div>
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <div className="container carousel-row">
              <div className="row text-center g-3">
                <div className="col-lg-4">
                  <div className="d-flex justify-content-center align-items-center">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={slider1} style={imageStyle} />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="d-flex justify-content-center align-items-center">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={slider2} style={imageStyle} />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="d-flex justify-content-center align-items-center">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={slider3} style={imageStyle} />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                  </div>
                </div>
              </div>
            </div>

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="container carousel-row">
              <div className="row text-center g-3">
                <div className="col-lg-4">
                <div className="d-flex justify-content-center align-items-center">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={slider4} style={imageStyle} />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                  </div>
                </div>
                <div className="col-lg-4">
                <div className="d-flex justify-content-center align-items-center">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={slider5} style={imageStyle} />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                  </div>
                </div>
                <div className="col-lg-4">
                <div className="d-flex justify-content-center align-items-center">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={slider6} style={imageStyle} />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                  </div>
                </div>
              </div>
            </div>

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="container carousel-row ">
              <div className="row text-center g-3">
                <div className="col-lg-4">
                <div className="d-flex justify-content-center align-items-center">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={slider7} style={imageStyle} />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                  </div>
                </div>
                <div className="col-lg-4">
                <div className="d-flex justify-content-center align-items-center">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={slider8} style={imageStyle} />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                  </div>
                </div>
                <div className="col-lg-4">
                <div className="d-flex justify-content-center align-items-center">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={slider9} style={imageStyle} />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                  </div>
                </div>
              </div>
            </div>

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;
