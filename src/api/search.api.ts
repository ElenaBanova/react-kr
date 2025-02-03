import {IRecipe} from "../models/IRecipe.ts";
import {axiosInstance} from "./api.ts";
import {IRecipesResponse} from "../models/IRecipesResponse.ts";


export const loading = async (x: string): Promise<IRecipe[]> => {
    const {data: {recipes}} = await axiosInstance.get<IRecipesResponse>('/recipes/search?q=' + x);
    return recipes;
};
