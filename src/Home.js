import React from "react";
import web from "../src/images/img2.svg";
const Home = () => {
  return (
    <>
      <section id="header">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                  <h1>
                    Grow your Business with
                    <strong className=" brand-name">Sam Technical</strong>
                  </h1>
                  <h2 className="my-3">
                    We are the team of talented developer making websites
                  </h2>
                  <div className="mt-3">
                    <a href="#" className="btn btn-outline-primary ">
                      Get Started
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img src={web} className="img-fluid animated" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
