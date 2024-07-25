import {
    FETCH_UNITS_REQUEST,
    FETCH_UNITS_SUCCESS,
    FETCH_UNITS_FAILURE,
    POST_UNIT_REQUEST,
    POST_UNIT_SUCCESS,
    POST_UNIT_FAILURE,
    PATCH_UNIT_REQUEST,
    PATCH_UNIT_SUCCESS,
    PATCH_UNIT_FAILURE,
    DELETE_UNIT_REQUEST,
    DELETE_UNIT_SUCCESS,
    DELETE_UNIT_FAILURE,
  } from "../actions/unitActions";
  
  const initialState = {
    loading: false,
    units: [],
    error: "",
  };
  
  const unitReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_UNITS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_UNITS_SUCCESS:
        return {
          loading: false,
          units: action.payload,
          error: "",
        };
      case FETCH_UNITS_FAILURE:
        return {
          loading: false,
          units: [],
          error: action.payload,
        };
      case POST_UNIT_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case POST_UNIT_SUCCESS:
        return {
          ...state,
          loading: false,
          units: [...state.units, action.payload],
          error: "",
        };
      case POST_UNIT_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case PATCH_UNIT_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case PATCH_UNIT_SUCCESS:
        return {
          ...state,
          loading: false,
          units: state.units.map((unit) =>
            unit.id === action.payload.id ? action.payload : unit
          ),
          error: "",
        };
      case PATCH_UNIT_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case DELETE_UNIT_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case DELETE_UNIT_SUCCESS:
        return {
          ...state,
          loading: false,
          units: state.units.filter((unit) => unit.id !== action.payload),
          error: "",
        };
      case DELETE_UNIT_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default unitReducer;
  