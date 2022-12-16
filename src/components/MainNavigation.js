import './App.css'
import { Link } from 'react-router-dom'
import { Alert } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";


const MainNavigation = () => {

  const [error, setError] = useState('')
  const { logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {

    setError('')

    try{
      await logout
      history.push('/login')

    }catch {
      setError('Failed to log out!')
    }
  }

  return (
    <header className="header">
      <h1>
        MyFoodRecipes
      </h1>
      <nav>
        <ul> 
          <h2>
            <Link to="/">HomePage</Link>
          </h2> 
          <h2>
            <Link to="/saved-recipes">MyRecipes</Link>
          </h2>      
          <h2>
            <button onClick={handleLogout}>
              Log out
            </button>
          </h2>                    
        </ul>
        {error && <Alert variant= 'danger'>{error}</Alert>}
      </nav>
    </header>
  );
};

export default MainNavigation;
