import PropTypes from "prop-types";
import MealItem from "./MealItem";
import "./App.css";

const MealList = ({ meals }) => {
  if (meals.length === 0) {
    return <p>No meals found.</p>;
  }

  return (
    <ul className="meal-list">
      {meals.map((meal) => (
        <MealItem key={meal.idMeal} meal={meal} />
      ))}
    </ul>
  );
};

MealList.propTypes = {
  meals: PropTypes.arrayOf(
    PropTypes.shape({
      idMeal: PropTypes.string.isRequired,
      strMeal: PropTypes.string.isRequired,
      strMealThumb: PropTypes.string,
      strCategory: PropTypes.string,
      strArea: PropTypes.string,
    })
  ).isRequired,
};

export default MealList;