import {useAppSelector} from "../../../../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../../../../redux/hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {userSliceActions} from "../../../../redux/slices/userSlice.ts";
import {useSearchParams} from "react-router";


const UseUsersList = () => {
    const [searchParams] = useSearchParams({page: '1'});
    const {users} = useAppSelector(({userStoreSlice}) => userStoreSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const currentPage = searchParams.get('page') || '1';
        dispatch(userSliceActions.loadUsers(currentPage));

    }, [searchParams])


    return users
};

export default UseUsersList;