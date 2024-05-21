import { useEffect } from "react"
import { createContext, useContext, useState } from "react"
import { GET, DELETE, POST, PUT } from "../../api/users"

const UsersContext = createContext()

const useUsersContext = () => useContext(UsersContext)

const UsersProvider = ({ children }) => {
	const [users, setUsers] = useState([])
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState(false)
	const [filterParams, setFilterParams] = useState({
		user: '',
		status: ''
	})

	const handleGetUsers = ({ params } = {}) => {
		setLoading(true)
		setTimeout(() => GET({ params }).then(setUsers).catch(setError).finally(() => setLoading(false)), 1000)
	}

	useEffect(handleGetUsers, []);

	const handleFilterUsers = ({ name, value = '' }) => {
		const params = { ...filterParams, [name]: value }
		handleGetUsers({ params })
		setFilterParams(prev => ({ ...prev, [name]: value }))
	}

	const handleDeleteUser = async ({ id }) => {
		try {
			await DELETE({ id })
			handleGetUsers({ params: filterParams })
		}
		catch (err) {
			console.error(err)
		}
	}

	const handleCreateUser = async ({ user }) => {
		try {
			await POST({ user })
			handleGetUsers({ params: filterParams })
		}
		catch (err) {
			console.error(err)
		}
	}

	const handleEditUser = async ({ user }) => {
		try {
			await PUT({ user })
			handleGetUsers({ params: filterParams })
		}
		catch (err) {
			console.error(err)
		}
	}

	return (
		<UsersContext.Provider value={{ users, error, handleFilterUsers, handleGetUsers, handleDeleteUser, handleCreateUser, handleEditUser, loading }}>
			{children}
		</UsersContext.Provider>
	)
}

export { useUsersContext, UsersProvider }
