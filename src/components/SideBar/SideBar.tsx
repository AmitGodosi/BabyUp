import React, { Component } from 'react'
import {
	AiOutlineLogout, AiOutlineLogin, AiOutlineHome
} from 'react-icons/ai'
import { IoCreateOutline, IoSettingsOutline } from 'react-icons/io5'
import { VscAccount } from 'react-icons/vsc'
import { Link } from 'react-router-dom'
import { RoutesPath } from 'Routes/consts'
import { Grid } from '@material-ui/core'
import './SideBar.scss'

type Props = {}

export default class SideBar extends Component<Props> {
	render() {
		const user = null; //need to be changed
		const {
			HOME, LOGIN, REGISTER, WORK, PROFILE
		} = RoutesPath || {};
		return (
			<Grid className="sidebar-container">
				<Grid className="icons">
					<Grid className="top-icons">
						<Link to={HOME} style={{ textDecoration: 'none', color: 'black' }} ><AiOutlineHome className='side-icon' /></Link>
						<Link to={PROFILE} style={{ textDecoration: 'none', color: 'black' }} ><IoCreateOutline className='side-icon' /></Link>
						<Link to={HOME} style={{ textDecoration: 'none', color: 'black' }} ><VscAccount className='side-icon' /></Link>
					</Grid>
					<Grid className="bottom-icons">
						<Link to={WORK} style={{ textDecoration: 'none', color: 'black' }} ><IoSettingsOutline className='side-icon' /></Link>
						{user && <Link to={REGISTER} style={{ textDecoration: 'none', color: 'black' }} ><AiOutlineLogout className='side-icon' /></Link>}
						{!user && <Link to={LOGIN} style={{ textDecoration: 'none', color: 'black' }} ><AiOutlineLogin className='side-icon' /></Link>}
					</Grid>
				</Grid>
			</Grid>
		)
	}
}