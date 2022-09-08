export const UPDATE_PAY = "UPDATE_PAY";
export const UPDATE_ADDRESS = "UPDATE_ADDRESS";
export const ACTION_ERROR = "ACTION_ERROR";
export const TEST = "TEST";

const actionError = (text) => {
  return { type: ACTION_ERROR, msj: text };
};

export const updatePayAction = (payload) => {
  //TODO: validar payload. retornar action o un msj de error
  return {
    type: UPDATE_PAY,
    payload,
  };
};

export const testDispatchAction = (text) => {
  return { type: TEST, payload: text };
};
