import React from "react";
import Signup from "../pages/SignupPage";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router,
  Switch,
  Route } from 'react-router-dom'
import HomePage from "../pages/HomePage";
import Login from "../pages/LoginPage";
import PrivateRoute from "./PrivateRoute";
import SavedRecipesPage from "../pages/SavedRecipesPage";
import ForgotPassword from "../pages/ForgotPassword";


function App () {

  return (     
      <div>
        <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path='/' component={HomePage} />
            <PrivateRoute path= '/saved-recipes' component={SavedRecipesPage} />
            <Route path='/signup' component={Signup} />
            <Route path='/login' component={Login} />
            <Route path='/forgot-password' component={ForgotPassword}/>
          </Switch>
        </AuthProvider>
        </Router>
      </div>      
  )
};

export default App;
