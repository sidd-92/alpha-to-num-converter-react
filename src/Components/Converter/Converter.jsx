import React from "react";
//import SwapIcon from "@material-ui/icons/SwapHorizontalCircle";
import { withStyles } from "@material-ui/core/styles";
import {
	Paper,
	List,
	ListItem,
	Grid,
	Divider,
	ListItemText
} from "@material-ui/core";

import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
//import AddIcon from "@material-ui/icons/Add";
const styles = theme => ({
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
			<Paper className={classes.root}>
				<Grid container spacing={16}>
					<Grid item>
						<ButtonBase className={classes.image}>
							<img
								className={classes.img}
								alt="complex"
								src="/static/images/grid/complex.jpg"
							/>
						</ButtonBase>
					</Grid>
					<Grid item xs={12} sm container>
						<Grid item xs container direction="column" spacing={16}>
							<Grid item xs>
								<Typography gutterBottom variant="subtitle1">
									Standard license
								</Typography>
								<Typography gutterBottom>
									Full resolution 1920x1080 • JPEG
								</Typography>
								<Typography color="textSecondary">ID: 1030114</Typography>
							</Grid>
							<Grid item>
								<Typography style={{ cursor: "pointer" }}>Remove</Typography>
							</Grid>
						</Grid>
						<Grid item>
							<Typography variant="subtitle1">$19.00</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Paper>
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

export default withStyles(styles)(Converter);
