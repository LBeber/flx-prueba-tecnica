import { useState } from "react"

const useAsyncCallback = ({ callback, onFinally }) => {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)

	const asyncCallback = async (params) => {
		setLoading(true)
		setTimeout(async () => {
			try {
				await callback(params)
			} catch (err) {
				setError(err)
			} finally {
				setLoading(false)
                if (onFinally) onFinally()
			}
		}, 1000)
	}

	return { loading, error, asyncCallback }
}

export default useAsyncCallback
