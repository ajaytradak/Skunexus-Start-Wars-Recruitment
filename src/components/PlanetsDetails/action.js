export const SET_PLANET_DETAILS = "set-planet-details";
export const CLEAR_PLANET_DETAILS = "clear-planet-details";

export const setPlanetDetails = payload => ({
    type: SET_PLANET_DETAILS,
    payload
});

export const clearPlanetDetails = payload => ({
    type: CLEAR_PLANET_DETAILS
});