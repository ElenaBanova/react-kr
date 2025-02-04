import {useParams} from "react-router";
import {useAppSelector} from "../../../../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../../../../redux/hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {recipeSliceActions} from "../../../../redux/slices/recipeSlice.ts";
import {userSliceActions} from "../../../../redux/slices/userSlice.ts";


const UseRecipeInfo = () => {
    const {recipeId} = useParams();
    const {userId} = useAppSelector(({userStoreSlice}) => userStoreSlice);
    const {recipe} = useAppSelector(({recipeStoreSlice}) => recipeStoreSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (recipeId) {
            dispatch(recipeSliceActions.loadRecipe(recipeId));
            dispatch(userSliceActions.loadUserId(recipeId));
        }

    }, [recipeId])

    return {userId, recipe}
};

export default UseRecipeInfo;