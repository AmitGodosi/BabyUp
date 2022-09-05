import Login from 'components/Login/Login';
import Register from 'components/Register/Register';
import SideBar from 'components/SideBar/SideBar'
import Home from 'pages/Home/Home';
import React, { Component } from 'react'
import { RoutesNames } from 'Routes/consts';
import { Grid } from '@material-ui/core';
import './MainPage.scss'
import Profile from 'pages/Profile/Profile';

type Props = {
	activeTab: string;
}

export default class MainPage extends Component<Props> {
	renderPageContent() {
		const { activeTab } = this.props;
		const { WORK, HOME, LOGIN, REGISTER, PROFILE
		} = RoutesNames;
		return {
			[HOME]: () => <></>,
			[WORK]: () => <Home />,
			[LOGIN]: () => <Login />,
			[REGISTER]: () => <Register />,
			[PROFILE]: () => <Profile />
		}[activeTab]();
	}

	render() {
		return (
			<Grid className="main-page-container">
				<Grid className="PageContent">{this.renderPageContent()}</Grid>
				<Grid className="RightSide"><SideBar /></Grid>
			</Grid>
		)
	}
}