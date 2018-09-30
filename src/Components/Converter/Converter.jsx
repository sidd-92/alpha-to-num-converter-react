import React from "react";
//import Paper from "@material-ui/core/Paper";

import SwapIcon from "@material-ui/icons/SwapHorizontalCircle";
import {
  Paper,
  List,
  ListItem,
  Grid,
  TextField,
  Button,
  Divider
} from "@material-ui/core";

import ListItemText from "@material-ui/core/ListItemText";

const styles = {
  root: {
    flexGrow: 1,
    marginTop: 20
  },
  paper: {
    padding: 10,
    textAlign: "center",
    backgroundColor: "#97b498"
  },
  button: {
    margin: 5
  },
  extendedIcon: {
    marginRight: 5
  }
};
const Converter = () => {
  return (
    <div style={styles.root}>
      <Grid container spacing={24}>
        <Grid item xs>
          <TextField
            id="outlined-multiline-flexible"
            label="Label"
            multiline
            style={{ margin: 8 }}
            placeholder="Placeholder"
            helperText="Full width!"
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
          />
        </Grid>
        <Grid item xs={3}>
          <ExtButton />
        </Grid>
      </Grid>
      <Paper>
        <List component="p">
          <ListItem button>
            <ListItemText primary="Trash" />
          </ListItem>
          <Divider />
          <ListItem button component="a" href="#simple-list">
            <ListItemText primary="Spam" />
          </ListItem>
        </List>
      </Paper>
    </div>
  );
};

const ExtButton = () => {
  return (
    <Button
      variant="extendedFab"
      aria-label="Delete"
      style={styles.button}
      fullWidth>
      <SwapIcon style={styles.extendedIcon} />
      Convert
    </Button>
  );
};

export default Converter;
