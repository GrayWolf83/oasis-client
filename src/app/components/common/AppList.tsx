import React from 'react'
import styled from 'styled-components'
import { Category } from '../../types/category'

type IProps = {
	items: Category[]
	component: (item: Category) => JSX.Element
}

const ListInner = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	padding: 10px 0;

	@media (max-width: 1200px) {
		justify-content: space-around;
	}
`

const AppList = ({ items, component: Component }: IProps) => {
	return (
		<ListInner>
			{items.map((item) => (
				<Component key={item.id} item={item} />
			))}
		</ListInner>
	)
}

export default AppList
