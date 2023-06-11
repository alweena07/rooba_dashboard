import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PersonIcon from "@mui/icons-material/Person";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ModeStandbyIcon from "@mui/icons-material/ModeStandby";
import SearchIcon from "@mui/icons-material/Search";
import HelpIcon from "@mui/icons-material/Help";
import LogoutIcon from '@mui/icons-material/Logout';
import "../styles/Sidebar.css";

const Item = ({ title, icon, selected, setSelected }) => {
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: "#000",
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const SideBar = () => {
  const [selected, setSelected] = useState("Overview");
  return (
    <Sidebar>
      <Menu
        menuItemStyles={{
          button: ({ level, active, disabled }) => {
            if (level === 0)
              return {
                color: disabled ? "#f5d9ff" : "#d359ff",
                backgroundColor: active ? "#7166F9" : undefined,
              };
          },
        }}
        className="Menu__Container"
      >
        <Box
          display="flex"
          justifyContent="space-around"
          margin="20px"
          alignItems="center"
          ml="-3px"
          className="Concured"
        >
          <IconButton>
            <SearchIcon />
          </IconButton>
          <Typography variant="h5">Concured</Typography>
        </Box>
        <Item
          title="Overview"
          to="/"
          icon={<HomeOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
        />
        <Item
          title="Opportunities"
          icon={<ModeStandbyIcon />}
          selected={selected}
          setSelected={setSelected}
          to="/"
        />
        <Item
          title="My competitors"
          icon={<PersonIcon />}
          selected={selected}
          setSelected={setSelected}
          to="/"
        />
        <Item
          title="Briefs"
          icon={<AssignmentIcon />}
          selected={selected}
          setSelected={setSelected}
          to="/"
        />
        <Item
          title="Saved"
          icon={<BookmarkIcon />}
          selected={selected}
          setSelected={setSelected}
          to="/"
        />
        <div className="Sidebar__Footer">
          <Item
            title="Settings"
            icon={<PersonIcon />}
            selected={selected}
            setSelected={setSelected}
            to="/"
          />
          <Item
            title="Help"
            icon={<HelpIcon />}
            selected={selected}
            setSelected={setSelected}
            to="/"
          />
          <div className="logout">
          <Item
            title="Log out"
            icon={<LogoutIcon />}
            selected={selected}
            setSelected={setSelected}
            to="/"
          />
          </div>
        </div>
      </Menu>
    </Sidebar>
  );
};

export default SideBar;
