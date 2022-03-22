import { SET_PLANET_DETAILS, CLEAR_PLANET_DETAILS } from "./action";

const init = {
    data: {},
};

export const PlanetsDetailsReducer = (state = init, action) => {
    switch (action.type) {
        case SET_PLANET_DETAILS: {
            return {
                ...state,
                data: {...action.payload}
            };
        }

        case CLEAR_PLANET_DETAILS: {
            return {
                ...state,
                data: {}
            };
        }

        default:
            return state;
    }
};
