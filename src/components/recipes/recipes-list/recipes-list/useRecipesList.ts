import {useAppSelector} from "../../../../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../../../../redux/hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {recipeSliceActions} from "../../../../redux/slices/recipeSlice.ts";


const UseRecipesList = () => {
    const {recipes} = useAppSelector(({recipeStoreSlice}) => recipeStoreSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(recipeSliceActions.loadRecipes());
    }, [])

    return recipes
};

export default UseRecipesList;