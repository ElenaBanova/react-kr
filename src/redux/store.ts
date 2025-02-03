import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "./slices/userSlice.ts";
import {recipeSlice} from "./slices/recipeSlice.ts";


export const store = configureStore(
    {
        reducer: {
            userStoreSlice: userSlice.reducer,
            recipeStoreSlice: recipeSlice.reducer,
        }
    }
);

