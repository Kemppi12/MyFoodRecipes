import './Recipe.css';


const Recipe = (props) => {
  return (
    <li className="recipe">
      <h2>{props.name}</h2>
      <h3>{props.category}</h3>
      <h3>{props.area}</h3>
      <p>{props.instructions}</p>
    </li>
  );
};

export default Recipe;
