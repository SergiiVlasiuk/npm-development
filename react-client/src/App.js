import 'materialize-css'
import { AuthContext } from './context/AuthContext'
import { useAuth } from './hooks/auth.hook'
import { useRoutes } from './routes'

function App() {
  const { token, login, logout, userId, ready } = useAuth()
  const isAuthenticated = !!token
  const routes = useRoutes(isAuthenticated)
  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuthenticated
    }}>
      <div className="container">
        <h1>No title yet!</h1>
        {routes}
      </div>
    </AuthContext.Provider>
  )
}

export default App
