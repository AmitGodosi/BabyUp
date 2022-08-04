import React, { Component, PropsWithChildren } from 'react'
import { Grid } from '@material-ui/core';
import './Footer.scss';

export type Props = {
	customClass?: string;
} & PropsWithChildren;

export default class Footer extends Component<Props> {
	render() {
		const { customClass, children } = this.props;

		return (
			<Grid container className={`footer-section ${customClass}`}>
				{children}
			</Grid>
		);
	}
}
