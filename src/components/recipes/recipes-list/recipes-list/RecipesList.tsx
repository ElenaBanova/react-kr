import {generatePath, Link} from "react-router";
import {AppRoutes} from "../../../../routes/constans.ts";
import UseRecipesList from "./useRecipesList.ts";
import '../recipes-list-css/resipesList.css';


const RecipesList = () => {
    const recipes = UseRecipesList();

    return (
        <div className='recipes-list'>
            {recipes.map((recipe) => <div className='recipe' key={recipe.id}>
                <div key={recipe.id}>
                    <Link className='recipes-list-link'
                          key={recipe.id}
                          to={generatePath(AppRoutes.recipeId, {recipeId: recipe.id})}
                          relative="route">
                        {recipe.name}
                    </Link></div>
                <div className='recipe-tags'>Tags:{recipe.tags.map(((tag, index) => <div key={index}>
                    <Link className='recipes-link' to={generatePath(AppRoutes.recipeTag, {tagFind: tag})}
                          relative="route">{tag}</Link>/</div>))}</div>
            </div>)}
        </div>
    );
};

export default RecipesList;