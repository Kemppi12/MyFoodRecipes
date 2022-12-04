import { Link } from "react-router-dom";
import "./MainNavigation.css";

const MainNavigation = () => {
  return (
    <header className="header">
      <h2>MyRecipesApp</h2>
      <nav>
        <ul>
          <li>
            <Link to="/randomrecipe">Look for a Random recipe</Link>
          </li> 
          <li>
            <Link to="/">My Recipes</Link>
          </li> 
          <li>
            <Link to="/resipesearch">Search Recipes</Link>
          </li>           
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
