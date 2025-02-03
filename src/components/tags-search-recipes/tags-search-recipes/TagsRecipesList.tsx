import TagsSearchRecipes from "./TagsSearchRecipes.tsx";


const TagsRecipesList = () => {
    const recipesTag = TagsSearchRecipes();
    return (
        <div>
            {recipesTag && <TagsSearchRecipes/>};
        </div>
    );
};

export default TagsRecipesList;