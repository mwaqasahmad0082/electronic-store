import React from "react";
import pro1 from "../imges/pro17.jpg";

const Vesite = () => {
  return (
    <div className=" vesite-component">
      <div className="container ">
        <div className="row vesite-com-row text-center">
          <div className="col-lg-6 col-md-12">
            <figure>
              <img
                src={pro1}
                alt=""
                className="img-fluid visite-front-img"
              />
            </figure>
          </div>
          <div className="col-lg-6 col-md-12 align-items-start justify-content-center vesite-component-content">
            <h2 className="text-white">
              we provide good 
              quailty of products
            </h2>
            <p className="text-white mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, temporibus Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, quaerat!
            </p>
            <button className="btn-button w-25 w-25 mt-2">click me</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vesite;
