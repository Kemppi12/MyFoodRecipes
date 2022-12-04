import Recipe from "./Recipe";
import './Recipe.css';
//import { useState , useEffect } from "react";


const RecipeList = (props) => {
  return (
    <ul className="recipes-list">
      {props.recipes.map((recipe) => (
        <Recipe
          key={recipe.id}
          name={recipe.name}
          category={recipe.category}
          area={recipe.area}
          instructions={recipe.instructions}
        />
      ))}
    </ul>
  );
};


/*const RecipeList = () => {

  const [recipes, setRecipes] = useState([]);



  const fetchRecipes = async () => {
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
  }, []);

  let content = recipes.map((recipe) => (
    <div key={recipe.id}>
      <h2>{recipe.name}</h2>
      <h3>{recipe.category}</h3>
      <p>{recipe.instructions}</p>
    </div>
  ));

  return (
    <>
      <section>
        <>Lista Itemeistä</>
      </section>
      <section>{content}</section>
    </>
  );



};*/



export default RecipeList;
