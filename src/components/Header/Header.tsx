import React, { ChangeEvent } from 'react'
import { Grid } from '@material-ui/core';
import Label from 'common-components/Label/Label';
import { useSelector, useDispatch } from 'react-redux';
import { ItemInfo } from 'components/Items/Item/Item';
import { queryActions } from 'store';
import './Header.scss';

const Header = () => {
	const dispatch = useDispatch();
	const fullItems = useSelector((state: any) => state.fullItems)

	const renderSearchResult = (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		const searchValue = e.target.value;
		if (searchValue.length > 0) {
			const filteredItems = fullItems.filter((item: ItemInfo) => item.subject.toLowerCase().includes(searchValue.toLowerCase()))
			dispatch(queryActions.setPouplarItems(filteredItems))
		} else {
			dispatch(queryActions.setPouplarItems(fullItems))
		}
	}

	return (
		<>
			<Grid className='header-title'>
				<Label className='header-title-container'>Start Learning Now !</Label>
			</Grid>
			<input onChange={renderSearchResult} className='header-search-input' placeholder='search for information...' />
		</>
	)
}

export default Header