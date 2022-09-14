import React from "react";
import "./Featured.css";
import FeaturedCard from "./FeaturedCard";

const Featured = () => {
  return (
    <>
      <section className="featured background">
        <div className="container">
          <div className="heading-text">
            <h3>Find You Own Property</h3>
            <p>Find All Type of Property.</p>
          </div>
          <FeaturedCard />
        </div>
      </section>
    </>
  );
};

export default Featured;
