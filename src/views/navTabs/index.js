import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link } from "react-router-dom";
import { root, home, about, counters } from "../../AppRoutes";

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function NavTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Root" value={root} component={Link} to={root} />
        <Tab label="Home" value={home} component={Link} to={home} />
        <Tab label="About" value={about} component={Link} to={about} />
        <Tab label="Counters" value={counters} component={Link} to={counters} />
      </Tabs>
      <hr />
    </Box>
  );
}
