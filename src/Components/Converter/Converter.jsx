import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import Paper from "@material-ui/core/Paper";
import AddIcon from "@material-ui/icons/Add";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import { Typography } from "@material-ui/core";
const styles = theme => ({
	fabButton: {
		position: "absolute",
		top: 60,
		left: 0,
		right: 0,
		margin: "0 auto"
	},
	root: {
		backgroundColor: theme.palette.background.paper,
		marginTop: theme.spacing.unit * 2
	},
	paper: {
		...theme.mixins.gutters(),
		paddingTop: theme.spacing.unit * 2,
		paddingBottom: theme.spacing.unit * 2,
		marginTop: theme.spacing.unit * 2,
		bottom: 10
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
	convertToNumber = text => {
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
		return parseInt(numString);
	};

	addAllUp = () => {
		let add = 0;
		// eslint-disable-next-line
		this.state.names.map(name => {
			add += this.convertToNumber(name);
		});
		return add;
	};

	render() {
		const { classes } = this.props;

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
					<DialogTitle id="form-dialog-title">Convert</DialogTitle>
					<DialogContent>
						<DialogContentText>Enter a Value to Convert</DialogContentText>
						<TextField
							autoFocus
							autoComplete="off"
							margin="dense"
							id="name"
							value={this.state.name}
							label="Name"
							type="text"
							onChange={this.handleChange("name")}
							fullWidth
						/>
					</DialogContent>
					<DialogActions>
						<Button onClick={this.handleClose} color="primary">
							Cancel
						</Button>
						<Button onClick={this.handleSubmit} color="primary">
							Convert
						</Button>
					</DialogActions>
				</Dialog>
				{this.state.names.length === 0 ? (
					<Typography variant="body2" color="inherit">
						Click on the add button
					</Typography>
				) : (
					<React.Fragment>
						<div className={classes.root}>
							<List component="ul">
								{this.state.names.map(name => (
									<React.Fragment>
										<ListItem key={name}>
											<ListItemText primary={this.convertToNumber(name)} />
											<ListItemSecondaryAction>
												<IconButton aria-label="Delete">
													<DeleteIcon />
												</IconButton>
											</ListItemSecondaryAction>
										</ListItem>
									</React.Fragment>
								))}
							</List>
						</div>

						<Paper className={classes.paper} elevation={1}>
							<Typography variant="h5" component="h3">
								This is a sheet of paper.
							</Typography>
							<Typography component="p">{this.addAllUp()}</Typography>
						</Paper>
					</React.Fragment>
				)}
			</React.Fragment>
		);
	}
}

export default withStyles(styles)(Converter);
/*
let convertToNumber = text => {
	
};
*/
