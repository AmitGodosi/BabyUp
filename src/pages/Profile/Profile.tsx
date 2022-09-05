import React, { Component } from 'react'
import { BsGenderFemale, BsGenderMale } from 'react-icons/bs'
import './Profile.scss'
import { Child, Childs, Container, Details, Title } from './Profile.style'

type Props = {}

export default class Profile extends Component<Props> {

	render() {
		return (
			<Container>
				<Title>עדי גודוסי</Title>
				<Childs>
					<Child background="rgb(214, 144, 230)">
						<Details>
							<BsGenderFemale />
							<h4>אן שרה</h4>
						</Details>
						<p>0.8</p>
					</Child>
					<Child background="rgb(161, 186, 209)">
						<Details>
							<BsGenderMale />
							<h4>משה</h4>
						</Details>
						<p>0.4</p>
					</Child>
					<Child background="rgb(161, 186, 209)">
						<Details>
							<BsGenderMale />
							<h4>ארי</h4>
						</Details>
						<p>1.4</p>
					</Child>
				</Childs>
			</Container>
		)
	}
}