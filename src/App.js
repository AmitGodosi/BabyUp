import React from "react";
import Home from "pages/Home/Home";
import { Grid } from "@material-ui/core";
import './index.scss';

const App = () => {

	return (
		<Grid className="main-page">
			<Home />
		</Grid>
	);
}

export default App;
