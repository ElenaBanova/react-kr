import {axiosInstance} from "./api.ts";
import {IRecipesResponse} from "../models/IRecipesResponse.ts";


export const recipesList = async (page: string) => {
    const limit = 30;
    const skip = limit * (+page) - limit;
    const {data: {recipes}} = await axiosInstance.get<IRecipesResponse>('/recipes' + '?skip=' + skip.toString());
    return recipes
};
