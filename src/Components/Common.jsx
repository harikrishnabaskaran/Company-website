// Common.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Common = (props) => {
  return (
    <div>
      <section id="header" className="fullscreen-bg d-flex align-items-center">
        <div className="container home-container">
          <div className="row">
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <h1>
                  {props.name}
                <strong className="brand-name"> KbInfoTech</strong>
              </h1>
              <h2 className="my-3">
                We are the team of talented developers making websites
              </h2>
              <div className="mt-3">
                <Link to={props.visit}>
                  <button type="button" className="btn-get-started">
                    {props.btname}
                  </button>
                </Link>
              </div>
            </div>

            <div className="col-md-6 d-flex align-items-center">
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Common;
