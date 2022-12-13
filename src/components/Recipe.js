import React from 'react';
import { useState } from "react";
import { useAuth } from '../contexts/AuthContext'
//import SaveModal from './SaveModal';
//import Backdrop from './Backdrop';
//import { Modal } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';


const Recipe = (props) => {

  //const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState('')

  
  const id = props.id
  const name = props.name;
  const area = props.area;
  const category = props.category;
  const instructions = props.instructions;
  const image = props.image;

  const { currentUser } = useAuth()
 
  const userId = currentUser.uid;

  const saveRecipeHandler = async () => {

    const response = await fetch(
      'https://myfoodrecipes-1cfe5-default-rtdb.europe-west1.firebasedatabase.app/recipes.json',
      {
        method:'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId, id, name, category, area, instructions, image,      
        }),
      }
    );
    const data = await response.json();
    console.log(data)

    setError('Recipe Saved!')
  };


  const deleteRecipeHandler = async (Recipe) => {
    const response = await fetch(
      'https://myfoodrecipes-1cfe5-default-rtdb.europe-west1.firebasedatabase.app/recipes.json',
      {
        method:'DELETE',
        body:JSON.stringify(Recipe),
        headers:{
          'Content-Type': 'application/json',
        },
      });
    const data = await response.json();
    console.log(data)
  };

  /*const showModalHandler = () => {
    setShowModal(true);
  };

  const cancelModalHandler = () => {
    setShowModal(false);
  };*/



  

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
        <a href={'https://www.themealdb.com/meal/' + props.id + '-' + props.name + '-Recipe'}>Ingredients</a>
        <button onClick={saveRecipeHandler}>
        <>Save Recipe</>
        </button>
        <button onClick={deleteRecipeHandler}>
        <>Delete Recipe</>
        </button>
      </div>
    </div>
  );
};

export default Recipe;

