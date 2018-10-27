import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import { Typography } from "@material-ui/core";
const styles = theme => ({
	fabButton: {
		position: "absolute",
		top: 60,
		left: 0,
		right: 0,
		margin: "0 auto"
	}
});
class Converter extends React.Component {
	state = {
		open: false,
		names: [],
		name: ""
	};

	handleClickOpen = () => {
		this.setState({ open: true, name: "" });
	};

	handleClose = () => {
		this.setState({ open: false });
	};

	handleSubmit = e => {
		let a = this.state.names.slice(); //creates the clone of the state
		a.push(this.state.name);
		this.setState({ names: a, open: false });
		e.preventDefault();
	};
	handleChange = name => event => {
		this.setState({
			[name]: event.target.value
		});
	};
	render() {
		const { classes } = this.props;
		console.log(this.state.names);
		return (
			<React.Fragment>
				<Button
					variant="fab"
					color="primary"
					aria-label="Add"
					className={classes.fabButton}
					onClick={this.handleClickOpen}>
					<AddIcon />
				</Button>
				<Dialog
					open={this.state.open}
					onClose={this.handleClose}
					aria-labelledby="form-dialog-title">
					<DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
					<DialogContent>
						<DialogContentText>
							To subscribe to this website, please enter your email address
							here. We will send updates occasionally.
						</DialogContentText>
						<TextField
							autoFocus
							margin="dense"
							id="name"
							value={this.state.name}
							label="Email Address"
							type="email"
							onChange={this.handleChange("name")}
							fullWidth
						/>
					</DialogContent>
					<DialogActions>
						<Button onClick={this.handleClose} color="primary">
							Cancel
						</Button>
						<Button onClick={this.handleSubmit} color="primary">
							Subscribe
						</Button>
					</DialogActions>
				</Dialog>
				{this.state.name === "" ? (
					<Typography variant="body2" color="inherit">
						Click on the add button
					</Typography>
				) : (
					<Typography variant="h6" color="inherit">
						{this.state.names.length > 0
							? this.state.names.map(name => <CardList word={name} />)
							: null}
					</Typography>
				)}
			</React.Fragment>
		);
	}
}

const CardList = ({ word }) => {
	return <p>CardList : {word}</p>;
};

export default withStyles(styles)(Converter);
/*
let convertToNumber = text => {
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
};
*/
