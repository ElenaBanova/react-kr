import {useAppSelector} from "../../../../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../../../../redux/hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {recipeSliceActions} from "../../../../redux/slices/recipeSlice.ts";
import {useSearchParams} from "react-router";


const UseRecipesList = () => {
    const [searchParams] = useSearchParams({page: '1'});
    const {recipes} = useAppSelector(({recipeStoreSlice}) => recipeStoreSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const currentPage = searchParams.get('page') || '1';
        dispatch(recipeSliceActions.loadRecipes(currentPage));

    }, [searchParams])

    return recipes
};

export default UseRecipesList;