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
interface State {
    data: DATA[];
}
const INITIAL_STATE: State = {
    data: []
}

type Actions = {
    type: "GET_USERS",
    payload: DATA[]
}

export default (state = INITIAL_STATE, action: Actions) => {

    switch (action.type) {
        case "GET_USERS":
            console.log("REDUCER: ", action.payload);
            return { ...state, data: action.payload };
        default:
            return state;

    }
}