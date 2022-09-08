import { payType } from "../types";
import mockData from "../utils/mockData";
import { TEST, UPDATE_ADDRESS, UPDATE_PAY } from "./actions";

const total = mockData.reduce(
  (prev, curr) => curr.amount * curr.quantity + prev,
  0
);

const initialState = {
  items: mockData,
  total,
  direccion: {
    calle: "",
    numero: 0,
    ciudad: "",
    referencia: "",
    formaEntrega: {},
  },
  pago: {
    forma: "",
    monto: 0,
    nroTarjeta: 0,
    nombreApellido: "",
    fechaVencimiento: "",
    cvc: 0,
  },
};

// Reducer
export default function cartReducer(state = { ...initialState }, action) {
  switch (action.type) {
    case UPDATE_PAY:
      const pago = {};
      if (payType.cash) {
        pago.forma = payType.cash;
        pago.monto =
          action.payload.monto >= state.total ? action.payload.monto : 0;
      } else {
        pago.forma = payType.card;
        pago.nroTarjeta = action.payload.nroTarjeta;
        pago.nombreApellido = action.payload.nombreApellido;
        pago.fechaVencimiento = action.payload.fechaVencimiento;
        pago.cvc = action.payload.cvc;
      }
      return { pago: { ...pago }, ...state };
    case UPDATE_ADDRESS:
      return { value: state.value - 1 };
    case TEST:
      return { ...state, items: state.items.slice(0, -1) };
    default:
      return state;
  }
}
