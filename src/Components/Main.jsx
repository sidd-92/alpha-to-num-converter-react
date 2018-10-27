import React from "react";
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Converter from "./Converter/Converter";
const styles = {
	root: {
		flexGrow: 1,
		marginBottom: "20px"
	}
};
class Main extends React.Component {
	render() {
		const { classes } = this.props;

		return (
			<div className={classes.root}>
				<AppBar position="static" color="default">
					<Toolbar>
						<Typography variant="h6" color="inherit">
							Photos
						</Typography>
					</Toolbar>
				</AppBar>
				<Converter />
			</div>
		);
	}
}

export default withStyles(styles)(Main);
