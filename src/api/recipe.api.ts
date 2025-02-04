import {IRecipe} from "../models/IRecipe.ts";
import {IRecipesResponse} from "../models/IRecipesResponse.ts";
import {axiosInstance, refresh} from "./api.ts";
import {IUser} from "../models/IUser.ts";

export const loadAuthRecipes = async (page: string): Promise<IRecipe[]> => {
    const limit = 12;
    const skip = limit * (+page) - limit;
    const {data: {recipes}} = await axiosInstance.get<IRecipesResponse>('/recipes' + '?limit=' + limit + '&skip=' + skip.toString())
        .catch(() => refresh().then(() => axiosInstance.get<IRecipesResponse>('/recipes' + '?' + limit + '&skip=' + skip.toString())));
    return recipes;
};

export const loadAuthRecipe = async (id: string): Promise<IRecipe> => {
    const {data} = await axiosInstance.get<IRecipe>('/recipes/' + id)
        .catch(() => refresh().then(() => axiosInstance.get<IRecipe>('/recipes/' + id)));
    return data;
};

export const loadRecipesIdUser = async (idUser: string): Promise<IRecipe[]> => {
    const {data: {id}} = await axiosInstance.get<IUser>('/users/' + idUser)
        .catch(() => refresh().then(() => axiosInstance.get<IUser>('/users/' + idUser)));
    const k = id;
    const {data: {recipes}} = await axiosInstance.get<IRecipesResponse>('/recipes');
    return recipes.filter((recipe) => {
        if (recipe.userId === k) return recipes;
    });
};

export const loadTagRecipes = async (tag: string): Promise<IRecipe[]> => {
    const {data: {recipes}} = await axiosInstance.get<IRecipesResponse>('/recipes/tag/' + tag)
        .catch(() => refresh().then(() => axiosInstance.get<IRecipesResponse>('/recipes/tag/' + tag)));
    return recipes;
};