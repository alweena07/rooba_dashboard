import React, { Fragment } from "react";
import "../styles/TotalVisit.css";
import LineChart from "./LineChart";
import AssessmentIcon from "@mui/icons-material/Assessment";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import HelpIcon from "@mui/icons-material/Help";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Person2Icon from "@mui/icons-material/Person2";
import HourglassFullIcon from "@mui/icons-material/HourglassFull";

const TotalVisit = () => {
  return (
    <Fragment>
      <div className="container" style={{ marginBottom: "37px" }}>
        <div className="row">
          <div className="col-6">
            <div
              className="card"
              style={{
                width: "38rem",
                height: "407.55px",
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
                  <span className="ToTal__Visit__Text">Total visits</span>
                  <span className="ToTal__Visit__No">42,43M</span>
                </div>
                <hr />
                <p className="card-text">
                  <LineChart />
                </p>
              </div>
            </div>
          </div>

          <div className="col-6">
            <div
              className="row "
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
              <div
                className="card"
                style={{
                  width: "241.17px",
                  height: "190.52px",
                  borderRadius: "32px",
                  background:
                    "linear-gradient(to bottom right, #4cd7f6, #E17CFD)",
                }}
              >
                <div className="card-body">
                  <div
                    className="card-title"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "17px",
                      marginBottom: "25px",
                    }}
                  >
                    <span className="" style={{ marginLeft: "25px" }}>
                      <AssessmentIcon />
                    </span>
                    <span>
                      <span className="Bounce__Rate__Polygon">
                        {" "}
                        <ArrowDropUpIcon />
                      </span>

                      <span className="Card__One__Percentage">21%</span>
                    </span>
                  </div>
                  <p className="card-text">
                    <span className="Bounce__Rate__Text1">42,34%</span>
                    <div
                      className="card-title"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span className="Bounce__Rate__Text2">Bounce rate</span>
                      <span className="Bounce__Rate__Help__Icon">
                        <HelpIcon />
                      </span>
                    </div>
                  </p>
                </div>
              </div>

              <div
                className="card"
                style={{
                  width: "241.17px",
                  height: "190.52px",
                  borderRadius: "32px",
                  background: "#F6F6FB",
                }}
              >
                <div className="card-body">
                  <div
                    className="card-title"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "17px",
                      marginBottom: "25px",
                    }}
                  >
                    <span
                      className="Card__Two__Calender__Icon"
                      style={{ marginLeft: "25px" }}
                    >
                      <CalendarMonthIcon />
                    </span>
                  </div>
                  <p className="card-text">
                    <span className="Card__Two__Total__VisitPer">42,34%</span>
                    <div
                      className="card-title"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span className="Card__Two__Text">Pages per visit</span>
                      <span className="Card__Two__Help__Icon">
                        <HelpIcon />
                      </span>
                    </div>
                  </p>
                </div>
              </div>
            </div>
            <div
              className="row"
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                marginTop: "20px",
              }}
            >
              <div
                className="card"
                style={{
                  width: "241.17px",
                  height: "190.52px",
                  borderRadius: "32px",
                  background: "#F6F6FB",
                }}
              >
                <div className="card-body">
                  <div
                    className="card-title"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "17px",
                      marginBottom: "25px",
                    }}
                  >
                    <span
                      className="Card__Three__Person__Icon"
                      style={{ marginLeft: "25px" }}
                    >
                      <Person2Icon />
                    </span>
                    <span>
                      <span className="Card__Three__Polygon">
                        {" "}
                        <ArrowDropDownIcon />
                      </span>

                      <span className="Card__Three__Percentage">2,1%</span>
                    </span>
                  </div>
                  <p className="card-text">
                    <span className="Card__Three__Total__Visit">42,34%</span>
                    <div
                      className="card-title"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span className="Card__Three__Text">
                        Total Monthly Visit
                      </span>
                    </div>
                  </p>
                </div>
              </div>
              <div
                className="card"
                style={{
                  width: "241.17px",
                  height: "190.52px",
                  borderRadius: "32px",
                  background: "#F6F6FB",
                }}
              >
                <div className="card-body">
                  <div
                    className="card-title"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "17px",
                      marginBottom: "25px",
                    }}
                  >
                    <span
                      className="Card__Four__Hourglass__Icon"
                      style={{ marginLeft: "25px" }}
                    >
                      <HourglassFullIcon />
                    </span>
                    <span>
                      <span className="Card__Four__Polygon">
                        {" "}
                        <ArrowDropDownIcon />
                      </span>

                      <span className="Card__Four__Percentage">2,4%</span>
                    </span>
                  </div>
                  <p className="card-text">
                    <span className="Card__Four__Total__Duration">
                      00:03:27
                    </span>
                    <div
                      className="card-title"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span className="Card__Four__Text">
                        Avg.Visit Duration
                      </span>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TotalVisit;
