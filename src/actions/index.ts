import axios from 'axios'
import useSWR from 'swr'

const fetcher = url => axios.get(url).then(res => res.data);

export const getUsers = () => async (dispatch) => {
    const { data } = useSWR(`https://jsonplaceholder.typicode.com/users`, fetcher);
    console.log("DATA 2: ", data);
    dispatch({ type: "GET_USERS", payload: data });
}