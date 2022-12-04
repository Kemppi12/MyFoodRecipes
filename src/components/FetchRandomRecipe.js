

import { useEffect, useState } from 'react';
import RecipeList from './RecipeList';


const FetchRandomRecipe = () => {

  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {}, [recipes]);

  const fetchRecipesHandler = async () => {

    try{
      setLoading(true);
      const response = await fetch ('https://themealdb.com/api/json/v1/1/search.php?s=Arrabiata');
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
      setLoading(false);
    }catch (error){
      setError(error.message);
      setLoading(false);
    }
  }; 


  let content;

  if(loading){
    content = <p>Loading....</p>;
  }else if(error){
    content = <p>{error}</p>;
  }else {
    content = <RecipeList recipes={recipes}/>;
  }


  return (
    <>
      <section>
        <button onClick={fetchRecipesHandler}>
        {loading ? 
        <>Loading...</> :
        <>Fetch Recipe</>}
        </button>
      </section>
      <section>
        {content}
      </section>
    </>
  );

  /*const addRecipeHandler = (recipe) => {
    console.log(recipe);
  }*/


};

export default FetchRandomRecipe;
