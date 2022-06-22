import React, { useEffect, useState } from 'react';
import { fetchAPI, filterRecipesItens } from '../helpers/fetchAPI';
import shareIcon from '../images/shareIcon.svg';
import FavoriteRecipes from '../components/Details/FavoriteRecipes';
import '../index.css';

function InProgress(props) {
  const { history } = props;
  const { location: { pathname } } = history;

  const [recipeDetails, setRecipeDetails] = useState([{}]);
  const [copiedLink, setCopiedLink] = useState(false);

  const url = pathname.split('/').slice(1);
  const recipeType = (url[0] === 'foods') ? 'Meal' : 'Cocktail';

  useEffect(() => {
    fetchAPI(`fetch${recipeType}ById`, url[1])
      .then((arr) => setRecipeDetails(arr));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filterIngredients = filterRecipesItens(recipeDetails, 'strIngredient');
  const filterMeasures = filterRecipesItens(recipeDetails, 'strMeasure');

  const [checkedState, setCheckedState] = useState([]);
  //   new Array(filterIngredients.length).fill(false),
  // );

  function copyText() {
    setCopiedLink(true);
    navigator.clipboard.writeText(`http://localhost:3000/${url[0]}/${url[1]}`);
  }

  useEffect(() => {
    if (filterIngredients.length > 0 && checkedState.length === 0) {
      setCheckedState(new Array(filterIngredients.length).fill(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterIngredients]);

  console.log(checkedState);

  const handleOnChange = (position) => {
    const updateCheckedState = checkedState
      .map((item, index) => (index === position ? !item : item));

    // console.log(checkIngredient);
    setCheckedState(updateCheckedState);
  };

  return recipeDetails.map((recipe) => (
    <div key="recipe">
      <img
        data-testid="recipe-photo"
        alt={ recipe.strMeal || recipe.strDrink }
        src={ recipe.strMealThumb || recipe.strDrinkThumb }
      />
      <h1 data-testid="recipe-title">
        {recipe.strMeal || recipe.strDrink}
      </h1>

      <h3
        data-testid="recipe-category"
      >
        {recipe.strAlcoholic}
      </h3>

      { !copiedLink ? (
        <button
          type="button"
          data-testid="share-btn"
          onClick={ copyText }
        >
          <img src={ shareIcon } alt="share button" />
        </button>
      ) : <p>Link copied!</p>}

      <FavoriteRecipes
        recipeDetails={ recipeDetails }
        url={ url[1] }
      />

      <h3 data-testid="recipe-category">
        {recipe.strCategory}
      </h3>
      <ol>
        {
          filterIngredients.map((ingredient, index) => (
            <li
              key={ `${index}${ingredient}` }
              data-testid={ `${index}-ingredient-step` }
            >
              <label
                htmlFor={ `${ingredient} - ${index}` }
                className={ checkedState[index] ? 'marcado' : 'desmarcado' }
              >
                <input
                  id={ `${ingredient} - ${index}` }
                  type="checkbox"
                  value={ ingredient }
                  checked={ checkedState[index] }
                  onChange={ () => handleOnChange(index) }
                />
                { `${ingredient} - ${filterMeasures[index]}` }
                {/* {
                  checkedState[index]
                    ? `${ingredient} - 0`
                    : `${ingredient} - ${filterMeasures[index]}`
                } */}
              </label>
            </li>
          ))
        }
      </ol>
      <span data-testid="instructions">
        {recipe.strInstructions}
      </span>
      <button
        className="start-recipe-btn"
        type="button"
        data-testid="finish-recipe-btn"
      >
        Finish Recipe
      </button>
    </div>
  ));
}

InProgress.propTypes = {}.isRequired;

export default InProgress;
