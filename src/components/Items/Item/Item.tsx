import { Grid } from '@material-ui/core';
import Label from 'common-components/Label/Label';
import React from 'react'
import './Item.scss';

export type Props = {
	item: ItemInfo;
}

export type ItemInfo = {
	owner: string;
	price: number;
	subject: string;
	id: string;
}

const Item: React.FC<Props> = (props: Props) => {
	const { item } = props;
	const { owner, price, subject } = item || {};

	return (
		<Grid className='item-container'>
			<Grid className='img-container'><img alt='' /></Grid>
			<Grid className='item-info'>
				<Grid className='item-info-subject'><h4>{subject}</h4></Grid>
				<Grid className='item-info-others'>
					<Label className='item-info-others-label'>{owner}</Label>
					<Label className='item-info-others-label'>{price} $</Label>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default Item