import Recipe from "./Recipe";
import './Recipe.css';


const RecipeList = (props) => {
  return (
    <ul className="recipe-list">
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

export default RecipeList;
