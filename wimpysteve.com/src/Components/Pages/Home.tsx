import React from "react";
import SSHSMain from "../Layouts/SSHS/SSHSMain";
import { Container } from "@material-ui/core";
import { ClassesProps } from "../../../@Types/props";

const Home: React.FunctionComponent<ClassesProps> = ({ classes }) => {
  return (
    <Container>
      <SSHSMain classes={classes} />
    </Container>
  );
};

export default Home;
