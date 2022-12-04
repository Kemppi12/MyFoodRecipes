import { useEffect, useState } from 'react';
import RecipeCard from './RecipeCard';
import SearchBar from './SearchBar';
import "./SearchRecipes.css";

const apiUrl = 'https://themealdb.com/api/json/v1/1/search.php?s='

const SearchRecipes = async () => {

  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState(null);

  useEffect(() => {}, [recipes]);

  const url = apiUrl + query;

    try{
      setIsLoading(true);
      const response = await fetch (url);
      console.log(response)

      if(!response.ok){
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      
      console.log(data)

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
      setIsLoading(false);
    }catch (error){
      setError(error.message);
      setIsLoading(false);
    }
   
  useEffect(() => {
    SearchRecipes();
  }, []);


  let content;

  if(isLoading){
    content = <p>Loading....</p>;
  }else if(error){
    content = <p>{error}</p>;
  }/*else {
    content = <RecipeList recipes={recipes}/>;
  }*/


  const handleSubmit = e => {
    e.prevenDefault()
    SearchRecipes()
  }


  return (
    <div className='container'>
        <h2>MyRecipesApp</h2>      
        <div className='recipes'> 
        {recipes ? recipes.map(recipe =>(
          <RecipeCard>
            key= {recipe.idMeal}
            recipe={recipe}                 
          </RecipeCard>
        )):'No Recipes'}                       
        </div>
    </div>
    
  );


};

export default SearchRecipes;

/*<SearchBar>
            handleSubmit= {handleSubmit}
            value={query}
            onChange={e=> setQuery (e.target.value) }
            loading={isLoading}
        </SearchBar>*/