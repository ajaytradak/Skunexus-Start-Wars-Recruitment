import { SET_RESIDENTS, CLEAR_RESIDENTS } from "./action";

const init = {
    list: [],
};

export const ResidentsReducer = (state = init, action) => {
    switch (action.type) {
        case SET_RESIDENTS: {

            const list = [{...action.payload}];

            return {
                ...state,
                list: [...state.list, ...list]
            };
        }

        case CLEAR_RESIDENTS: {
            return {
                ...state,
                list: []
            };
        }

        default:
            return state;
    }
};
