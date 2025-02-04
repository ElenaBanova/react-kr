import {IUser} from "../models/IUser.ts";
import {IUsersResponse} from "../models/IUsersResponse.ts";
import {axiosInstance, refresh} from "./api.ts";
import {IRecipe} from "../models/IRecipe.ts";

export const loadAuthUsers = async (page: string): Promise<IUser[]> => {
    const limit = 12;
    const skip = limit * (+page) - limit;
    const {data: {users}} = await axiosInstance.get<IUsersResponse>('/users' + '?limit=' + limit + '&skip=' + skip.toString())
        .catch(() => refresh().then(() => axiosInstance.get<IUsersResponse>('/users' + '?limit=' + limit + '&skip=' + skip.toString())));
    return users
};

export const loadAuthUser = async (id: string): Promise<IUser> => {
    const {data} = await axiosInstance.get<IUser>('/users/' + id)
        .catch(() => refresh().then(() => axiosInstance.get<IUser>('/users/' + id)));
    return data;
};

export const loadUserIdRecipe = async (id: string): Promise<IUser> => {
    const {data: {userId}} = await axiosInstance.get<IRecipe>('/recipes/' + id)
        .catch(() => refresh().then(() => axiosInstance.get<IRecipe>('/recipes/' + id)));
    const k = userId.toString();
    const {data} = await axiosInstance.get('/users/' + k);
    return data;
};