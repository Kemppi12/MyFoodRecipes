import "../components/App.css";
import { useState , useEffect } from "react";
import RecipeList from "../components/RecipeList";
import MainNavigation from "../components/MainNavigation";
import SearchBar from "../components/SearchBar";


const apiUrl = 'https://themealdb.com/api/json/v1/1/search.php?s='

const Homepage = () => {

  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('')

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
          idMeal:recipeData.idMeal, 
          name:recipeData.strMeal,
          category:recipeData.strCategory,
          area:recipeData.strArea,
          instructions:recipeData.strInstructions,
          image:recipeData.strMealThumb,
        }
      })
      setRecipes(transformedRecipes);
      setLoading(false);
      console.log(data)
    }catch (error){
      setError(error.message);
      setLoading(false);
    }

  }; 

  const handleSubmit = e => {
    e.preventDefault()
    fetchRecipesHandler()
  };

  useEffect(() => {
    fetchRecipesHandler();
  },[]);

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
      <SearchBar
        handleSubmit={handleSubmit}
        value={query}
        onChange={e => setQuery(e.target.value)}
        loading={loading}
      />       
      <div>
        {content}     
      </div>    
    </div>
  )
  }; 

  export default Homepage;
