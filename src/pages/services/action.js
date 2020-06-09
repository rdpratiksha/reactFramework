import * as types from "./types";

/**
 *
 * Store/Reset/Remove data dynamically based on .
 * @param {Object} data - API response on success/loading
 * @param {String} type - type for sucess/error/loading
 */

export const dataLoading = (
  payload = {},
  type = types.DATA_LOADING
) => {
  return {
    type,
    payload
  };
};

export const dataSuccess = (
  payload = {},
  type = types.DATA_SUCCESS
) => {
  return {
    type,
    payload
  };
};
