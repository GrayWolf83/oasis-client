import React from 'react'
import LinkIcon from '../../components/common/LinkIcon'
import PageTitle from '../../components/ui/PageTitle'

const Product = () => {
	return (
		<>
			<LinkIcon
				path='/manage'
				iconName='arrow_back'
				iconColor='var(--main-color)'
			/>
			<PageTitle title='Управление списком блюд' />
		</>
	)
}

export default Product
