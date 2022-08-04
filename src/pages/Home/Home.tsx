import { Grid } from '@material-ui/core'
import Items from 'components/Items/Items';
import React, { useEffect } from 'react'
import Footer from "components/Footer/Footer";
import { renderFooterHandler } from "utils/utils";
import Navbar from 'components/Navbar/Navbar';
import Header from 'components/Header/Header';
import { useSelector, useDispatch } from 'react-redux';
import { queryActions } from 'store';
import './Home.scss';

type Props = {}

const Home: Props = () => {
	const dispatch = useDispatch();
	const reduxState = useSelector((state: any) => state)
	const { fullItems, popularItems } = reduxState;

	useEffect(() => {
		const data = [
			{ owner: 'Amit Godosi', price: 15, subject: 'Mathematics', id: '1' },
			{ owner: 'Adi Godosi', price: 25, subject: 'Software Engineering', id: '2' },
			{ owner: 'Noa Fadida', price: 40, subject: 'Computer-Science', id: '3' },
			{ owner: 'Amit Godosi', price: 15, subject: 'Mathematics', id: '4' },
			{ owner: 'Adi Godosi', price: 25, subject: 'Software Engineering', id: '5' },
			{ owner: 'Noa Fadida', price: 40, subject: 'Computer-Science', id: '6' },
			{ owner: 'Amit Godosi', price: 15, subject: 'Mathematics', id: '7' },
			{ owner: 'Adi Godosi', price: 25, subject: 'Software Engineering', id: '8' },
			{ owner: 'Noa Fadida', price: 40, subject: 'Computer-Science', id: '9' },
			{ owner: 'Amit Godosi', price: 15, subject: 'Mathematics', id: '10' },
			{ owner: 'Adi Godosi', price: 25, subject: 'Software Engineering', id: '11' },
			{ owner: 'Noa Fadida', price: 40, subject: 'Computer-Science', id: '12' },
		]
		dispatch(queryActions.setFullItems(data))
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<>
			<Navbar />
			<Grid className='home'>
				<Header />
				<Items items={popularItems.length > 0 ? popularItems : fullItems} />
			</Grid>
			<Footer>{renderFooterHandler('footer-default')}</Footer>
		</>
	)
}

export default Home