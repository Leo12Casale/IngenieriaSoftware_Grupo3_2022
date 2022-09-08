import { deliveryMethodType, payMethodType } from "../types";
import mockData from "../utils/mockData";
import { TEST, UPDATE_ADDRESS, UPDATE_PAY } from "./actions";

const total = mockData.reduce(
  (prev, curr) => curr.amount * curr.quantity + prev,
  0
);

const initialState = {
  items: mockData,
  total,
  address: {
    street: "",
    number: 0,
    city: "",
    comments: "",
    deliveryMethod: deliveryMethodType.asSoonAsPossible,
  },
  payment: {
    payMethod: payMethodType.cash,
    amount: 0,
    cardNumber: 0,
    cardOwner: "",
    expirationDate: {
      month: 0,
      year: 0,
    },
    cvc: 0,
  },
};

// Reducer
export default function cartReducer(state = { ...initialState }, action) {
  switch (action.type) {
    case UPDATE_PAY:
      const payment = {};
      if (payMethodType.cash) {
        payment.payMethod = payMethodType.cash;
        payment.amount =
          action.payload.amount >= state.total ? action.payload.amount : 0;
      } else {
        payment.payMethod = payMethodType.card;
        payment.cardNumber = action.payload.cardNumber;
        payment.cardOwner = action.payload.cardOwner;
        payment.expirationDate = action.payload.expirationDate;
        payment.cvc = action.payload.cvc;
      }
      return { payment: { ...payment }, ...state };
    case UPDATE_ADDRESS:
      return { value: state.value - 1 };
    case TEST:
      return { ...state, items: state.items.slice(0, -1) };
    default:
      return state;
  }
}
