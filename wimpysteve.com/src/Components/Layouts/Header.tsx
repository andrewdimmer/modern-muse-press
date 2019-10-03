import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { ClassesProps } from "../../../@Types/props";

const Header: React.FunctionComponent<ClassesProps> = ({ classes }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Wimpy Steve</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
