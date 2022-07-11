import React from 'react'
import FileField from '../../components/common/form/FileField'
import FileFormComponent from '../../components/common/form/FileFormComponent'
import TextField from '../../components/common/form/TextField'
import LinkIcon from '../../components/common/LinkIcon'
import PageTitle from '../../components/ui/PageTitle'
import { useAppDispatch } from '../../hooks/useAppReduxHooks'
import { addCategory } from '../../store/category'
import { addCategorySchema } from '../../validate'

const AddCategory = () => {
	const dispatch = useAppDispatch()

	const handleSubmit = (data: FormData) => {
		dispatch(addCategory(data))
	}

	return (
		<>
			<LinkIcon
				path='/manage/category'
				iconName='arrow_back'
				iconColor='var(--main-color)'
			/>
			<PageTitle title='Новая категория' />

			<FileFormComponent
				btnLabel='Добавить'
				onSubmit={handleSubmit}
				validationShema={addCategorySchema}>
				<TextField
					type='text'
					name='name'
					label='Наименование'
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

export default AddCategory
