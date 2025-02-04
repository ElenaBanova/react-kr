import {IRecipe} from "../../models/IRecipe.ts";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {loadAuthRecipe, loadAuthRecipes, loadRecipesIdUser, loadTagRecipes} from "../../api/recipe.api.ts";


type RecipeSliceType = {
    recipes: IRecipe[];
    recipe: IRecipe | null;
    recipesId: IRecipe[] | [];
    recipesTag: IRecipe[] | [];
};

const loadRecipes = createAsyncThunk('recipeSlice/loadRecipes',
    async (page:string, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await loadAuthRecipes(page));
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('error loading recipes');
        }
    });

const loadRecipe = createAsyncThunk('recipeSlice/loadRecipe',
    async (id: string, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await loadAuthRecipe(id));
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('error loading recipes');
        }
    });

const loadRecipesId = createAsyncThunk('recipeSlice/loadRecipeId',
    async (id: string, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await loadRecipesIdUser(id));
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('error loading recipes');
        }
    });

const loadRecipesTag = createAsyncThunk('recipeSlice/loadRecipeTag',
    async (tag: string, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await loadTagRecipes(tag));
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('error loading recipes');
        }
    });


const initRecipeSliceState: RecipeSliceType = {recipes: [], recipe: null, recipesId: [], recipesTag: []};
export const recipeSlice = createSlice({
    name: 'recipeSlice',
    initialState: initRecipeSliceState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(loadRecipes.fulfilled, (state, action: PayloadAction<IRecipe[]>) => {
                state.recipes = action.payload;
            })
            .addCase(loadRecipes.rejected, (state, action) => {
                console.log(state);
                console.log(action);
            })
            .addCase(loadRecipe.fulfilled, (state, action: PayloadAction<IRecipe>) => {
                state.recipe = action.payload;
            })
            .addCase(loadRecipe.rejected, (state, action) => {
                console.log(state);
                console.log(action);
            })
            .addCase(loadRecipesId.fulfilled, (state, action: PayloadAction<IRecipe[]>) => {
                state.recipesId = action.payload;
            })
            .addCase(loadRecipesId.rejected, (state, action) => {
                console.log(state);
                console.log(action);
            })
            .addCase(loadRecipesTag.fulfilled, (state, action: PayloadAction<IRecipe[]>) => {
                state.recipesTag = action.payload;
            })
            .addCase(loadRecipesTag.rejected, (state, action) => {
                console.log(state);
                console.log(action);
            })
});

export const recipeSliceActions = {
    ...recipeSlice.actions, loadRecipes, loadRecipe, loadRecipesId, loadRecipesTag,
};