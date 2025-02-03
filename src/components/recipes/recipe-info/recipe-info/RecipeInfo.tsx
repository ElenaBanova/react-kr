import UseRecipeInfo from "./useRecipeInfo.ts";
import {generatePath, Link} from "react-router";
import {AppRoutes} from "../../../../routes/constans.ts";
import '../recipe-info-css/recipeInfo.css';


const RecipeInfo = () => {
    const {userId, recipe} = UseRecipeInfo();
    return (
        <div>
            {recipe && <div className={'recipe-info-list'}>
                <h1>{recipe.name}</h1>
                <div className='tag'>Tags:{recipe.tags.map(((tag, index) => <div key={index}>{tag}/</div>))}</div>
                <div>Ingredients: {recipe.ingredients.map(((ingredient, index) => <div
                    key={index}>{index + 1}. {ingredient}</div>))}</div>
                <div>Instructions: {recipe.instructions.map(((action, index) => <div
                    key={index}>{action}</div>))}</div>
                <div className='meal'>Prep time: {recipe.prepTimeMinutes}min. Cook time: {recipe.cookTimeMinutes}min.
                    Meal
                    type: {recipe.mealType.map(((type, index) => <div key={index}>{type}</div>))}</div>
                <div>Servings: {recipe.servings}. Calories per serving: {recipe.caloriesPerServing}.
                    Cuisine {recipe.cuisine}</div>
                {userId && <div>Автор: <Link to={generatePath(AppRoutes.userId, {userId: userId.id})}
                                             relative="route">{userId.firstName} {userId.lastName}</Link></div>}
            </div>}
        </div>
    );
};

export default RecipeInfo;