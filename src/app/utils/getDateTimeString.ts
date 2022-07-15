export default function getDateTimeString(date: string) {
	return (
		new Date(date).toLocaleDateString() +
		' ' +
		new Date(date).toLocaleTimeString()
	)
}
