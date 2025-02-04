import {IUser} from "../../models/IUser.ts";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {loadAuthUser, loadAuthUsers, loadUserIdRecipe} from "../../api/user.api.ts";


type UserSliceType = {
    users: IUser[];
    user: IUser | null;
    userId: IUser | null;
};

const loadUsers = createAsyncThunk('userSlice/loadUsers',
    async (page: string, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await loadAuthUsers(page));
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('error loading user components');
        }
    });

const loadUser = createAsyncThunk('userSlice/loadUser',
    async (id: string, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await loadAuthUser(id));
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('error loading user component');
        }
    });

const loadUserId = createAsyncThunk('userSlice/loadUserId',
    async (id: string, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await loadUserIdRecipe(id));
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('error loading user component');
        }
    });

const initUserSliceState: UserSliceType = {users: [], user: null, userId: null};
export const userSlice = createSlice({
    name: 'userSlice',
    initialState: initUserSliceState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(loadUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
                state.users = action.payload;
            })
            .addCase(loadUsers.rejected, (state, action) => {
                console.log(state);
                console.log(action);
            })
            .addCase(loadUser.fulfilled, (state, action: PayloadAction<IUser>) => {
                state.user = action.payload;
            })
            .addCase(loadUser.rejected, (state, action) => {
                console.log(state);
                console.log(action);
            })
            .addCase(loadUserId.fulfilled, (state, action: PayloadAction<IUser>) => {
                state.userId = action.payload;
            })
            .addCase(loadUserId.rejected, (state, action) => {
                console.log(state);
                console.log(action);
            })

});

export const userSliceActions = {
    ...userSlice.actions, loadUsers, loadUser, loadUserId,
};

