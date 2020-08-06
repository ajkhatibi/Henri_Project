import { types } from '../actions/index';

export interface DATA {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: number;
        geo: {
            lat: number;
            lng: number;
        }
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    }
}

interface TODOS {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

interface State {
    data: DATA[];
    todos: TODOS[];
}
const INITIAL_STATE: State = {
    data: [],
    todos: []
}

type Actions = {
    type: types.GET_USERS,
    payload: DATA[]
} | { type: types.GET_TODOS, payload: TODOS[] }

export default (state = INITIAL_STATE, action: Actions) => {

    switch (action.type) {
        case types.GET_USERS:
            return { ...state, data: action.payload };
        case types.GET_TODOS:
            return { ...state, todos: action.payload };
        default:
            return state;

    }
}