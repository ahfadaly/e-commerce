import React from "react";
import Products from "./Products";
import Slide from "react-reveal/Slide";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="container title">
          <div className="row">
            <div className="col-12">
              <Slide left duration={2000}>
                <h1>Choose Shopify for your ecommerce website</h1>
                <p>Get the themes, apps, integrations, and tools you need to start selling</p>
              </Slide>
            </div>
          </div>
        </div>
      </div>
      <Products />
    </>
  );
};

export default Home;
