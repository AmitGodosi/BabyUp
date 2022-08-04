import React, { Component } from 'react'
import { TypographyProps } from '@material-ui/core';

export type Props = {
	customClassName: string
} & TypographyProps;

export default class Button extends Component<Props> {
	render() {
		const { children, customClassName } = this.props;

		return (
			<button className={customClassName}>
				{children}
			</button>
		)
	}
}