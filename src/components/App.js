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
            {/*<Route path="/saved-recipes" element={<PrivateRoute><SavedRecipesPage/></PrivateRoute>}></Route>*/}
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

// React-router-dom VERSION 6 SYNTAX

  /*return(
    <div className="App">
      <Router>
        <Routes>
          <Route element={<PrivateRoutes/>}>
            <Route element={<HomePage/>} path='/' exact/>
            <Route element={<SavedRecipesPage/>} path='/saved-recipes'/>
            <Route element={<Signup/>} path='/' exact/>
            <Route element={<Login/>} path='/' exact/>
            <Route element={<ForgotPassword/>} path='/' exact/>
            <Route element={<SettingsPage/>} path='/' exact/>
            <Route element={<UpdateProfile/>} path='/' exact/>
            <Route element={<HomePage/>} path='/' exact/>
            <Route element={<HomePage/>} path='/' exact/>
          </Route>
        </Routes>
      </Router>
    </div>
  )*/

/*className="d-flex 
    align-items-center 
    justify-content-center" 
    style= {{minHeight:'100vh'}}
    <div className="w-100" style= {{maxWidth:'400px'}}>*/

