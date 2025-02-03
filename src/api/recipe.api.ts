import {IRecipe} from "../models/IRecipe.ts";
import {IRecipesResponse} from "../models/IRecipesResponse.ts";
import {axiosInstance} from "./api.ts";

export const loadAuthRecipes = async (): Promise<IRecipe[]> => {
    const {data: {recipes}} = await axiosInstance.get<IRecipesResponse>('/recipes');
    return recipes;
};

export const loadAuthRecipe = async (id: string): Promise<IRecipe> => {
    const {data} = await axiosInstance.get('/recipes/' + id);
    return data;
};

export const loadRecipesIdUser = async (idUser: string): Promise<IRecipe[]> => {
    const {data: {id}} = await axiosInstance.get('/users/' + idUser);
    const k = id;
    const {data: {recipes}} = await axiosInstance.get<IRecipesResponse>('/recipes');
    return recipes.filter((recipe) => {
        if (recipe.userId === k) return recipes;
    });
};

export const loadTagRecipes = async (tag: string): Promise<IRecipe[]> => {
    const {data: {recipes}} = await axiosInstance.get<IRecipesResponse>('/recipes/tag/' + tag);
    return recipes;
};