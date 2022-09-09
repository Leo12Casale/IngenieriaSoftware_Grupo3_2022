import { cityType, deliveryMethodType, payMethodType } from "../types";

export const UPDATE_PAY = "UPDATE_PAY";
export const UPDATE_ADDRESS = "UPDATE_ADDRESS";
export const ACTION_ERROR = "ACTION_ERROR";
export const TEST = "TEST";

const actionError = (text) => {
  return { type: ACTION_ERROR, msj: text };
};

export const updatePayAction = (payload, total) => {
  //TODO: validar payload. retornar action o un msj de error
  if (
    payload.payMethod === undefined &&
    payload.payMethod != payMethodType.cash &&
    payload.payMethod != payMethodType.card
  )
    return actionError("El tipo de pago seleccionado no es correcto");

  if (payload.payMethodType === payMethodType.cash && (payload.amount === undefined || payload.amount < total))
    return actionError(
      "El monto ingresado debe ser superior al total de la compra"
    );


  var cc =
    /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|62[0-9]{14})$/;

  if (payload.payMethodType == payMethodType.card) {
    if (payload.cardNumber === undefined || !cc.test(payload.cardNumber))
      return actionError("Tarjeta inválida");

    if (
      payload.cardOwner === undefined ||
      payload.cardOwner > 999 ||
      payload.cardOwner < 100
    )
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
        payload.expirationDate.year == year)
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
    payload.city != cityType.cordoba &&
    payload.city != cityType.sanFrancisco &&
    payload.city != cityType.villaGeneralBelgrano
  ) {
    return actionError("Debe seleccionar una ciudad.");
  }

  if (payload.street == "") {
    return actionError("Debe ingresar una dirección válida.");
  }

  if (payload.number > 10000 || payload.number <= 0) {
    return actionError("Debe ingresar una altura válida.");
  }

  if (
    payload.deliveryMethod != deliveryMethodType.asSoonAsPossible &&
    payload.deliveryMethod != deliveryMethodType.programmed
  ) {
    return actionError("Debe seleccionar un método de entrega.");
  }

  const date = new Date();

  if (
    payload.deliveryMethod === deliveryMethodType.programmed &&
    (payload.deliverDate === undefined ||
      payload.deliverHour === undefined ||
      payload.deliverDate < date ||
      (payload.deliverHour <= date.getHours && payload.deliverDate == date))
  ) {
    return actionError("Debe ingresar una fecha de entrega válida.");
  }

  return { type: UPDATE_ADDRESS, payload };
};

export const testDispatchAction = (text) => {
  return { type: TEST, payload: text };
};
