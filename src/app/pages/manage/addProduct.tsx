import * as React from 'react'
import FileField from '../../components/common/form/FileField'
import FileFormComponent from '../../components/common/form/FileFormComponent'
import SelectField from '../../components/common/form/SelectField'
import TextField from '../../components/common/form/TextField'
import LinkIcon from '../../components/common/LinkIcon'
import PageTitle from '../../components/ui/PageTitle'
import { useAppDispatch, useAppSelector } from '../../hooks/useAppReduxHooks'
import { getCategoriesList } from '../../store/category'
import { addProduct } from '../../store/product'
import { addProductSchema } from '../../validate'

const AddProduct = () => {
	const dispatch = useAppDispatch()
	const categories = useAppSelector(getCategoriesList())

	const handleSubmit = (data: FormData) => {
		dispatch(addProduct(data))
	}
	return (
		<>
			<LinkIcon
				path='/manage/product'
				iconName='arrow_back'
				iconColor='var(--main-color)'
			/>
			<PageTitle title='Новое блюдо' />

			<FileFormComponent
				onSubmit={handleSubmit}
				btnLabel='Добавить'
				validationShema={addProductSchema}>
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

export default AddProduct
