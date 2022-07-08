import React from 'react'
import FileField from '../../components/common/form/FileField'
import FileFormComponent from '../../components/common/form/FileFormComponent'
import TextField from '../../components/common/form/TextField'
import LinkIcon from '../../components/common/LinkIcon'
import PageTitle from '../../components/ui/PageTitle'

const AddCategory = () => {
	const handleSubmit = () => {
		console.log('submit')
	}

	return (
		<>
			<LinkIcon
				path='/manage/category'
				iconName='arrow_back'
				iconColor='var(--main-color)'
			/>
			<PageTitle title='Новая категория' />

			<FileFormComponent btnLabel='Создать' onSubmit={handleSubmit}>
				<TextField
					type='text'
					name='name'
					label='Наименование'
					onChange={() => console.log('change')}
					error={null}
				/>
				<FileField onChange={() => {}} description='' type='file' />
			</FileFormComponent>
		</>
	)
}

export default AddCategory
