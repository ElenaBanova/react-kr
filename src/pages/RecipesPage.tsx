import RecipesList from "../components/recipes/recipes-list/recipes-list/RecipesList.tsx";


const RecipesPage = () => {

    return (
        <div>
            <h1 className='recipes-list-name'>The page of all recipes.</h1>
            <h3>Clicking on the tag of interest will take you to a page with recipes filtered by the selected
                value.</h3>
            <h3>Also by selecting a recipe you will go to its detailed description.</h3>
            <RecipesList/>
        </div>
    );
};

export default RecipesPage;