import { UsersProvider } from "./context/users/usersContext"
import { Usuarios } from "./pages/Usuarios"


function App() {

  return (
		<UsersProvider>
			<Usuarios />
		</UsersProvider>
	)
}

export default App
