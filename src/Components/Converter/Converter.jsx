import React from "react";
import SwapIcon from "@material-ui/icons/SwapHorizontalCircle";
import {
  Paper,
  List,
  ListItem,
  Grid,
  TextField,
  Button,
  Divider,
  ListItemText
} from "@material-ui/core";

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
    marginRight: 15,
    marginTop: 15
  },
  extendedIcon: {
    marginRight: 5
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: 12
  }
};

class Converter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Paper style={{ padding: 20 }}>
          <form style={styles.container} noValidate autoComplete="off">
            <Grid container spacing={24}>
              <Grid item xs>
                <TextField
                  id="standard-name"
                  label="Write Words or Sentences You want to convert"
                  helperText="ABCD or abcd will be converted to 1234"
                  style={styles.textField}
                  fullWidth
                  margin="normal"
                  multiline
                />
              </Grid>
              <Grid item xs={3}>
                <Button
                  fullWidth
                  variant="extendedFab"
                  aria-label="Convert"
                  style={styles.button}>
                  <SwapIcon style={styles.extendedIcon} />
                  Convert
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>

        <Paper>
          <List component="ul">
            <ListItem button>
              <ListItemText primary="List 1" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary="List 2" />
            </ListItem>
            <Divider />
          </List>
        </Paper>
      </React.Fragment>
    );
  }
}

export default Converter;
