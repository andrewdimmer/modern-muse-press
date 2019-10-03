import React, { Fragment } from "react";
import Home from "./Components/Pages/Home";
import Header from "./Components/Layouts/Header";
import { styles } from "./Styles";

const WimpySteve: React.FunctionComponent = () => {
  const classes = styles();

  return (
    <Fragment>
      <Header classes={classes} />
      <Home classes={classes} />
    </Fragment>
  );
};

export default WimpySteve;
