import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";

export const styles = makeStyles((theme: Theme) =>
  createStyles({
    padded: {
      padding: theme.spacing(2)
    },
    paper: {
      margin: theme.spacing(2),
      padding: theme.spacing(2)
    },
    margined: {
      margin: theme.spacing(2)
    },
    sshsImage: {
      width: 150,
      height: 175
    }
  })
);
