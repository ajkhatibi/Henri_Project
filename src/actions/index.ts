import axios from 'axios'
import { Dispatch } from 'redux';

export enum types {
    GET_USERS = "GET_USERS",
    GET_TODOS = "GET_TODOS"
}

export const getUsers = () => async (dispatch: Dispatch) => {
    try {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
        // const resp = await axios.get("https://uifaces.co/api", {
        //     headers: {
        //         "X-API-KEY": FACES_KEY,
        //         'Accept': 'application/json',
        //         'Cache-Control': 'no-cache'
        //     }
        // })
        dispatch({ type: types.GET_USERS, payload: data });
    } catch (error) {
        console.log("ERROR, ", error.response)
    }
}

export const getTodos = () => async (dispatch: Dispatch) => {
    try {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/todos/");
        const newArray = data.slice(0, 10);
        dispatch({ type: types.GET_TODOS, payload: newArray });
    } catch (error) {
        throw new Error(error)
    }
}