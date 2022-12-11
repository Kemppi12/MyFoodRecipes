import Recipe from "./Recipe";
//import { useState , useEffect } from "react";

const RecipeList = (props) => {
  return (
    <h2 className="recipe-list">
      {props.recipes.map((recipe) => (
        <Recipe
          key={recipe.id}
          name={recipe.name}
          category={recipe.category}
          area={recipe.area}
          instructions={recipe.instructions}
          image={recipe.image}
        />
      ))}
    </h2>
  );
};

export default RecipeList;
