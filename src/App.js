import SearchRecipes from "./components/SearchRecipes"
import AddRecipe from "./components/AddRecipe";
import FetchRandomRecipe from "./components/FetchRandomRecipe";
import { Route, Switch } from "react-router-dom";
import MainNavigation from "./components/MainNavigation";
import HomePage from "./components/HomePage";
import { useState  } from "react";


//const apiUrl = 'https://themealdb.com/api/json/v1/1/search.php?s='



   const RecipeList = [
    {
      idMeal:'52991',
      strMeal:'Mince Pies',
      strCategory:'Dessert',
      strArea:'British',
    },
    {
      idMeal:'52991',
      strMeal:'Mince Pies',
      strCategory:'Dessert',
      strArea:'British',
    },
    {
      idMeal:'52991',
      strMeal:'Mince Pies',
      strCategory:'Dessert',
      strArea:'British',
    },
    {
      idMeal:'52991',
      strMeal:'Mince Pies',
      strCategory:'Dessert',
      strArea:'British',
    }
  ]

const App = () => {

  const [recipes, setRecipes] = useState(RecipeList);

  /*const addRecipeHandler = async (recipe) => {
    console.log(recipe);
    const response = await fetch(
      "https://todo-list-c1b33-default-rtdb.europe-west1.firebasedatabase.app/todos.json",
      {
        method: "POST",
        body: JSON.stringify(recipe),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);

};*/

/*const fetchRecipes = async () => {

  const response = await fetch(
    "https://yourmoviedatabase-default-rtdb.europe-west1.firebasedatabase.app/recipes.json"
  );
  const data = await response.json();

  const fetchedRecipes = [];

  for (const key in data) {
    fetchedRecipes.push({
      id: key,
      text: data[key].text,
      date: data[key].date,
    });
  }

  setRecipes(fetchedRecipes);
};

useEffect(() => {
  fetchRecipes();
}, []);*/

let content = recipes.map((recipe) => (
  <div key={recipe.id}>
    <h2>{recipe.name}</h2>
    <h3>{recipe.category}</h3>
    <p>{recipe.instructions}</p>
  </div>
));




  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <HomePage />       
        </Route>
        <Route path="/randomrecipe">
          <FetchRandomRecipe/>
        </Route> 
        <Route path="/recipesearch">
          <SearchRecipes/>
        </Route>   
      </Switch>  
      <section>
        <AddRecipe setRecipes={setRecipes} />
      </section>
      <section>{content}</section>
    </div>
  );
};

export default App;
