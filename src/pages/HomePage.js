import { useState, useEffect } from "react";
import MealList from "../components/MealList";
import MainNavigation from "../components/MainNavigation";

const apiUrl = 'https://themealdb.com/api/json/v1/1/search.php?s=';

const App = () => {
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');

  const fetchMealsHandler = async () => {
    const url = apiUrl + query;

    try {
      setLoading(true);
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      setMeals(data.meals || []); // Set meals or an empty array if no results
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMealsHandler();
  }, []);

  return (
    <div>
      <MainNavigation />
      <div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a meal"
        />
        <button onClick={fetchMealsHandler}>Search</button>
      </div>
      <div>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && <MealList meals={meals} />}
      </div>
    </div>
  );
};

export default App;
