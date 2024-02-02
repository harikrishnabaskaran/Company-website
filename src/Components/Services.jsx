// Services.jsx
import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";

const Services = () => {
  return (
    <div>
      <div className="my-5 text-center">
        <h1 className="font-weight-bold">Our Services</h1>
      </div>
      <div className="container mb-5">
        <div className="row">
          {Sdata.map((val, ind) => (
            <div key={ind} className="col-md-4 col-12 mb-4">
             
              <Card imgsrc={val.imgsrc} title={val.title} para={val.para} extendedClass="mb-3" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

