import RecipeList from "./RecipeList";
import { useState , useEffect} from "react";

//import { getValue } from "@testing-library/user-event/dist/utils";

const HomePage = () => {

  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {}, [recipes]);

  const fetchRecipesHandler = async () => {

    try{
      setLoading(true);
      //const response = await fetch ('https://themealdb.com/api/json/v1/1/lookup.php?i=52772');
      const response = await fetch ('https://themealdb.com/api/json/v1/1/lookup.php?i=52772');
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
        <>Random recipe of the Day!</>}
        </button>
      </section>
      <section>
        {content}
      </section>
      <button onClick={fetchRecipesHandler}>
        {loading ? 
        <>Loading...</> :
        <>Save recipe</>}
        </button>
    </>
  );


};

export default HomePage;

