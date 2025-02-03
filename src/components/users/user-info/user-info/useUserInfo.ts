import {useParams} from "react-router";
import {useAppSelector} from "../../../../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../../../../redux/hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {userSliceActions} from "../../../../redux/slices/userSlice.ts";
import {recipeSliceActions} from "../../../../redux/slices/recipeSlice.ts";


const UseUserInfo = () => {
    const {userId} = useParams();
    const {user} = useAppSelector(({userStoreSlice}) => userStoreSlice);
    const {recipesId} = useAppSelector(({recipeStoreSlice}) => recipeStoreSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (userId) {
            dispatch(userSliceActions.loadUser(userId));
            dispatch(recipeSliceActions.loadRecipesId(userId));
        }
    }, [userId]);

    return {user, recipesId}
};

export default UseUserInfo;