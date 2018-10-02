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
  constructor(props) {
    super(props);
    this.state = { items: [], text: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ""
    }));
  }
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
                  onChange={this.handleChange}
                  value={this.state.text}
                  helperText="ABCD or abcd will be converted to 1234"
                  style={styles.textField}
                  fullWidth
                  margin="normal"
                  multiline
                />
              </Grid>
              <Grid item xs={3}>
                <Button
                  onClick={this.handleSubmit}
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
        <Lists items={this.state.items} />
      </React.Fragment>
    );
  }
}

class Lists extends React.Component {
  render() {
    return (
      <Paper>
        <List component="ul">
          {this.props.items.map(item => (
            <ListItem key={item.id} button>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Paper>
    );
  }
}

export default Converter;
