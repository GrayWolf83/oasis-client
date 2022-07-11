import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'

type IProps = {
	rating: number
}

const RatingBlock = styled.div`
	height: 25px;
	display: flex;
	align-items: flex-end;
`
const RatingIcon = styled.span`
	font-size: 16px;
`

const ProductRating = ({ rating }: IProps) => {
	const stars = _.range(0, rating)
	const allStars = _.range(0, 5)

	return (
		<RatingBlock>
			{allStars.map((star) => (
				<RatingIcon
					className='material-icons'
					key={star}
					style={{
						color:
							star <= stars.length - 1
								? 'var(--main-color)'
								: 'var(--red-color)',
					}}>
					favorite
				</RatingIcon>
			))}
		</RatingBlock>
	)
}

export default ProductRating
