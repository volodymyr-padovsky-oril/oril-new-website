import { createAction } from 'redux-actions';

export const OPEN_SNACKBAR = 'OPEN_SNACKBAR';
export const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR';

export const openSnackbar = createAction(OPEN_SNACKBAR);
export const closeSnackbar = createAction(CLOSE_SNACKBAR);

