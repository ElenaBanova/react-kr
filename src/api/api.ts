import axios from "axios";
import {IUserWithTokens} from "../models/IUserWithTokens.ts";
import {retrieveLocalStorage} from "./helpers.ts";
import {ITokenPair} from "../models/ITokenPair.ts";


type LoginData = {
    username: string,
    password: string,
    expiresInMins: number,
};

export const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {},
});

axiosInstance.interceptors.request.use((reqObj) => {
    if (reqObj.method?.toUpperCase() === 'GET') {
        reqObj.headers.Authorization = 'Bearer ' + retrieveLocalStorage<IUserWithTokens>('user').accessToken
    }
    return reqObj
});

export const login = async ({username, password, expiresInMins}: LoginData): Promise<IUserWithTokens> => {
    const {data: userWithTokens} = await axiosInstance.post<IUserWithTokens>('/login', {
        username,
        password,
        expiresInMins,
    });
    console.log(userWithTokens);
    localStorage.setItem('user', JSON.stringify(userWithTokens));
    return userWithTokens;
};


export const refresh = async () => {
    const iUserWithTokens = retrieveLocalStorage<IUserWithTokens>('user');
    const {data: {accessToken, refreshToken}} = await axiosInstance.post<ITokenPair>('/refresh',
        {
            refreshToken: iUserWithTokens.refreshToken,
            expiresInMin: 30,
        })
    iUserWithTokens.accessToken = accessToken;
    iUserWithTokens.refreshToken = refreshToken;
    localStorage.setItem('user', JSON.stringify(iUserWithTokens))
}