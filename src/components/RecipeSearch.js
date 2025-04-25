import React, { useState } from 'react';


function RecipeSearch() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  // Function to search recipes using MealDB API
  const searchRecipes = async () => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      const data = await response.json();
      setRecipes(data.meals || []); // Set recipes if available, otherwise use an empty array
    } catch (error) {
      console.error('Error fetching the API:', error);
    }
  };

  return (
    <div className="container recipe-search">
      <h1 className="title">🍴 Search Your Favorite Recipes 🍲</h1>
      <div className="input-group mb-3 search-bar">
        <input
          type="text"
          className="form-control"
          placeholder="Search for a recipe..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-primary search-button" onClick={searchRecipes}>
          Search
        </button>
      </div>
      <div className="row recipe-results">
        {recipes.map((recipe, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card recipe-card">
              <img
                src={recipe.strMealThumb}
                className="card-img-top"
                alt={recipe.strMeal}
              />
              <div className="card-body">
                <h5 className="card-title">{recipe.strMeal}</h5>
                <p className="card-text">
                  {recipe.strInstructions.substring(0, 100)}...
                </p>
                <a
                  href={recipe.strSource || '#'}
                  className="btn btn-primary view-recipe-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Recipe
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeSearch;