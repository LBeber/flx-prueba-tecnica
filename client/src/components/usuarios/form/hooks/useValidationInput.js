import { useState } from "react"

const useValidateInput = ({ callback }) => {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	
    const validate = async (value) => {
		setLoading(true)
        setError(null)
		setTimeout(async () => {
			try {
				await callback(value)
			} catch (err) {
				setError(err.message)
			} finally {
				setLoading(false)
			}
		}, 100)
	}

	return { loading, error, validate, setError}
}

export default useValidateInput
