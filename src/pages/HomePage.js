import { useState , useEffect } from "react";
//import SearchBar from "./SearchBar";
import RecipeList from "../components/RecipeList";
//import { Card } from 'react-bootstrap'
//import { useAuth } from "../contexts/AuthContext";
import MainNavigation from "../components/MainNavigation";
//import { Switch , Route } from 'react-router-dom'
//import SearchRecipesNew from "./SearchRecipesNew";
//import { useHistory } from 'react-router-dom'

const apiUrl = 'https://themealdb.com/api/json/v1/1/search.php?s='

const Homepage = () => {

  /*function handleLogout(){
  }*/
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('')
  //const history = useHistory()
  //const {currentUser} = useAuth()

  useEffect(() => {}, [recipes]);

  const fetchRecipesHandler = async () => {

    const url = apiUrl + query;

    try{
      setLoading(true);
      const response = await fetch (url);
      console.log(response)

      if(!response.ok){
        throw new Error("Something went wrong!");
      }

      const data = await response.json();   

      const transformedRecipes = data.meals.map((recipeData) => {
        return {
          id:recipeData.idMeal, 
          name:recipeData.strMeal,
          category:recipeData.strCategory,
          area:recipeData.strArea,
          instructions:recipeData.strInstructions,
          image:recipeData.strMealThumb,
        }
      })
      setRecipes(transformedRecipes);
      setLoading(false);
    }catch (error){
      setError(error.message);
      setLoading(false);
    }
  }; 

  useEffect(() => {
    fetchRecipesHandler();
  }, []);


  let content;

  if(loading){
    content = <p>Loading....</p>;
  }else if(error){
    content = <p>{error}</p>;
  }else {
    content = <RecipeList recipes={recipes}/>;
  }

  return (
    <div>
      <MainNavigation />          
      <div>
        {content}
      </div>      
    </div>
  )
  }; 

  export default Homepage;
