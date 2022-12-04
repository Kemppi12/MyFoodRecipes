import './Recipe.css';
import React from 'react';


const RecipeCard = (props) => {
  return (
    <div className='card'>
        <img src={props.image}
        alt= {props.name}
        className='card-image'
        />
        <div className='card-body'>
            <span className='category'>{props.category}</span>
            <h3>{props.name}</h3>
            <br href={'https://www.themealdb.com/meals' + props.id} target='_blank'>Ingredients </br>

        </div>
      <h2>{props.name}</h2>
      <h3>{props.category}</h3>
      <h3>{props.area}</h3>
      <p>{props.instructions}</p>
    </div>
  );
};

export default RecipeCard;
