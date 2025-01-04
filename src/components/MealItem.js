import PropTypes from "prop-types";
import "./App.css";

const MealItem = ({ meal }) => {
  return (
    <li className="meal">
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="meal-image"
      />
      <div className="meal-details">
        <h2>{meal.strMeal}</h2>
        <div className="meal-details-sub">
          <h4>Category: {meal.strCategory}</h4>
          <h5>Area: {meal.strArea}</h5>
        </div>
        <a href={`https://www.themealdb.com/meal/${meal.idMeal}`} target="_blank" rel="noopener noreferrer">
          View Details
        </a>
      </div>
    </li>
  );
};

MealItem.propTypes = {
  meal: PropTypes.shape({
    idMeal: PropTypes.string.isRequired,
    strMeal: PropTypes.string.isRequired,
    strMealThumb: PropTypes.string,
    strCategory: PropTypes.string,
    strArea: PropTypes.string,
  }).isRequired,
};

export default MealItem;