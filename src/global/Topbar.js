import React, { Fragment } from "react";
import "../styles/Topbar.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

const cache = createCache({
  key: 'css',
  prepend: true,
});

const Topbar = () => {
  return (
    <Fragment>
      <CacheProvider value={cache}>
      <div className="Topbar__Container">
        <div className="Right__Topbar">
          <span className="Reactangle"></span>
          <span className="Boro__Team">Boro team</span>
          <span className="Drop__Down">
            <Box sx={{ minWidth: 30 }}>
              <FormControl>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                ></Select>
              </FormControl>
            </Box>
          </span>
          <span className="Addition__Icon">
            <AddCircleIcon />
          </span>
        </div>
        <div className="Left__Topbar">
          <span className="User__Profile">
            <AccountCircleIcon />
          </span>
          <span className="User__Name">Zahra Hasht...</span>
          <span className="Drop__Down">
            <Box sx={{ minWidth: 30 }}>
              <FormControl>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                ></Select>
              </FormControl>
            </Box>
          </span>
        </div>
      </div>
      <hr className="Horizontal__Line" />
      </CacheProvider>
    </Fragment>
  );
};

export default Topbar;
