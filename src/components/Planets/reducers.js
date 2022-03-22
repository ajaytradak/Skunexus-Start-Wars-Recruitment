import { SET_PLANETS } from "./action";

const init = {
    next: "",
    list: [],
};

export const PlanetsReducer = (state = init, action) => {
    switch (action.type) {
        case SET_PLANETS: {

            const list = [...action.payload.results.map(planet => {
                const data = {...planet};
                data.residentsList = data.residents;
                data.filmsList = data.films;
                data.residents = data.residentsList.length;
                data.films = data.filmsList.length;

                return data;
            })];

            return {
                ...state,
                next: action.payload.next || null,
                list: [...list]
            };
        }

        default:
            return state;
    }
};
