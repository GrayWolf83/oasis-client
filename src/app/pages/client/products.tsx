import React from 'react'
import { useParams } from 'react-router-dom'

const Products = () => {
	const { id } = useParams()

	return <h2>Products {id}</h2>
}

export default Products
