import React, { Fragment } from "react";
import "../styles/TrafficSources.css";
import DonutChart from "./DonutChart";

const TrafficSources = () => {
  return (
    <Fragment>
      <div className="container">
        <div
          className="card"
          style={{
            width: "38rem",
            height: "248px",
            border: "1px solid #F6F6FB",
            borderRadius: "32px",
            background: "#EDEDF6",
            opacity: "0.4",
          }}
        >
          <div className="card-body">
            <div
              className="card-title"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <span className="Traffic__Sources__Text">Traffic Sources</span>
            </div>
            <hr />
            <p className="card-text">
              <div className="row">
                <div className="col-6">
                  <div className="Traffic__Sources__Label">
                    <span
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <span className="Traffic__Source__Text1">Source</span>
                      <span className="Traffic__Source__Text2">
                        Traffic Sources%
                      </span>
                    </span>

                    <div className="row">
                      <div className="col" style={{ display: "flex" }}>
                        <div className="Direct"></div>
                        <span className="Direct__Text">Direct</span>
                        <span className="Direct__No">50</span>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col" style={{ display: "flex" }}>
                        <div className="Search"></div>
                        <span className="Search__Text">Search</span>
                        <span className="Search__No">50</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <DonutChart />
                </div>
              </div>
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TrafficSources;
