import axios from 'axios'
import useSWR from 'swr'

const fetcher = url => axios.get(url).then(res => res.data);

export const getUsers = () => async (dispatch) => {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log("DATA 2: ");
    dispatch({ type: "GET_USERS", payload: data });
}