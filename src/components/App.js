import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Profile from "./Profile"
import LogIn from "./authentication/LogIn"
import SignUp from "./authentication/SignUp"
import PrivateRoute from "./authentication/PrivateRoute"
import ForgotPassword from "./authentication/ForgotPassword"
import UpdateProfile from "./authentication/UpdateProfile"

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          {/* Drive */}

          {/* Profile */}
          <PrivateRoute path="/user" component={Profile} />
          <PrivateRoute
            exact
            path="/update-profile"
            component={UpdateProfile}
          />

          {/* Auth */}
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={LogIn} />
          <Route path="/forgot-password" component={ForgotPassword} />
        </Switch>
      </AuthProvider>
    </Router>
  )
}

export default App
