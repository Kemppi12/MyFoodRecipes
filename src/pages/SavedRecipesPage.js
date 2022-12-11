import { useState , useEffect } from "react";
import RecipeList from "../components/RecipeList";
import MainNavigation from "../components/MainNavigation";


const dbUrl = 'https://yourfoodrecipes-bc17a-default-rtdb.europe-west1.firebasedatabase.app/recipes.json'

const SavedRecipesPage = () => {

  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {}, [recipes]);

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
      
      console.log(data)

      const fetchedRecipes = [];


      for (const key in data) {
        fetchedRecipes.push({
          id: key,
          name:data[key].name,
          category:data[key].category,
          area:data[key].area,
          instructions:data[key].instructions,
          image:data[key].image,
        });
      }

      setRecipes(fetchedRecipes);
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
      <div className="recipe-list">
        {content}
      </div>      
    </div>
  )
  
  }; 
  export default SavedRecipesPage;
  
  
  