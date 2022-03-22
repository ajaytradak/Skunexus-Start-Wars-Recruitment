export const SET_FILMS = "set-films";
export const CLEAR_FILMS = "clear-films";

export const setFilms = payload => ({
    type: SET_FILMS,
    payload
});

export const clearFilms = payload => ({
    type: CLEAR_FILMS
});