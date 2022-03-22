import { SET_FILMS, CLEAR_FILMS } from "./action";

const init = {
    list: [],
};

export const FilmsReducer = (state = init, action) => {
    switch (action.type) {
        case SET_FILMS: {

            const list = [{...action.payload}];

            return {
                ...state,
                list: [...state.list, ...list]
            };
        }

        case CLEAR_FILMS: {
            return {
                ...state,
                list: []
            };
        }

        default:
            return state;
    }
};
