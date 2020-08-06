import axios from 'axios'
import { Dispatch } from 'redux';
import { FACES_KEY } from '../../keys';

const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/"
});

export const endPoints = {
    users: "users/",
    todos: "todos/",
    posts: "posts/",
    comments: "comments/"
};

export enum types {
    GET_USERS = "GET_USERS",
    GET_TODOS = "GET_TODOS",
    GET_POST = "GET_POST",
    GET_COMMENT = "GET_COMMENT",
    GET_FACES = "GET_FACES"
}

export const getMethod = (url: string, type: string) => async (dispatch: Dispatch) => {
    try {
        const { data } = await instance.get(url);
        dispatch({ type, payload: data });
    } catch (error) {
        throw new Error(error);
    }
}

export const getFaces = () => async (dispatch: Dispatch) => {
    try {
        const { data } = await axios.get("https://uifaces.co/api", {
            headers: {
                "X-API-KEY": FACES_KEY,
                'Accept': 'application/json',
                'Cache-Control': 'no-cache'
            }
        });
        dispatch({ type: types.GET_FACES, payload: data });
    } catch (error) {
        throw new Error(error);
    }
}
