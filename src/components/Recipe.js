import React, { useState } from 'react';
import SaveModal from './SaveModal';
import Backdrop from './Backdrop'
import { useAuth } from '../contexts/AuthContext'
//import { useHistory } from 'react-router-dom'
//import { Button } from 'react-bootstrap'


const Recipe = (props) => {

  //const id = props.id;
  const name = props.name;
  const area = props.area;
  const category = props.category;
  const instructions = props.instructions;
  const image = props.image;
  const [showSaveModal, setShowSaveModal] = useState(false);
  const { currentUser } = useAuth()
  //const history = useHistory()

  const userId = currentUser.uid;

  const showSaveModalHandler = () => {
    setShowSaveModal(true);
  };

  const cancelSaveModalHandler = () => {
    setShowSaveModal(false);
  };

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
        {/*<button onClick={saveRecipeHandler} >Save Recipe</button>*/}
        <button onClick={showSaveModalHandler}>
        <>Save Recipe</>
        </button>
        <section>{showSaveModal && (
          <SaveModal 
          onCancel={cancelSaveModalHandler} 
          onConfrim={saveRecipeHandler}/>
         )}
         {showSaveModal ? 
         <Backdrop 
         onClick={cancelSaveModalHandler} /> : null}</section>
      </div>
    </div>
  );
};

export default Recipe;

