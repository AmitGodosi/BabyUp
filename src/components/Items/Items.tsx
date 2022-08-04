import { Grid } from '@material-ui/core';
import React from 'react'
import Item, { ItemInfo } from './Item/Item';
import './Items.scss';

export interface Props {
	items: ItemInfo[];
}

const Items: React.FC<Props> = (props: Props) => {
	const { items } = props;

	return (
		<Grid className='items-container'>
			{items && items.map((item: ItemInfo) => {
				return (
					<Item item={item} />
				)
			})}
		</Grid>
	)
}

export default Items