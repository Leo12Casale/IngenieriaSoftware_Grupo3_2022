import { cityType, deliveryMethodType, payMethodType } from "../types";

export const UPDATE_PAY = "UPDATE_PAY";
export const UPDATE_ADDRESS = "UPDATE_ADDRESS";
export const ACTION_ERROR = "ACTION_ERROR";
export const EMPTY_CART = "EMPTY_CART";
export const LOAD_CART = "LOAD_CART";
export const TEST = "TEST";

const actionError = (text) => {
  return { type: ACTION_ERROR, msg: text };
};

export const emptyCartAction = () => {
  return { type: EMPTY_CART };
};

export const loadCartAction = () => {
  return { type: LOAD_CART };
};

export const updatePayAction = (payload, total) => {
  //TODO: validar payload. retornar action o un msj de error
  if (
    payload.payMethod === undefined &&
    payload.payMethod !== payMethodType.cash &&
    payload.payMethod !== payMethodType.card
  )
    return actionError("El tipo de pago seleccionado no es correcto");

  if (
    payload.payMethod === payMethodType.cash &&
    (payload.amount === undefined || isNaN(payload.amount))
  )
    return actionError("Debe ingresar un monto");
  if (payload.amount < total)
    return actionError(
      "El monto ingresado debe ser superior al total de la compra"
    );

  let cc =
    /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|62[0-9]{14})$/;

  let cvc = /^[0-9]+$/;
  if (payload.payMethod === payMethodType.card) {
    if (payload.cardNumber === undefined || !cc.test(payload.cardNumber))
      return actionError("Tarjeta inválida");

    if (payload.cardOwner === "")
      return actionError(
        "Debe ingresar el nombre del titular que figura en la tarjeta."
      );

    if (!cvc.test(payload.cvc) || String(payload.cvc).length !== 3)
      return actionError("Código de seguridad incorrecto");

    if (
      payload.expirationDate === undefined ||
      payload.expirationDate.month === undefined ||
      payload.expirationDate.year === undefined
    )
      return actionError("Debe indicar la fecha de vencimiento");

    const month = new Date().getMonth();
    const year = new Date().getFullYear();

    if (
      payload.expirationDate.year < year ||
      (payload.expirationDate.month < month &&
        payload.expirationDate.year === year)
    )
      return actionError("Debe ingresar una fecha de vencimiento válida");
  }
  return {
    type: UPDATE_PAY,
    payload,
  };
};

export const updateAddress = (payload) => {
  if (
    payload.city !== cityType.cordoba &&
    payload.city !== cityType.sanFrancisco &&
    payload.city !== cityType.villaGeneralBelgrano
  ) {
    return actionError("Debe seleccionar una ciudad.");
  }

  if (payload.street === "") {
    return actionError("Debe ingresar una dirección válida.");
  }

  if (isNaN(payload.number) || payload.number > 10000 || payload.number <= 0) {
    return actionError("Debe ingresar una altura válida.");
  }

  if (
    payload.deliveryMethod !== deliveryMethodType.asSoonAsPossible &&
    payload.deliveryMethod !== deliveryMethodType.programmed
  ) {
    return actionError("Debe seleccionar un método de entrega.");
  }
  if (
    payload.deliveryMethod === deliveryMethodType.programmed &&
    (payload.deliveryDate === "" || payload.deliveryHour === "")
  ) {
    return actionError("Debe ingresar una fecha de entrega");
  } else {
    const date = new Date();
    const datePload = new Date(
      payload.deliveryDate + " " + payload.deliveryHour
    );
    if (datePload < date) {
      return actionError("Debe ingresar una fecha de entrega válida.");
    }
  }
  return { type: UPDATE_ADDRESS, payload };
};

export const testDispatchAction = (text) => {
  return { type: TEST, payload: text };
};
