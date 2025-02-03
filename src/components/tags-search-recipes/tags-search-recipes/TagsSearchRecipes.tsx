import UseTagsSearchRecipes from "./useTagsSearchRecipes.ts";
import '../tags-search-recipes-css/tags-seatch-css.css';
import {generatePath, Link} from "react-router";
import {AppRoutes} from "../../../routes/constans.ts";


const TagsSearchRecipes = () => {
    const recipesTag = UseTagsSearchRecipes();
    return (
        <div>
            {recipesTag.map(recipe => <div className='recipes-tag-list' key={recipe.id}>
                <Link to={generatePath(AppRoutes.recipe, {recipeId: recipe.id})}
                      relative="route">{recipe.name} </Link> Tags: {recipe.tags.map(((tag, index) => <div
                key={index}><Link to={generatePath(AppRoutes.recipeTags, {tagFind: tag})}
                                  relative="route">{tag}</Link>/</div>))}</div>)}
        </div>
    )
}

export default TagsSearchRecipes;