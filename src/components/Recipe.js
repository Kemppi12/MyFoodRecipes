import React from 'react';
import { useState } from "react";
import { useAuth } from '../contexts/AuthContext'
import { Alert } from 'react-bootstrap';


const Recipe = (props) => {

  const [error, setError] = useState('')
  const { currentUser } = useAuth()

  const key = props.id
  const idMeal = props.idMeal;
  const name = props.name;
  const area = props.area;
  const category = props.category;
  const instructions = props.instructions;
  const image = props.image;

  const userId = currentUser.uid;

  const saveRecipeHandler = async () => {

    const response = await fetch(
      'https://myfoodrecipes-1cfe5-default-rtdb.europe-west1.firebasedatabase.app/' + userId + '/recipes.json',
      {
        method:'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId, idMeal, name, category, area, instructions, image,     
        }),
      }
    );
    await response.json();
    console.log(key , idMeal, name, category, area)
    
    setError('Recipe Saved!')
  };

  return (  
    <div className="recipe">
      <img
      src={props.image}
      alt={props.name}
      className='recipe-image'
      />
      {error && <Alert variant= 'danger'>{error}</Alert>} 
      <div className="recipe-details">
        <div className='recipe-details-sub'></div>
        <h2>{props.name}</h2>
        <h3>{props.category}</h3>
        <h3>{props.area}</h3>     
        <a href={'https://www.themealdb.com/meal/' + props.idMeal + '-' + props.name + '-Recipe'}>Ingredients</a>
        <button onClick={saveRecipeHandler}>
        <>Save Recipe</>
        </button>
      </div>
    </div>
  );
};

export default Recipe;
