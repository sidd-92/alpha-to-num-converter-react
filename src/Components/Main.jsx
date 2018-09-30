import React from "react";
import { Typography, Paper } from "@material-ui/core";
import Converter from "./Converter/Converter";

class Main extends React.Component {
  render() {
    const styles = {
      root: {
        paddingTop: 20,
        paddingBottom: 20
      }
    };

    return (
      <div>
        <Paper style={styles.root}>
          <Typography align="center" variant="headline" component="h3">
            Alphabet To Number Converter
          </Typography>
        </Paper>
        <Converter />
      </div>
    );
  }
}

export default Main;
