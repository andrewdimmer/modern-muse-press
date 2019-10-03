import React, { Fragment } from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  TextField,
  Grid,
  Button
} from "@material-ui/core";
import { ClassesProps } from "../../../../@Types/props";
import { ArrowForward, Lock } from "@material-ui/icons";

const SSHSOptin: React.FunctionComponent<ClassesProps> = ({ classes }) => {
  return (
    <Fragment>
      <Typography variant="body1">
        Here’s what fans are saying about this awesome house…
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <ArrowForward color="error" />
          </ListItemIcon>
          <ListItemText primary="“My kids love the 100% mob-proof house!” ~ Tracy S." />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <ArrowForward color="error" />
          </ListItemIcon>
          <ListItemText primary="“My son loves that the garden and animals are inside the house.” ~ Dan R." />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <ArrowForward color="error" />
          </ListItemIcon>
          <ListItemText primary="“My 5 year-old loves feeling safe in this house!” ~ Laura D." />
        </ListItem>
      </List>

      <Typography color="primary">
        Enter Your Name And Email In The Boxes Below To Get Your Free Seed Now!
      </Typography>
      <Grid
        container
        spacing={2}
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.margined}
      >
        <Grid item>
          <TextField
            color="primary"
            label="Name"
            type="text"
            required
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <TextField
            color="primary"
            label="Email"
            type="email"
            required
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <Button
            color="primary"
            onClick={() => {
              alert("Submit");
            }}
            variant="contained"
            size="large"
          >
            Get Access Now!
          </Button>
        </Grid>
      </Grid>
      <Typography align="center">
        <Lock /> Your email is safe with us. We hate spam too!
      </Typography>
    </Fragment>
  );
};

export default SSHSOptin;
