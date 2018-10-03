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
    this.state = { items: [], text: "", total: 0 };
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
      a: "1",
      b: "2",
      c: "3",
      d: "4",
      e: "5",
      f: "6",
      g: "7",
      h: "8",
      i: "9",
      j: "10",
      k: "11",
      l: "12",
      m: "13",
      n: "14",
      o: "15",
      p: "16",
      q: "17",
      r: "18",
      s: "19",
      t: "20",
      u: "21",
      v: "22",
      w: "23",
      x: "24",
      y: "25",
      z: "26"
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
  addAllHandler = () => {
    let total = 0;
    for (let i = 0; i < this.state.items.length; i++) {
      total = parseInt(this.state.items[i].text) + total;
    }
  };
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
        {this.state.items.length > 0 ? (
          <Button
            variant="contained"
            color="secondary"
            style={{ marginTop: 10 }}
            onClick={this.addAllHandler}>
            Add All Numbers
            <AddIcon style={{ marginLeft: 10 }} />
          </Button>
        ) : null}
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
