import axios from "axios";

import {
  ADD_COMPETITION,
  GET_ERRORS,
  CLEAR_ERRORS,
  GET_COMPETITIONS,
  GET_COMPETITION,
  COMP_LOADING
} from "./types";

// Add comp
export const addCompetition = compData => dispatch => {
  axios
    .comp("/api/competitions", compData)
    .then(res =>
      dispatch({
        type: ADD_COMPETITION,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Get Competitions
export const getCompetitions = () => dispatch => {
  dispatch(setCompetitionLoading());
  axios
    .get("/api/competitions")
    .then(res =>
      dispatch({
        type: GET_COMPETITIONS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_COMPETITIONS,
        payload: null
      })
    );
};

// Get Comp
export const getCompetition = id => dispatch => {
  dispatch(setCompetitionLoading());
  axios
    .get(`/api/competitions/${id}`)
    .then(res =>
      dispatch({
        type: GET_COMPETITION,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_COMPETITION,
        payload: null
      })
    );
};

// Get Competitions by userId
export const getUserCompetitions = author => dispatch => {
  dispatch(setCompetitionLoading());
  axios
    .get(`/api/competitions/competitions/${author}`)
    .then(res =>
      dispatch({
        type: GET_COMPETITIONS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_COMPETITIONS,
        payload: null
      })
    );
};


// Set loading state
export const setCompetitionLoading = () => {
  return {
    type: COMP_LOADING
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};