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
import AddIcon from "@material-ui/icons/Add";
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
      text: this.convertToNumber(this.state.text),
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ""
    }));
  }

  convertToNumber(text) {
    let alphaNum = {
      a: "0",
      b: "1",
      c: "2",
      d: "3",
      e: "4",
      f: "5",
      g: "6",
      h: "7",
      i: "8",
      j: "9",
      k: "10",
      l: "11",
      m: "12",
      n: "13",
      o: "14",
      p: "15",
      q: "16",
      r: "17",
      s: "18",
      t: "19",
      u: "20",
      v: "21",
      w: "22",
      x: "23",
      y: "24",
      z: "25"
    };

    let splitText = text.split("");
    let numString = "";
    for (let i = 0; i < splitText.length; i++) {
      if (splitText[i].toLowerCase() in alphaNum) {
        numString += alphaNum[splitText[i].toLowerCase()];
      }
    }
    return numString;
  }

  render() {
    return (
      <React.Fragment>
        <Paper style={{ padding: 20, marginTop: 20, marginBottom: 20 }}>
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
      <div align="center">
        {this.props.items.length > 0 ? (
          <React.Fragment>
            <List
              component="ul"
              style={{
                backgroundColor: "#f1f8e9",
                width: "50%"
              }}>
              {this.props.items.map(item => (
                <React.Fragment key={item.id}>
                  <ListItem button style={{ textAlign: "center" }}>
                    <ListItemText
                      disableTypography
                      style={{ fontSize: "x-large" }}
                      primary={item.text}
                    />
                  </ListItem>
                  <Divider />
                </React.Fragment>
              ))}
            </List>
            <Button
              variant="contained"
              color="secondary"
              style={{ marginTop: 10 }}>
              Add All Numbers
              <AddIcon style={{ marginLeft: 10 }} />
            </Button>
          </React.Fragment>
        ) : (
          <Paper style={{ padding: 20 }}>
            Type Some Text in the Textfield and Click the Button
          </Paper>
        )}
      </div>
    );
  }
}

export default Converter;
