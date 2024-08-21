
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import pro1 from "../imges/pro7.jpg";
import pro2 from "../imges/pro8.jpg";
import pro3 from "../imges/pro15.jpg";
import pro4 from "../imges/pro10.jpg";
import pro5 from "../imges/pro11.jpg";
import pro6 from "../imges/pro12.jpg";
import pro7 from "../imges/pro13.jpg";
import pro8 from "../imges/pro15.jpg";


const Product = () => {
  const data = [
    {
      img: pro1,
      title: "Card Title 1",
      cardtext: "Some quick example text to build on the card title",
    },
    {
      img: pro2,
      title: "Card Title 2",
      cardtext: "Some quick example text to build on the card title",
    },
    {
      img: pro3,
      title: "Card Title 3",
      cardtext: "Some quick example text to build on the card title",
    },
    {
      img: pro4,
      title: "Card Title 4",
      cardtext: "Some quick example text to build on the card title",
    },
    {
      img: pro5,
      title: "Card Title 5",
      cardtext: "Some quick example text to build on the card title",
    },
    {
      img: pro6,
      title: "Card Title 6",
      cardtext: "Some quick example text to build on the card title",
    },
    {
      img: pro7,
      title: "Card Title 7",
      cardtext: "Some quick example text to build on the card title",
    },
    {
      img: pro8,
      title: "Card Title 8",
      cardtext: "Some quick example text to build on the card title",
    },
  ];

  return (
    <div className="product-component">
      <div className="container my-5">
        <div className="row">
          <div className="col-12 text-center">
            <h2>
              We Provide Good <br />
              Quality Products
            </h2>
            <hr className="mx-auto w-25" />
          </div>
        </div>

        <div className="row my-5">
          {data.map((item, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-3 text-center g-3">
              <div className="d-flex justify-content-center g-2">
                <div className="card-imgs ">
                  <Card style={{ width: "17rem" }}>
                    <Card.Img
                      variant="top"
                      src={item.img}
                      className="custom-img"
                    />
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>{item.cardtext}</Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
