import Button from 'common-components/Button/Button';
import Label from 'common-components/Label/Label';
import React, { Component } from 'react';
import './Navbar.scss';

type Props = {}

export default class Navbar extends Component<Props> {
	render() {
		return (
			<div className='navbar-container'>
				<div>
					<Label className='label-container'>PowerPoint APP</Label>
				</div>
				<div className='navbar-buttons'>
					<Button customClassName='button-container'>Log-out</Button>
					<Button customClassName='button-container'>Log-in</Button>
				</div>
			</div>
		)
	}
}