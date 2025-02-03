import {useParams} from "react-router";
import {useAppSelector} from "../../../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {recipeSliceActions} from "../../../redux/slices/recipeSlice.ts";


const UseTagsSearchRecipes = () => {
    const {tagFind} = useParams();
    const {recipesTag} = useAppSelector(({recipeStoreSlice}) => recipeStoreSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (tagFind) dispatch(recipeSliceActions.loadRecipesTag(tagFind));
    }, [tagFind]);

    return recipesTag;
};

export default UseTagsSearchRecipes;