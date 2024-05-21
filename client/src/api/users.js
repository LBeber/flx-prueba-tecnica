const URL_BASE = "http://localhost:4000/"
const API_ROUTE = "users"

const MERGE_DATA = ({ data }) => {
	const reducer = data.reduce((acc, curr) => {
		acc[curr.id] = curr
		return acc
	}, {})

	return Object.values(reducer)
}

const GET_ALL = async () => {
	try {
		const res = await fetch(`${URL_BASE}${API_ROUTE}`)
		const data = await res.json()
		return data
	} catch (err) {
		throw new Error("Ocurrió un error al obtener los usuarios")
	}
}

const GET_FILTERED = async ({ user, status = "" }) => {
	const url = [
		fetch(
			`${URL_BASE}${API_ROUTE}?name_like=${user}${
				status ? `&status=${status}` : ""
			}`
		),
		fetch(
			`${URL_BASE}${API_ROUTE}?lastname_like=${user}${
				status ? `&status=${status}` : ""
			}`
		),
	]

	try {
		const responses = await Promise.all(url)
		const res = await Promise.all(
			responses.map((response) => response.json())
		)
		const data = res.flat()
		const mergeData = MERGE_DATA({ data })
		return mergeData
	} catch (err) {
		throw new Error("Ocurrió un error al filtrar los usuarios")
	}
}

const GET_BY_USERNAME = async ({ username }) => {
	try {
		const res = await fetch(`${URL_BASE}${API_ROUTE}?username=${username}`)
		const data = await res.json()
		return data
	} catch (err) {
		throw new Error("Ocurrió un error al obtener el usuario")
	}
}

const GET = async ({ params } = {}) => {
	try {
		const { user = "", status = "", username = "" } = params || {}

		if (username) return GET_BY_USERNAME({ username })

		if (!user && !status) return GET_ALL()

		return GET_FILTERED({ user, status })
	} catch (err) {
		throw new Error("Ocurrió un error al obtener los usuarios")
	}
}

const POST = async ({ user }) => {
	try {
		const res = await fetch(`${URL_BASE}${API_ROUTE}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user),
		})
		return await res.json()
	} catch (err) {
		console.error(err)
	}
}

const PUT = async ({ user }) => {
	try {
		const res = await fetch(`${URL_BASE}${API_ROUTE}/${user.id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user),
		})
		return await res.json()
	} catch (err) {
		console.error(err)
	}
}

const DELETE = async ({ id }) => {
	try {
		const res = await fetch(`${URL_BASE}${API_ROUTE}/${id}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
		})
		return await res.json()
	} catch (err) {
		console.error(err)
	}
}

export { GET, POST, PUT, DELETE }
