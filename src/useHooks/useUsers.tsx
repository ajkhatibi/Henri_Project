import axios from 'axios'
import useSWR from 'swr'

const fetcher = url => axios.get(url).then(res => res.data);

export default function useUser() {
    const { data } = useSWR(`https://jsonplaceholder.typicode.com/users`, fetcher);

    return {
        user: data,
    }
}