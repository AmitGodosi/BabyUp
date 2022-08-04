import { Grid } from '@material-ui/core'
import Label from 'common-components/Label/Label';
import Items from 'components/Items/Items';
import React, { Component } from 'react'
import './Home.scss';

type Props = {}

export default class Home extends Component<Props> {
	renderHeader() {
		return (
			<>
				<Grid className='home-title'>
					<Label className='home-title-container'>Start Learning Now !</Label>
				</Grid>
				<input className='home-search-input' placeholder='search for information...' />
			</>
		);
	}

	renderPopularItems() {
		const data = [
			{ owner: 'Amit Godosi', price: 15, subject: 'Mathematics' },
			{ owner: 'Adi Godosi', price: 25, subject: 'Software Engineering' },
			{ owner: 'Noa Fadida', price: 40, subject: 'Computer-Science' },
			{ owner: 'Amit Godosi', price: 15, subject: 'Mathematics' },
			{ owner: 'Adi Godosi', price: 25, subject: 'Software Engineering' },
			{ owner: 'Noa Fadida', price: 40, subject: 'Computer-Science' },
		]

		return (
			<Items items={data} />
		);
	}

	render() {

		return (
			<Grid className='home'>
				{this.renderHeader()}
				{this.renderPopularItems()}
			</Grid>
		)
	}
}