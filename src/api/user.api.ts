import {IUser} from "../models/IUser.ts";
import {IUsersResponse} from "../models/IUsersResponse.ts";
import {axiosInstance} from "./api.ts";

export const loadAuthUsers = async (): Promise<IUser[]> => {
    const {data: {users}} = await axiosInstance.get<IUsersResponse>('/users');
    return users;
};

export const loadAuthUser = async (id: string): Promise<IUser> => {
    const {data} = await axiosInstance.get('/users/' + id);
    return data;
};

export const loadUserIdRecipe = async (id: string): Promise<IUser> => {
    const {data: {userId}} = await axiosInstance.get('/recipes/' + id);
    const k = userId.toString();
    const {data} = await axiosInstance.get('/users/' + k);
    return data;
};