import React from 'react'
import styled from 'styled-components'
import { Category } from '../../types/category'
import { Product } from '../../types/product'

interface IProps {
	items: Product[] | Category[]
	children: React.ReactNode
}

const AppListInner = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	margin-top: 20px;
	@media (max-width: 1200px) {
		justify-content: space-around;
	}
`

const AppList = ({ items, children }: IProps) => {
	return (
		<AppListInner>
			{items.map((item) => {
				return React.Children.map(children, (child: any) => {
					const config = {
						...child.props,
						item,
					}

					return React.cloneElement(child, config)
				})
			})}
		</AppListInner>
	)
}

export default AppList
