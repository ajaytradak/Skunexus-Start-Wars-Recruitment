export const SET_RESIDENTS = "set-residents";
export const CLEAR_RESIDENTS = "clear-residents";

export const setResidents = payload => ({
    type: SET_RESIDENTS,
    payload
});

export const clearResidents = payload => ({
    type: CLEAR_RESIDENTS
});