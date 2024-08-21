import React from "react";
import dis1 from "../imges/pro13.jpg"

const Discount = () => {
  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col-12 text-center">
            <h2>our componey give discount</h2>
            <hr className="w-50 mx-auto" />
          </div>
        </div>
        <div className="row my-5">
          <div className="col-lg-6 col-12 align-items-start justify-content-center mt-4 discount-content-first-row">
            <h2>what client say about us</h2>
            <p className="">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Blanditiis, modi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, distinctio blanditiis molestias, tenetur consectetur vel libero eligend
            </p>
            <div className="middle">
            <button className="btn-button1 w-25">click me</button>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <img src={dis1} alt="" className="discount-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;
