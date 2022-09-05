import React from "react";
import { Grid } from "@material-ui/core";
import MainPage from "pages/MainPage/MainPage";
import { Routes, Route } from 'react-router-dom';
import classes from './index.module.scss';
import { RoutesNames, RoutesPath } from "Routes/consts";

const App = () => {
	return (
		<Grid className={classes.mainPage}>
			<Routes>
				<Route path={RoutesPath.WORK} exact element={<MainPage activeTab={RoutesNames.WORK} />} />
				<Route path={RoutesPath.HOME} exact element={<MainPage activeTab={RoutesNames.HOME} />} />
				<Route path={RoutesPath.LOGIN} exact element={<MainPage activeTab={RoutesNames.LOGIN} />} />
				<Route path={RoutesPath.REGISTER} exact element={<MainPage activeTab={RoutesNames.REGISTER} />} />
				<Route path={RoutesPath.PROFILE} exact element={<MainPage activeTab={RoutesNames.PROFILE} />} />
			</Routes>
		</Grid>
	);
}

export default App;
