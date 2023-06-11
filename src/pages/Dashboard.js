import React, { Fragment } from "react";
import "../styles/Dashboard.css";
import HelpIcon from "@mui/icons-material/Help";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TotalVisit from "../components/TotalVisit";
import TrafficSources from "../components/TrafficSources";

const Dashboard = () => {
  return (
    <Fragment>
      <div className="Dashboard__Container">
        <div className="Container">
          <div className="Right__Topbar">
            <span className="Project_Title">Project statistic</span>
            <span className="Project_Icon">
              <HelpIcon />
            </span>
          </div>
          <div className="Left__Topbar">
            <Stack direction="row" spacing={2}>
              <Button variant="contained" href="#contained-buttons">
                30 days
              </Button>
              <div className="Btn">
                <Button variant="contained" href="#contained-buttons">
                  90 days
                </Button>
              </div>
              <div className="Btn">
                <Button variant="contained" href="#contained-buttons">
                  6 months
                </Button>
              </div>
              <div className="Btn">
                <Button variant="contained" href="#contained-buttons">
                  12 months
                </Button>
              </div>
            </Stack>
          </div>
        </div>
        <TotalVisit />
        <div className="row">
          <div className="col-6">
            <TrafficSources />
          </div>
          <div className="col-6">
            <TrafficSources />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
