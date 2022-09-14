import React from "react";
import "./Recent.css";
import RecentCard from "./RecentCard";

const Recent = () => {
  return (
    <>
      <section className="recent padding">
        <div className="container">
          <div className="recent-text">
            <h4>Our Listed Property</h4>
          </div>
          <RecentCard />
        </div>
      </section>
    </>
  );
};

export default Recent;
