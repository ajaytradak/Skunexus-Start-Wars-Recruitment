import { combineReducers } from "redux";

import { PlanetsReducer } from "../components/Planets/reducers"
import { FilmsReducer } from "../components/Films/reducers";
import { ResidentsReducer } from "../components/Residents/reducers";
import { PlanetsDetailsReducer } from "../components/PlanetsDetails/reducers";

export const combinedReducers = combineReducers({
    planets: PlanetsReducer,
    films: FilmsReducer,
    residents: ResidentsReducer,
    planetsDetails: PlanetsDetailsReducer
});
