import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import AppList from '../../components/common/AppList'
import CommentListItem from '../../components/common/CommentListItem'
import FormComponent from '../../components/common/form/FormComponent'
import TextAreaField from '../../components/common/form/TextAreaField'
import LinkIcon from '../../components/common/LinkIcon'
import PageTitle from '../../components/ui/PageTitle'
import SomeTextCenter from '../../components/ui/SomeTextCenter'
import { useAppDispatch, useAppSelector } from '../../hooks/useAppReduxHooks'
import {
	addComment,
	getCommentsList,
	loadCommentsList,
} from '../../store/comment'
import { getProductById } from '../../store/product'
import { getUser } from '../../store/user'
import { addCommentSchema } from '../../validate'

const Comments = () => {
	const { productId } = useParams()
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	if (!productId) {
		navigate(-1)
	}

	useEffect(() => {
		dispatch(loadCommentsList(productId || ''))
	}, [productId, dispatch])

	const product = useAppSelector(getProductById(productId || ''))
	const comments = useAppSelector(getCommentsList())
	const user = useAppSelector(getUser())

	if (!productId || !comments) {
		navigate(-1)
	}

	const handleSubmit = (data: { [key: string]: string }) => {
		const payload = {
			text: data.text,
			product: productId || '',
		}
		if (user) {
			dispatch(addComment(payload))
		} else {
			toast.warning('Вы не авторизованы')
			navigate('/auth')
		}
	}

	return (
		<>
			<LinkIcon
				path={`/products/${product?.category}`}
				iconName='arrow_back'
				iconColor='var(--main-color)'
			/>
			<PageTitle title={`Отзывы блюда "${product?.name}"`} />
			<FormComponent
				validationShema={addCommentSchema}
				onSubmit={handleSubmit}
				initialData={{}}
				btnLabel='Отправить'>
				<TextAreaField
					name='text'
					label='Отзыв'
					value={''}
					error={null}
					onChange={() => {}}
				/>
			</FormComponent>
			{!user && (
				<SomeTextCenter text='Добавлять отзывы могут только зарегистрированные пользователи' />
			)}

			{comments.length ? (
				<AppList items={comments} column={true}>
					<CommentListItem item={comments[0]} />
				</AppList>
			) : (
				<SomeTextCenter text='Нет отзывов' />
			)}
		</>
	)
}

export default Comments
