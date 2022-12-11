import React from 'react';
import { useAuth } from '../contexts/AuthContext'


const Recipe = (props) => {

  const name = props.name;
  const area = props.area;
  const category = props.category;
  const instructions = props.instructions;
  const image = props.image;

  const { currentUser } = useAuth()
 
  const userId = currentUser.uid;

  const saveRecipeHandler = async (props) => {

    const response = await fetch(
      'https://yourfoodrecipes-bc17a-default-rtdb.europe-west1.firebasedatabase.app/recipes.json',
      {
        method:'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId, name, category, area, instructions, image,       
        }),
      }
    );
    const data = await response.json();
    console.log(data)
  };

  return (  
    <div className="recipe">    
      <img
      src={props.image}
      alt={props.name}
      className='recipe-image'
      />
      <div className="recipe-details">
        <div className='recipe-details-sub'></div>
        <h2>{props.name}</h2>
        <h3>{props.category}</h3>     
        <a href={'https://www.themealdb.com/meal.php?c='+ props.id}>Ingredients</a>
        <button onClick={saveRecipeHandler}>
        <>Save Recipe</>
        </button>
      </div>
    </div>
  );
};

export default Recipe;

