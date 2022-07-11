import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import FileField from '../../components/common/form/FileField'
import FileFormComponent from '../../components/common/form/FileFormComponent'
import SelectField from '../../components/common/form/SelectField'
import TextField from '../../components/common/form/TextField'
import LinkIcon from '../../components/common/LinkIcon'
import PageTitle from '../../components/ui/PageTitle'
import { useAppDispatch, useAppSelector } from '../../hooks/useAppReduxHooks'
import { getCategoriesList } from '../../store/category'
import { getProductById } from '../../store/product'
import { editProductSchema } from '../../validate'

const EditProduct = () => {
	const { id } = useParams()
	const product = useAppSelector(getProductById(Number(id)))
	const categories = useAppSelector(getCategoriesList())
	const dispatch = useAppDispatch()

	const handleSubmit = (data: FormData) => {
		console.log('submit', data)
	}

	if (!product) return <Navigate to='/manage/product' />

	const strProduct = {
		name: product.name,
		description: product.description,
		category: String(product.category),
		price: String(product.price),
	}

	return (
		<>
			<LinkIcon
				path='/manage/product'
				iconName='arrow_back'
				iconColor='var(--main-color)'
			/>
			<PageTitle title={product.name} />
			<FileFormComponent
				onSubmit={handleSubmit}
				initialData={strProduct}
				btnLabel='Добавить'
				validationShema={editProductSchema}>
				<TextField
					type='text'
					name='name'
					label='Наименование'
					onChange={() => {}}
					error={null}
				/>
				<TextField
					type='text'
					name='description'
					label='Описание'
					onChange={() => {}}
					error={null}
				/>
				<SelectField
					name='category'
					items={categories}
					onChange={() => {}}
					label='Категория'
					defaultLabel='Выбрать категорию'
					value={0}
					error={null}
				/>
				<TextField
					type='number'
					name='price'
					label='Цена'
					onChange={() => {}}
					error={null}
				/>
				<FileField
					onChange={() => {}}
					type='file'
					name='image'
					value={null}
					error={null}
				/>
			</FileFormComponent>
		</>
	)
}

export default EditProduct
