import {
  START_FETCH,
  SERVER_ERROR,
  CLEAR_ERROR,
  RESET_STATE
} from "../action_types";

/**
 * Start Fetch operation.
 * Shows fetch operation has began
 * Changes state of fetching to true.
 *
 * @return (object) type
 */
export const startFetch = () => ({
  type: START_FETCH
});

/**
 * Clear errors
 * Clears error messages
 *
 * @return (object) type
 */
export const clearError = () => ({
  type: CLEAR_ERROR
});

/**
 * Server error
 * Used to show a simple message to replace server errors
 * that should not be displayed to the user
 *
 * @param (object) error
 * @return (object) type payload
 */
export const serverError = () => ({
  type: SERVER_ERROR,
  error: "Oops something went wrong"
});

export const clearState = () => ({
  type: RESET_STATE
});
