import React from "react";
import SwapIcon from "@material-ui/icons/SwapHorizontalCircle";
import AddIcon from "@material-ui/icons/Add";
import { withStyles } from "@material-ui/core/styles";
import {
	Paper,
	TextField,
	Button,
	Card,
	CardContent,
	Typography,
	CardActions,
	Grid
} from "@material-ui/core";

const styles = theme => ({
	root: {
		flexGrow: 1
	},
	paper: {
		textAlign: "center",
		color: theme.palette.text.secondary
	},
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
		width: 200
	}
});

class Converter extends React.Component {
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
		const { classes } = this.props;
		return (
			<Grid container spacing={24}>
				<Grid item xs>
					<Paper className={classes.paper}>
						<TextField
							label="Dense"
							id="margin-dense"
							defaultValue="Default Value"
							className={classes.textField}
							helperText="Some important text"
							margin="normal"
						/>
						<Button variant="fab" style={{ margin: "20px" }}>
							<SwapIcon />
						</Button>
						<TextField
							label="Dense"
							id="margin-dense"
							defaultValue="Default Value"
							className={classes.textField}
							helperText="Some important text"
							margin="normal"
						/>
					</Paper>
				</Grid>
			</Grid>
		);
	}
}
/*
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
*/
export default withStyles(styles)(Converter);
