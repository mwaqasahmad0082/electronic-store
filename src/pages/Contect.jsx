import React from "react";
import Form from "react-bootstrap/Form";

const Contect = () => {
  return (
    <div className="bg-dark contect-component my-5">
      
     
      <div className="container content-container">

        
        <div className="row">
          <div className="col-12 text-center mt-3">
            <h2 className="text-white">contect us for get our services</h2>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-6">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="text-white text-start">Type your name</Form.Label>
              <Form.Control type="text" placeholder="Type your name" />
            </Form.Group>
          </div>
          <div className="col-6">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="text-white text-start">type your email</Form.Label>
              <Form.Control
                type="email"
                placeholder="type your email address"
              />
            </Form.Group>
          </div>
          <div className="col-12">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="text-white text-start">Phone Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="type your phone number"
              />
            </Form.Group>
          </div>
          <div className="col-12">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="text-white text-start">Shop Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="type your Shop address"
              />
            </Form.Group>
          </div>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="text-center text-white"> textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </div>
      </div>
      
    </div>
  );
};

export default Contect;
