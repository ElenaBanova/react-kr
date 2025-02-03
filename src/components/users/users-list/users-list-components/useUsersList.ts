import {useAppSelector} from "../../../../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../../../../redux/hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {userSliceActions} from "../../../../redux/slices/userSlice.ts";


const UseUsersList = () => {
    const {users} = useAppSelector(({userStoreSlice}) => userStoreSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userSliceActions.loadUsers());
    }, [])

    return users
};

export default UseUsersList;