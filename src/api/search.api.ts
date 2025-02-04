import {axiosInstance, refresh} from "./api.ts";


export const searchRecipe = async (x: string) => {
    const {data: {recipes}} = await axiosInstance.get('recipes/search?q=' + x)
        .catch(() => refresh().then(() => axiosInstance.get('recipes/search?q=' + x)));
    const {data: {users}} = await axiosInstance.get('/users/search?q=' + x)
        .catch(() => refresh().then(() => axiosInstance.get('users/search?q=' + x)));
   console.log(recipes)
    console.log(users)
    return {recipes, users}
};
