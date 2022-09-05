import styled from 'styled-components'

export const Container = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
`
export const Title = styled.h2`
	font-size: 56px;
`

export const Childs = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 24px;
	cursor: pointer;
`
export const Child = styled.div`
	background-color: ${(props) => props.background};
	padding: 10px 20px;
	border-radius: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`
export const Details = styled.div`
	display: flex;
	align-items: center;
	justify-content: space - around;
	gap: 20px;
`