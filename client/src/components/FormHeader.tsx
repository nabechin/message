import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

interface Props {
  headerChar: string;
  children: JSX.Element;
}

const FormHeader = (props: Props): JSX.Element => {
  return (
    <React.Fragment>
      <Avatar>{props.children}</Avatar>
      <Typography component="h1" variant="h4">
        {props.headerChar}
      </Typography>
    </React.Fragment>
  );
};

export default FormHeader;
