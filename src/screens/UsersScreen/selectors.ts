import { createSelector } from 'reselect'

export const getAdjustedDataArray = createSelector(
    state => state.users.data,
    state => state.users.faces,
    (data, faces) => {

        if (faces.length > 0) {
            for (let i = 0; i < data.length; i++) {
                data[i]["photo"] = faces[i].photo

            }
            return data;
        }
        return data;
    }
)