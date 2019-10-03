import React from "react";
import { Paper, Grid, Typography } from "@material-ui/core";
import { ClassesProps } from "../../../../@Types/props";
import SSHSOptin from "./SSHSOptin";
import SSHSDelivery from "./SSHSDelivery";

const SSHSMain: React.FunctionComponent<ClassesProps> = ({ classes }) => {
  const [subscribed, setSubscribed] = React.useState(false);
  return (
    <Paper className={classes.paper}>
      <Typography variant="h4" color="error" align="center">
        Get Your FREE Super Survival House Seed Now!
      </Typography>
      <Grid container spacing={4} alignItems="center" justify="center">
        <Grid item>
          <img
            src="http://wimpysteve.com/wp-content/uploads/Minecraft-Seeds-Survival-House-175x150.jpg"
            alt="Minecraft Seeds-The Super Survival House Seed"
            width="175"
            height="150"
          />
        </Grid>
        <Grid item>
          {!subscribed && <SSHSOptin classes={classes} />}
          {!!subscribed && <SSHSDelivery classes={classes} />}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default SSHSMain;
