import axios from "axios";

export const FETCH_UNITS_REQUEST = "FETCH_UNITS_REQUEST";
export const FETCH_UNITS_SUCCESS = "FETCH_UNITS_SUCCESS";
export const FETCH_UNITS_FAILURE = "FETCH_UNITS_FAILURE";
export const POST_UNIT_REQUEST = "POST_UNIT_REQUEST";
export const POST_UNIT_SUCCESS = "POST_UNIT_SUCCESS";
export const POST_UNIT_FAILURE = "POST_UNIT_FAILURE";
export const PATCH_UNIT_REQUEST = "PATCH_UNIT_REQUEST";
export const PATCH_UNIT_SUCCESS = "PATCH_UNIT_SUCCESS";
export const PATCH_UNIT_FAILURE = "PATCH_UNIT_FAILURE";
export const DELETE_UNIT_REQUEST = "DELETE_UNIT_REQUEST"; 
export const DELETE_UNIT_SUCCESS = "DELETE_UNIT_SUCCESS"; 
export const DELETE_UNIT_FAILURE = "DELETE_UNIT_FAILURE"; 
export const FETCH_UNIT_REQUEST = "FETCH_UNIT_REQUEST";
export const FETCH_UNIT_SUCCESS = "FETCH_UNIT_SUCCESS";
export const FETCH_UNIT_FAILURE = "FETCH_UNIT_FAILURE";

// Fetch Units
export const fetchUnitsRequest = () => ({
  type: FETCH_UNITS_REQUEST,
});

export const fetchUnitsSuccess = (units) => ({
  type: FETCH_UNITS_SUCCESS,
  payload: units,
});

export const fetchUnitsFailure = (error) => ({
  type: FETCH_UNITS_FAILURE,
  payload: error,
});

export const fetchUnits = () => {
  return (dispatch) => {
    dispatch(fetchUnitsRequest());
    axios
      .get("https://knowledgehub.demopolyct.online/api/unit")
      .then((response) => {
        const units = response.data.data;
        dispatch(fetchUnitsSuccess(units));
      })
      .catch((error) => {
        const errorMsg = error.response?.data?.message || error.message;
        dispatch(fetchUnitsFailure(errorMsg));
      });
  };
};

// Post Unit
export const postUnitRequest = () => ({
  type: POST_UNIT_REQUEST,
});

export const postUnitSuccess = (unit) => ({
  type: POST_UNIT_SUCCESS,
  payload: unit,
});

export const postUnitFailure = (error) => ({
  type: POST_UNIT_FAILURE,
  payload: error,
});

export const postUnit = (unit) => {
  return (dispatch) => {
    dispatch(postUnitRequest());
    axios
      .post("https://knowledgehub.demopolyct.online/api/unit", unit)
      .then((response) => {
        const newUnit = response.data.data;
        console.log("New unit created:", newUnit);
        dispatch(postUnitSuccess(newUnit));
        dispatch(fetchUnits());
      })
      .catch((error) => {
        const errorMsg = error.response?.data?.message || error.message;
        console.error("Error posting unit:", errorMsg);
        dispatch(postUnitFailure(errorMsg));
      });
  };
};

// Patch Unit
export const patchUnitRequest = () => ({
  type: PATCH_UNIT_REQUEST,
});

export const patchUnitSuccess = (unit) => ({
  type: PATCH_UNIT_SUCCESS,
  payload: unit,
});

export const patchUnitFailure = (error) => ({
  type: PATCH_UNIT_FAILURE,
  payload: error,
});

export const patchUnit = (id, unit) => {
  return (dispatch) => {
    dispatch(patchUnitRequest());
    axios
      .patch(`https://knowledgehub.demopolyct.online/api/unit/${id}`, unit)
      .then((response) => {
        const updatedUnit = response.data.data;
        console.log("Unit updated:", updatedUnit);
        dispatch(patchUnitSuccess(updatedUnit));
        dispatch(fetchUnits());
      })
      .catch((error) => {
        const errorMsg = error.response?.data?.message || error.message;
        console.error("Error updating unit:", errorMsg);
        dispatch(patchUnitFailure(errorMsg));
      });
  };
};

// Delete Unit
export const deleteUnitRequest = () => ({
  type: DELETE_UNIT_REQUEST,
});

export const deleteUnitSuccess = (id) => ({
  type: DELETE_UNIT_SUCCESS,
  payload: id,
});

export const deleteUnitFailure = (error) => ({
  type: DELETE_UNIT_FAILURE,
  payload: error,
});

export const deleteUnit = (id) => {
  return (dispatch) => {
    dispatch(deleteUnitRequest());
    axios
      .delete(`https://knowledgehub.demopolyct.online/api/unit/${id}`)
      .then(() => {
        console.log("Unit deleted:", id);
        dispatch(deleteUnitSuccess(id));
        dispatch(fetchUnits());
      })
      .catch((error) => {
        const errorMsg = error.response?.data?.message || error.message;
        console.error("Error deleting unit:", errorMsg);
        dispatch(deleteUnitFailure(errorMsg));
      });
  };
};

// Fetch Single Unit
export const fetchUnitRequest = () => ({
  type: FETCH_UNIT_REQUEST,
});

export const fetchUnitSuccess = (unit) => ({
  type: FETCH_UNIT_SUCCESS,
  payload: unit,
});

export const fetchUnitFailure = (error) => ({
  type: FETCH_UNIT_FAILURE,
  payload: error,
});

export const fetchUnit = (id) => {
  return (dispatch) => {
    dispatch(fetchUnitRequest());
    axios
      .get(`https://knowledgehub.demopolyct.online/api/unit/${id}`)
      .then((response) => {
        const unit = response.data.data;
        dispatch(fetchUnitSuccess(unit));
      })
      .catch((error) => {
        const errorMsg = error.response?.data?.message || error.message;
        console.error("Error fetching unit:", errorMsg);
        dispatch(fetchUnitFailure(errorMsg));
      });
  };
};
