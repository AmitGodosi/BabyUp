import React, { Component } from 'react'
import { Typography, TypographyProps } from '@material-ui/core';

export type Props = TypographyProps;

export default class Label extends Component<Props> {
	render() {
		const { children, ...rest } = this.props;

		return (
			<Typography {...rest}>
				{children}
			</Typography>
		)
	}
}
