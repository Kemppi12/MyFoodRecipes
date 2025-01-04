/*import "../components/App.css";
import { useState , useEffect } from "react";
import { useAuth } from '../contexts/AuthContext'
import RecipeList from "../components/MealList";
import MainNavigation from "../components/MainNavigation";


const SavedRecipesPage = () => {

  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { currentUser } = useAuth()

  const userId = currentUser.uid;

  const dbUrl = 'https://myfoodrecipes-1cfe5-default-rtdb.europe-west1.firebasedatabase.app/' + userId + '/recipes.json'


  const fetchRecipesHandler = async () => {

    const url = dbUrl;

    try{
      setLoading(true);
      const response = await fetch (url);
      console.log(response)

      if(!response.ok){
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const fetchedRecipes = [];

      for (const userId in data){
        fetchedRecipes.push({
          id: userId,
          idMeal: data[userId].idMeal,
          name: data[userId].name,
          category:data[userId].category,
          area:data[userId].area,
          instructions:data[userId].instructions,
          image:data[userId].image,
        })
      }

      setRecipes(fetchedRecipes);
      setLoading(false);

    }catch (error){
      setError(error.message);
      setLoading(false);
    }
  };


  const deleteRecipeHandler = async () => {

    const response = await fetch(
        'https://myfoodrecipes-1cfe5-default-rtdb.europe-west1.firebasedatabase.app/' + userId + '/recipes/.json',
        {
          method:'DELETE',
          headers:{
            'Content-Type': 'application/json',
          },
        });

      await response.json();
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
    content = <RecipeList recipes={recipes}/>
  }

  return (
    <div>
      <MainNavigation />
      <button className='search-btn' onClick={deleteRecipeHandler}>
        <>Delete All Recipes</>
      </button>
      <div>
        {content}
      </div>
    </div>
  )
  };

  export default SavedRecipesPage;*/
